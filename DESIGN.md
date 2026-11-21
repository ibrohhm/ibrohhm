---
name: syarifibrohim.me
description: Personal engineering portfolio and technical writing site
colors:
  plum: "oklch(0.38 0.15 315)"
  amber: "oklch(0.52 0.14 70)"
  orange: "oklch(0.72 0.16 55)"
  bg: "oklch(0.98 0 0)"
  surface: "oklch(0.96 0.005 315)"
  ink: "oklch(0.2 0.02 315)"
  body: "oklch(0.38 0.02 315)"
  muted: "oklch(0.48 0.01 315)"
typography:
  h1:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.3
  h3:
    fontSize: "1.4rem"
    fontWeight: 600
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.01em"
  mono:
    fontFamily: "'Fragment Mono', 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "0.9em"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  sm: "0.75rem"
  md: "1.5rem"
  lg: "3rem"
components:
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  link:
    textColor: "{colors.plum}"
---

# Design System: syarifibrohim.me

## 1. Overview

**Creative North Star: "The Working Notebook"**

A software engineer's own notebook, not a corporate resume template. The page should read like something a person actually wrote and cares about: warm, direct, a little idiosyncratic, still credible enough that a recruiter skimming for thirty seconds walks away with a clear, positive read. It explicitly rejects the SaaS-portfolio look: no gradient-text hero, no icon-grid "skills" cards, no pastel-lavender-on-white AI-generic palette. Warmth here comes from a deep plum primary and a warm amber accent doing real work against a plain white page, not from a tinted "cozy" background.

**Key Characteristics:**
- Restrained, not editorial: system sans throughout with weight contrast for hierarchy (headings at 600, body at 400) — no display typeface carrying personality, the writing does that instead
- One confident brand color (plum) used deliberately, not sprinkled as decoration
- Content-first: articles are the proof of expertise, so their typography gets the same care as the homepage

## 2. Colors

Restrained-but-committed: a single deep plum carries identity across both pages; a warm amber accent gives links and small highlights a second, distinct voice. The surface stays pure white — warmth lives in the brand colors and type, not the background.

### Primary
- **Plum** (oklch(0.38 0.15 315) / #5f1e77): Headline accents, primary link color, primary button fill, active nav state.
- **Plum Deep** (oklch(0.28 0.13 315) / #3f0553): Hover/active state for plum-filled elements.

### Secondary
- **Amber** (oklch(0.52 0.14 70)): Small labels only: year headings in the article index, the "Newest" line on the newest-article card, category headings on /projects. Never carries large surface area.
- **Orange** (oklch(0.72 0.16 55)): The offset block behind the newest-article card, link underlines on hover and the active nav item, and the tag chip background at 30%. Brighter than Amber so it reads as a solid shape, not text color. Never used for text.

### Neutral
- **Paper** (oklch(1.000 0.000 0)): Page background. Pure white, no hidden warmth.
- **Surface** (oklch(0.96 0.005 315)): Card/panel backgrounds, code inline background, subtle section dividers.
- **Ink** (oklch(0.2 0.02 315)): Headings, titles, dark borders on cards.
- **Body** (oklch(0.38 0.02 315)): Paragraphs, summaries, intro copy.
- **Muted** (oklch(0.48 0.01 315)): Secondary text — captions, metadata, timestamps.

### Named Rules
**The One Voice Rule.** Plum is the only color allowed to carry large surface area (buttons, active states). Amber never fills more than a few words at a time — it's a spice, not a base note.

## 3. Typography

**Heading Font:** -apple-system / system sans stack (same family as body, weight 600 for contrast)
**Body Font:** -apple-system / system sans stack
**Mono Font:** Fragment Mono (with SF Mono, Menlo, Consolas fallback) — code blocks only

**Character:** No display typeface carries the site's identity — headings are the same system sans as body, distinguished by size and weight (600 vs 400), not a font swap. Fragment Mono is reserved for code, where its terminal shape earns its place functionally instead of decoratively. (This project tried two display treatments before landing here: Fraunces first, flagged as the #1 reflex-reject editorial-serif default; then Fragment Mono as a "terminal-personal" identity font. Both were dropped in favor of plain weight-contrast hierarchy — simpler, and the writing carries the personality instead of the typeface.)

### Hierarchy
- **H1** (600, about 2.25–3rem, -0.02em tracking): Page/article title only. On the homepage the H1 is the short greeting and an H2 (500 weight) carries the longer line.
- **H2** (600, 2rem, 1.3): Section headings.
- **H3** (600, 1.4rem): Minor section breaks. Sized at ≥1.25× body (1.125rem) to keep real scale contrast — don't let this drift back toward body size.
- **Body** (400, 1.125rem, 1.7): Article prose, capped at ~70ch line length.
- **Label** (500, 0.875rem, letter-spacing 0.01em): Nav links, metadata, card captions.

### Named Rules
**The One-Family Rule.** Only the system sans (headings + body + labels) and Fragment Mono (code only) appear on the page. Hierarchy comes from size and weight, not a second display typeface.

## 4. Elevation

Flat by default. No drop shadows. Depth comes from the surface/paper contrast (subtle tonal layering) and from the plum accent color, not from shadow blur. This matches the "notebook page" metaphor — flat paper, not glassy cards.

## 5. Components

### Links
- **Style:** Plum text color, underline on hover only (not persistent), amber underline color on hover for a small warm accent.

### Newest-Article Card (homepage)
- **Shape:** 10px radius, card background, 1.5px Ink border, solid Orange block offset down-left behind it (8px, hard edge).
- **Content:** Amber line (Newest · date · read time), title (24px, 600), summary (Body), "Read the article →" link with Orange underline.
- **Hover:** face lifts up-right 4px; the block stays put. Only card on the homepage, so the Orange block marks the newest piece.

### Article Index
- One link per row, grouped under Amber year headings. Row: date gutter (muted), title (22px, 600, Ink), one-line summary (Body), tags and read time (muted).
- **States:** hover turns the title Plum with a 2px Orange underline; focus shows a 2px Plum outline at 6px offset; visited titles go slightly lighter. 150ms colour change, no movement.
- Rows divided by a 1px hairline, not cards. Phones drop the summary and move the date under the title.

### Tags
- Pill chips: 999px radius, 13px medium Ink text on Orange at 30%. Used on article pages and as project chips on the homepage.

### Article Header
- "← All articles", tags, H1 (rendered by the layout, not the MDX body), description as a standfirst, then a byline (author · date · read time, optional "Builds on" link) between two hairlines. Previous/Next text links at the end (newest-first order).

### Blockquote
- **Style:** Italic, muted ink color, no border, no background tint. A quiet aside, not a callout box.

### Diagrams (PlantUML) & Formula
- **PlantUML:** Rendered server-side at build time (via `plantuml-encoder` + a public render endpoint), inlined as static SVG — no client-side dependency. Centered, no border/shadow.
- **Formula:** Centered, larger type (1.5rem), Surface background, used sparingly for a single equation-like statement (e.g. `pending requests = rate × duration`) — not for general emphasis.

### Navigation
- In page flow (not fixed): name links home on the left; Articles, Projects, GitHub ↗ on the right. Active page is Plum with a 2px Orange underline. No hamburger; links stay inline on phones.
- Footer: LinkedIn, GitHub, dev.to links only.

## 6. Do's and Don'ts

### Do:
- **Do** keep headings in the system sans with weight 600 for contrast against body's 400 — no second display typeface.
- **Do** keep Fragment Mono scoped to code blocks only.
- **Do** keep the background near-white (oklch(0.98 0 0)); let plum and amber carry warmth.
- **Do** cap article body width at `min(90%, 70ch)` for readability at every viewport, phones included.
- **Do** keep h3 at least 1.25× the body font size (currently 1.4rem vs 1.125rem) — a flatter ratio reads as no hierarchy at all.

### Don't:
- **Don't** use gradient text or gradient button fills (the default Astro starter's `linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)` button was explicitly replaced by this redesign).
- **Don't** add icon-grid "skills" cards or generic SaaS hero layouts — named anti-reference from PRODUCT.md.
- **Don't** tint the page background toward cream/beige "for warmth" — warmth comes from plum + amber + copy, not the surface.
- **Don't** use pastel lavender-on-white; plum must stay deep/saturated enough to read as deliberate, not decorative.
- **Don't** reach for Fraunces/Newsreader/Lora/Playfair/Cormorant/Instrument Serif, or reintroduce a mono/display typeface for headings "for personality" — tried twice on this project, dropped both times in favor of plain weight contrast.
