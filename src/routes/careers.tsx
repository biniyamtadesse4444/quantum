import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ClosingCta, PageIntro, SectionLabel, SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [
    { title: "Careers | Quantum Industrial Technologies" },
    { name: "description", content: "Explore future opportunities in hardware, software, embedded systems, automation, and infrastructure engineering." },
    { property: "og:title", content: "Careers at Quantum Industrial Technologies" },
    { property: "og:description", content: "Help build the systems that move and protect modern cities." },
  ] }),
  component: CareersPage,
});

const disciplines = ["Embedded systems", "Mechanical design", "Electrical engineering", "Web and platform software", "Automation and controls", "Product design", "Field installation", "Technical operations"];

function CareersPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="Careers / 04" title="Build systems people physically rely on." copy="We are creating a multidisciplinary engineering culture for people who want their software, circuits, mechanics, and ideas to operate in the real world." />
      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <SectionLabel index="01">The work</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] md:text-6xl">One product may cross five engineering disciplines.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2">
            {disciplines.map((item, index) => (
              <Reveal key={item} delay={0.03 + index * 0.04}>
                <div className="border-b border-border py-5 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                  <span className="mr-4 font-mono text-[10px] text-signal">0{index + 1}</span>
                  <span className="text-sm">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-border bg-surface-deep">
        <div className="mx-auto grid max-w-[1480px] gap-px bg-border md:grid-cols-3">
          {[
            ["Make it real", "Your work should leave the screen. It should open a gate, validate access, simplify an operation, or improve a daily journey."],
            ["Learn across boundaries", "Strong systems emerge when mechanical, electrical, and software thinking happen together rather than in isolation."],
            ["Build local capability", "We want young engineers and technical specialists to gain serious experience on infrastructure made for their own communities."],
          ].map(([title, copy], index) => (
            <Reveal key={title} delay={0.06 + index * 0.1}>
              <article className="bg-surface-deep p-8 md:p-10 lg:p-12">
                <span className="font-mono text-[10px] text-signal">0{index + 1}</span>
                <h2 className="mt-14 font-display text-3xl">{title}</h2>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <SectionLabel index="02">Current status</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <h2 className="font-display text-4xl tracking-[-0.04em] md:text-6xl">Future opportunities are taking shape.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">We are not listing formal vacancies yet. If your background aligns with our disciplines, send a concise introduction and tell us what you want to build.</p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Button asChild size="lg" className="rounded-none"><Link to="/contact">Introduce yourself <ArrowUpRight /></Link></Button>
          </Reveal>
        </div>
      </section>
      <ClosingCta title="Engineering ambition needs a place to become real." copy="Join the conversation early and help shape how locally engineered smart infrastructure grows." />
    </SiteShell>
  );
}
