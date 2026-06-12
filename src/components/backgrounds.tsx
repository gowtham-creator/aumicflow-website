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
  // Company — indigo dawn (cool sky, warm sun)
  coTint: "linear-gradient(0deg, rgba(116,106,176,0.34) 0%, rgba(150,138,192,0.12) 42%, transparent 76%)",
  dawnSun: "rgba(232,140,92,0.6)",
  violet: "rgba(132,124,184,0.52)",
  amber: "rgba(206,142,80,0.55)",
  flame: "rgba(236,150,80,0.78)",
  indigo: "rgba(108,118,164,0.45)",
};

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
        className="absolute right-[-6%] top-1/2 h-[150%] w-auto -translate-y-1/2"
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
      <svg viewBox="0 0 600 360" className="absolute right-0 top-0 h-full w-auto">
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
      <svg viewBox="0 0 640 360" className="absolute bottom-0 right-0 h-[88%] w-auto">
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
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: P.coTint }} />
      <div
        className="absolute inset-x-0 bottom-0 h-[60%]"
        style={{ background: "radial-gradient(60% 100% at 50% 120%, rgba(255,170,90,0.22), transparent 70%)" }}
      />
      <svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMax meet" className="absolute inset-0 h-full w-full">
        <SketchDefs id="sk-co" />
        <motion.g
          style={{ transformOrigin: "600px 520px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 210, repeat: Infinity, ease: "linear" }}
        >
          <g fill="none" stroke={P.violet} strokeWidth="1" filter="url(#sk-co)" opacity="0.6">
            {Array.from({ length: 24 }).map((_, i) => (
              <line key={i} x1="600" y1="520" x2="600" y2="120" transform={`rotate(${(180 / 23) * i - 90} 600 520)`} />
            ))}
          </g>
        </motion.g>
        <motion.circle
          cx="600" cy="520" r="120"
          fill="none" stroke={P.dawnSun} strokeWidth="2" filter="url(#sk-co)"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <g fill="none" strokeWidth="1.5" strokeLinecap="round" filter="url(#sk-co)">
          <Diya x={300} y={470} />
          <Diya x={430} y={486} />
          <Diya x={770} y={486} />
          <Diya x={900} y={470} />
          <path d="M200 150 q 12 -8 24 0 q 12 -8 24 0" stroke={P.indigo} />
          <path d="M980 120 q 10 -7 20 0 q 10 -7 20 0" stroke={P.indigo} />
        </g>
      </svg>
    </div>
  );
}
