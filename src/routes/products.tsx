import { createFileRoute } from "@tanstack/react-router";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ClosingCta, PageIntro, SectionLabel, SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
const doorUrl = "/images/smart-door.jpg";
const barrierUrl = "/images/dual-barriers.jpg";
const fullTurnstileUrl = "/images/full-turnstile.jpg";
const turnstilesUrl = "/images/compact-turnstiles.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Smart Access Products and Systems | Quantum" },
    { name: "description", content: "Explore smart gate barriers, turnstiles, doors, parking, property, booking, and institutional management systems." },
    { property: "og:title", content: "Smart Access Products and Integrated Systems" },
    { property: "og:description", content: "Hardware and software engineered as one connected infrastructure layer." },
    { property: "og:image", content: barrierUrl },
  ] }),
  component: ProductsPage,
});

const software = [
  ["Property Management", "Tenant records, rent tracking, payment integration, and automatic synchronization with physical access."],
  ["Smart Parking", "Vehicle registration, slot tracking, automated billing, and direct gate control."],
  ["Booking and Reservation", "Flexible scheduling for fields, hotels, facilities, and shared resources."],
  ["Academic Management", "Dashboards, results, tuition payments, attendance, and campus turnstile integration. Currently in development."],
];

const faqs = [
  ["Do you sell fixed product packages?", "Systems are scoped around the site, access rules, user volume, payment flow, and integration requirements."],
  ["How is pricing calculated?", "We provide custom quotations after consultation and technical discovery. Enterprise engagements may include phased design, deployment, and support."],
  ["Can your software work with existing gates?", "Compatibility depends on the controller and interface available. We assess existing hardware before recommending integration or replacement."],
  ["Can payment status control access?", "Yes. Approved use cases can link verified payment status to access permissions, with clear rules for restriction and restoration."],
  ["Which access methods are supported?", "Systems can be configured for RFID cards, membership cards, QR codes, registered vehicles, and compatible identity technologies."],
  ["Is facial recognition available?", "It is treated as an advanced planned integration and would require careful privacy, consent, and regulatory assessment."],
  ["Can the system operate at universities?", "Yes. Institutional systems can connect access, membership, attendance, payment, and administrative oversight."],
  ["Do you support residential properties?", "Yes. Smart doors, tenant records, rent status, and access permissions can operate as one residential ecosystem."],
  ["Can operators override an automated decision?", "Operational and emergency override requirements are defined during system design so authorized staff retain appropriate control."],
  ["What happens during a network outage?", "Resilience requirements vary by site. We define safe operating behavior, local control, and synchronization rules during technical discovery."],
  ["Do you provide installation?", "Installation and commissioning can form part of a custom engagement depending on location, hardware, and project scope."],
  ["Is maintenance available?", "Support and maintenance options are defined in the quotation and can cover hardware inspection, software updates, and operational assistance."],
  ["Can the platform connect to payment providers?", "Yes, subject to the provider, region, security requirements, and available integration methods."],
  ["Can one dashboard manage several sites?", "Multi site management can be scoped for organizations operating several properties, facilities, or access points."],
  ["How long does deployment take?", "Timing depends on site readiness, hardware quantities, civil or electrical work, integration depth, and acceptance testing."],
  ["Do you work with technical partners?", "Yes. We welcome partnerships involving fabrication, installation, payments, identity, property operations, and institutional systems."],
  ["Are you open to investors?", "Yes. We welcome aligned investors who understand industrial technology, infrastructure, and long term product development."],
  ["How do we begin?", "Send a concise description of your site, current process, access challenge, users, and intended outcome. We will use it to prepare the first consultation."],
];

function ProductsPage() {
  return (
    <SiteShell>
      <PageIntro eyebrow="Products and Services / 03" title="Hardware and software, designed as one system." copy="Our products control real movement through gates, doors, parking facilities, institutions, and managed properties. Each layer is designed to exchange clear information with the next." />

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <SectionLabel index="01">Hardware systems</SectionLabel>
        <div className="grid gap-px bg-border lg:grid-cols-3">
          {[
            [barrierUrl, "Vehicle Smart Gate Barrier", "Loop detection, vehicle validation, automated entry, payment verified exit, and software controlled operation."],
            [turnstilesUrl, "Smart Turnstile Access", "Verified entry for universities, gyms, libraries, and stadiums through cards, QR codes, and membership logic."],
            [doorUrl, "Smart Door Access", "Residential entry connected to tenant management, payment status, and automatic permission restoration."],
          ].map(([image, title, copy], index) => (
            <Reveal key={title} delay={0.06 + index * 0.1}>
              <article className="group bg-background">
                <div className="relative aspect-[4/3] overflow-hidden"><img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" /><span className="absolute left-4 top-4 bg-background px-2 py-1 font-mono text-[9px] text-signal">H 0{index + 1}</span></div>
                <div className="p-6 md:p-8"><h2 className="font-display text-2xl">{title}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-deep">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border-b border-border p-7 md:p-12 lg:border-b-0 lg:border-r lg:p-16">
            <SectionLabel index="02">Software platforms</SectionLabel>
            <Reveal>
              <h2 className="font-display text-4xl tracking-[-0.04em] md:text-6xl">The operating layer behind every decision.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 leading-7 text-muted-foreground">Software turns a physical product into an accountable system. It keeps the record, applies the rule, initiates the action, and gives operators visibility.</p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2">
            {software.map(([title, copy], index) => (
              <Reveal key={title} delay={0.06 + index * 0.08}>
                <article className="border-b border-border p-7 sm:odd:border-r md:p-10">
                  <span className="font-mono text-[10px] text-signal">S 0{index + 1}</span>
                  <h3 className="mt-10 font-display text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-8 lg:px-12 lg:py-32">
        <SectionLabel index="03">Integrated ecosystems</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[440px] overflow-hidden">
            <img src={fullTurnstileUrl} alt="Full height institutional security turnstile" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="border-t border-border">
            {[
              ["Smart Parking Ecosystem", "Gate barriers, loop detectors, vehicle records, billing, and real time access updates."],
              ["Institutional Access Ecosystem", "Turnstiles, cards, QR codes, membership validation, attendance, and administrator oversight."],
              ["Residential Access Ecosystem", "Smart doors, tenant management, payment integration, and synchronized permission control."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={0.06 + index * 0.08}>
                <article className="border-b border-border py-7">
                  <div className="flex gap-5">
                    <span className="shrink-0 whitespace-nowrap font-mono text-[10px] text-signal">E 0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-deep">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-32">
          <div>
            <SectionLabel index="04">Commercial model</SectionLabel>
            <Reveal>
              <h2 className="font-display text-4xl tracking-[-0.04em] md:text-6xl">Pricing follows the system.</h2>
            </Reveal>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {[["Consultation", "Define the site, operating rules, integrations, and desired outcome."], ["Custom quotation", "Price hardware, software, installation, commissioning, and support around the real scope."], ["Enterprise", "Structure multi site, institutional, or strategic deployments in clear phases."]].map(([title, copy], index) => (
              <Reveal key={title} delay={0.08 + index * 0.1}>
                <article className="bg-surface-deep p-6">
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-20 md:px-8 lg:py-32">
        <SectionLabel index="05">Frequently asked questions</SectionLabel>
        <Reveal>
          <h2 className="mb-12 font-display text-4xl tracking-[-0.04em] md:text-6xl">Useful answers before we begin.</h2>
        </Reveal>
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question} delay={0.02 + index * 0.03}>
              <AccordionItem value={`faq-${index}`}>
                <AccordionTrigger className="py-6 text-base no-underline hover:no-underline">
                  <span className="flex items-start gap-4">
                    <span className="font-mono text-[10px] text-signal">{String(index + 1).padStart(2, "0")}</span>
                    {question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pl-10 text-sm leading-6 text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </section>
      <ClosingCta title="Define the system before you price the parts." copy="Start with a consultation. We will map the site, the rules, the users, and the operational outcome." />
    </SiteShell>
  );
}
