import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NovaTech" },
      { name: "description", content: "NovaTech's mission, vision, and why it exists." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const cards = [
    { icon: Target, title: "Our Mission", body: "Make scientific and technological progress accessible, beautiful and useful — for everyone, not just experts." },
    { icon: Eye, title: "Our Vision", body: "A world where curious minds can find the signal in the noise and discover what's truly changing." },
    { icon: Heart, title: "Why NovaTech Exists", body: "We were tired of clickbait. NovaTech is a calm, premium home for the most important stories in science and tech." },
  ];
  return (
    <SiteLayout>
      <PageHero eyebrow="About" title="Built for the perpetually curious" description="NovaTech is a small team curating the science and technology that matters." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
