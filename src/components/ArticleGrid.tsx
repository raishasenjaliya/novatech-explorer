import type { Article } from "@/lib/data";
import { ArticleCard } from "./ArticleCard";

export function ArticleGrid({ items }: { items: Article[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => <ArticleCard key={a.id} article={a} />)}
    </div>
  );
}
