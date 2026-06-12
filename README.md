# AumicFlow — Website

Marketing site for **AumicFlow**, the Cultural Intelligence engine and Original
Narrative Engine (ONE) for Bharat. "The megaphone for the Indian soul."

Built with the Mistral-inspired editorial design system (cream + sunset orange,
editorial serif + Inter), layered with liquid-glass UI, Framer Motion, an
animated brand logo, and a cinematic intro.

## Stack

- **Next.js 16** (App Router, static export via `output: "export"`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Radix) + **open-props**
- **motion** (Framer Motion) for all animation
- Static-first: builds to `out/`, deployable anywhere

## Pages

`/` home · `/product` · `/solutions` · `/pricing` · `/company` · `/contact`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs to ./out
```

## Highlights

- Animated brand logo (spinning "O", bobbing "I" bar, sliding underline) as a
  crisp vector, reused in the navbar, footer, and intro splash.
- Cinematic intro: a short multilingual "story" reel resolving into the logo,
  then a curtain reveal (once per session, respects reduced motion).
- Scroll-aware glass navbar with a sliding active indicator.
- Liquid-glass cards, animated stat counters, and a voice-waveform problem
  section.

Contact: smarendra@gmail.com
