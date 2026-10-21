markdown
# Changelog

Records the Part 2 and Part 3 milestones for AgriDirect SA. Use these entries as the basis for your GitHub commit messages — split further or adjust dates to match your actual local history — and append any lecturer feedback as a new dated entry.

## 2026-10-20 — Semantic structure
- Built out the five core pages (Home, About, Products, Enquiry, Contact) with semantic HTML5: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Added a unique `<title>` and meta description to each page.

## 2026-10-20 — CSS styling and layout
- Introduced a shared design-token system (colours, typography, shadows) as CSS custom properties in `:root`.
- Implemented Flexbox/Grid layouts for the header, produce grid, pillar cards and location cards.
- Added hover/focus states for links, nav items and buttons.

## 2026-10-20 — Responsive design (first pass)
- Added a 768px breakpoint for tablet/desktop (row-direction header, larger hero heading).
- Added a sub-768px breakpoint that stacks the nav, grids and filter form for mobile.
- Added a JavaScript-driven mobile menu toggle.

## 2026-10-20 — Forms and interactivity (first pass)
- Added client-side validation for the Enquiry and Contact forms.
- Added a live search/category filter on the Products page.
- Added produce photography (tomatoes, spinach).

## 2026-10-21 — Catalogue expansion
- Expanded the Products page from 2 to **15 listings** — 5 Vegetables, 5 Fruits, 5 Herbs.
- Added a `data-category` attribute to every product card and rewrote the JS filter to match on it instead of scanning visible text, so filtering stays accurate as the catalogue grows.
- Added matching Fruits/Herbs cards to the Home page's featured listings.

## 2026-10-21 — Dual location maps
- Gave the Cape Town hub its own embedded Google Map (previously only Durban had one).
- Moved each map inside its matching location card so hub details and map stay visually paired.

## 2026-10-21 — Standardised footer
- Replaced the single-line footer on all five pages with a consistent brand / quick-links / contact-emails layout.
- Added footer CSS: grid layout, link list styling, centered layout on mobile.

## 2026-10-21 — Mobile polish (second pass)
- Added a sub-480px breakpoint: smaller headings, tighter hero padding, full-width buttons, shorter product images.
- Confirmed the existing 768px breakpoint still stacks nav/grids/filter form correctly underneath the new tier.

## 2026-10-21 — Imagery
- Added SVG placeholder graphics, in the site's existing colour palette, for all 13 products that don't yet have real photography.
