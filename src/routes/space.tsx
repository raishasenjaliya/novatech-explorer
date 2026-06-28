import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { spaceArticles } from "@/lib/data";

const cats = ["Space Missions","Planetary Exploration","Astronomy","Deep Space Discoveries","Space Technology","Satellites","Earth Observation","Space Agencies Worldwide"];

export const Route = createFileRoute("/space")({
  head: () => ({
    meta: [
      { title: "Space — NovaTech" },
      { name: "description", content: "Missions, planetary exploration, astronomy, deep space, satellites and global space agencies." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Space" title="The cosmos, one discovery at a time" description="From robotic explorers to the edge of the observable universe." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <CategoryFilter items={spaceArticles} categories={cats} />
      </section>
    </SiteLayout>
  ),
});
