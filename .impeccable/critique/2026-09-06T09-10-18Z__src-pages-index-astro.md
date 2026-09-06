---
target: src/pages/index.astro (homepage + article pages)
total_score: 32
p0_count: 1
p1_count: 2
timestamp: 2026-09-06T09-10-18Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | External links (GitHub/LinkedIn/dev.to) don't hint they open a new tab |
| 2 | Match System / Real World | 4 | Plain language throughout, no jargon in nav/labels |
| 3 | User Control and Freedom | 2 | No way back to homepage from an article page except browser back |
| 4 | Consistency and Standards | 4 | Shared CSS tokens keep homepage + articles visually consistent |
| 5 | Error Prevention | 4 | No destructive actions, nothing to prevent |
| 6 | Recognition Rather Than Recall | 4 | All links are text-labeled, nothing hidden |
| 7 | Flexibility and Efficiency | 2 | Single rigid path; no TOC on longer articles, no accelerators |
| 8 | Aesthetic and Minimalist Design | 4 | Restrained palette, no clutter |
| 9 | Error Recovery | 2 | Default unbranded 404 (confirmed live) |
| 10 | Help and Documentation | 3 | N/A by design for a personal site; no real gap |
| **Total** | | **32/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment:** Wouldn't read as obviously AI-made at a glance — no gradient text, no card grids, no hero-metric block, no eyebrow-per-section scaffolding. Real content voice. Hero's shape (serif headline + one-line bio + 3 social links + 1 CTA) is a common "engineer personal site" silhouette, not a banned pattern but worth naming.

**Deterministic scan:** 1 finding — `overused-font` on `src/layouts/Layout.astro:25` (Fraunces flagged as increasingly common in AI-generated UI). No false positives.

**Visual overlays:** Not available this session (browser extension not connected). Source-based review + deterministic scanner only.

## Overall Impression

Foundation (palette, type contrast, restraint) is genuinely deliberate and matches the "Working Notebook" brief. Gap isn't taste, it's completeness for the site's actual job: getting a cold visitor from a shared link to a positive impression of the person. Mobile readers hit an unreadably narrow article column, and article visitors have no path back to the homepage — both undercut PRODUCT.md's stated goal.

## What's Working

1. Color system restrained and verified (contrast ratios computed directly: 18.8:1 body, 10.4:1 headline).
2. Typography has real hierarchy — serif display vs system sans body.
3. Copy is specific ("Read the latest article →" not "Learn more").

## Priority Issues

**[P0] Article column isn't responsive.** `.article { width: 60% }` (Layout.astro:68), no breakpoint. ~225px column on a 375px phone.
Fix: `width: min(90%, 70ch)`. Command: `/impeccable adapt`

**[P1] No way back to homepage from an article.** Cold visitors from search/dev.to land with no link to the person.
Fix: persistent header (name + home link) on article pages. Command: `/impeccable layout`

**[P1] Bio is a literal placeholder in production markup.** `Hero.astro:12` — "TODO: one-line bio placeholder."
Fix: replace before going live. Command: `/impeccable clarify`

**[P2] No meta description / Open Graph tags.** Shared article links render no preview text/image.
Fix: per-page description + og:title/description/image. Command: `/impeccable harden`

**[P2] Default unbranded 404 page.** Confirmed live via curl.
Fix: custom 404 matching design system. Command: `/impeccable harden`

**[P3] Fraunces flagged by scanner as overused AI-site font.** Defensible, worth a gut-check. Command: `/impeccable typeset`

**[P3] No custom `:focus-visible` styling.** Keyboard nav works via browser default; no brand-matched focus state. Command: `/impeccable polish`

## Persona Red Flags

**Casey (Mobile):** Opens N+1 article from phone, hits 60%-width column immediately — highest-likelihood abandonment point site-wide.

**Jordan (First-Timer):** Arrives via search, wants to know who wrote it — no nav/byline back to homepage. Bounces without seeing the portfolio.

**Riley (Stress Tester):** Mistyped/old article URL → generic unbranded 404. Also notes literal `+` in `/article/n+1-queries-problem` (functions correctly, unusual to share).

**Morgan (Recruiter/peer, project-specific):** Skims homepage ~30s, sees one article + 3 social links, no sense of whether more writing exists. Bio placeholder if still live drops credibility immediately.

## Minor Observations

- `BarChart.astro`/`example-post.mdx` are demo/scratch content — fine to keep, just not meant as the linked article long-term (currently correctly not linked from homepage CTA).
- Homepage's small "Ibrohim Syarif" label above H1 shares visual shape with the banned uppercase-eyebrow pattern but isn't one (no uppercase/tracking) — identity label, not a section kicker.
