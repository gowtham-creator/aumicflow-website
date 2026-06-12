"use client";

import { useState } from "react";
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

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Normalize trailing slash so build-time and statically-served pathnames
  // agree (otherwise the active state mismatches on hydration, React #418).
  const pathname = (usePathname() || "/").replace(/(.+)\/$/, "$1");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1, maxWidth: scrolled ? 920 : 1080 }}
        transition={{ duration: 0.6, ease: EASE }}
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

        <ul className="hidden items-center gap-2 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                data-active={pathname === l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className="nav-link block rounded-full px-4 py-2 text-sm"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center lg:flex">
          <Link href="/contact" className="btn-get-started" aria-label="Try AumicFlow">
            <span className="gsb-label">Try AumicFlow</span>
            <i className="gsb-chev" aria-hidden>
              <ArrowIcon />
            </i>
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

      {/* Full-screen glass overlay menu (above the bar, with its own close) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="glass-cream fixed inset-0 z-[60] flex flex-col lg:hidden"
            style={{ backdropFilter: "blur(28px)" }}
          >
            {/* top bar: logo + clear close (X) button */}
            <div className="flex items-center justify-between px-6 pt-6">
              <AnimatedLogo className="h-9" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex size-11 items-center justify-center rounded-full border border-beige-deep bg-white/70 text-ink shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] transition-colors hover:bg-white active:scale-95"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {/* links, vertically centered */}
            <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
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
                    className={cn(
                      "font-display text-5xl",
                      pathname === l.href ? "text-primary" : "text-ink",
                    )}
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
                className="pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-get-started"
                >
                  <span className="gsb-label">Try AumicFlow</span>
                  <i className="gsb-chev" aria-hidden>
                    <ArrowIcon />
                  </i>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
