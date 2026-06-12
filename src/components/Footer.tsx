import Link from "next/link";
import AnimatedLogo from "@/components/AnimatedLogo";
import FooterNewsletter from "@/components/FooterNewsletter";

const columns = [
  {
    title: "Why AumicFlow",
    links: [
      { href: "/company", label: "Our story" },
      { href: "/product", label: "The engine" },
      { href: "/company", label: "Vision" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/pricing", label: "Pricing" },
      { href: "/company", label: "Founders" },
    ],
  },
  {
    title: "Build",
    links: [
      { href: "/product", label: "Voice-to-Screenplay" },
      { href: "/product", label: "Story Ancestry Graph" },
      { href: "/contact", label: "Enterprise API" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/contact", label: "Privacy (DPDP)" },
      { href: "/contact", label: "Terms" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

/* simple line social glyphs */
const socialIcons: { label: string; href: string; node: React.ReactNode }[] = [
  {
    label: "X / Twitter",
    href: "https://x.com",
    node: <path d="M3 3l7.5 7.5M11 3l-8 8M4 3h1.6l7 8H11z" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    node: (
      <>
        <rect x="2.5" y="2.5" width="11" height="11" rx="2" />
        <path d="M5 6.5V11M5 4.6v.01M8 11V8.4c0-1 1.6-1.3 2.2-.3M10.4 11V8.6" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    node: (
      <>
        <rect x="2.5" y="2.5" width="11" height="11" rx="3.2" />
        <circle cx="8" cy="8" r="2.6" />
        <path d="M11.4 4.6v.01" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    node: (
      <>
        <rect x="2" y="4" width="12" height="8" rx="2.4" />
        <path d="M7 6.4l3 1.6-3 1.6z" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <div className="sunset-stripe h-14 w-full" aria-hidden />
      <footer className="relative overflow-hidden bg-cream text-ink">
        {/* giant faded wordmark watermark */}
        <p
          className="pointer-events-none absolute inset-x-0 -bottom-6 select-none text-center font-display leading-none tracking-[-2px] text-ink/[0.045] lg:-bottom-10"
          style={{ fontSize: "20vw" }}
          aria-hidden
        >
          AumicFlow
        </p>

        <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
            {/* Brand + newsletter */}
            <div className="md:col-span-2 lg:col-span-1">
              <AnimatedLogo className="h-10" />
              <p className="mt-4 max-w-[30ch] font-display text-xl italic text-ink-tint">
                The megaphone for the Indian soul.
              </p>
              <p className="mt-2 text-sm text-slate">
                Preserving culture. Powering the future.
              </p>
              <FooterNewsletter />

              <div className="mt-6 flex items-center gap-2">
                {socialIcons.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-9 items-center justify-center rounded-full border border-beige-deep bg-white/60 text-steel transition-colors duration-300 hover:border-ink hover:text-ink"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {s.node}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow mb-4 text-steel">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-sm text-slate transition-colors duration-200 hover:text-primary"
                      >
                        <span className="inline-block size-1 rounded-full bg-primary/0 transition-colors duration-200 group-hover:bg-primary" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative mt-16 flex flex-col gap-4 border-t border-beige-deep pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-medium text-steel">
              © {new Date().getFullYear()} AumicFlow. The megaphone for the
              Indian soul.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-steel">
              <a
                href="mailto:smarendra@gmail.com"
                className="transition-colors hover:text-ink"
              >
                smarendra@gmail.com
              </a>
              <span className="hidden text-beige-deep md:inline">·</span>
              <span>+91 9000401070</span>
              <span className="hidden text-beige-deep md:inline">·</span>
              <span className="inline-flex items-center gap-1.5">
                Crafted in Bharat
                <span className="text-primary">✳</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
