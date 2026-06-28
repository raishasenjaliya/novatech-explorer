import type { Article } from "@/lib/data";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img src={article.image} alt={article.title} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{article.category}</span>
          <span className="text-muted-foreground">{article.date}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-foreground">{article.title}</h3>
        <p className="text-sm text-muted-foreground">{article.summary}</p>
        {article.whyItMatters && (
          <p className="text-xs text-foreground/80">
            <span className="font-semibold text-primary">Why it matters: </span>{article.whyItMatters}
          </p>
        )}
        <button className="mt-auto self-start text-sm font-semibold text-primary hover:underline">Read more →</button>
      </div>
    </article>
  );
}
