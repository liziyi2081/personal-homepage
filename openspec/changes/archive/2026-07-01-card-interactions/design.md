## Context

Current page architecture: articles has list + dynamic [slug] detail; products and projects have static list pages only; outsourcing has no standalone page (View all → /projects). Card content on homepage was unified in prior change. Now we need consistent browse → list → detail flow and pagination across all 4 categories.

## Goals / Non-Goals

**Goals:**
- Homepage shows exactly 1 card per category, empty → NULL
- 4 list pages with `?page=N` pagination, 5 per page
- 4 detail pages ([slug].astro), Content from `.md` body
- Unified card template across homepage and list pages
- Outsourcing gets its own list + detail pages

**Non-Goals:**
- No content schema changes (stay with Astro Content Collections)
- No API routes or server-side rendering changes (static build)

## Decisions

### Decision 1: Pagination via query param + getStaticPaths

Use `?page=N` query parameter (not route-based like `/articles/2/`). Astro reads `Astro.url.searchParams.get('page')` in the template. Since we use static output, pagination links are generated via `<a href="?page=N">`.

**Alternative considered:** `/articles/page/2/` routes. Rejected because it requires nested `[...page].astro` catch-all and complicates linking from homepage.

### Decision 2: Detail page reuse pattern

All 4 detail pages follow the same structure as `articles/[slug].astro`:
```
getStaticPaths() → map collection to slugs
render entry → { Content } via .render()
```

### Decision 3: Empty state on homepage

When a category has 0 items, show a NULL card:
```
created NULL / updated NULL
NULL
NULL
```
The card is a plain div (not an `<a>`), no link behavior.

### Decision 4: Shared card component

A new reusable `ContentCard.astro` component to avoid duplicating the card template across homepage, list pages, and detail pages.

## Risks / Trade-offs

- **Static pagination limits:** Query-param pagination on static sites means all pages share the same URL path; only the query string differs. This is fine for static hosts (GitHub Pages serves index.html regardless of query). Each "page" is technically a separate build pass via `getStaticPaths` → handled by having list pages use `?page=` links
- **Re-parsing on each page:** `getCollection` runs per-page, but Astro caches within a build. No perf issue.
