import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { technologyArticles } from "@/lib/data";

const cats = ["Software","Robotics & Automation","Cybersecurity","Cloud Computing","Consumer Technology","Internet & Web","Gaming Technology","AR / VR / XR","Quantum Computing","Blockchain & Web3","Internet of Things (IoT)","Electric & Autonomous Vehicles","Green Technology","Emerging Technologies"];

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — NovaTech" },
      { name: "description", content: "Software, robotics, cybersecurity, cloud, AR/VR, quantum, blockchain, IoT and more." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Technology" title="The systems building the future" description="From cloud and quantum to robotics and Web3." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <CategoryFilter items={technologyArticles} categories={cats} />
      </section>
    </SiteLayout>
  ),
});
