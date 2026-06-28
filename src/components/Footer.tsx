import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Youtube, Mail, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">NovaTech</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Where curiosity meets innovation. Curated science & technology discoveries.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/news" className="hover:text-foreground">News</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/science" className="hover:text-foreground">Science</Link></li>
            <li><Link to="/technology" className="hover:text-foreground">Technology</Link></li>
            <li><Link to="/ai" className="hover:text-foreground">AI</Link></li>
            <li><Link to="/space" className="hover:text-foreground">Space</Link></li>
            <li><Link to="/launches" className="hover:text-foreground">Launches</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" /> hello@novatech.app
          </p>
          <div className="mt-4 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-foreground"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} NovaTech. All rights reserved.
      </div>
    </footer>
  );
}
