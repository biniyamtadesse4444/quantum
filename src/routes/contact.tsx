import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState, type ComponentProps, type FormEvent } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Quantum Industrial Technologies" },
    { name: "description", content: "Contact Quantum Industrial Technologies about smart infrastructure projects, partnerships, investment, or careers in Addis Ababa, Ethiopia." },
    { property: "og:title", content: "Contact Quantum Industrial Technologies" },
    { property: "og:description", content: "Start a conversation about intelligent access and infrastructure." },
  ] }),
  component: ContactPage,
});

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  organization: z.string().trim().max(150),
  inquiry: z.enum(["Client project", "Partnership", "Investor relations", "Careers", "General inquiry"]),
  message: z.string().trim().min(20, "Please provide at least 20 characters").max(1500),
});

const EMAILJS_SERVICE_ID = "service_22nvjxh";
const EMAILJS_TEMPLATE_ID = "template_bay36kq";
const EMAILJS_PUBLIC_KEY = "Adx9dnyBmbDtNskQO";

function ContactPage() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = inquirySchema.safeParse(Object.fromEntries(form));
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please review the form");
      return;
    }
    setError("");

    const params = {
      name: result.data.name,
      email: result.data.email,
      organization: result.data.organization || "Not provided",
      inquiry: result.data.inquiry,
      message: result.data.message,
      to_email: "info@quantumindustrials.com",
    };



    try {
      setStatus("sending");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, { publicKey: EMAILJS_PUBLIC_KEY });
      setStatus("sent");
      (event.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("idle");
      setError("Message could not be sent. Please email info@quantumindustrials.com directly.");
    }
  }

  return (
    <SiteShell>
      <PageIntro eyebrow="Contact / 05" title="Tell us what needs to move, open, or connect." copy="Share the site, the current process, the people involved, and the outcome you need. A clear first message helps us prepare a useful consultation." />
      <section className="mx-auto grid max-w-[1480px] lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="border-b border-border px-5 py-14 md:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">Direct contact</p>
          </Reveal>
          <div className="mt-10 space-y-8">
            <Reveal delay={0.06}>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Email</p>
                <a href="mailto:info@quantumindustrials.com" className="mt-2 block text-sm hover:text-signal">
                  info@quantumindustrials.com
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Phone</p>
                <a href="tel:+251923567378" className="mt-2 block text-sm hover:text-signal">+251 92 356 7378</a>
                <a href="tel:+251932510160" className="mt-1 block text-sm hover:text-signal">+251 93 251 0160</a>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Location</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2Q8C%2BPWJ+Addis+Ababa+Omega+Tower"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-sm hover:text-signal"
                >
                  Omega Tower<br />Addis Ababa, Ethiopia<br />Plus Code: 2Q8C+PWJ
                </a>
              </div>
            </Reveal>
          </div>
          <div className="mt-16 border-t border-border pt-8">
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Useful first details</p>
            </Reveal>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {["Site type and location", "Number of access points", "Expected users or vehicles", "Current hardware or software", "Payment or identity requirements", "Target timing"].map((item, index) => (
                <Reveal key={item} delay={0.12 + index * 0.04}>
                  <li>{item}</li>
                </Reveal>
              ))}
            </ul>
          </div>
        </aside>
        <div className="px-5 py-14 md:px-8 lg:px-16 lg:py-24">
          <Reveal>
            <form onSubmit={handleSubmit} noValidate className="max-w-3xl">
              <div className="grid gap-7 sm:grid-cols-2">
                <Field label="Your name" name="name" required placeholder="Full name" />
                <Field label="Email address" name="email" required type="email" placeholder="name@company.com" />
                <Field label="Organization" name="organization" placeholder="Company or institution" />
                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry type</Label>
                  <select id="inquiry" name="inquiry" className="h-11 w-full rounded-none border border-input bg-background text-foreground px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                    {["Client project", "Partnership", "Investor relations", "Careers", "General inquiry"].map((item) => <option key={item} className="bg-background text-foreground">{item}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-7 space-y-2">
                <Label htmlFor="message">Project or inquiry</Label>
                <Textarea id="message" name="message" required maxLength={1500} className="min-h-48 rounded-none" placeholder="Describe the site, current process, challenge, and intended outcome." />
              </div>
              {error && <p role="alert" className="mt-4 text-sm text-signal">{error}</p>}
              {status === "sent" && (
                <p role="status" className="mt-4 text-sm text-signal">
                  Thank you. Your message has been sent to our team.
                </p>
              )}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" className="rounded-none" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : <>Send message <ArrowUpRight /></>}
                </Button>
                <p className="max-w-md text-xs leading-5 text-muted-foreground">
                  Your message is sent securely to info@quantumindustrials.com. We typically reply within one business day.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
      <section className="border-t border-border bg-signal px-5 py-16 text-signal-foreground md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1480px]">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">Ready when you are</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-7 max-w-5xl font-display text-4xl leading-[0.98] tracking-[-0.04em] md:text-7xl">Ready to transform how your infrastructure operates?</h2>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, ...props }: { label: string; name: string } & ComponentProps<typeof Input>) {
  return <div className="space-y-2"><Label htmlFor={name}>{label}</Label><Input id={name} name={name} maxLength={name === "organization" ? 150 : name === "email" ? 255 : 100} className="h-11 rounded-none" {...props} /></div>;
}
