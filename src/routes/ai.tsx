import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { aiArticles } from "@/lib/data";

const cats = ["AI Models","Generative AI","Machine Learning","AI Research","AI Tools","AI Ethics"];

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI — NovaTech" },
      { name: "description", content: "AI models, generative AI, machine learning, research, tools and ethics." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Artificial Intelligence" title="The intelligence revolution, decoded" description="Models, tools, research and the people shaping responsible AI." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <CategoryFilter items={aiArticles} categories={cats} />
      </section>
    </SiteLayout>
  ),
});
