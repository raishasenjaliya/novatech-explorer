import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { NovaAssistant } from "./NovaAssistant";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <NovaAssistant />
    </div>
  );
}
