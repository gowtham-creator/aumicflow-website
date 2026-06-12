"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const EASE = [0.32, 0.72, 0, 1] as const;

/**
 * Animated liquid-gradient blobs. Render inside a `relative overflow-hidden`
 * parent — they sit behind glass surfaces to give the blur something to refract.
 */
export function LiquidBlobs({
  className,
  variant = "warm",
}: {
  className?: string;
  variant?: "warm" | "dawn" | "dark";
}) {
  const palettes = {
    warm: [
      "radial-gradient(circle, #fa520f 0%, transparent 70%)",
      "radial-gradient(circle, #ffb83e 0%, transparent 70%)",
      "radial-gradient(circle, #ffd06a 0%, transparent 70%)",
    ],
    dawn: [
      "radial-gradient(circle, #ff8105 0%, transparent 70%)",
      "radial-gradient(circle, #ffd900 0%, transparent 70%)",
      "radial-gradient(circle, #fff0c2 0%, transparent 70%)",
    ],
    dark: [
      "radial-gradient(circle, #fa520f 0%, transparent 70%)",
      "radial-gradient(circle, #ffa110 0%, transparent 70%)",
      "radial-gradient(circle, #6a3a18 0%, transparent 70%)",
    ],
  } as const;
  const p = palettes[variant];
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <span
        className="blob"
        style={{
          width: "42vw",
          height: "42vw",
          top: "-12%",
          left: "-6%",
          background: p[0],
          opacity: variant === "dark" ? 0.5 : 0.55,
          animationDelay: "0s",
        }}
      />
      <span
        className="blob"
        style={{
          width: "38vw",
          height: "38vw",
          top: "20%",
          right: "-8%",
          background: p[1],
          opacity: variant === "dark" ? 0.45 : 0.5,
          animationDelay: "-6s",
        }}
      />
      <span
        className="blob"
        style={{
          width: "34vw",
          height: "34vw",
          bottom: "-14%",
          left: "30%",
          background: p[2],
          opacity: variant === "dark" ? 0.4 : 0.55,
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

/**
 * Double-bezel glass card — a frosted "glass plate in an aluminium tray".
 * `tone` switches the inner glass surface; `inStagger` opts into a parent
 * Stagger's variants instead of its own whileInView.
 */
export function GlassCard({
  children,
  className,
  tone = "light",
  inStagger = false,
  lift = true,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "cream" | "dark";
  inStagger?: boolean;
  lift?: boolean;
}) {
  const inner =
    tone === "dark" ? "glass-dark" : tone === "cream" ? "glass-cream" : "glass";
  const motionProps = inStagger
    ? { variants: cardVariants }
    : {
        variants: cardVariants,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-60px" },
      };

  return (
    <motion.div
      {...motionProps}
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className={cn("bezel-shell rounded-[1.7rem] p-1.5", className)}
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-[calc(1.7rem-0.375rem)]",
          inner,
        )}
      >
        {/* specular sheen on the top edge */}
        <span
          className="liquid-sheen pointer-events-none absolute inset-x-0 -top-1/2 h-full"
          aria-hidden
        />
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  );
}

/**
 * Magnetic glass CTA with the "button-in-button" trailing icon. Renders an
 * anchor/Link; on hover the nested icon disc translates diagonally and a sheen
 * sweeps across.
 */
export function GlassButton({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-3 overflow-hidden rounded-full pl-6 pr-2 py-2 text-sm font-medium",
        "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]",
        variant === "solid"
          ? "bg-ink text-on-dark"
          : "glass-cream text-ink",
        className,
      )}
    >
      <span
        className="absolute inset-0 -translate-x-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <span className="absolute inset-y-0 left-0 w-1/3 bg-white/25 [animation:sheen-sweep_0.9s_ease]" />
      </span>
      <span className="relative">{children}</span>
      <span
        className={cn(
          "relative flex size-8 items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          variant === "solid" ? "bg-white/15" : "bg-ink/10",
        )}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          <path
            d="M3 11L11 3M11 3H5M11 3V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
