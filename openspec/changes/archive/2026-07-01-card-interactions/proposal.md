## Why

Homepage cards currently show 2 items per category without click behavior beyond external links. List pages lack pagination. Products, Projects, and Outsourcing have no detail pages. Users need a consistent browse → list → detail navigation flow for all four content categories.

## What Changes

- Homepage cards show only the first item per category; empty categories display NULL and are not clickable
- Each category gets a proper list page with 5 items per page and prev/next pagination
- Clicking a homepage card navigates to the item's detail page; clicking a list item also navigates to its detail page
- Every item has a detail page rendering its full `.md` body content
- New Outsourcing list page (currently View all links to /projects)
- Existing articles list page updated to 5/pag + unified card style

## Capabilities

### New Capabilities
- `pagination`: List pages support `?page=N` query parameter, 5 items per page, prev/next navigation
- `detail-pages`: Products, Projects, and Outsourcing each get a `[slug].astro` detail page rendering full `.md` content

### Modified Capabilities
- `product-showcase`: Homepage shows single product card; list page has pagination; detail page renders full body
- `project-showcase`: Homepage shows single project card; list page has pagination; detail page renders full body
- `article-management`: List page updated to 5/pag + unified card style matching homepage
- `sci-fi-effects`: Homepage card template handles NULL empty state; section titles unchanged

## Impact

- `src/pages/index.astro`: 4 card sections → single item + empty state
- `src/pages/articles/index.astro`: Add pagination + unify card style
- `src/pages/products.astro`: Add pagination + unify card style
- `src/pages/projects.astro`: Add pagination + unify card style
- `src/pages/products/[slug].astro`: **NEW** detail page
- `src/pages/projects/[slug].astro`: **NEW** detail page
- `src/pages/outsourcing/index.astro`: **NEW** list page + pagination
- `src/pages/outsourcing/[slug].astro`: **NEW** detail page
- Content `.md` files: Add body text for non-articles items
