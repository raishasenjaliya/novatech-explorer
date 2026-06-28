import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NovaTech" },
      { name: "description", content: "Get in touch with the NovaTech team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Say hello" description="Questions, tips or partnership ideas — we'd love to hear from you." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input required className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input required type="email" className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea required rows={5} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-2.5 outline-none focus:border-primary" />
          </div>
          <button className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            {sent ? "Thanks — we'll be in touch ✓" : "Send message"}
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-lg font-semibold">Email us</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" /> hello@novatech.app
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-lg font-semibold">Follow along</h3>
            <div className="mt-4 flex gap-3">
              {[Twitter, Github, Linkedin].map((I, i) => (
                <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground/80 hover:bg-muted">
                  <I className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-[image:var(--gradient-card)] p-8">
            <p className="text-sm text-muted-foreground">Looking for quick answers? Tap the Nova Assistant in the bottom-right corner.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
