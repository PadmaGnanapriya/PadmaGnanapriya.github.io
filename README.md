# Padma Gnanapriya — Portfolio

Personal portfolio for **padmagnanapriya.github.io**. Built with **Vite + React 19 + TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and the **React Compiler**. Pages are **prerendered to static HTML** with `vite-react-ssg`, so AI bots and ATS systems can read the content (skills, experience, JSON-LD) without running JavaScript.

Live: [https://padmagnanapriya.github.io/](https://padmagnanapriya.github.io/)

## Tech stack

| Concern         | Choice                                  |
| --------------- | --------------------------------------- |
| Build / bundler | Vite 6                                  |
| UI              | React 19 (+ React Compiler auto-memo)   |
| Styling         | Tailwind CSS v4 (`@tailwindcss/vite`)   |
| Animation       | Framer Motion (`motion`)                |
| Static render   | `vite-react-ssg` (build-time prerender) |
| Hosting         | GitHub Pages via GitHub Actions         |

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # prerender to ./dist
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
  components/          # Hero, Experience, Skills, Articles, Gallery, Contact, ...
public/
  images/              # profile photo + skill icons
  gallery/office/      # "Office Vibe" photos
  gallery/university/  # "University Days" photos
  cv/                  # your CV PDF goes here
.github/workflows/deploy.yml  # CI build + deploy to GitHub Pages
```

---

## How to make it live (drop-in checklist)

Everything you need to personalise is in **`src/data/profile.ts`** plus a few files you drop into `public/`.

### 1. Your CV PDF

Drop your CV at:

```
public/cv/Padma_Gnanapriya_CV.pdf
```

If you use a different filename, update `cvPath` in `src/data/profile.ts`. Every "Download CV" button (navbar, hero, footer) uses this path.

### 2. Profile photo

Replace `public/images/padma.webp` with your photo (square works best, ~640×640). Or point `profile.photo` at a new filename.

### 3. Gallery photos

Drop images into:

```
public/gallery/office/        →  "Office Vibe"
public/gallery/university/    →  "University Days"
```

Then list them in `galleryImages` in `src/data/profile.ts`:

```ts
{ src: '/gallery/office/my-photo.webp', alt: 'Describe the photo', category: 'office' }
```

`.webp` is recommended for speed; `.jpg`/`.png` also work. Until you add photos, the gallery shows a friendly placeholder (broken images are auto-hidden).

### 4. Medium articles

Set your Medium handle (without the `@`) in `src/data/profile.ts`:

```ts
mediumUsername: 'padmagnanapriya',
```

Articles load live at runtime via the free [rss2json](https://rss2json.com) bridge. For higher rate limits, sign up there and append `&api_key=YOUR_KEY` to the endpoint in `src/lib/medium.ts`. If the feed can't load, the section degrades to a "Visit my Medium" link.

### 5. Contact form (where submissions go)

By default the form opens the visitor's email client (mailto → `profile.email`). To receive submissions as email instead:

1. Create a form at [Formspree](https://formspree.io) and copy your endpoint.
2. Paste it into `FORM_ENDPOINT` at the top of `src/components/Contact.tsx`:
   ```ts
   const FORM_ENDPOINT = 'https://formspree.io/f/abcdwxyz'
   ```

Client-side validation (name, email format, message length) runs regardless.

### 6. Social links / text

GitHub, LinkedIn, Medium URLs, headline, experience timeline and skills all live in `src/data/profile.ts`.

---

## Deployment

Deploys automatically via **GitHub Actions** (`.github/workflows/deploy.yml`) on every push to `master`.

**One-time setup (do this once in the GitHub UI):**

> **Settings → Pages → Build and deployment → Source → select "GitHub Actions"**

This switches Pages off the old `/docs` folder and onto the Actions workflow. After that, every `git push` to `master` rebuilds and publishes the site. You can also trigger a manual run from the **Actions** tab ("Deploy to GitHub Pages" → *Run workflow*).

The build output (`/dist`) is **not** committed — Actions builds it fresh each time.
