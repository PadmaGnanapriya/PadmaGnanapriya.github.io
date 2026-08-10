# Padma Gnanapriya — Portfolio

Personal portfolio for **www.padmagnanapriya.com**. Built with **Vite + React 19 + TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and the **React Compiler**. Pages are **prerendered to static HTML** with `vite-react-ssg`, so AI bots and ATS systems can read the content (skills, experience, JSON-LD) without running JavaScript.

Live: [https://www.padmagnanapriya.com/](https://www.padmagnanapriya.com/)

## Tech stack

| Concern         | Choice                                  |
| --------------- | --------------------------------------- |
| Build / bundler | Vite 6                                  |
| UI              | React 19 (+ React Compiler auto-memo)   |
| Styling         | Tailwind CSS v4 (`@tailwindcss/vite`)   |
| Animation       | Motion for React (`motion`)             |
| Static render   | `vite-react-ssg` (build-time prerender) |
| Hosting         | GitHub Pages (master branch `/docs`)    |

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # prerender static site into ./docs (what GitHub Pages serves)
npm run preview  # serve the production build locally
npm run typecheck
```

## Project structure

```
index.html              # SEO meta tags + JSON-LD Person schema + noscript fallback
vite.config.ts          # Vite + Tailwind + React Compiler
src/
  main.tsx              # vite-react-ssg entry (single-page)
  App.tsx              # composes all sections
  index.css            # Tailwind v4 theme (dark + indigo) & base styles
  data/profile.ts      # ← ALL editable content lives here
  lib/medium.ts        # Medium RSS → JSON fetch
  components/          # Hero, Experience, Education, Certifications, Skills, Articles, Contact, Footer
public/
  images/              # profile photo + Open Graph image
  cv/                  # your CV PDF goes here
docs/                  # built site (committed — GitHub Pages serves this)
```

---

## How to make it live (drop-in checklist)

Everything you need to personalise is in **`src/data/profile.ts`** plus a few files you drop into `public/`.

### 1. Your CV PDF

Drop your CV at:

```
public/cv/Padma_Gnanapriya.pdf
```

If you use a different filename, update `cvPath` in `src/data/profile.ts`. Every "Download CV" button (navbar, hero, footer) uses this path.

### 2. Profile photo

Replace `public/images/padma.webp` with your photo (square works best, ~640×640). Or point `profile.photo` at a new filename.

### 3. Medium articles

Set your Medium handle (without the `@`) in `src/data/profile.ts`:

```ts
mediumUsername: 'padmagnanapriya',
```

Articles load live at runtime via the free [rss2json](https://rss2json.com) bridge. For higher rate limits, sign up there and append `&api_key=YOUR_KEY` to the endpoint in `src/lib/medium.ts`. If the feed can't load, the section degrades to a "Visit my Medium" link.

### 4. Contact form (where submissions go)

By default the form opens the visitor's email client (mailto → `profile.email`). To receive submissions as email instead:

1. Create a form at [Formspree](https://formspree.io) and copy your endpoint.
2. Paste it into `FORM_ENDPOINT` at the top of `src/components/Contact.tsx`:
   ```ts
   const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz'
   ```

Client-side validation (name, email format, message length) runs regardless.

### 5. Social links / text

GitHub, LinkedIn, Medium URLs, headline, experience timeline, certifications and skills all live in `src/data/profile.ts`.

### 6. Content conventions in `profile.ts`

- **Experience highlights** support `**bold**` markers — the lead-in phrase of each
  bullet is rendered in `<strong>`, matching the CV.
- **`certifications`** drives the Licenses & certifications section and its navbar
  link. Both disappear automatically while the array is empty.
- **`availableForFreelance`** toggles the "Available for freelance" pill in the Hero.
- **`nameVariants`** holds the Sinhala/Tamil spellings shown in the footer; keep them
  in sync with `alternateName` in `index.html`.

---

## Deployment

GitHub Pages serves this repo from the **`master` branch `/docs` folder** (no settings change needed — it's the repo's existing configuration). To publish changes:

```bash
npm run build              # regenerates ./docs
git add -A && git commit -m "update site"
git push                   # GitHub Pages publishes within ~1 minute
```

`docs/` includes a `.nojekyll` file so GitHub Pages serves Vite's `assets/` folder untouched.

> Prefer a CI pipeline? You can add a GitHub Actions workflow that builds and deploys
> on push instead — that requires switching **Settings → Pages → Source → "GitHub Actions"**
> (an owner-only setting). Ask and I'll set it up.
