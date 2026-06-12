import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FadeUp, Stagger, Item, HoverLift, CountUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Company — Preserving Culture. Powering the Future | AumicFlow",
  description:
    "The story, vision, roadmap, and founders behind AumicFlow — India's Cultural Intelligence layer.",
};

const revolutions = [
  {
    title: "Soft Power Explosion",
    body: "The world understands humanity through Indian stories. Cultural conquest happens through love, not war, as Indian narratives shape global perspectives.",
    sunrise: false,
  },
  {
    title: "Democracy of Dreams",
    body: "AumicFlow turns 1.4 billion Indians into potential global storytellers. From rickshaw drivers to housewives, every Indian becomes a creator with a worldwide audience.",
    sunrise: true,
  },
  {
    title: "Language Renaissance",
    body: "Regional languages become global exports. 22 official languages and 1,600+ dialects transform into bridges connecting Indian creativity to global hearts.",
    sunrise: false,
  },
];

const vision = [
  { year: "2030", body: "A Telugu creator's story gets 100 million views globally.", sunrise: false },
  { year: "2035", body: "Harvard teaches Indian storytelling for global leadership.", sunrise: true },
  { year: "2040", body: "Indian-produced content dominates global viewership.", sunrise: false },
  { year: "2050", body: "Indian narratives become a universal language of wisdom.", sunrise: true },
];

const roadmap = [
  {
    phase: "Year 1 · Foundation",
    items: [
      "Launch the entertainment vertical (screenwriting, ad scripts)",
      "Diaspora family pilot — Ancestor Simulation",
      "Teacher mental health beta program",
      "Build proprietary Knowledge Graph infrastructure",
    ],
  },
  {
    phase: "Year 2 · Expansion",
    items: [
      "Enterprise OTT licensing agreements",
      "Aging parent care at commercial scale",
      "ITI career guidance partnerships",
      "Break-even achieved",
    ],
  },
  {
    phase: "Year 3 · Scale",
    items: [
      "Mass creator platform for everyday storytellers",
      "National sleep wellness rollout",
      "International expansion — Indian diaspora markets",
      "Cultural IP licensing and export",
    ],
  },
];

const founders = [
  {
    name: "Modukuri Smarendra",
    role: "Founder & Creative Technologist",
    initials: "MS",
    body: "15+ years in creative storytelling, VFX, and AI-driven production. Founder of AumicFlow and Social Idiot (a VFX studio serving Telugu cinema). Former Ogilvy, CNN-News18, and M&C Saatchi — part of the Cannes Lions Network of the Year.",
  },
  {
    name: "Venkata Smile Ratna Modukuri",
    role: "Co-founder & Quality Engineering",
    initials: "VM",
    body: "8+ years in automotive and EV quality engineering. Senior Quality Engineer at Archer Aviation, Six Sigma Green Belt. Previously at Lucid Motors, Samsung SDI, and Mahindra.",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light dot-grid border-b border-hairline-soft">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-6">
              Company
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-[-1.5px] text-ink max-w-[20ch]">
              Preserving culture.{" "}
              <em className="text-primary">Powering the future.</em>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Intro quote — deck style */}
      <section className="bg-canvas dot-grid">
        <div className="mx-auto max-w-[920px] px-6 lg:px-8 py-20 lg:py-24 text-center">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2 py-0.5 text-[11px] font-semibold mb-8">
              Intro
            </Badge>
            <p className="font-display text-3xl md:text-4xl leading-[1.3] text-ink-tint">
              <em className="text-primary">India</em> has{" "}
              <span className="text-ink">millions of stories</span> — the{" "}
              <em>chai wala's struggle</em>, the{" "}
              <em>mother's silent pain</em>, the <em>everyday hero</em> no one
              notices. It's not about perfect English or fancy words. It's
              about{" "}
              <span className="text-ink">
                <em>raw emotion and truth that hits you in the gut.</em>
              </span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Why now */}
      <section className="bg-surface border-y border-hairline-soft">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <p className="font-display italic text-primary text-lg mb-4">
              Why now
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink max-w-[26ch]">
              India's cultural intelligence moment has arrived.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-10">
            {[
              {
                n: "01",
                lead: "Bharat is finally online.",
                rest: "500M+ vernacular users are digital-first.",
              },
              {
                n: "02",
                lead: "AI can finally become local.",
                rest: "Voice AI enables culturally intelligent experiences.",
              },
              {
                n: "03",
                lead: "Demand is exploding.",
                rest: "60+ OTT platforms seek authentic Indian-language storytelling.",
              },
            ].map((w) => (
              <Item key={w.n}>
                <p className="text-primary text-lg font-medium">{w.n}</p>
                <p className="mt-3 text-base text-slate leading-relaxed">
                  <span className="text-ink font-medium">{w.lead}</span>{" "}
                  {w.rest}
                </p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Korean vision — count-up stats */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink max-w-[26ch]">
              The <em className="text-primary">Korean</em> vision.
            </h2>
            <p className="mt-4 text-lg text-slate max-w-[60ch]">
              Korea didn't become a global cultural superpower by accident.
              The Korean government invested in cultural DNA after the 1998
              crisis. India's moment is now.
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            <HoverLift className="bg-canvas border border-hairline-soft rounded-lg p-8">
              <Badge className="rounded-md h-auto px-2 py-0.5 text-[11px] font-semibold">
                Global reach
              </Badge>
              <p className="mt-4 font-display text-5xl tracking-[-1px] text-ink">
                <CountUp to={190} />
              </p>
              <p className="mt-3 text-sm text-slate leading-relaxed">
                Countries where K-dramas are watched.
              </p>
            </HoverLift>
            <HoverLift className="card-sunrise rounded-lg p-8">
              <Badge className="rounded-md h-auto px-2 py-0.5 text-[11px] font-semibold">
                Economic power
              </Badge>
              <p className="mt-4 font-display text-5xl tracking-[-1px] text-ink">
                $<CountUp to={12} />
                .4B
              </p>
              <p className="mt-3 text-sm text-ink-tint leading-relaxed">
                Korean cultural exports, annually.
              </p>
            </HoverLift>
            <HoverLift className="bg-canvas border border-hairline-soft rounded-lg p-8">
              <Badge className="rounded-md h-auto px-2 py-0.5 text-[11px] font-semibold">
                Language impact
              </Badge>
              <p className="mt-4 font-display text-5xl tracking-[-1px] text-ink">
                7th
              </p>
              <p className="mt-3 text-sm text-slate leading-relaxed">
                Most studied language globally — Korean.
              </p>
            </HoverLift>
          </Stagger>
        </div>
      </section>

      {/* Three revolutions */}
      <section className="bg-surface dot-grid border-y border-hairline-soft">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
              Three <em className="text-primary">revolutions.</em>
            </h2>
            <p className="mt-4 text-lg text-slate max-w-[62ch] mx-auto">
              Transforming India through democratized storytelling, language
              renaissance, and{" "}
              <span className="text-primary font-medium">
                cultural soft power.
              </span>
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-5">
            {revolutions.map((r) => (
              <HoverLift
                key={r.title}
                className={
                  r.sunrise
                    ? "card-sunrise rounded-lg p-8"
                    : "bg-canvas border border-hairline-soft rounded-lg p-8"
                }
              >
                <h3 className="text-lg font-medium text-ink">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-tint leading-relaxed">
                  {r.body}
                </p>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Vision timeline */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp className="text-center">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink max-w-[22ch] mx-auto">
              The <em className="text-primary">vision</em> that will make{" "}
              <em className="text-primary">history.</em>
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {vision.map((v) => (
              <HoverLift
                key={v.year}
                className={
                  v.sunrise
                    ? "card-sunrise rounded-lg p-8"
                    : "bg-surface border border-hairline-soft rounded-lg p-8"
                }
              >
                <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold">
                  {v.year}
                </Badge>
                <p className="mt-4 text-base text-ink-tint leading-relaxed">
                  {v.body}
                </p>
              </HoverLift>
            ))}
          </Stagger>
          <FadeUp className="mt-10 text-center">
            <p className="font-display italic text-xl text-steel">
              Close your eyes and imagine a future where Indian storytelling
              transforms global culture and leadership.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-surface border-y border-hairline-soft">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-5">
              Roadmap
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
              Focused rollout strategy.
            </h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-3 gap-10">
            {roadmap.map((r) => (
              <Item key={r.phase} className="border-t-2 border-primary pt-6">
                <h3 className="text-lg font-medium text-ink">{r.phase}</h3>
                <ul className="mt-4 space-y-3">
                  {r.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-slate">
                      <span className="text-primary">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-canvas dot-grid">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink max-w-[26ch]">
              Meet the <em className="text-primary">founders.</em>
            </h2>
            <p className="mt-4 text-lg text-slate max-w-[60ch]">
              Two decades of combined expertise in creative storytelling, AI
              production, and engineering quality — a category few founders
              have operated across for over a decade.
            </p>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-2 gap-5">
            {founders.map((f) => (
              <HoverLift
                key={f.name}
                className="bg-canvas border border-hairline-soft rounded-lg p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center size-14 rounded-lg card-sunrise font-display text-xl text-ink">
                    {f.initials}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-ink">{f.name}</h3>
                    <p className="text-sm font-medium text-primary">
                      {f.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-slate leading-relaxed">
                  {f.body}
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
            <div className="relative overflow-hidden bg-cream rounded-lg px-8 py-16 text-center">
              <div
                className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full card-sunrise opacity-60 blur-2xl"
                aria-hidden
              />
              <h2 className="relative font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink max-w-[26ch] mx-auto">
                The Indian storytelling{" "}
                <em className="text-primary">morning</em> is here.
              </h2>
              <p className="relative mt-4 text-lg text-ink-tint max-w-[58ch] mx-auto">
                A new era where every Indian voice can reach every global ear
                — transforming regional dreams into universal inspiration.
              </p>
              <div className="relative mt-8">
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary text-sm font-medium rounded-md px-5 py-2.5 hover:bg-primary-deep"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
