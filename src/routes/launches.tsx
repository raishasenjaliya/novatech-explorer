import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { launches } from "@/lib/data";

const cats = ["Smartphones","Laptops","AI Tools","Apps","Electric Vehicles","Wearables","Consumer Electronics"];

export const Route = createFileRoute("/launches")({
  head: () => ({
    meta: [
      { title: "Launches — NovaTech" },
      { name: "description", content: "New smartphones, laptops, AI tools, apps, EVs, wearables and consumer electronics." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Launches" title="Fresh products, hand-picked" description="A curated showcase of devices and software worth knowing about." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <CategoryFilter items={launches} categories={cats} />
      </section>
    </SiteLayout>
  ),
});
