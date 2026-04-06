# RaleeyGo Website

Production-ready React website for RaleeyGo (Vite + React 18 + Tailwind).

Overview
- 8 pages: Home, Features, How It Works, Download, Contact, Terms, Privacy, NotFound
- Components: `Navbar`, `Footer`
- Styling: Tailwind CSS, `src/styles/index.css`

Quick Start

```bash
npm install
npm run dev
```

Project structure

```
./
├─ public/                # static assets (logo, images)
├─ src/
│  ├─ components/        # Navbar, Footer
│  ├─ pages/             # Home, Features, HowItWorks, Download, Contact, Terms, Privacy, NotFound
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
└─ README.md
```

Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — build production bundle to `dist/`
- `npm run preview` — preview production build

Deployment

Recommended platforms: Vercel, Netlify, GitHub Pages. See `websiteDEPLOYMENT.md` for detailed instructions.

Important Notes
- `index.html` uses `/src/main.jsx` as the entry.
- Replace placeholder assets in `public/` (`logo.svg`, `phone-mockup.png`).
- Update contact info and App Store links in the page components before launch.

Documentation sources
- `websitePROJECT_SUMMARY.md` — high-level project overview
- `websiteSETUP_GUIDE.md` — setup & development instructions
- `websiteQUICKSTART.md` — quick start commands
- `websiteDEPLOYMENT.md` — deployment options

If something is missing or you prefer a different README layout, tell me how you'd like it formatted.
