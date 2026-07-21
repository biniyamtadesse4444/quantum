import { createFileRoute } from "@tanstack/react-router";

import { ClosingCta, PageIntro, SectionLabel, SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Quantum Industrial Technologies" },
    { name: "description", content: "Meet the engineering company building modular smart infrastructure through connected hardware and software." },
    { property: "og:title", content: "About Quantum Industrial Technologies" },
    { property: "og:description", content: "A smart city infrastructure company grounded in real engineering." },
  ] }),
  component: AboutPage,
});

const values = [
  ["Practical intelligence", "Technology earns its place by making infrastructure safer, clearer, and easier to operate."],
  ["Modular engineering", "Reusable hardware and software modules create more reliable deployments and a path to scale."],
  ["Open collaboration", "We work closely with clients, operators, technical partners, and investors from definition to deployment."],
  ["Local capability", "We want advanced systems to be engineered, assembled, maintained, and improved close to the people who use them."],
];

function AboutPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="Company / 01" title="Real engineering for connected cities." copy="Quantum Industrial Technologies is building a new category of infrastructure company: one that understands steel, sensors, software, payments, and daily operations as parts of the same system." />

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <SectionLabel index="01">Our position</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.03] tracking-[-0.04em] md:text-6xl">Not a software vendor. Not a hardware importer.</h2>
          </Reveal>
          <div className="space-y-6 text-base leading-7 text-muted-foreground">
            <Reveal delay={0.06}><p>We design complete systems for controlled movement. A gate, turnstile, or smart door is only one layer. Identity, permission, payment, management, and reporting must work with it.</p></Reveal>
            <Reveal delay={0.12}><p>Our role is to bring those layers together. We engineer physical access around the real rules of a property, institution, parking operation, or public facility.</p></Reveal>
            <Reveal delay={0.18}><p>This integrated approach gives clients one coherent operating system instead of a collection of disconnected products.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-deep">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-2">
          <div className="border-b border-border p-8 md:p-14 lg:border-b-0 lg:border-r lg:p-20">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Mission</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 font-display text-4xl tracking-[-0.04em] md:text-6xl">Connect physical infrastructure to intelligent control.</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl leading-7 text-muted-foreground">We build dependable systems that help organizations manage access, payments, assets, and operations with less friction and better visibility.</p>
            </Reveal>
          </div>
          <div className="p-8 md:p-14 lg:p-20">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Vision / 2036</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 font-display text-4xl tracking-[-0.04em] md:text-6xl">Infrastructure designed here, ready for cities everywhere.</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl leading-7 text-muted-foreground">Our long term ambition is to become a trusted builder of reusable smart infrastructure modules for growing cities and institutions.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <SectionLabel index="02">Operating principles</SectionLabel>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {values.map(([title, copy], index) => (
            <Reveal key={title} delay={0.06 + index * 0.08}>
              <article className="bg-background p-7 md:p-10">
                <span className="font-mono text-[10px] text-signal">0{index + 1}</span>
                <h3 className="mt-12 font-display text-3xl">{title}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-32">
          <SectionLabel index="03">Why modularity matters</SectionLabel>
          <div>
            <Reveal delay={0.06}>
              <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Custom fit without custom chaos.</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-2xl leading-7 text-muted-foreground">Every site has different rules, but the core infrastructure should not be reinvented every time. We are developing repeatable modules for detection, identity, payment, control, and reporting. They can be configured around a specific client while retaining a stable engineering foundation.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <ClosingCta title="Build the next infrastructure standard with us." copy="We welcome conversations with clients, technical partners, institutions, and investors who share a long term view." />
    </SiteShell>
  );
}
