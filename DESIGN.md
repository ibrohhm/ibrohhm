---
name: syarifibrohim.me
description: Personal engineering portfolio and technical writing site
colors:
  plum: "oklch(0.38 0.15 315)"
  plum-deep: "oklch(0.28 0.13 315)"
  amber: "oklch(0.52 0.14 70)"
  bg: "oklch(1.000 0.000 0)"
  surface: "oklch(0.96 0.005 315)"
  ink: "oklch(0.18 0.02 315)"
  muted: "oklch(0.48 0.01 315)"
typography:
  display:
    fontFamily: "'Fragment Mono', 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
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
  button-primary:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.plum-deep}"
  link:
    textColor: "{colors.plum}"
---

# Design System: syarifibrohim.me

## 1. Overview

**Creative North Star: "The Working Notebook"**

A software engineer's own notebook, not a corporate resume template. The page should read like something a person actually wrote and cares about: warm, direct, a little idiosyncratic, still credible enough that a recruiter skimming for thirty seconds walks away with a clear, positive read. It explicitly rejects the SaaS-portfolio look: no gradient-text hero, no icon-grid "skills" cards, no pastel-lavender-on-white AI-generic palette. Warmth here comes from a deep plum primary and a warm amber accent doing real work against a plain white page, not from a tinted "cozy" background.

**Key Characteristics:**
- Terminal-personal, not editorial: a monospace display font carries the "engineer's own notebook" identity literally, body stays a clean readable sans
- One confident brand color (plum) used deliberately, not sprinkled as decoration
- Content-first: articles are the proof of expertise, so their typography gets the same care as the homepage

## 2. Colors

Restrained-but-committed: a single deep plum carries identity across both pages; a warm amber accent gives links and small highlights a second, distinct voice. The surface stays pure white — warmth lives in the brand colors and type, not the background.

### Primary
- **Plum** (oklch(0.38 0.15 315) / #5f1e77): Headline accents, primary link color, primary button fill, active nav state.
- **Plum Deep** (oklch(0.28 0.13 315) / #3f0553): Hover/active state for plum-filled elements.

### Secondary
- **Amber** (oklch(0.52 0.14 70)): Small highlight moments only — inline emphasis marks, hover underline color on secondary links. Never carries large surface area.

### Neutral
- **Paper** (oklch(1.000 0.000 0)): Page background. Pure white, no hidden warmth.
- **Surface** (oklch(0.96 0.005 315)): Card/panel backgrounds, code inline background, subtle section dividers.
- **Ink** (oklch(0.18 0.02 315)): Body text, headings.
- **Muted** (oklch(0.48 0.01 315)): Secondary text — captions, metadata, timestamps.

### Named Rules
**The One Voice Rule.** Plum is the only color allowed to carry large surface area (buttons, active states). Amber never fills more than a few words at a time — it's a spice, not a base note.

## 3. Typography

**Display Font:** Fragment Mono (with SF Mono, Menlo, Consolas fallback)
**Body Font:** -apple-system / system sans stack
**Label/Mono Font:** Fragment Mono — same family as display, doing double duty for code

**Character:** Fragment Mono's terminal-shaped letterforms carry the "engineer's own notebook" identity literally — headlines look like something typed in an editor, not a magazine. The system sans stays invisible and fast for actual reading. (Originally speced with Fraunces; swapped after both the deterministic detector and the font-selection procedure flagged it as the #1 reflex-reject default — "warm" was translating into the exact overused editorial-serif trope the brief wanted to avoid.)

### Hierarchy
- **Display** (400, clamp(2.25rem, 5vw, 3.5rem), 1.1): Page/article H1 only. Fragment Mono only ships weight 400 — hierarchy comes from size + color + family-shift, not weight.
- **Headline** (400, 1.5rem, 1.3): Section headings (H2) within articles and homepage sections.
- **Title** (400, 1.25rem, 1.3): H3, minor section breaks.
- **Body** (400, 1.125rem, 1.7): Article prose, capped at ~70ch line length.
- **Label** (500, 0.875rem, letter-spacing 0.01em): Nav links, metadata, button text — system sans, which does have a real 500 weight.

### Named Rules
**The Two-Voice Rule.** Only Fragment Mono (display + code) and the system sans (body + labels) appear on the page. No third typeface, no decorative script.

## 4. Elevation

Flat by default. No drop shadows. Depth comes from the surface/paper contrast (subtle tonal layering) and from the plum accent color, not from shadow blur. This matches the "notebook page" metaphor — flat paper, not glassy cards.

## 5. Components

### Buttons
- **Shape:** 4px radius (sm) — barely rounded, not pill-shaped.
- **Primary:** Plum background, white text, 0.75rem 1.5rem padding.
- **Hover:** Background shifts to Plum Deep, no shadow or transform.

### Links
- **Style:** Plum text color, underline on hover only (not persistent), amber underline color on hover for a small warm accent.

### Cards / Containers
- **Corner Style:** 8px radius (md) where containers are used at all — used sparingly, this is not a card-grid site.
- **Background:** Surface tone against Paper background.
- **Shadow Strategy:** None (see Elevation).
- **Border:** None; separation via background tone difference only.

### Navigation
- Minimal: name/wordmark links home, plum active-state underline. No hamburger, no dropdown — the site is two page types (home, article).

## 6. Do's and Don'ts

### Do:
- **Do** use Fragment Mono only for display/headline/code roles — never long-form body text (monospace hurts prose readability at paragraph length).
- **Do** keep the background pure white (oklch(1 0 0)); let plum and amber carry warmth.
- **Do** cap article body width at `min(90%, 70ch)` for readability at every viewport, phones included.

### Don't:
- **Don't** use gradient text or gradient button fills (the default Astro starter's `linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)` button was explicitly replaced by this redesign).
- **Don't** add icon-grid "skills" cards or generic SaaS hero layouts — named anti-reference from PRODUCT.md.
- **Don't** tint the page background toward cream/beige "for warmth" — warmth comes from plum + amber + type choice, not the surface.
- **Don't** use pastel lavender-on-white; plum must stay deep/saturated enough to read as deliberate, not decorative.
- **Don't** reach for Fraunces/Newsreader/Lora/Playfair/Cormorant/Instrument Serif or any editorial display serif "for warmth" — that's the reflex-reject list, already tried and reverted once on this project.
