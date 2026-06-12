import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FadeUp, Stagger, Item, HoverLift } from "@/components/motion";

export const metadata: Metadata = {
  title: "Solutions — Who We Serve | AumicFlow",
  description:
    "From rickshaw drivers to film studios — AumicFlow meets every storyteller at their specific pain point.",
};

const segments = [
  {
    name: "Everyday Creator",
    who: "Housewives, students, rural elders, gig workers. 450M+ with stories to tell.",
    pain: "No English fluency, no technical skills. Stories die as WhatsApp voice notes.",
    verticals: "Voice-to-Script · Morphic Story Fields · Script Marketplace",
    sunrise: true,
  },
  {
    name: "Independent Filmmakers",
    who: "50K annual film school graduates. 500K+ regional cinema professionals.",
    pain: "Script development costs INR 9–50L and takes 3–6 months. Pre-production is slow.",
    verticals: "Full production suite · Creator Fingerprint · Story Ancestry Graph",
    sunrise: false,
  },
  {
    name: "OTT Platforms & Production Houses",
    who: "60+ OTT platforms. Major production houses. Regional film boards.",
    pain: "Content pipeline exhaustion. A discoverability crisis — 16 minutes of scrolling per session.",
    verticals: "Enterprise API / white-label · Script Marketplace · B2B contracts",
    sunrise: false,
  },
  {
    name: "Indian Diaspora",
    who: "35M Indians globally. NRIs and second-gen immigrants seeking cultural connection.",
    pain: "Cultural disconnection from the homeland. Children growing up without grandparents' stories.",
    verticals: "Ancestor Simulation · Decision Story · Memory Correction Engine",
    sunrise: true,
  },
];

const dreamers = [
  {
    title: "Academic creators",
    body: "Every student becomes a screenplay genius, turning knowledge into engaging, memorable content.",
  },
  {
    title: "Rural legends",
    body: "Every farmer becomes a folklore legend, sharing ancestral wisdom through captivating stories.",
  },
  {
    title: "Everyday filmmakers",
    body: "Every rickshaw driver becomes Spielberg, transforming ordinary journeys into cinematic masterpieces.",
  },
  {
    title: "Household storytellers",
    body: "Every housewife becomes the next Ekta Kapoor, crafting compelling narratives that captivate audiences.",
  },
];

const verticals = [
  {
    title: "Entertainment",
    body: "Film pre-production, scriptwriting, and storyboarding for indie creators and studios.",
    sunrise: true,
  },
  {
    title: "Ancestor Simulation",
    body: "Diaspora families reconnect with heritage through AI-powered cultural storytelling.",
    sunrise: false,
  },
  {
    title: "Memory Correction",
    body: "Therapeutic storytelling tools for individual therapy and mental health applications.",
    sunrise: false,
  },
  {
    title: "Enterprise OTT",
    body: "White-label cultural AI modules for streaming platforms and content distributors.",
    sunrise: true,
  },
  {
    title: "Ad Agency Tools",
    body: "Culturally intelligent campaign creation for advertising and brand teams.",
    sunrise: true,
  },
  {
    title: "Municipal Partnerships",
    body: "Government and civic storytelling applications for public sector engagement.",
    sunrise: false,
  },
  {
    title: "Morphic Story Fields",
    body: "No precedent in human storytelling. A first-of-kind narrative category.",
    sunrise: true,
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light dot-grid border-b border-hairline-soft">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-6">
              Solutions
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-[-1.5px] text-ink max-w-[16ch]">
              Who we <em className="text-primary">serve.</em>
            </h1>
            <p className="mt-6 text-lg text-ink-tint leading-relaxed max-w-[58ch]">
              From rickshaw drivers to film studios — AumicFlow meets every
              storyteller at their specific pain point.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 1.4 billion dreams */}
      <section className="bg-canvas dot-grid">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-5">
              Cultural Revolution
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
              What happens when <em className="text-primary">1.4 billion</em>{" "}
              dreams meet one <em className="text-primary">revolutionary</em>{" "}
              AI?
            </h2>
            <p className="mt-5 text-base text-slate leading-relaxed max-w-[44ch]">
              <span className="text-primary font-medium">
                The biggest cultural explosion
              </span>{" "}
              in human history. 1.4 billion creators with one intelligent
              partner.
            </p>
          </FadeUp>

          <Stagger className="grid sm:grid-cols-2 gap-5">
            {dreamers.map((d, i) => (
              <HoverLift
                key={d.title}
                className={
                  i % 2 === 0
                    ? "bg-canvas border border-hairline-soft rounded-lg p-7"
                    : "card-sunrise rounded-lg p-7"
                }
              >
                <h3 className="text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-tint leading-relaxed">
                  {d.body}
                </p>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Segments — deck "Who we serve" table as gradient panel */}
      <section className="bg-surface border-y border-hairline-soft">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
              Four segments. One promise.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-2 gap-5">
            {segments.map((s) => (
              <HoverLift
                key={s.name}
                className={
                  s.sunrise
                    ? "card-sunrise-soft rounded-lg p-8"
                    : "bg-canvas border border-hairline-soft rounded-lg p-8"
                }
              >
                <h3 className="text-2xl font-medium text-ink">{s.name}</h3>
                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="eyebrow text-steel mb-1">Who they are</dt>
                    <dd className="text-ink-tint">{s.who}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-steel mb-1">Pain point</dt>
                    <dd className="text-ink-tint">{s.pain}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-steel mb-1">
                      AumicFlow verticals
                    </dt>
                    <dd className="text-primary-deep font-medium">
                      {s.verticals}
                    </dd>
                  </div>
                </dl>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Verticals */}
      <section className="bg-canvas dot-grid">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink max-w-[24ch]">
              <em className="text-primary">Seven verticals.</em> One Cultural
              Intelligence Engine.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {verticals.map((v) => (
              <HoverLift
                key={v.title}
                className={
                  v.sunrise
                    ? "card-sunrise rounded-lg p-8"
                    : "bg-canvas border border-hairline-soft rounded-lg p-8"
                }
              >
                <h3 className="text-lg font-medium text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-tint leading-relaxed">
                  {v.body}
                </p>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pb-20 lg:pb-24">
          <FadeUp>
            <div className="bg-cream rounded-lg px-8 py-16 text-center">
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
                Every interaction is a shareable moment.
              </h2>
              <p className="mt-4 text-lg text-ink-tint max-w-[56ch] mx-auto">
                When Amma speaks to the app in Godavari Telugu and her son gets
                a daily summary, the product sells itself.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary text-sm font-medium rounded-md px-5 py-2.5 hover:bg-primary-deep"
                >
                  Bring AumicFlow to your audience
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
