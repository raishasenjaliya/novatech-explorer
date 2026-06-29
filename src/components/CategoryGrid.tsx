import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/data";

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((c) => (
        <Link key={c.name} to={c.href}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
          <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-hero)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
          <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/15">{c.icon}</div>
          <h3 className="relative mt-4 text-lg font-semibold tracking-tight">{c.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
          <p className="mt-4 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">Explore →</p>
        </Link>
      ))}
    </div>
  );
}
