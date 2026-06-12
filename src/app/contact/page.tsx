"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { LiquidBlobs } from "@/components/glass";
import { FadeUp } from "@/components/motion";

const reasons = [
  "Beta access for creators",
  "OTT & production-house pilots",
  "Institutional / white-label licensing",
  "Press & partnerships",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `AumicFlow inquiry — ${form.name}${form.organization ? ` (${form.organization})` : ""}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:smarendra@gmail.com?subject=${subject}&body=${body}`;
  }

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const field =
    "w-full h-11 bg-white/70 text-ink text-base rounded-xl border border-white/70 px-4 outline-none backdrop-blur-sm transition-colors placeholder:text-stone focus:border-primary";

  return (
    <section className="relative overflow-hidden bg-cream-light pt-32 pb-20 lg:pt-40 lg:pb-28">
      <LiquidBlobs variant="warm" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left — intro + contact methods */}
        <FadeUp>
          <Badge className="mb-6 h-auto rounded-full px-2.5 py-1 text-[12px] font-semibold">
            Get in touch
          </Badge>
          <h1 className="font-display text-5xl leading-[1.08] tracking-[-1px] text-ink md:text-6xl">
            Get in touch with the <em className="text-primary">team.</em>
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-ink-tint">
            Beta access, OTT pilots, institutional licensing, or just a story
            you need the world to hear.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:smarendra@gmail.com"
              className="glass-cream group flex items-center gap-3 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/70 text-primary ring-1 ring-white/60">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-[0.14em] text-steel">
                  Email
                </span>
                <span className="block truncate text-sm font-medium text-ink">
                  smarendra@gmail.com
                </span>
              </span>
            </a>

            <a
              href="tel:+919000401070"
              className="glass-cream group flex items-center gap-3 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-white/70 text-primary ring-1 ring-white/60">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v2a2 2 0 0 1-2 2A16 16 0 0 1 3 7a2 2 0 0 1 2-3z" />
                </svg>
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.14em] text-steel">
                  Phone
                </span>
                <span className="block text-sm font-medium text-ink">
                  +91 9000401070
                </span>
              </span>
            </a>
          </div>

          <div className="mt-8">
            <p className="eyebrow mb-3 text-steel">What to reach out about</p>
            <ul className="space-y-2.5">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-2.5 text-sm text-slate">
                  <span className="text-primary">✳</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        {/* Right — glass form (double-bezel) */}
        <FadeUp delay={0.15}>
          <div className="bezel-shell rounded-[1.8rem] p-1.5">
            <form
              onSubmit={handleSubmit}
              className="glass-cream relative overflow-hidden rounded-[calc(1.8rem-0.375rem)] p-7 sm:p-8"
            >
              <span
                className="liquid-sheen pointer-events-none absolute inset-x-0 -top-1/2 h-full"
                aria-hidden
              />
              <div className="relative space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                      Name
                    </label>
                    <input id="name" type="text" required value={form.name} onChange={update("name")} className={field} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input id="email" type="email" required value={form.email} onChange={update("email")} className={field} placeholder="you@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-ink">
                    Organization <span className="text-steel">(optional)</span>
                  </label>
                  <input id="organization" type="text" value={form.organization} onChange={update("organization")} className={field} placeholder="Studio, OTT, school…" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full rounded-xl border border-white/70 bg-white/70 p-4 text-base text-ink outline-none backdrop-blur-sm transition-colors placeholder:text-stone focus:border-primary"
                    placeholder="Tell us about your story, project, or pilot…"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-sm font-medium text-on-dark transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.01] active:scale-[0.98]"
                >
                  Send message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="text-center text-xs text-steel">
                  Opens your mail app · we usually reply within 1–2 days.
                </p>
              </div>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
