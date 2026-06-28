import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { faqs } from "@/lib/data";

type Msg = { role: "user" | "bot"; text: string };

function answer(input: string): string {
  const q = input.toLowerCase();
  let best = { score: 0, a: "" };
  for (const f of faqs) {
    for (const key of f.q) {
      if (q.includes(key)) {
        const score = key.length;
        if (score > best.score) best = { score, a: f.a };
      }
    }
  }
  if (best.score > 0) return best.a;
  return "I don't have information about that yet. Please explore the relevant section of NovaTech.";
}

export function NovaAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm Nova, your guide to NovaTech. Ask me about science, tech, AI, space or how to use the site." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);

  const send = (text?: string) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }, { role: "bot", text: answer(t) }]);
    setInput("");
  };

  const suggestions = ["What is NovaTech?", "How do I use dark mode?", "Tell me about AI", "Latest launches"];

  return (
    <>
      <button onClick={() => setOpen((o) => !o)} aria-label="Open Nova Assistant"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105">
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-glow)]">
          <div className="flex items-center gap-2 border-b border-border bg-[image:var(--gradient-hero)] p-4 text-primary-foreground">
            <Sparkles className="h-5 w-5" />
            <div>
              <p className="text-sm font-semibold">Nova Assistant</p>
              <p className="text-xs opacity-80">FAQ helper · always offline</p>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                m.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-muted text-foreground"
              }`}>{m.text}</div>
            ))}
            {msgs.length <= 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80 hover:bg-muted">{s}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(); }}
            className="flex items-center gap-2 border-t border-border p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Nova…"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary" />
            <button type="submit" aria-label="Send"
              className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
