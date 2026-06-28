import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { scienceArticles } from "@/lib/data";

const cats = ["Physics", "Chemistry", "Biology", "Medical Research", "Environment", "Climate", "Earth Science"];

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "Science — NovaTech" },
      { name: "description", content: "Physics, chemistry, biology, medical research, environment, climate and earth science." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Science" title="Curious minds, big discoveries" description="Breakthroughs across the natural sciences, explained clearly." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <CategoryFilter items={scienceArticles} categories={cats} />
      </section>
    </SiteLayout>
  ),
});
