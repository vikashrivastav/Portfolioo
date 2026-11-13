# Run this portfolio on your local system

Two editions live in this workspace. Pick **one** — they're the same site.

---

## Option A — Single-file HTML (no install, works offline)

1. Download `vikas-portfolio.html` (the file viewer can save it; it is ~260 KB and fully self-contained — CSS, JS and the portrait are embedded).
2. Double-click it. It opens in your default browser.
3. Done. No Node, no server, no build. All features work: theme toggle, ⌘K palette, print résumé (print → Save as PDF).

Optional — serve it locally (needed only if you want a localhost origin):
```bash
npx serve .        # or: python3 -m http.server 8080
```

---

## Option B — Next.js app (the live preview)

### Prerequisites
- **Node.js 18.18+ or 20+** — check with `node -v`. Install from <https://nodejs.org> (LTS) or via a version manager (`nvm`, `fnm`).
- npm (ships with Node).
- ~300 MB free disk for `node_modules`.
- Internet on first install/build (dependencies + Google Fonts; fonts fall back to system fonts offline).

### Steps
```bash
# 1) Unzip the archive you downloaded
unzip Portfolioo.zip            # Windows: right-click → Extract All
cd Portfolioo

# 2) Install dependencies (NOT included in the archive)
npm install

# 3a) Development mode (hot reload) — http://localhost:3000
npm run dev

# 3b) …or production mode — build, then serve
npm run build
npm start                            # http://localhost:3000
```
Then open <http://localhost:3000>. `/resume` is the print-ready résumé route (Ctrl/Cmd+P → Save as PDF).

### Notes
- `node_modules`, `.next` and `.git` are excluded from the archive on purpose — run `npm install` first.
- If port 3000 is taken: `npm run dev -- -p 3001` (dev) or `npm start -- -p 3001` (prod).
- Editing content: see `src/app/page.tsx` (single-page content), `src/app/resume/page.tsx` (résumé), `src/components/*` (nav, palette, form). `../SELECTED_WORK.md` documents the Selected-work section in detail.
- Fonts load from Google Fonts with system-font fallbacks — fully usable offline after first load.

### Deploy (optional, free)
- **Vercel**: push the folder to a GitHub repo → "Import Project" at vercel.com → defaults are fine (Next.js detected automatically). Or `npx vercel` in the folder.
- **Netlify**: `npx netlify deploy --build` with `@netlify/plugin-nextjs`, or drag the **single-file HTML** (Option A) into <https://app.netlify.com/drop> for an instant public URL.
- **GitHub Pages**: serve Option A's `vikas-portfolio.html` as `index.html` in a Pages repo.
