"use client";

import { useState } from "react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("AumicFlow — early access");
    const body = encodeURIComponent(
      `Please add me to the AumicFlow beta.\n\nEmail: ${email}`,
    );
    window.location.href = `mailto:smarendra@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="mt-6">
      <p className="text-sm font-medium text-ink">Get early access</p>
      <div className="mt-3 flex items-center rounded-full border border-beige-deep bg-white/70 p-1 backdrop-blur-md transition-colors focus-within:border-primary">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full bg-transparent px-4 text-sm text-ink outline-none placeholder:text-stone"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="group flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-on-dark transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 active:scale-95"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path
              d="M2 7h9M8 4l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p className="mt-2 h-4 text-xs text-steel">
        {sent ? "Thanks — your mail client should be opening." : " "}
      </p>
    </form>
  );
}
