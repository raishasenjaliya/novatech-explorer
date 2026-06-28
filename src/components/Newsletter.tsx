import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="mx-auto max-w-5xl rounded-3xl border border-border bg-[image:var(--gradient-hero)] p-8 text-primary-foreground shadow-[var(--shadow-glow)] sm:p-12">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
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
