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
- Top fade: viewport-fixed `::after` overlay, 180px, bg color → transparent, so the grid fades out under the header. It looked empty when scrolling the homepage, which is why the homepage is locked (`no-scroll`)
- `.bg-grid-fade` adds a viewport-fixed `::before` overlay in the bg color that hides the grid behind the center column
- Homepage passes `bodyClass="bg-grid no-scroll"`: `.no-scroll` locks scroll/overscroll on `html` and `body`, so no rubber-band exposes the edge of the grid

## Article Card

`src/components/ArticleCard.astro`: a solid orange block (`--color-orange`, `::before`, hard edge, no blur) sits offset down-left behind the card face. On hover only the card face lifts diagonally up-right, away from the block (colors unchanged); the block stays put. Footer row holds tags (left) and read time (right); description is muted ink. Tag chips (`Tags.astro`) use a 30% orange background (translucent, text stays solid) with text inheriting the parent color.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
