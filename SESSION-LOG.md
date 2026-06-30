# AumicFlow Website — Session Log / Handoff

Durable record of the build session so anyone (or a future session) can resume
with full context.

## What this is

The **marketing website** for **AumicFlow** — the Cultural Intelligence engine
and Original Narrative Engine (ONE) for Bharat. "The megaphone for the Indian
soul." Source material: the seed deck + "indian-soul" deck (distilled into
`CONTENT.md`), and the underlying POC in the parent repo (`../backend`,
`../frontend`): a multi-agent story engine (Director, Researcher, Architect,
Narrator, Screenwriter, Editor) doing rasa-aware, dialect-aware story generation
over a FAISS folklore vector graph, with voice-to-screenplay.

## Stack

- **Next.js 16** (App Router, **static export** via `output: "export"` → builds to `out/`)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Radix, `base-nova` preset) + **open-props**
- **motion** (Framer Motion) for all animation
- Design system: Mistral-inspired (installed via `getdesign add mistral.ai` →
  `DESIGN.md`): cream surfaces, sunset-orange primary `#fa520f`, editorial serif
  (Instrument Serif) + Inter, 8px buttons / 12px cards, signature sunset stripe.

## Pages

`/` home · `/product` · `/solutions` · `/pricing` · `/company` · `/contact`

## Key components (`src/components/`)

- **AnimatedLogo.tsx** — the AUMIC FLOW wordmark as crisp vector, animated: the
  "O" spins (with an orange satellite), the "I" bar bobs, the underline slides,
  the asterisk rotates. `tone="dark"|"light"`. Built from the real `af.svg` paths.
- **Logo.tsx** — static logo (`/aumicflow-logo.svg`, a cropped `af.svg`).
- **Navbar.tsx** — floating glass island, scroll-aware shrink, **nxt-schools-style
  hover** (grow-underline links + the "expanding-disc" Get Started CTA), trailing-
  slash-normalized active state (fixes React #418), mobile hamburger → full-screen
  glass overlay with a visible **X close button**.
- **Footer.tsx** + **FooterNewsletter.tsx** — premium footer: big animated logo,
  email capture, socials, link columns, giant faded watermark, sunset stripe.
- **Preloader.tsx** — cinematic intro: short multilingual "story" word reel →
  animated logo (holds ~1s) → curtain reveal. Once per session (`sessionStorage`),
  respects reduced motion. Light/cream theme.
- **ProblemSection.tsx** — the "500 million people" bento (animated voice
  waveform, count-up, "Every 3 minutes a story dies" accent, icon cards).
- **glass.tsx** — `LiquidBlobs`, `GlassCard` (double-bezel), `GlassButton`.
- **motion.tsx** — `FadeUp`, `Stagger`, `Item`, `SplitWords`, `CountUp`,
  `Marquee`, `OrbitRings`, `Breathe`, etc.
- **backgrounds.tsx** — per-page Indic folk-art backgrounds (see below).

## Per-page backgrounds (`backgrounds.tsx`)

Hand-drawn "sketch" filter (fractal-noise displacement) + distinct soft palette:

| Page | Motif | Palette | Motion |
|---|---|---|---|
| Product | kolam **mandala** | marigold gold | slow rotation (faded + lowered below `lg` for mobile readability) |
| Solutions | **Warli folk walking** right across a **STILL land** line | rose/clay | figures marquee moves; ground is static |
| Pricing | ascending **₹ rupee** symbols | jade green | rise-in |
| Company | rising **sun + rays + diyas** + twinkling brand-stars | rose-gold dawn | sun breathes, flames flicker (centered, one shared origin) |

Note: Company went through several iterations (asterisk star, rotating
ring+satellite) and was reverted to the clean sunrise per final feedback.

## Repos & deploy

- **GitHub (dual push):** `git push origin main` pushes to BOTH:
  - `https://github.com/gowtham-creator/aumicflow-website` (private)
  - `https://github.com/cubixso-organisation/aumicflow-website` (private)
  - (configured via two `remote set-url --add --push` URLs on `origin`)
- **Commit identity:** name `Nayini gowtham reddy`, email
  `gowtham5.gr15@gmail.com` (NOT vedinc — the first two commits predate the fix).
- **Vercel:** project `aumicflow-website` (scope `gowthamreddys-projects`).
  Deploy with `npx vercel --prod --yes`. Live: **https://aumicflow-website.vercel.app**
- **Auth:** `gh` (as `gowtham-creator`) and `vercel` CLIs are logged in locally.
  PATH note: `export PATH="/opt/homebrew/bin:$PATH"` for `gh`.
- **shadcn MCP:** registered in `.mcp.json` (needs a Claude Code restart to use).

## Run / build

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # static export → ./out
npx serve out -l 4321  # preview the production export
```

## Verified state (end of session)

- Builds clean, all 6 routes statically prerendered, **0 console/hydration errors**.
- Mobile (390px) and tablet (768px) audited: **0 horizontal overflow** on every
  page; grids adapt; backgrounds don't collide with text.
- `screenshots/` (gitignored) holds the visual verification captures.

## Open items / possible next steps

- **Performance:** many `backdrop-blur` glass cards look premium but are GPU-heavy
  on older phones; could selectively drop blur on the heaviest scrolling cards.
- **Phone Solutions hero:** walkers sit just under the last subtext line at 390px
  (faint, still readable) — could nudge the band down a touch on small screens.
- **Auto-deploy:** currently CLI deploys. Could connect the GitHub repo to Vercel
  for push-to-deploy.
- **History:** the two earliest commits carry the old `vedincpurches@gmail.com`
  email; a force-push could re-author them but would rewrite shared history.
- **Em dashes:** removed from prominent hero/intro copy; a few remain in card body
  text if a full purge is wanted.
- **Custom domain:** none yet (`vercel domains` when ready).

---

_Contact: smarendra@gmail.com · +91 9000401070_
