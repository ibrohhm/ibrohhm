## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Keeping This File Current

After any change that alters documented behavior, conventions, or structure, update this file in the same turn if needed. Edit `AGENTS.md` directly; `CLAUDE.md` is a symlink to it.

## Grid Background

Defined in `src/styles/global.css` (`.bg-grid`, optional `.bg-grid-fade`), applied via `bodyClass` in layouts.

- Cell size: 12px
- Grid is the `body` `background-image`, so it tiles over the whole canvas and scrolls with the page (no pseudo-element sized to body, which left empty gaps)
- Top fade: viewport-fixed `::after` overlay, 180px, bg color → transparent, so the grid fades out under the header
- `.bg-grid-fade` adds a viewport-fixed `::before` overlay in the bg color that hides the grid behind the center column
- Every page (home included) uses `bodyClass="bg-grid bg-grid-fade"` and scrolls normally. `.no-scroll` still exists in `global.css` but no page uses it

## Page Structure

- `Layout.astro` renders `Header.astro` (name, Articles, Projects, GitHub ↗; in page flow, not fixed) and `Footer.astro` (LinkedIn/GitHub/dev.to links).
- Content column is `min(760px, 100% - 40px)`; article body is `min(680px, 100% - 40px)`.
- Article data comes from `src/lib/articles.ts` (`getArticles()`, `formatDate()`). It parses frontmatter from the raw `.mdx` source on purpose: importing the MDX modules from a layout they use causes an import cycle. Optional frontmatter `buildsOn: <slug>` shows a "Builds on" link in the article byline.
- Article pages get their H1, standfirst (description), byline and Previous/Next links (newest-first order: Next is the older article) from `ArticleLayout.astro`. Do not add a `# Title` line inside the `.mdx` body.
- Article components: `LineChart.astro` draws one series, or two when given `compare` (dashed plum) plus `label`/`color` for the main line and a legend. `CircuitStates.astro` is the Closed/Open/Half-open diagram used in the circuit breaker article.
- Project data lives in `src/data/projects.ts`. `/projects` lists every project grouped by `category`. `featured: true` puts a project in "Things I've built" on the homepage; `article: <slug>` adds a related-article link.

## Homepage

`src/pages/index.astro`: intro, newest-article card (orange block offset down-left behind a bordered face, face lifts up-right on hover), `ArticleIndex.astro` ("Earlier articles", grouped by year), and "Things I've built".

## Life Strip

`src/components/LifeStrip.astro` (not used by any page): full-width Game of Life canvas, 8 rows of 12px cells aligned with the page grid, sunken look (darker fill, inset shadows). Cell colours are plum shades plus orange, picked by cell position. Runs at ~4 generations/s, reseeds when still or empty, pauses when hidden or off screen, stays still under `prefers-reduced-motion`. Hover shows a crosshair and a plum cell outline; click/drag toggles and paints cells. Decorative: `aria-hidden`.

## Article Index

`src/components/ArticleIndex.astro`: articles grouped by year; each row is one link (date, title, description, tags, read time). Hover turns the title plum with an orange underline; focus shows a plum outline. Used on the homepage (all but the newest) and `/articles` (all).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
