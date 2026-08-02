# portfolio-v2

Personal site for Mohd Afzal — [mohdafzal.dev](https://mohdafzal.dev)

Next.js 16 App Router, static export, deployed to Cloudflare Pages.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> out/
npm run lint
```

## Editing content

**All site content lives in [`lib/data.ts`](lib/data.ts)** — bio, experience,
projects, skills, education, social links. Nothing is hardcoded in components,
so a copy change is a one-file change.

Keep it in sync with `resume.tex` in the parent folder; the roles and dates are
meant to match exactly. The résumé served at `/resume.pdf` is a copy of the
built PDF — re-copy it into `public/` when the résumé changes.

## Structure

```
app/
  layout.tsx     fonts, metadata, the inline `.js` class script
  page.tsx       composes the sections
  globals.css    design tokens + type roles + reveal animation
components/
  sections/      Nav, Hero, Work, Archive, Experience, Stack, About, Footer
  ui/            Shell, Reveal, RevealObserver, LocalTime, Primitives
lib/
  data.ts        all content
  utils.ts       cn()
```

## Conventions

- **No raw hex in components.** Colour lives in `app/globals.css` as CSS
  variables exposed through Tailwind's `@theme`. Use `bg-surface`,
  `text-fg-muted`, `border-hairline`, etc. The one exception is `themeColor` in
  `layout.tsx`, a browser meta value that cannot reference a variable.
- **Type roles**, not ad-hoc sizes: `.type-hero`, `.type-h2`, `.type-h3`,
  `.type-label`. Three families — Instrument Serif for display, Inter for body,
  JetBrains Mono for metadata.
- **Layout goes through `<Shell>`** so gutters and max-width stay consistent.
- **Scroll reveal defaults to visible.** The hidden state is gated behind a
  `.js` class set before first paint, and `RevealObserver` has a 1.5s failsafe.
  Decoration must never be the reason content can't be read.
- **Do not add a `* { margin: 0 }` reset.** Tailwind's preflight already does
  it, and a zero-specificity `*` rule declared afterwards silently kills the
  `space-y-*` utilities, which v4 emits inside `:where()`.
