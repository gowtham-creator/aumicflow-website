"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import AnimatedLogo from "@/components/AnimatedLogo";
import { LiquidBlobs } from "@/components/glass";

const LIFT = [0.76, 0, 0.24, 1] as const;
const SOFT = [0.22, 1, 0.36, 1] as const;

// A few words for "story" across India, at a readable pace, resolving into
// the brand. Kept short on purpose.
const WORDS = [
  "कहानी", // Hindi
  "కథ", // Telugu
  "கதை", // Tamil
  "Story",
];

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Phase = "reel" | "logo";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<Phase>("reel");
  const [word, setWord] = useState(0);
  const reduced = useRef(false);

  // Repeat visits within a session skip the intro, hidden before paint.
  useIso(() => {
    if (sessionStorage.getItem("aumic-intro-seen")) setShow(false);
    reduced.current =
      typeof window !== "undefined" &&
      !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const timers: ReturnType<typeof setTimeout>[] = [];

    const seen = () => sessionStorage.setItem("aumic-intro-seen", "1");

    if (reduced.current) {
      setPhase("logo");
      timers.push(setTimeout(() => { seen(); setShow(false); }, 2500));
    } else {
      timers.push(setTimeout(() => setPhase("logo"), 1850));
      // logo holds ~1s longer before the curtain lift
      timers.push(setTimeout(() => { seen(); setShow(false); }, 4300));
    }
    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [show]);

  // Word reel ticker, readable pace.
  useEffect(() => {
    if (phase !== "reel" || reduced.current) return;
    const id = setInterval(
      () => setWord((w) => Math.min(w + 1, WORDS.length - 1)),
      450,
    );
    return () => clearInterval(id);
  }, [phase]);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-cream-light"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: LIFT }}
        >
          <LiquidBlobs variant="warm" />
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />

          {/* word reel → logo */}
          <div className="relative flex h-[132px] items-center justify-center">
            {phase === "reel" ? (
              <motion.span
                key={word}
                className="font-display text-6xl text-ink md:text-8xl"
                initial={{ opacity: 0, y: 18, filter: "blur(7px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4, ease: SOFT }}
              >
                {WORDS[word]}
              </motion.span>
            ) : (
              <div className="relative flex items-center justify-center">
                {/* soft warm bloom */}
                <motion.span
                  className="absolute rounded-full"
                  style={{
                    width: 240,
                    height: 240,
                    background:
                      "radial-gradient(circle, rgba(250,82,15,0.22), transparent 62%)",
                  }}
                  initial={{ scale: 0.3, opacity: 0.8 }}
                  animate={{ scale: 2.3, opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.84, filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, ease: SOFT }}
                >
                  <AnimatedLogo tone="dark" className="h-20 md:h-28" />
                </motion.div>
              </div>
            )}
          </div>

          {/* tagline */}
          <AnimatePresence>
            {phase === "logo" && (
              <motion.p
                className="relative mt-7 font-display text-lg italic text-ink-tint md:text-xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: SOFT }}
              >
                Preserving culture. Powering the future.
              </motion.p>
            )}
          </AnimatePresence>

          {/* progress sliver */}
          <div className="relative mt-9 h-[3px] w-48 overflow-hidden rounded-full bg-ink/10">
            <motion.span
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg,#fa520f,#ffa110,#ffd900)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.9, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
