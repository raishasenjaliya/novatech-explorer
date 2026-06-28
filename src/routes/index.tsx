import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { ArticleGrid } from "@/components/ArticleGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Newsletter } from "@/components/Newsletter";
import { trendingArticles, featuredStory, todaysInnovation, didYouKnow, launches } from "@/lib/data";
import { ArrowRight, Lightbulb, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaTech — Where Curiosity Meets Innovation" },
      { name: "description", content: "Discover curated science, technology, AI, space and product launches on NovaTech." },
      { property: "og:title", content: "NovaTech — Where Curiosity Meets Innovation" },
      { property: "og:description", content: "A modern science & technology discovery platform." },
    ],
  }),
  component: Home,
});

function Home() {
  const fact = useMemo(() => didYouKnow[Math.floor(Math.random() * didYouKnow.length)], []);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-primary-foreground sm:px-6 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-90">Where curiosity meets innovation</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Discover the science and technology shaping tomorrow.
          </h1>
          <p className="mt-5 max-w-2xl text-base opacity-90 sm:text-lg">
            NovaTech curates breakthroughs across AI, space, biotech and product launches — beautifully organized for the curious mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/news" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90">
              Explore News <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/launches" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-white/20">
              <Rocket className="h-4 w-4" /> Latest Launches
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader eyebrow="Featured Story" title="A turning point for clean energy" />
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img src={featuredStory.image} alt={featuredStory.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{featuredStory.category}</span>
              <span className="text-muted-foreground">{featuredStory.date}</span>
            </div>
            <h3 className="text-2xl font-bold sm:text-3xl">{featuredStory.title}</h3>
            <p className="text-muted-foreground">{featuredStory.summary}</p>
            <Link
              to="/article/$id"
              params={{ id: featuredStory.id }}
              className="self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <SectionHeader eyebrow="Trending Today" title="What the world is reading" />
        <ArticleGrid items={trendingArticles} />
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader eyebrow="Explore" title="Browse by category" description="Eight worlds of discovery, neatly organized." />
        <CategoryGrid />
      </section>

      {/* Today's Innovation */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader eyebrow="Today's Innovation" title="What we're excited about" />
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] md:grid-cols-5">
          <div className="md:col-span-2 aspect-[4/3] md:aspect-auto">
            <img src={todaysInnovation.image} alt={todaysInnovation.title} className="h-full w-full object-cover" />
          </div>
          <div className="md:col-span-3 flex flex-col gap-4 p-8 sm:p-10">
            <h3 className="text-2xl font-bold">{todaysInnovation.title}</h3>
            <p className="text-muted-foreground">{todaysInnovation.summary}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Why it matters</p>
                <p className="mt-2 text-sm text-foreground/80">{todaysInnovation.whyItMatters}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Future impact</p>
                <p className="mt-2 text-sm text-foreground/80">{todaysInnovation.futureImpact}</p>
              </div>
            </div>
            <Link
              to="/article/$id"
              params={{ id: todaysInnovation.id }}
              className="self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Read full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Launches Preview */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionHeader eyebrow="Latest Launches" title="Fresh from product floors" />
          <Link to="/launches" className="hidden text-sm font-semibold text-primary hover:underline sm:block">View all →</Link>
        </div>
        <ArticleGrid items={launches.slice(0, 3)} />
      </section>

      {/* Did You Know */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex items-start gap-4 rounded-3xl border border-border bg-[image:var(--gradient-card)] p-8 shadow-[var(--shadow-soft)]">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Did You Know?</p>
            <p className="mt-2 text-lg font-medium text-foreground">{fact}</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-16 sm:px-6">
        <Newsletter />
      </section>
    </SiteLayout>
  );
}
