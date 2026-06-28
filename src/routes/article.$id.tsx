import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { findArticle, FALLBACK_IMAGE } from "@/lib/data";

export const Route = createFileRoute("/article/$id")({
  head: ({ params }) => {
    const a = findArticle(params.id);
    return {
      meta: [
        { title: `${a?.title ?? "Article"} — NovaTech` },
        { name: "description", content: a?.summary ?? "Article on NovaTech." },
        { property: "og:title", content: a?.title ?? "NovaTech article" },
        { property: "og:description", content: a?.summary ?? "" },
        ...(a?.image ? [{ property: "og:image", content: a.image }] : []),
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p className="mt-3 text-muted-foreground">The story you're looking for doesn't exist.</p>
        <Link to="/news" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Browse the newsroom</Link>
      </div>
    </SiteLayout>
  ),
});

function ArticlePage() {
  const { id } = Route.useParams();
  const router = useRouter();
  const article = findArticle(id);

  if (!article) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <Link to="/news" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Browse the newsroom</Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <button
          onClick={() => router.history.back()}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{article.category}</span>
          <span className="text-muted-foreground">{article.date}</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{article.summary}</p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-muted shadow-[var(--shadow-soft)]">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[16/9] w-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE; }}
          />
        </div>

        <div className="prose prose-neutral mt-10 max-w-none space-y-5 text-base leading-relaxed text-foreground/90 dark:prose-invert">
          {article.content?.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {(article.whyItMatters || article.futureImpact) && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {article.whyItMatters && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why it matters</p>
                <p className="mt-2 text-sm text-foreground/80">{article.whyItMatters}</p>
              </div>
            )}
            {article.futureImpact && (
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Future impact</p>
                <p className="mt-2 text-sm text-foreground/80">{article.futureImpact}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/news" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">More stories</Link>
          <button
            onClick={() => router.history.back()}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-muted"
          >
            Back
          </button>
        </div>
      </article>
    </SiteLayout>
  );
}