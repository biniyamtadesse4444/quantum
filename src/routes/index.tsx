import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ClosingCta, SectionLabel, SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
const gateUrl = "/images/smart-gate-control.jpg";
const barrierUrl = "/images/parking-barrier.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quantum Industrial Technologies | Smart Infrastructure" },
      { name: "description", content: "Intelligent hardware and software systems for access control, parking, institutions, and connected urban infrastructure." },
      { property: "og:title", content: "Quantum Industrial Technologies" },
      { property: "og:description", content: "Building smart infrastructure for the future of cities." },
      { property: "og:image", content: gateUrl },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <section className="relative border-b border-border bg-grid">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1480px] lg:grid-cols-[1.12fr_0.88fr]">
          <div className="flex flex-col justify-between px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-20">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="size-2 animate-pulse bg-signal" /> Infrastructure systems online
              </div>
            </Reveal>
            <div className="py-20 lg:py-12">
              <Reveal delay={0.06}>
                <h1 className="max-w-4xl font-display text-[clamp(3.3rem,7vw,7.8rem)] leading-[0.88] tracking-[-0.055em] text-foreground">
                  Building Smart Infrastructure for the Future of Cities
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                  We design and manufacture intelligent hardware and software systems for modern access control, automation, parking, and connected urban infrastructure.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="h-12 rounded-none px-6"><Link to="/contact">Discuss a project <ArrowUpRight /></Link></Button>
                  <Button asChild variant="outline" size="lg" className="h-12 rounded-none px-6"><Link to="/products">Explore systems <ArrowRight /></Link></Button>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Hardware engineering</span><span>Software control</span><span>System integration</span>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[520px] overflow-hidden border-t border-border lg:min-h-full lg:border-l lg:border-t-0">
            <img src={gateUrl} alt="Smart residential gate controlled through a connected mobile interface" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <Reveal delay={0.2}>
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 border-t border-border bg-background/85 backdrop-blur-md">
                <div className="border-r border-border p-5"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal">Flagship system</p><p className="mt-2 text-sm">Smart Gate Barrier</p></div>
                <div className="p-5"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Operating layer</p><p className="mt-2 text-sm">Access + Payment</p></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <SectionLabel index="01">One connected engineering discipline</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.035em] md:text-6xl">We build physical systems that think.</h2>
          </Reveal>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {[
              ["Hardware", "Gate barriers, turnstiles, smart doors, loop detectors, and embedded access components."],
              ["Software", "Property, parking, booking, billing, membership, and academic management platforms."],
              ["Integration", "Real time coordination between identity, payment status, permissions, and physical access."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={0.08 + index * 0.08}>
                <article className="signal-line bg-background px-6 py-8">
                  <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                  <h3 className="mt-12 font-display text-2xl">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-deep">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-2">
          <div className="relative min-h-[430px] overflow-hidden lg:min-h-[700px]"><img src={barrierUrl} alt="Automated vehicle barrier installed in a modern parking structure" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-deep/40" /></div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 lg:px-20">
            <SectionLabel index="02">Flagship product</SectionLabel>
            <Reveal>
              <h2 className="font-display text-4xl leading-none tracking-[-0.04em] md:text-6xl">Smart Gate Barrier System</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-7 text-base leading-7 text-muted-foreground">A complete access system that detects vehicles, validates registration and payment status, and controls entry or exit through one synchronized platform.</p>
            </Reveal>
            <div className="mt-10 border-t border-border">
              {["Vehicle detection through loop sensors", "Automated gate control", "Secure payment verification", "Real time operational updates"].map((item, index) => (
                <Reveal key={item} delay={0.06 + index * 0.06}>
                  <div className="flex gap-5 border-b border-border py-4 text-sm"><span className="font-mono text-[10px] text-signal">0{index + 1}</span><span>{item}</span></div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <Button asChild variant="link" className="mt-7 w-fit px-0 text-signal"><Link to="/products">View the full system <ArrowRight /></Link></Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <SectionLabel index="03">Built for demanding environments</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight tracking-[-0.035em] md:text-6xl">Infrastructure for every controlled threshold.</h2>
          </Reveal>
          <div className="grid border-t border-border">
            {["Residential communities", "Universities and schools", "Stadiums and gyms", "Commercial parking", "Hotels and managed properties", "Libraries and public facilities"].map((item, index) => (
              <Reveal key={item} delay={0.04 + index * 0.05}>
                <div className="group flex items-center justify-between border-b border-border py-5"><span className="text-sm md:text-base">{item}</span><span className="font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-signal">0{index + 1}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ClosingCta title="Turn a physical access challenge into a deployable system." copy="Talk with our team about a client deployment, strategic partnership, or investment opportunity." />
    </SiteShell>
  );
}
