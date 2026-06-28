import { useMemo, useState } from "react";
import type { Article } from "@/lib/data";
import { ArticleGrid } from "./ArticleGrid";

export function CategoryFilter({ items, categories }: { items: Article[]; categories: string[] }) {
  const [active, setActive] = useState<string>("All");
  const tabs = useMemo(() => ["All", ...categories], [categories]);
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t} onClick={() => setActive(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === t ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground/80 hover:bg-muted"
            }`}>{t}</button>
        ))}
      </div>
      <ArticleGrid items={filtered} />
    </div>
  );
}
