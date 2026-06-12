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
        className="absolute left-1/2 top-1/2 h-[155%] w-auto -translate-x-1/2 -translate-y-1/2"
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

/* ───────────────────  SOLUTIONS — rose-clay Warli folk  ───────────── */
function Warli({ x, y, s = 1, delay = 0 }: { x: number; y: number; s?: number; delay?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <circle cx="0" cy="0" r="4.5" />
        <path d="M-6 8 L6 8 L0 18 Z" />
        <path d="M0 18 L-6 30 L6 30 Z" />
        <path d="M-5 10 L-13 3" />
        <path d="M5 10 L13 3" />
        <path d="M0 30 L-6 40" />
        <path d="M0 30 L6 40" />
      </motion.g>
    </g>
  );
}
export function SolutionsBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: P.solTint }} />
      <svg viewBox="0 0 600 360" className="absolute left-1/2 top-1/2 h-[112%] w-auto -translate-x-1/2 -translate-y-1/2">
        <SketchDefs id="sk-sol" />
        <g fill="none" stroke={P.clay} strokeWidth="1.5" strokeLinecap="round" filter="url(#sk-sol)">
          <circle cx="470" cy="84" r="26" stroke={P.coral} />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (Math.PI * 2 * i) / 12;
            return <line key={i} x1={470 + Math.cos(a) * 34} y1={84 + Math.sin(a) * 34} x2={470 + Math.cos(a) * 44} y2={84 + Math.sin(a) * 44} stroke={P.coral} />;
          })}
          <path d="M120 320 Q 360 304 560 320" stroke={P.earth} />
          <path d="M150 320 L150 250" stroke={P.sage} />
          <circle cx="150" cy="232" r="24" stroke={P.sage} />
          <Warli x={250} y={278} delay={0} />
          <Warli x={310} y={272} s={1.1} delay={0.6} />
          <Warli x={372} y={278} delay={1.2} />
          <Warli x={434} y={274} s={0.95} delay={0.3} />
          <Warli x={500} y={280} delay={0.9} />
        </g>
      </svg>
      <CopyFade />
    </div>
  );
}

/* ───────────────────  PRICING — jade-pond lotuses  ────────────────── */
function Lotus({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={color}>
      {[-60, -36, -12, 12, 36, 60].map((a, i) => (
        <path key={i} transform={`rotate(${a})`} d={petal(2, 40, 15)} />
      ))}
      <path d="M-26 2 Q 0 14 26 2" />
    </g>
  );
}
export function PricingBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: P.priceTint }} />
      <svg viewBox="0 0 640 360" className="absolute bottom-0 left-1/2 h-[90%] w-auto -translate-x-1/2">
        <SketchDefs id="sk-price" />
        <g fill="none" strokeWidth="1.3" strokeLinecap="round" filter="url(#sk-price)">
          {/* lily pads */}
          <path d="M70 320 a 34 34 0 1 0 0.1 0 M70 320 l 16 -12" stroke={P.jade} />
          <path d="M360 332 a 28 28 0 1 0 0.1 0 M360 332 l -14 -10" stroke={P.jade} />
          {[
            { x: 150, y: 320, s: 0.7, color: P.rose },
            { x: 290, y: 300, s: 0.95, color: P.rose },
            { x: 440, y: 280, s: 1.2, color: P.rose },
            { x: 590, y: 256, s: 1.5, color: P.petalGold },
          ].map((l, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.14 }}
            >
              <Lotus x={l.x} y={l.y} s={l.s} color={l.color} />
            </motion.g>
          ))}
          <path d="M40 330 Q 320 312 620 270" stroke={P.jade} />
        </g>
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
  const stars: [number, number, number][] = [
    [-250, -150, 8], [232, -176, 7], [-130, -205, 6],
    [150, -150, 7], [12, -218, 9], [-36, -118, 5],
  ];
  // the AumicFlow asterisk: 8 bold rays, cardinals long, diagonals shorter
  const mark = [
    { a: 0, l: 96 },
    { a: 90, l: 96 },
    { a: 45, l: 66 },
    { a: 135, l: 66 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: P.coTint }} />
      <svg viewBox="-320 -250 640 290" preserveAspectRatio="xMidYMax meet" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="co-glow">
            <stop offset="0%" stopColor="rgba(250,82,15,0.18)" />
            <stop offset="100%" stopColor="rgba(250,82,15,0)" />
          </radialGradient>
        </defs>
        <SketchDefs id="sk-co" />

        {/* soft dawn glow behind the mark */}
        <circle cx="0" cy="20" r="170" fill="url(#co-glow)" />

        {/* twinkling brand stars in the sky */}
        {stars.map(([x, y, r], i) => (
          <motion.g
            key={i}
            animate={{ opacity: [0.2, 0.85, 0.2] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: (i % 4) * 0.5 }}
          >
            <Star cx={x} cy={y} r={r} color={P.starSoft} sw={1.4} />
          </motion.g>
        ))}

        {/* THE rising AumicFlow asterisk — the brand mark, rotating like the logo */}
        <motion.g
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <g
            filter="url(#sk-co)"
            stroke={P.star}
            strokeWidth="9"
            strokeLinecap="round"
          >
            {mark.map((ry, i) => (
              <line key={i} transform={`rotate(${ry.a} 0 20)`} x1="0" y1={20 - ry.l} x2="0" y2={20 + ry.l} />
            ))}
          </g>
        </motion.g>

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
