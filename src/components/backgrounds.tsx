"use client";

import { motion } from "motion/react";

/* Hand-drawn "sketch" filter: fractal-noise displacement gives clean vector
   paths a wobbly, pencil-on-paper edge. */
function SketchDefs({ id }: { id: string }) {
  return (
    <defs>
      <filter id={id} x="-15%" y="-15%" width="130%" height="130%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.2" />
      </filter>
    </defs>
  );
}

/* Each page gets its OWN soft, premium hue family so the four backgrounds
   feel distinct, not four shades of the same orange. */
const P = {
  // Product — marigold gold (warm, sacred)
  productTint: "radial-gradient(62% 86% at 82% 50%, rgba(255,193,112,0.40), transparent 70%)",
  gold: "rgba(196,140,66,0.52)",
  honey: "rgba(214,164,96,0.55)",
  terracotta: "rgba(180,106,66,0.5)",
  goldDot: "rgba(205,155,95,0.5)",
  ember: "rgba(226,128,72,0.62)",
  // Solutions — rose clay (warm blush earth)
  solTint: "radial-gradient(72% 84% at 78% 42%, rgba(233,166,158,0.40), transparent 70%)",
  clay: "rgba(182,96,92,0.55)",
  coral: "rgba(228,132,98,0.55)",
  sage: "rgba(150,162,120,0.5)",
  earth: "rgba(162,110,96,0.34)",
  // Pricing — soft jade pond (cool green)
  priceTint: "radial-gradient(74% 84% at 74% 72%, rgba(146,198,162,0.38), transparent 72%)",
  rose: "rgba(198,118,140,0.52)",
  petalGold: "rgba(214,160,96,0.55)",
  jade: "rgba(96,166,138,0.55)",
  // Company — rose-gold storytelling dawn, brand star rising
  coTint: "radial-gradient(82% 96% at 50% 104%, rgba(255,176,96,0.34) 0%, rgba(255,148,138,0.16) 44%, transparent 78%)",
  star: "rgba(250,82,15,0.6)",
  rays: "rgba(224,150,86,0.42)",
  amber: "rgba(206,142,80,0.55)",
  flame: "rgba(236,150,80,0.8)",
  starSoft: "rgba(228,150,96,0.5)",
};

/* The AumicFlow asterisk mark, drawn as an 8-ray sparkle (cardinal rays long,
   diagonals short) so it reads as the brand star. */
function Star({ cx, cy, r, color, sw = 2 }: { cx: number; cy: number; r: number; color: string; sw?: number }) {
  const rays = [
    { a: 0, len: r },
    { a: 90, len: r },
    { a: 45, len: r * 0.58 },
    { a: 135, len: r * 0.58 },
  ];
  return (
    <g stroke={color} strokeWidth={sw} strokeLinecap="round">
      {rays.map((ry, i) => (
        <line key={i} transform={`rotate(${ry.a} ${cx} ${cy})`} x1={cx} y1={cy - ry.len} x2={cx} y2={cy + ry.len} />
      ))}
    </g>
  );
}

function CopyFade() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, var(--color-cream-light) 6%, rgba(255,250,235,0.5) 36%, transparent 64%)",
      }}
      aria-hidden
    />
  );
}

function petal(rInner: number, rOuter: number, w: number) {
  const mid = (rInner + rOuter) / 2;
  return `M0 ${-rInner} C ${-w} ${-mid}, ${-w * 0.3} ${-rOuter}, 0 ${-rOuter} C ${w * 0.3} ${-rOuter}, ${w} ${-mid}, 0 ${-rInner} Z`;
}

/* ───────────────────  PRODUCT — marigold mandala  ─────────────────── */
export function ProductBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: P.productTint }} />
      <motion.svg
        viewBox="-160 -160 320 320"
        className="absolute left-1/2 top-[64%] h-[120%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-40 lg:top-1/2 lg:h-[155%] lg:opacity-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      >
        <SketchDefs id="sk-product" />
        <g fill="none" stroke={P.gold} strokeWidth="1.1" strokeLinecap="round" filter="url(#sk-product)">
          {Array.from({ length: 48 }).map((_, i) => {
            const a = (Math.PI * 2 * i) / 48;
            return <circle key={`d${i}`} cx={Math.cos(a) * 150} cy={Math.sin(a) * 150} r="1.5" fill={P.goldDot} stroke="none" />;
          })}
          {Array.from({ length: 16 }).map((_, i) => (
            <path key={`o${i}`} transform={`rotate(${(360 / 16) * i})`} d={petal(86, 138, 26)} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={`m${i}`} transform={`rotate(${(360 / 12) * i + 15})`} d={petal(46, 86, 22)} stroke={P.honey} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={`i${i}`} transform={`rotate(${(360 / 8) * i})`} d={petal(14, 46, 16)} stroke={P.terracotta} />
          ))}
          <circle r="12" stroke={P.terracotta} />
          <circle r="5" fill={P.ember} stroke="none" />
        </g>
      </motion.svg>
      <CopyFade />
    </div>
  );
}

/* ──────────  SOLUTIONS — folk walking right, endlessly, on a moving earth ── */
function WalkingWarli({ x, s = 1, delay = 0 }: { x: number; s?: number; delay?: number }) {
  // a Warli figure mid-stride, facing right, with a gentle walking bob
  return (
    <g transform={`translate(${x} 0) scale(${s})`}>
      <motion.g
        animate={{ y: [0, -2.6, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <circle cx="2" cy="-38" r="4.4" />
        <path d="M-4 -30 L8 -30 L2 -20 Z" />
        <path d="M2 -20 L-4 -8 L8 -8 Z" />
        <path d="M-2 -27 L-10 -21" />
        <path d="M6 -27 L14 -31" />
        <path d="M2 -8 L-6 2" />
        <path d="M2 -8 L11 1" />
      </motion.g>
    </g>
  );
}
function WalkTile() {
  const people = [60, 180, 300, 420, 540, 660];
  const tufts = [28, 104, 232, 358, 486, 624, 694];
  return (
    <svg viewBox="0 0 720 240" className="h-full w-auto">
      <SketchDefs id="sk-sol" />
      <g fill="none" strokeLinecap="round" filter="url(#sk-sol)">
        {/* the earth: a gentle curved line (matches at both tile edges) */}
        <path d="M0 205 Q 360 190 720 205" stroke={P.earth} strokeWidth="1.8" />
        {/* grass tufts make the moving ground legible */}
        {tufts.map((tx, i) => (
          <path key={i} d={`M${tx} 204 l 0 -6`} stroke={P.sage} strokeWidth="1.4" />
        ))}
        {/* the folk, walking */}
        <g stroke={P.clay} strokeWidth="1.6" transform="translate(0 205)">
          {people.map((px, i) => (
            <WalkingWarli key={i} x={px} s={0.94 + (i % 3) * 0.08} delay={(i % 4) * 0.2} />
          ))}
        </g>
      </g>
    </svg>
  );
}
export function SolutionsBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: P.solTint }} />
      {/* the sun, fixed in the sky */}
      <svg viewBox="0 0 260 160" className="absolute right-[7%] top-[14%] h-[38%] w-auto">
        <SketchDefs id="sk-sol-sun" />
        <g fill="none" filter="url(#sk-sol-sun)">
          <circle cx="130" cy="80" r="27" stroke={P.coral} strokeWidth="1.6" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (Math.PI * 2 * i) / 12;
            return <line key={i} x1={130 + Math.cos(a) * 35} y1={80 + Math.sin(a) * 35} x2={130 + Math.cos(a) * 45} y2={80 + Math.sin(a) * 45} stroke={P.coral} strokeWidth="1.3" />;
          })}
        </g>
      </svg>
      {/* endless rightward procession */}
      <div className="absolute inset-x-0 bottom-0 h-[58%] overflow-hidden">
        <motion.div
          className="flex h-full w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        >
          <WalkTile />
          <WalkTile />
        </motion.div>
      </div>
      <CopyFade />
    </div>
  );
}

/* ───────────────────  PRICING — rupee symbols, ascending tiers  ───────── */
export function PricingBg() {
  const rupees = [
    { x: 150, y: 326, size: 44, color: P.jade },
    { x: 305, y: 302, size: 60, color: P.jade },
    { x: 460, y: 276, size: 80, color: P.rose },
    { x: 612, y: 248, size: 104, color: P.petalGold },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: P.priceTint }} />
      <svg viewBox="0 0 680 360" className="absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2">
        <SketchDefs id="sk-price" />
        {/* rising value line */}
        <path d="M40 334 Q 340 314 644 262" fill="none" stroke={P.jade} strokeWidth="1.4" filter="url(#sk-price)" />
        {rupees.map((r, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.14 }}
          >
            <text
              x={r.x}
              y={r.y}
              textAnchor="middle"
              fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
              fontWeight={600}
              fontSize={r.size}
              fill={r.color}
              filter="url(#sk-price)"
            >
              ₹
            </text>
          </motion.g>
        ))}
      </svg>
      <CopyFade />
    </div>
  );
}

/* ───────────────────  COMPANY — indigo storytelling dawn  ─────────── */
function Diya({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-11 0 Q 0 9 11 0 Z" stroke={P.amber} />
      <motion.path
        d="M0 -1 Q 4 -8 0 -14 Q -4 -8 0 -1"
        stroke={P.flame}
        animate={{ scaleY: [1, 1.18, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
    </g>
  );
}
export function CompanyBg() {
  // sun rays fanning UP from the shared horizon centre (0,20)
  const rays = Array.from({ length: 13 }).map((_, i) => {
    const ang = (((i / 12) * 2 - 1) * 82 * Math.PI) / 180;
    const dx = Math.sin(ang),
      dy = -Math.cos(ang);
    return { x1: dx * 82, y1: 20 + dy * 82, x2: dx * 178, y2: 20 + dy * 178 };
  });
  const stars: [number, number, number][] = [
    [-250, -150, 8], [232, -176, 7], [-130, -205, 6],
    [150, -150, 7], [12, -218, 9], [-36, -118, 5],
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: P.coTint }} />
      <svg viewBox="-320 -250 640 290" preserveAspectRatio="xMidYMax meet" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="co-glow">
            <stop offset="0%" stopColor="rgba(250,82,15,0.16)" />
            <stop offset="100%" stopColor="rgba(250,82,15,0)" />
          </radialGradient>
        </defs>
        <SketchDefs id="sk-co" />

        <circle cx="0" cy="20" r="170" fill="url(#co-glow)" />

        {/* rays fanning up */}
        <g fill="none" stroke={P.rays} strokeWidth="1.2" strokeLinecap="round" filter="url(#sk-co)">
          {rays.map((r, i) => (
            <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
          ))}
        </g>

        {/* twinkling stars */}
        {stars.map(([x, y, r], i) => (
          <motion.g
            key={i}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: (i % 4) * 0.5 }}
          >
            <Star cx={x} cy={y} r={r} color={P.starSoft} sw={1.4} />
          </motion.g>
        ))}

        {/* rising sun, breathing in place on the horizon */}
        <motion.circle
          cx="0" cy="20" r="62"
          fill="none" stroke={P.star} strokeWidth="2.4" filter="url(#sk-co)"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* diyas along the horizon */}
        <g fill="none" strokeWidth="1.5" strokeLinecap="round" filter="url(#sk-co)">
          <Diya x={-210} y={28} />
          <Diya x={-104} y={28} />
          <Diya x={104} y={28} />
          <Diya x={210} y={28} />
        </g>
      </svg>
    </div>
  );
}
