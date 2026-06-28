import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ArticleGrid } from "@/components/ArticleGrid";
import { trendingArticles } from "@/lib/data";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — NovaTech" },
      { name: "description", content: "Trending, latest, and editor's pick stories from across science and technology." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const filters = ["Trending", "Latest", "Editor's Pick"] as const;
  const [filter, setFilter] = useState<typeof filters[number]>("Trending");
  const sorted = [...trendingArticles];
  if (filter === "Latest") sorted.reverse();
  if (filter === "Editor's Pick") sorted.sort((a, b) => a.title.length - b.title.length);

  return (
    <SiteLayout>
      <PageHero eyebrow="News" title="Curated stories worth your time" description="Hand-picked science and technology stories — no clickbait, no noise." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "border border-border bg-card text-foreground/80 hover:bg-muted"
              }`}>{f}</button>
          ))}
        </div>
        <ArticleGrid items={sorted} />
      </section>
    </SiteLayout>
  );
}
