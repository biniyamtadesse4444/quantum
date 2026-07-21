import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
const logoUrl = "/images/quantum-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 md:px-8 lg:px-12">
          <Link to="/" className="group flex items-center gap-3" aria-label="Quantum Industrial Technologies home">
            <span className="flex size-11 items-center justify-center">
              <img src={logoUrl} alt="Quantum Industrial Technologies logo" className="size-11 object-contain" />
            </span>
            <span className="max-w-40 text-[11px] font-semibold uppercase leading-[1.15] tracking-[0.16em] text-foreground sm:max-w-none">
              Quantum Industrial<br />Technologies
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-signal"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="hidden rounded-none lg:inline-flex">
            <Link to="/contact">Start a conversation <ArrowUpRight /></Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-[1480px] gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-border py-4 text-sm uppercase tracking-[0.14em] text-muted-foreground data-[status=active]:text-signal"
                >
                  <span>{item.label}</span><span className="font-mono text-[10px]">0{index + 1}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-surface-deep">
        <div className="mx-auto max-w-[1480px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
            <div>
              <Reveal>
                <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.24em] text-signal">Systems for cities in motion</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="max-w-2xl font-display text-3xl leading-tight text-foreground md:text-5xl">
                  Physical infrastructure. Intelligent control. One engineered system.
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.1}>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Navigate</p>
              </Reveal>
              <div className="grid gap-3">
                {navItems.map((item, index) => (
                  <Reveal key={item.to} delay={0.12 + index * 0.04}>
                    <Link to={item.to} className="text-sm text-foreground hover:text-signal">{item.label}</Link>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal delay={0.1}>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Connect</p>
              </Reveal>
              <div className="grid gap-3 text-sm text-foreground">
                <Reveal delay={0.14}><a href="mailto:info@quantumindustrials.com" className="hover:text-signal">info@quantumindustrials.com</a></Reveal>
                <Reveal delay={0.18}><a href="tel:+251923567378" className="hover:text-signal">+251 92 356 7378</a></Reveal>
                <Reveal delay={0.22}><a href="tel:+251932510160" className="hover:text-signal">+251 93 251 0160</a></Reveal>
                <Reveal delay={0.26}>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=2Q8C%2BPWJ+Addis+Ababa+Omega+Tower"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-signal"
                  >
                    Omega Tower, Addis Ababa, Ethiopia
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:justify-between">
            <span>© 2026 Quantum Industrial Technologies</span>
            <span>Built for real world infrastructure</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <Reveal>
      <div className="mb-8 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        <span className="text-signal">{index}</span><span className="h-px w-10 bg-border" /><span>{children}</span>
      </div>
    </Reveal>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="relative border-b border-border bg-grid">
      <div className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36">
        <Reveal delay={0}>
          <p className="mb-7 font-mono text-[10px] uppercase tracking-[0.24em] text-signal">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-5xl font-display text-5xl leading-[0.95] tracking-[-0.04em] text-foreground md:text-7xl lg:text-8xl">{title}</h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-9 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ClosingCta({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="border-t border-border bg-signal text-signal-foreground">
      <div className="mx-auto grid max-w-[1480px] gap-8 px-5 py-16 md:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-24">
        <div>
          <Reveal>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] opacity-70">Open channel</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="max-w-4xl font-display text-4xl leading-[0.98] tracking-[-0.04em] md:text-6xl">{title}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-sm leading-6 opacity-75">{copy}</p>
          </Reveal>
        </div>
        <Reveal delay={0.24}>
          <Button asChild variant="secondary" size="lg" className="rounded-none border border-signal-foreground bg-signal-foreground text-signal hover:bg-signal-foreground/90">
            <Link to="/contact">Contact our team <ArrowUpRight /></Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
