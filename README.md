# Mathilde Godard — Portfolio

Static photography portfolio built with [Astro](https://astro.build), deployed on Netlify.

---

## Getting started

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview the build locally
npm run preview
```

---

## Adding your photos

All images go in `/public/images/`. Organize them like this:

```
public/
  images/
    hero/
      hero-1.jpg        ← Homepage fullscreen slides (landscape, ~2400×1400px)
      hero-2.jpg
      hero-3.jpg
      hero-4.jpg
    covers/
      portraits.jpg     ← Category cover thumbnails (portrait ratio, ~800×1000px)
      fashion.jpg
      travels.jpg
      architectures.jpg
      landscapes.jpg
    portraits/
      photo-01.jpg      ← Gallery photos (any ratio, max 2400px wide)
      photo-02.jpg
      ...
    fashion/
      photo-01.jpg
      ...
    travels/  architectures/  landscapes/   (same pattern)
    about/
      mathilde.jpg      ← Your portrait for the About page
```

Then in each gallery page (e.g. `src/pages/portfolio/portraits.astro`),
update the `photos` array with your filenames, alt text, and dimensions.

**Image tips:**
- Export JPEGs at 85% quality — sharp enough, fast enough
- Keep hero images under 400KB, gallery images under 200KB each
- Use [Squoosh](https://squoosh.app) or [ImageOptim](https://imageoptim.com) to compress

---

## Deploying to Netlify

1. Push this repo to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
3. Build command: `npm run build` — Publish directory: `dist`
4. Deploy!

### Pointing your Hostinger domain to Netlify

In Netlify: **Site settings → Domain management → Add custom domain** → enter `mathildegodard.com`

In Hostinger DNS panel, add:
```
Type: CNAME  Name: www    Value: [your-site].netlify.app
Type: A      Name: @      Value: 75.2.60.5   (Netlify's load balancer IP)
```
Netlify also provides free SSL automatically.

---

## SCSS

The project uses Sass (SCSS). Astro handles compilation automatically — no extra config needed.

**Key files in `src/styles/`:**

| File | Purpose |
|------|---------|
| `_variables.scss` | All design tokens as `$scss-vars` (colours, fonts, breakpoints, easing) |
| `_mixins.scss` | Reusable mixins: `@include container`, `@include tablet`, `@include eyebrow`, etc. |
| `global.scss` | Global reset, utility classes, CSS custom properties (mirrors `$vars` → `--c-*`) |

**Using variables/mixins in any `.astro` component:**
```scss
<style lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixins' as *;

.my-block {
  color: $accent;
  font-family: $font-display;

  @include tablet { font-size: 14px; }

  &:hover { color: darken($accent, 10%); }
}
</style>
```

**Available mixins:**
- `@include container` — centered max-width wrapper
- `@include mobile` / `@include tablet` / `@include desktop` — breakpoint wrappers
- `@include display-font($size?)` — Cormorant Garamond display style
- `@include eyebrow` — small caps label style
- `@include cover-img` — `object-fit: cover` full fill
- `@include full-overlay($color?)` — absolute inset overlay
- `@include focus-ring($color?)` — accessible focus outline
- `@include hover-lift($scale?, $duration?)` — scale on hover

---

## Project structure

```
src/
  pages/
    index.astro              ← Homepage (hero + category grid)
    portfolio/
      index.astro            ← All categories list
      portraits.astro        ← Gallery pages (one per category)
      fashion.astro
      travels.astro
      architectures.astro
      landscapes.astro
    videos.astro             ← Video embeds page
    about.astro
    404.astro
  layouts/
    BaseLayout.astro         ← HTML shell, SEO meta tags
  components/
    Nav.astro                ← Fixed header with dropdown + mobile menu
    Footer.astro
    Gallery.astro            ← Masonry grid + lightbox (no dependencies)
  styles/
    global.css               ← CSS variables, typography, resets
public/
  images/                    ← Your photos go here
  robots.txt
astro.config.mjs
netlify.toml
```
