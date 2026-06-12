"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/motion";

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

  return (
    <section className="bg-canvas dot-grid">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[560px] mx-auto">
          <FadeUp className="text-center">
            <Badge className="rounded-md h-auto px-2.5 py-1 text-[12px] font-semibold mb-6">
              Get in touch
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.1] tracking-[-1px] text-ink">
              Get in touch with the <em className="text-primary">team.</em>
            </h1>
            <p className="mt-5 text-lg text-ink-tint">
              Beta access, OTT pilots, institutional licensing, or just a story
              you need the world to hear.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="mt-10 bg-cream border border-beige-deep rounded-lg p-8 space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="w-full h-11 bg-canvas text-ink text-base rounded-md border border-hairline-strong px-4 outline-none transition-colors focus:border-primary focus:border-2"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className="w-full h-11 bg-canvas text-ink text-base rounded-md border border-hairline-strong px-4 outline-none transition-colors focus:border-primary focus:border-2"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Organization <span className="text-steel">(optional)</span>
                </label>
                <input
                  id="organization"
                  type="text"
                  value={form.organization}
                  onChange={update("organization")}
                  className="w-full h-11 bg-canvas text-ink text-base rounded-md border border-hairline-strong px-4 outline-none transition-colors focus:border-primary focus:border-2"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="w-full bg-canvas text-ink text-base rounded-md border border-hairline-strong p-4 outline-none transition-colors focus:border-primary focus:border-2"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink text-on-dark text-sm font-medium rounded-md px-5 py-3 transition-colors hover:bg-charcoal"
              >
                Send message
              </button>
            </form>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="mt-8 text-sm text-steel text-center">
              Prefer email or phone? Reach Smarendra directly at{" "}
              <a
                href="mailto:smarendra@gmail.com"
                className="text-primary hover:text-primary-deep"
              >
                smarendra@gmail.com
              </a>{" "}
              · +91 9000401070
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
