import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/data";
import { FALLBACK_IMAGE } from "@/lib/data";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Link to="/article/$id" params={{ id: article.id }} className="block aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE; }}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{article.category}</span>
          <span className="text-muted-foreground">{article.date}</span>
        </div>
        <Link to="/article/$id" params={{ id: article.id }} className="text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
          {article.title}
        </Link>
        <p className="text-sm text-muted-foreground">{article.summary}</p>
        {article.whyItMatters && (
          <p className="text-xs text-foreground/80">
            <span className="font-semibold text-primary">Why it matters: </span>{article.whyItMatters}
          </p>
        )}
        <Link to="/article/$id" params={{ id: article.id }} className="group/btn mt-auto inline-flex items-center gap-1 self-start text-sm font-semibold text-primary">
          <span className="story-link">Read more</span>
          <span aria-hidden className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
