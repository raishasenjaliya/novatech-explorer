import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Menu, Search, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { allArticles } from "@/lib/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/news", label: "News" },
  { to: "/science", label: "Science" },
  { to: "/technology", label: "Technology" },
  { to: "/ai", label: "AI" },
  { to: "/space", label: "Space" },
  { to: "/launches", label: "Launches" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allArticles
      .filter((a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        (a.keywords?.some((k) => k.toLowerCase().includes(q)) ?? false),
      )
      .slice(0, 8);
  }, [query]);

  const closeSearch = () => { setSearchOpen(false); setQuery(""); };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">NovaTech</span>
        </Link>

        <nav className="ml-2 hidden flex-1 items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-primary/10" }}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            onClick={() => setSearchOpen((s) => !s)}
            aria-label="Search"
            className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
          >
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border/60 bg-background px-4 py-3 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, launches, topics…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-xs text-muted-foreground hover:text-foreground">Clear</button>
              )}
            </div>
            {query && (
              <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                {results.length === 0 ? (
                  <p className="px-4 py-6 text-center text-sm text-muted-foreground">No results for "{query}".</p>
                ) : (
                  <ul className="divide-y divide-border">
                    {results.map((a) => (
                      <li key={a.id}>
                        <Link
                          to="/article/$id"
                          params={{ id: a.id }}
                          onClick={closeSearch}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-muted"
                        >
                          <img src={a.image} alt="" className="h-12 w-16 shrink-0 rounded-lg object-cover" />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-foreground">{a.title}</p>
                            <p className="truncate text-xs text-muted-foreground">{a.category} · {a.date}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/10" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
