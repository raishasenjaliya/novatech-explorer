import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/data";

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((c) => (
        <Link key={c.name} to={c.href}
          className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
          <div className="text-3xl">{c.icon}</div>
          <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
          <p className="mt-4 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">Explore →</p>
        </Link>
      ))}
    </div>
  );
}
