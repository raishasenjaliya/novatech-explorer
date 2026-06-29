import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-[image:var(--gradient-hero)] p-8 text-primary-foreground shadow-[var(--shadow-glow)] sm:p-12">
      <div aria-hidden className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-white/20 blur-3xl animate-float-slow" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-[oklch(0.7_0.2_220)]/40 blur-3xl animate-blob" />
      <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Stay ahead of the curve</h2>
          <p className="mt-2 text-sm opacity-90">Weekly highlights from across science, tech, AI and space — straight to your inbox.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
          className="flex flex-col gap-2 sm:flex-row">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 rounded-full bg-background/95 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground" />
          <button className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90">
            {done ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
