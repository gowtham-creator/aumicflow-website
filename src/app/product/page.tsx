import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { FadeUp, Stagger, Item, HoverLift } from "@/components/motion";

export const metadata: Metadata = {
  title: "ONE — The Original Narrative Engine | AumicFlow",
  description:
    "A multi-agent Cultural Intelligence Engine: Director Agent, Creative Factory, rasa-aware narration, and offline-first SLM architecture for Bharat.",
};

const features = [
  {
    tag: "Pipeline",
    title: "Voice-to-Screenplay",
    body: "An end-to-end pipeline from raw voice note to industry-standard Fountain / Final Draft formatted screenplay.",
    sunrise: true,
  },
  {
    tag: "Knowledge",
    title: "Story Ancestry Graph",
    body: "Every story created on AumicFlow traces its lineage in a living, interconnected knowledge graph.",
    sunrise: false,
  },
  {
    tag: "Narrative DNA",
    title: "Creator Fingerprint",
    body: "The AI learns each creator's unique storytelling voice over time.",
    sunrise: false,
  },
  {
    tag: "Production",
    title: "Instant Pre-Visualization Suite",
    body: "Automatically generates full production assets: synopsis, logline, production budget, and moodboards in minutes.",
    sunrise: true,
  },
  {
    tag: "Campaigns",
    title: "Ad Campaign Generator",
    body: "Multi-language campaign creation from a single brand brief.",
    sunrise: false,
  },
  {
    tag: "First-of-kind",
    title: "Morphic Story Fields",
    body: "No precedent in human storytelling — a first-of-kind narrative category.",
    sunrise: true,
  },
];

const moats = [
  {
    n: "01",
    title: "Cultural Knowledge Graph",
    body: "A proprietary model trained on Vedas, Puranas, Bollywood, regional literature, and Reels. Western LLMs cannot replicate rasa, masala narratives, and code-switching across 22 Indian languages.",
  },
  {
    n: "02",
    title: "Offline-first SLM architecture",
    body: "Runs on ₹5,000 smartphones with zero internet via Small Language Models on-device. 80% of compute is local — no Western AI competitor has built at this infrastructure depth for Bharat.",
  },
  {
    n: "03",
    title: "Rasa-aware narrative engine",
    body: "Understands Indian emotional logic at the model level — Shringara, Veera, Karuna, and all nine rasas. Structurally different from sentiment analysis; it cannot be retrofitted onto a Western LLM.",
  },
  {
    n: "04",
    title: "Multi-agent production system",
    body: "Director, Researcher, and Creative Factory agents collaborate like a full production studio at machine speed. Not a chatbot — a pipeline.",
  },
  {
    n: "05",
    title: "Multi-vertical network effects",
    body: "Users acquired in one vertical deepen the cultural dataset for all others. The flywheel gets more powerful at scale, not less.",
  },
  {
    n: "06",
    title: "DPDP Act compliance by design",
    body: "Privacy compliance is structural, not bolt-on. As India's data regulation tightens, this becomes a hard enterprise procurement requirement.",
  },
];

const capabilities = [
  {
    title: "Ultra-low latency",
    body: "an emotion detection layer identifies intent, frustration, grief, and excitement from vocal markers.",
  },
  {
    title: "Multi-agent system",
    body: "enables sophisticated long-form story generation.",
  },
  {
    title: "On-device deployment",
    body: "brings Small Language Models to mobile devices.",
  },
  {
    title: "Advanced model finetuning",
    body: "multilingual creative reasoning across diverse languages, audio, and visuals.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-light dot-grid border-b border-hairline-soft">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-6">
              Product · ONE
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-[-1.5px] text-ink max-w-[20ch]">
              The Original <em className="text-primary">Narrative</em> Engine.
            </h1>
            <p className="mt-6 text-lg text-ink-tint leading-relaxed max-w-[58ch]">
              Aumic doesn't just hear your audio. It hears your intent, your
              emotion, your frustration. A multilingual AI system that
              understands and processes Indian languages — and Indian
              feelings — seamlessly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-primary text-on-primary text-sm font-medium rounded-md px-5 py-2.5 hover:bg-primary-deep"
              >
                Request access
              </Link>
              <Link
                href="/pricing"
                className="bg-canvas border border-beige-deep text-ink text-sm font-medium rounded-md px-5 py-2.5 hover:border-ink"
              >
                See pricing
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Code mockup + capabilities */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-start">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
              Where ideas enter as <em className="text-primary">whispers</em>{" "}
              and exit as world-class stories.
            </h2>
            <Stagger className="mt-8 space-y-5">
              {capabilities.map((c) => (
                <Item key={c.title} className="flex gap-4">
                  <span className="text-primary font-semibold">→</span>
                  <p className="text-base text-slate leading-relaxed">
                    <span className="text-ink font-medium">{c.title}</span> —{" "}
                    {c.body}
                  </p>
                </Item>
              ))}
            </Stagger>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="rounded-lg overflow-hidden shadow-[0_12px_24px_-4px_rgba(0,0,0,0.08)]">
              <div className="bg-surface-code text-on-dark-muted text-[13px] px-4 py-2 border-b border-white/10 font-mono">
                one — generate · rasa-aware
              </div>
              <pre className="bg-surface-code text-on-dark font-mono text-sm leading-relaxed p-4 overflow-x-auto">
                {`POST /v1/stories

{
  "input": "voice_note.ogg",        // Godavari Telugu
  "format": "screenplay.fountain",
  "rasa": ["karuna", "veera"],
  "dialect": "te-godavari",
  "mode": "offline-first",
  "agents": ["director", "researcher",
             "screenwriter", "editor"]
}

→ 201 Created · screenplay ready
→ lineage: story-ancestry-graph/4821`}
              </pre>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Key features — deck-style chip + gradient cards */}
      <section className="bg-surface dot-grid border-y border-hairline-soft">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-5">
              Features
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink max-w-[24ch]">
              No other platform gets our{" "}
              <em className="text-primary">masala</em>. Aumic does.
            </h2>
            <p className="mt-4 text-lg text-slate max-w-[60ch]">
              Whether it's folklore or today's headlines.
            </p>
          </FadeUp>

          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <HoverLift
                key={f.title}
                className={
                  f.sunrise
                    ? "card-sunrise rounded-lg p-8"
                    : "bg-canvas border border-hairline-soft rounded-lg p-8"
                }
              >
                <Badge className="rounded-md h-auto px-2 py-0.5 text-[11px] font-semibold mb-4">
                  {f.tag}
                </Badge>
                <h3 className="text-lg font-medium text-ink">{f.title}</h3>
                <p
                  className={
                    f.sunrise
                      ? "mt-2 text-sm text-ink-tint leading-relaxed"
                      : "mt-2 text-sm text-slate leading-relaxed"
                  }
                >
                  {f.body}
                </p>
              </HoverLift>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Moat */}
      <section className="bg-canvas">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20 lg:py-24">
          <FadeUp>
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-5">
              Competitive moat
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
              A moat that <em className="text-primary">compounds.</em>
            </h2>
            <p className="mt-4 text-lg text-slate max-w-[62ch]">
              A single Cultural Intelligence layer compounds with every new
              user, language, and application.
            </p>
          </FadeUp>

          <Stagger className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {moats.map((m) => (
              <Item key={m.n} className="border-t border-hairline pt-6">
                <span className="inline-flex items-center justify-center rounded-md border border-hairline-strong px-2 py-0.5 text-[12px] font-semibold text-steel">
                  {m.n}
                </span>
                <h3 className="mt-3 text-lg font-medium text-ink">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {m.body}
                </p>
              </Item>
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
                className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full card-sunrise opacity-60 blur-2xl"
                aria-hidden
              />
              <h2 className="relative font-display text-4xl md:text-5xl leading-[1.1] tracking-[-1px] text-ink">
                Sarvam builds the pipes. AumicFlow builds the{" "}
                <em className="text-primary">water.</em>
              </h2>
              <p className="relative mt-4 text-lg text-ink-tint max-w-[52ch] mx-auto">
                The infrastructure is ready. The products are missing. We
                build the products.
              </p>
              <div className="relative mt-8">
                <Link
                  href="/contact"
                  className="bg-ink text-on-dark text-sm font-medium rounded-md px-5 py-2.5 hover:bg-charcoal"
                >
                  Talk to the team
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
