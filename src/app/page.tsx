import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GlassCard, GlassButton, LiquidBlobs } from "@/components/glass";
import ProblemSection from "@/components/ProblemSection";
import {
  FadeUp,
  Stagger,
  SplitWords,
  CountUp,
  Marquee,
  OrbitRings,
} from "@/components/motion";

const applications = [
  {
    tag: "Production",
    title: "Entertainment",
    body: "Production-ready screenplays, ad scripts, and OTT narratives for studios and agencies.",
    tone: "cream" as const,
  },
  {
    tag: "Heritage",
    title: "Ancestor Simulation",
    body: "Preserve the voice and stories of loved ones — a living memory for Indian families.",
    tone: "light" as const,
  },
  {
    tag: "Therapeutic",
    title: "Memory Correction",
    body: "Therapeutic reframing of painful memories using culturally grounded narrative techniques.",
    tone: "light" as const,
  },
  {
    tag: "Care",
    title: "Aging Parent Care",
    body: "AI voice companions for elderly parents in small towns — in their own dialect, at their pace.",
    tone: "cream" as const,
  },
  {
    tag: "Wellbeing",
    title: "Teacher Mental Health",
    body: "Emotional support tools for India's 9.6M government school teachers.",
    tone: "light" as const,
  },
  {
    tag: "Guidance",
    title: "Career Guidance",
    body: "Rasa-aware career narrative matching for students after formal education.",
    tone: "light" as const,
  },
  {
    tag: "Wellness",
    title: "Sleep Wellness",
    body: "Culturally resonant sleep solutions using Indian storytelling, music, and language.",
    tone: "cream" as const,
  },
];

const engine = [
  {
    title: "Director Agent",
    body: "The creative brain that decides flow, assigns tasks, and maintains narrative consistency across chapters.",
  },
  {
    title: "Multi-modal ingestion",
    body: "Accepts voice notes, PDFs, and text inputs, converting them into clean, structured creative signals.",
  },
  {
    title: "Cultural context",
    body: "A Researcher Agent understands regional nuance, myth references, and symbolism through a living folklore database.",
  },
  {
    title: "Creative Factory",
    body: "A generation swarm of Architect, Narrator, Screenwriter, and Editor agents collaborate on story creation.",
  },
  {
    title: "Hybrid execution",
    body: "Runs in low-connectivity environments and on budget phones — built for rural creators in offline mode.",
  },
  {
    title: "Continuity loop",
    body: "Exports screenplay, chapter, and summary with a loopback system that keeps the story world coherent over long formats.",
  },
];

// each language carries its own first letter, in its native script
const marqueeItems: { name: string; glyph: string }[] = [
  { name: "Telugu", glyph: "తె" },
  { name: "Hindi", glyph: "हि" },
  { name: "Tamil", glyph: "த" },
  { name: "Bengali", glyph: "বা" },
  { name: "Marathi", glyph: "म" },
  { name: "Punjabi", glyph: "ਪੰ" },
  { name: "Malayalam", glyph: "മ" },
  { name: "Kannada", glyph: "ಕ" },
  { name: "Gujarati", glyph: "ગુ" },
  { name: "Odia", glyph: "ଓ" },
  { name: "22 languages", glyph: "✳" },
  { name: "1,600+ dialects", glyph: "✳" },
  { name: "9 rasas", glyph: "✳" },
];

export default function Home() {
  return (
    <>
      {/* Hero — liquid glass + mother art */}
      <section className="relative overflow-hidden bg-cream-light pt-32 pb-20 lg:pt-40 lg:pb-28">
        <LiquidBlobs variant="warm" />
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <FadeUp y={12}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] backdrop-blur-md">
                <span className="text-primary">✳</span> Original Narrative Engine
              </span>
            </FadeUp>
            <h1 className="mt-6 font-display text-5xl leading-[1.04] tracking-[-1.5px] text-ink md:text-6xl lg:text-7xl">
              <SplitWords
                text="The megaphone for the Indian soul."
                accent={["Indian", "soul"]}
              />
            </h1>
            <FadeUp delay={0.5} y={20}>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-tint">
                ONE is a Cultural Intelligence engine that understands rasa,
                dialect, and the emotional rhythm of Indian storytelling — built
                for the 500 million people existing AI ignores.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <GlassButton href="/contact">Try AumicFlow</GlassButton>
                <GlassButton href="/company" variant="ghost">
                  Read the vision
                </GlassButton>
              </div>
            </FadeUp>
          </div>

          {/* Mother-writing art in a double-bezel glass frame with floating chips */}
          <FadeUp delay={0.25} y={32}>
            <div className="relative mx-auto w-full max-w-[460px]">
              <div className="bezel-shell rounded-[2rem] p-2">
                <div className="glass-cream relative overflow-hidden rounded-[calc(2rem-0.5rem)]">
                  <span
                    className="liquid-sheen pointer-events-none absolute inset-x-0 -top-1/2 h-full"
                    aria-hidden
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/mother-writing.png"
                    alt="A mother writing her story by hand"
                    className="relative mx-auto w-full max-w-[360px] mix-blend-multiply"
                    draggable={false}
                  />
                  <p className="relative px-6 pb-6 text-center font-display text-xl italic text-ink-tint">
                    Every story India never got to tell.
                  </p>
                </div>
              </div>

              {/* floating glass stat chips (Z-axis cascade) */}
              <div className="glass absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 sm:block">
                <p className="font-display text-2xl text-ink">500M+</p>
                <p className="text-[11px] text-steel">voices, unheard</p>
              </div>
              <div className="glass absolute -right-5 bottom-12 hidden rounded-2xl px-4 py-3 sm:block">
                <p className="font-display text-2xl text-ink">22</p>
                <p className="text-[11px] text-steel">languages, native</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Language marquee */}
      <div className="border-y border-white/40 bg-cream/70 py-5 backdrop-blur-sm">
        <Marquee duration={36}>
          {marqueeItems.map((item) => (
            <span
              key={item.name}
              className="flex items-center gap-12 whitespace-nowrap text-sm font-medium text-ink-tint"
            >
              {item.name}
              <span
                className="inline-flex h-6 min-w-6 items-center justify-center text-base leading-none text-primary"
                aria-hidden
              >
                {item.glyph}
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Problem — advanced bento with voice waveform */}
      <ProblemSection />

      {/* Applications — glass cards over warm blobs */}
      <section className="relative overflow-hidden bg-cream-light py-20 lg:py-28">
        <LiquidBlobs variant="dawn" className="opacity-70" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
          <FadeUp>
            <Badge className="mb-5 h-auto rounded-full px-2.5 py-1 text-[12px] font-semibold">
              What it powers
            </Badge>
            <h2 className="font-display text-4xl leading-[1.1] tracking-[-1px] text-ink md:text-5xl">
              One intelligence layer.{" "}
              <em className="text-primary">Multiple applications.</em>
            </h2>
            <p className="mt-4 max-w-[60ch] text-lg text-slate">
              A shared Cultural Intelligence layer powering storytelling,
              emotional care, memory, and wellness for Bharat.
            </p>
          </FadeUp>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((a) => (
              <GlassCard key={a.title} tone={a.tone} inStagger className="rounded-2xl">
                <div className="p-8">
                  <Badge className="mb-4 h-auto rounded-full px-2 py-0.5 text-[11px] font-semibold">
                    {a.tag}
                  </Badge>
                  <h3 className="text-lg font-medium text-ink">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-tint">
                    {a.body}
                  </p>
                </div>
              </GlassCard>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Stats — glass stat plates */}
      <section className="relative overflow-hidden border-y border-white/40 bg-cream py-16 lg:py-20">
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { v: 500, suffix: "M+", l: "Vernacular internet users waiting for AI that understands them" },
              { v: 22, suffix: "", l: "Official languages — 1,600+ dialects — treated as first-class citizens" },
              { v: 9, suffix: "", l: "Rasas understood at the model level, not bolted on as sentiment" },
              { v: 5000, suffix: "", prefix: "₹", l: "The phones ONE runs on — offline-first, 80% of compute on-device" },
            ].map((s) => (
              <GlassCard key={s.l} tone="light" inStagger className="rounded-2xl">
                <div className="p-7">
                  <p className="font-display text-5xl tracking-[-1px] text-ink lg:text-6xl">
                    <CountUp to={s.v} prefix={s.prefix} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{s.l}</p>
                </div>
              </GlassCard>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Engine — orbit rings + glass cards */}
      <section className="relative overflow-hidden bg-cream-light py-20 lg:py-28">
        <OrbitRings />
        <LiquidBlobs variant="warm" className="opacity-40" />
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
          <FadeUp className="text-center">
            <p className="mb-5 font-mono text-[12px] uppercase tracking-[3px] text-steel">
              How it works
            </p>
            <h2 className="font-display text-4xl leading-[1.1] tracking-[-1px] text-ink md:text-5xl">
              One engine. Seven products.
            </h2>
            <p className="mx-auto mt-4 max-w-[60ch] text-lg text-slate">
              Where ideas enter as whispers and exit as world-class stories.
              Each product makes the engine smarter through shared learning.
            </p>
          </FadeUp>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {engine.map((e) => (
              <GlassCard key={e.title} tone="light" inStagger className="rounded-2xl">
                <div className="p-8">
                  <h3 className="text-lg font-medium text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {e.body}
                  </p>
                </div>
              </GlassCard>
            ))}
          </Stagger>

          <FadeUp className="mt-10 text-center">
            <Link
              href="/product"
              className="text-sm font-medium text-primary hover:text-primary-deep"
            >
              Explore the Original Narrative Engine →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* CTA — liquid glass banner */}
      <section className="bg-cream-light pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1320] px-8 py-16 text-center shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] lg:py-20">
              {/* one focused warm glow instead of muddy blobs */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(62% 130% at 50% 0%, rgba(250,82,15,0.22), transparent 60%)" }}
              />
              {/* fine star-field texture for sharpness */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,208,106,0.9) 1px, transparent 1.4px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* crisp top hairline */}
              <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <h2 className="relative font-display text-4xl leading-[1.1] tracking-[-1px] text-on-dark md:text-5xl">
                The next chapter of Indian storytelling is{" "}
                <em className="text-sunshine-500">yours.</em>
              </h2>
              <p className="relative mx-auto mt-4 max-w-[52ch] text-lg text-cream/75">
                From rickshaw drivers to film studios, AumicFlow meets every
                storyteller at their specific pain point.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <GlassButton href="/contact">Join the beta</GlassButton>
                <GlassButton href="/pricing" variant="ghost">
                  See pricing
                </GlassButton>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
