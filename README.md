# Vikas Shrivastava — Portfolio

Full-stack portfolio in the spirit of the reference design: **warm-gray canvas, oversized Archivo type, cream-on-gray with deep-navy ink, blue accent, glassy social cards** — rebuilt as a production Next.js app.

## Stack

- **Next.js 15** (App Router, static prerender) + **React 19** + **TypeScript**
- Plain CSS design system (`src/app/globals.css`) — no Tailwind, zero runtime CSS deps
- `next/image` portrait (your real photo, transparent cutout — `public/portrait.webp`)
- No backend required. The contact form opens the visitor's mail client; the login modal is a client-side demo.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static prerender)
npm start        # serve production build
```

> Note: the `uipro` CLI was installed to `~/.npm-global` (global npm dir was read-only).
> If you want it on your PATH: `export PATH="$HOME/.npm-global/bin:$PATH"`.

## Features

| Area | What's inside |
| --- | --- |
| **Hero** | "Available for new work" pill with ping animation, two-line display name (solid + outline), Résumé (`/resume`, print-ready) and About Me CTAs, GitHub / LinkedIn / WhatsApp glass cards |
| **⌘K palette** | `Cmd/Ctrl+K` (or `/`) — fuzzy-jump to sections, open résumé, toggle theme, copy email, open socials. Arrow-key navigation, `Esc` to close |
| **Dark / Light** | Warm-gray default theme (reference) ↔ deep charcoal-navy, persisted in `localStorage`, FOUC-free bootstrap script |
| **Sections** | About (animated counters + fact list) → Education (cards) → Experience (timeline) → Skills (chips + animated meters) → Projects (CSS-mock browser visuals) → Contact (validated form) |
| **Résumé route** | `/resume` — print-optimized A4 sheet, "Download PDF" via `window.print()` |
| **Extras** | Scroll-spy nav, mobile hamburger menu, live Bengaluru IST clock, back-to-top FAB, toast system, skip link, reduced-motion support, ⌘K hints everywhere |

## Design tokens (see `globals.css`)

- **Canvas** — radial warm gray `#8a8a92 → #63636b` (dark: `#151a26 → #090d15`) with left-side scrim for AA contrast
- **Type** — Archivo (display/body, tight `-0.045em` tracking) · Space Grotesk (labels/kickers) · JetBrains Mono (data)
- **Ink** — `#f7f5ee` cream · dim `rgba(247,245,238,.72)` (dark: `#eceade`)
- **Navy** — `#16233a` (buttons on cream / résumé headings) · **Accent** — `#3b82f6` (dark: `#60a5fa`)
- **Shape** — radius 10/14/20/999px · hairline `rgba(255,255,255,.16)` borders · `blur(8px)` glass

Palette chosen with the bundled **UI/UX Pro Max** skill (`uipro init --ai universal|claude`):
"Minimalism & Swiss Style" + Archivo/Space Grotesk was accepted; the reference image's warm-gray system overrides the suggested palette (see `design-system/vikas-portfolio-warm-minimal/MASTER.md`).

## Swapping in your real content

Everything lives in plain data at the top of `src/app/page.tsx`:

```ts
const PROJECTS = [ … ];
const EXPERIENCE = [ … ];
const EDUCATION  = [ … ];
const SKILL_GROUPS = [ … ];
const MARQUEE    = [ … ];
```

Update links (GitHub/LinkedIn/WhatsApp/email/phone) in `page.tsx`, `Nav.tsx`, `CommandPalette.tsx`, `ContactForm.tsx` and `app/resume/page.tsx`. To edit the Selected work section (projects, repos, the Portfolio → Home redirect), see `../SELECTED_WORK.md` (workspace root). Replace `public/portrait.webp` with your photo (transparent cutout renders best; adjust `.portrait` in `globals.css` if needed).

## Accessibility

Skip link · semantic landmarks & `aria-labelledby` sections · `aria-current` nav · visible `:focus-visible` rings · `prefers-reduced-motion` honored (marquee, counters, meters, ping) · decorative imagery `aria-hidden` · form errors tied to inputs via `aria-describedby`.

## Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, theme bootstrap
│   ├── globals.css         # design system
│   ├── page.tsx            # all sections (server component)
│   └── resume/             # /resume print route
├── components/             # Nav, CommandPalette, LoginModal, Toast, Counter, Meters…
└── lib/events.ts           # tiny event bus between client islands
```
