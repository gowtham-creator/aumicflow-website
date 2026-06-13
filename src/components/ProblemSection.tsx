"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { LiquidBlobs } from "@/components/glass";
import { FadeUp, Stagger, Item, CountUp } from "@/components/motion";

/* ---- ultra-light line icons ------------------------------------------ */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconScript() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" {...stroke}>
      <path d="M5 3h9l5 5v13H5z" />
      <path d="M14 3v5h5M8 13h8M8 17h6" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" {...stroke}>
      <path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.5 12 20 12 20z" />
    </svg>
  );
}
function IconMemory() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" {...stroke}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}
function IconMap() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" {...stroke}>
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

const problems = [
  {
    n: "01",
    icon: <IconScript />,
    title: "Storytelling lacks cultural intelligence",
    body: "AI writes scripts. It doesn't understand rasa, regional humour, dialects, or the emotional rhythm of Indian storytelling.",
  },
  {
    n: "02",
    icon: <IconHeart />,
    title: "Care is emotionally disconnected",
    body: "Families and aging parents need AI that understands Indian emotions, loneliness, family dynamics, and local dialects.",
  },
  {
    n: "03",
    icon: <IconMemory />,
    title: "Memory and identity are disappearing",
    body: "When elders pass away, stories, voices, and family wisdom disappear with them — leaving no cultural memory behind.",
  },
  {
    n: "04",
    icon: <IconMap />,
    title: "Bharat is underserved",
    body: "Language support exists. Cultural understanding does not. Bharat still lacks AI built for Indian emotions and lived realities.",
  },
];

/** Animated voice waveform — bars rising and falling like unheard voices. */
function Waveform() {
  const bars = [0.4, 0.7, 0.35, 0.9, 0.55, 1, 0.6, 0.85, 0.3, 0.7, 0.45, 0.8, 0.5, 0.95, 0.4];
  return (
    <div className="flex h-16 items-end gap-1.5" aria-hidden>
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-1.5 flex-1 rounded-full bg-gradient-to-t from-primary/40 to-sunshine-500"
          style={{ originY: 1 }}
          animate={{ scaleY: [h, h * 0.35, h * 1.1, h * 0.5, h] }}
          transition={{
            duration: 2.4 + (i % 5) * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d1520] py-20 lg:py-28">
      <LiquidBlobs variant="dark" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <Badge className="mb-6 h-auto rounded-full px-2.5 py-1 text-[12px] font-semibold">
            The gap
          </Badge>
          <h2 className="max-w-[20ch] font-display text-4xl leading-[1.08] tracking-[-1px] text-on-dark md:text-5xl lg:text-[3.5rem]">
            500 million people. Still no AI that{" "}
            <em className="text-sunshine-500">understands their reality.</em>
          </h2>
        </FadeUp>

        {/* Bento row */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Big counter + waveform */}
          <FadeUp delay={0.05} className="lg:col-span-2">
            <div className="glass-dark group relative h-full overflow-hidden rounded-[1.7rem] p-8 lg:p-10">
              <span
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                aria-hidden
              />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="font-display text-6xl leading-none tracking-[-2px] text-on-dark lg:text-7xl">
                      <CountUp to={500} suffix="M+" />
                    </p>
                    <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-cream/80">
                      vernacular voices the algorithm never learned to hear:
                      every dialect, every silence between the words.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p className="font-display text-3xl text-on-dark">
                        <CountUp to={22} />
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-on-dark-muted">
                        languages
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-3xl text-on-dark">1,600+</p>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-on-dark-muted">
                        dialects
                      </p>
                    </div>
                  </div>
                </div>
                <Waveform />
              </div>
            </div>
          </FadeUp>

          {/* "Every 3 minutes" accent card */}
          <FadeUp delay={0.12}>
            <div className="relative h-full overflow-hidden rounded-[1.7rem] card-sunrise p-8">
              <div className="flex items-center gap-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/40" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-ink" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Live cultural loss
                </span>
              </div>
              <p className="mt-6 font-display text-3xl leading-tight tracking-[-0.5px] text-ink">
                Every 3 minutes, an Indian story dies.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Potential narratives fade into silence — never shared, never
                written, never preserved.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Problem cards */}
        <Stagger className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <Item key={p.n}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="glass-dark group relative h-full overflow-hidden rounded-2xl p-7"
              >
                {/* hover glow */}
                <span
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 50% 0%, rgba(255,161,16,0.18), transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-sunshine-500 ring-1 ring-white/15">
                      {p.icon}
                    </span>
                    <span className="font-display text-2xl text-white/20">
                      {p.n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-medium text-on-dark">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
