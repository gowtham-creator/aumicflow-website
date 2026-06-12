import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PricingBg } from "@/components/backgrounds";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp, Stagger, HoverLift } from "@/components/motion";

export const metadata: Metadata = {
  title: "Pricing | AumicFlow",
  description:
    "Four tiers designed for every stage — from students to enterprise production houses.",
};

const tiers = [
  {
    name: "Explorer",
    price: "Free",
    cadence: "forever",
    audience: "Students & explorers",
    features: [
      "3 short scripts / month",
      "1 reframe + 1 decision / month",
      "Browse the Memory Map",
      "Marketplace browse only",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Creator",
    price: "₹1,999",
    cadence: "per month · ₹19,999/yr",
    audience: "Independent creators & freelancers",
    features: [
      "Unlimited scripts (5K words), 3 languages",
      "10 reframes, 5 decisions, Mirror chapter",
      "1 ancestor persona",
      "List scripts on the marketplace — 20% take",
    ],
    cta: "Start creating",
    featured: false,
  },
  {
    name: "Professional",
    price: "₹9,999",
    cadence: "per month · ₹99,999/yr",
    audience: "Filmmakers, agencies, therapists",
    features: [
      "Unlimited (20K words), 10+ languages",
      "Therapist / Coach dashboards, full Mirror novel",
      "3 ancestors with voice synthesis",
      "15% marketplace take, featured placement",
    ],
    cta: "Go professional",
    featured: true,
  },
  {
    name: "Studio",
    price: "₹49,999",
    cadence: "per month · custom annual",
    audience: "Production houses, OTTs, enterprise",
    features: [
      "Enterprise API, white-label, team seats",
      "Platform API, clinical reporting, batch generation",
      "Unlimited ancestors, municipal dashboard",
      "10% marketplace take, procurement dashboard",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

const faqs = [
  {
    q: "Does AumicFlow work offline?",
    a: "Yes. ONE is offline-first by design — Small Language Models run on-device, so 80% of compute happens locally. It works on ₹5,000 smartphones with one-bar signal, built for rural creators.",
  },
  {
    q: "Which languages are supported?",
    a: "The engine treats 22 official Indian languages and 1,600+ dialects as first-class citizens, fluently handling Hinglish, Tamil, Telugu, Bengali, and regional code-switching — including dialect-level nuance like Godavari Telugu.",
  },
  {
    q: "How does the script marketplace work?",
    a: "Creators list scripts on the marketplace and keep the majority of every sale. The platform take decreases as you upgrade: 20% on Creator, 15% on Professional (with featured placement), and 10% on Studio.",
  },
  {
    q: "Is my data safe? What about DPDP compliance?",
    a: "Privacy compliance is structural, not bolt-on. AumicFlow is built DPDP Act-compliant by design — which also makes it procurement-ready for enterprises, education boards, and government partners.",
  },
  {
    q: "Do you offer government, NGO, or institutional pricing?",
    a: "Yes — family plans, welfare-department bulk seats (₹150–₹300/user/mo), education board licensing, and white-label deals are quoted directly. Contact sales for a tailored quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-light border-b border-hairline-soft">
        <PricingBg />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-6">
              Pricing
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-[-1.5px] text-ink max-w-[20ch]">
              Four tiers. <em className="text-primary">Every storyteller.</em>
            </h1>
            <p className="mt-6 text-lg text-ink-tint leading-relaxed max-w-[56ch]">
              Designed for every stage — from students to enterprise
              production houses.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <Stagger className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
            {tiers.map((t) => (
              <HoverLift
                key={t.name}
                className={
                  t.featured
                    ? "bg-cream border-2 border-primary rounded-lg p-8"
                    : "bg-canvas border border-hairline-soft rounded-lg p-8"
                }
              >
                {t.featured && (
                  <Badge className="rounded-full h-auto px-2.5 py-1 text-[13px] font-semibold mb-4">
                    Most popular
                  </Badge>
                )}
                <h2 className="text-xl font-medium text-ink">{t.name}</h2>
                <p className="mt-4 font-display text-4xl tracking-[-0.5px] text-ink">
                  {t.price}
                </p>
                <p className="mt-1 text-sm text-steel">{t.cadence}</p>
                <p className="mt-4 text-sm font-medium text-slate">
                  {t.audience}
                </p>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-slate">
                      <span className="text-primary">✓</span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={
                    t.featured
                      ? "mt-8 block text-center bg-primary text-on-primary text-sm font-medium rounded-md px-5 py-2.5 hover:bg-primary-deep"
                      : "mt-8 block text-center border border-hairline-strong text-ink text-sm font-medium rounded-md px-5 py-2.5 hover:border-ink"
                  }
                >
                  {t.cta}
                </Link>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface dot-grid border-y border-hairline-soft">
        <div className="mx-auto max-w-[760px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
              Questions, answered.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion
              type="single"
              collapsible
              className="mt-10 bg-canvas border border-hairline-soft rounded-lg px-6 py-2"
            >
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="py-5 text-base font-medium text-ink hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm text-slate leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <div className="bg-cream rounded-lg px-8 py-14 text-center">
              <h2 className="font-display text-3xl md:text-4xl leading-[1.15] tracking-[-0.5px] text-ink">
                Need government, NGO, or institutional pricing?
              </h2>
              <p className="mt-3 text-base text-ink-tint max-w-[56ch] mx-auto">
                Family plans, welfare-department bulk seats, education boards,
                and white-label licensing are quoted directly.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="bg-ink text-on-dark text-sm font-medium rounded-md px-5 py-2.5 hover:bg-charcoal"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
