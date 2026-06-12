"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import AnimatedLogo from "@/components/AnimatedLogo";

const links = [
  { href: "/product", label: "Product" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/company", label: "Company" },
];

const EASE = [0.32, 0.72, 0, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 220, damping: 30 };

/** A nav link that nudges toward the cursor (magnetic) on hover. The label
 *  flips to white whenever the dark indicator pill is sitting under it. */
function MagneticLink({
  href,
  label,
  indicated,
  active,
}: {
  href: string;
  label: string;
  indicated: boolean;
  active: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [d, setD] = useState({ x: 0, y: 0 });

  return (
    <motion.span
      className="relative block"
      animate={{ x: d.x, y: d.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.4 }}
    >
      <Link
        ref={ref}
        href={href}
        aria-current={active ? "page" : undefined}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          setD({
            x: (e.clientX - (r.left + r.width / 2)) * 0.25,
            y: (e.clientY - (r.top + r.height / 2)) * 0.3,
          });
        }}
        onMouseLeave={() => setD({ x: 0, y: 0 })}
        className={cn(
          "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
          indicated ? "text-on-dark" : "text-slate hover:text-ink",
        )}
      >
        <span className="relative z-10">{label}</span>
      </Link>
    </motion.span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Normalize trailing slash so build-time and statically-served pathnames
  // agree (otherwise the active state mismatches on hydration, React #418).
  const pathname = (usePathname() || "/").replace(/(.+)\/$/, "$1");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Rest the sliding indicator on the active item only AFTER mount, so the
  // server and first client render agree (no indicator on SSR).
  useEffect(() => setMounted(true), []);
  const indicator = hovered ?? (mounted ? pathname : null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          maxWidth: scrolled ? 880 : 1080,
        }}
        transition={{ duration: 0.6, ease: EASE }}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "mt-4 flex w-full items-center justify-between rounded-full py-2 pl-5 pr-2 transition-[background-color,box-shadow,backdrop-filter] duration-500",
          scrolled
            ? "border border-white/70 bg-[rgba(255,250,235,0.86)] shadow-[0_10px_40px_-12px_rgba(120,60,10,0.3)] [backdrop-filter:blur(24px)_saturate(180%)]"
            : "glass",
        )}
      >
        <Link href="/" className="flex items-center" aria-label="AumicFlow home">
          <AnimatedLogo className="h-10 md:h-11" />
        </Link>

        <ul className="relative hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isIndicated = indicator === l.href;
            return (
              <li
                key={l.href}
                className="relative"
                onMouseEnter={() => setHovered(l.href)}
              >
                {isIndicated && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-ink shadow-[0_6px_18px_-6px_rgba(31,31,31,0.55)]"
                    transition={SPRING}
                  />
                )}
                <MagneticLink
                  href={l.href}
                  label={l.label}
                  indicated={isIndicated}
                  active={pathname === l.href}
                />
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-2 text-sm font-medium text-on-dark transition-transform duration-300 [transition-timing-function:var(--ease-spring-3)] hover:scale-[1.03] active:scale-[0.97]"
          >
            Try AumicFlow
            <span className="flex size-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
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
        </div>

        {/* Mobile hamburger → X morph */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex size-10 items-center justify-center rounded-full lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            className="absolute h-0.5 w-5 rounded-full bg-ink"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
          <motion.span
            className="absolute h-0.5 w-5 rounded-full bg-ink"
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </button>
      </motion.nav>

      {/* Full-screen glass overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="glass-cream fixed inset-0 z-40 flex flex-col justify-center px-8 lg:hidden"
            style={{ backdropFilter: "blur(28px)" }}
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.5,
                    ease: EASE,
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl text-ink"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + links.length * 0.06,
                  duration: 0.5,
                  ease: EASE,
                }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-on-dark"
                >
                  Try AumicFlow →
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
