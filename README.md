# SkyRoute - Flight Booking Website (Assignment 3)

**Media Queries + Bootstrap Grid** | Web Technologies - Front-End Development, Astana IT University

A responsive flight-booking demo website for domestic routes in Kazakhstan. This version of the project is a **separate copy** made for Assignment 3. It uses Bootstrap 5.3 for layout and components, and keeps only a tiny custom stylesheet.

## Team

| Member | Group |
|---|---|
| Kagan Tasbolat | [your group] |
| Abdrakhman Almukhan | [your group] |

**Team name:** [your team name]
**Live website:** [paste your GitHub Pages / Netlify URL here]
**Repository:** https://github.com/abdddr/skyroute

## Pages

| File | Description | Assignment tasks |
|---|---|---|
| `index.html` | Home page: navbar, hero, search form, two grid sections, card group, button styles, About and Contact | 3, 4, 5, 6, 8, 9, 10 |
| `destinations.html` | Filter sidebar, carousel with 9 images, grid of 9 destination cards | 3, 5, 7, 8, 9 |
| `booking.html` | Available flights and passenger details form | 4, 5, 8, 9 |
| `media-queries.html` | Part 1 demo, **custom CSS only (no Bootstrap)** | 1, 2 |

## Project structure

```
skyroute-a3/
  index.html
  destinations.html
  booking.html
  media-queries.html
  css/
    styles.css     custom CSS: image sizes and hover effect only (no margins/paddings)
    media.css      media queries for media-queries.html (Part 1)
  images/          9 city illustrations (SVG)
  README.md
```

## Technologies

- HTML5 (semantic elements)
- CSS3 with media queries and Flexbox (Part 1)
- Bootstrap 5.3.3 via the jsDelivr CDN, with integrity hashes (Part 2)

## How to run

1. Download or clone the project.
2. Open `index.html` in a browser. No build step or server is needed.
3. An internet connection is required, because Bootstrap is loaded from a CDN.

## Responsive behavior

**Part 1 - custom media queries (mobile-first, `min-width`)**

| Screen | Width | Headings / text | Cards per row |
|---|---|---|---|
| Mobile | under 768px | h1 28px, text 16px | 1 |
| Tablet | 768px and up | h1 36px, text 18px | 2 |
| Desktop | 1024px and up | h1 48px, text 20px | 3 |

**Part 2 - Bootstrap breakpoints**

| Breakpoint | Starts at | Used for |
|---|---|---|
| `sm` | 576px | 2 columns in the three-column section, extra padding |
| `md` | 768px | form fields side by side, 3 cards per row on Destinations |
| `lg` | 992px | navbar expands, `col-lg-6` and `col-lg-4` layouts, sidebar beside content |

## Assignment checklist

- [x] **Task 1** Responsive typography (mobile / tablet / desktop)
- [x] **Task 2** Card group with media queries only (3 / 2 / 1 per row)
- [x] **Task 3** Bootstrap grid: `col-lg-6` section, `col-lg-4` section, `container`, `col-sm/md/lg`
- [x] **Task 4** Spacing utilities replace all custom margins and paddings (`mt-lg-4`, `px-sm-2`, `py-lg-5`, ...)
- [x] **Task 5** Navbar with 6 links and a hamburger menu (`navbar-toggler`)
- [x] **Task 6** Bootstrap buttons: variants, outline, `btn-lg`, `btn-sm`, disabled, `btn-group`
- [x] **Task 7** Carousel with 9 images, indicators and controls
- [x] **Task 8** Bootstrap cards (`card-group` and `row` + `col`) with image, title and text
- [x] **Task 9** Bootstrap forms: `form-control`, `form-select`, `input-group`, `form-check`
- [x] **Task 10** Accessibility: semantic tags, labels, alt text, aria attributes, skip link, contrast of at least 4.5:1
- [x] Both team members' names in the `<footer>` of every HTML file

## Accessibility notes

- Semantic elements: `nav`, `main`, `section`, `article`, `aside`, `footer`, `button`, `fieldset`/`legend`
- Every form control has a linked `<label>`; every image has `alt` text
- Icon-only controls (hamburger, carousel arrows and dots) have `aria-label` or hidden text
- "Skip to main content" link and `aria-current="page"` on the active nav link
- Text and button colors checked against the WCAG 4.5:1 contrast rule

## Known limitations

- Demo project: forms do not send data anywhere and flight data is static.
- The filter sidebar on the Destinations page is visual only (no JavaScript filtering).
- City images are generated SVG illustrations; replace them in `images/` with real photos if desired.

## Deployment (GitHub Pages)

1. Push the project to the repository.
2. Go to **Settings -> Pages**.
3. Set **Source** to the `main` branch and the `/ (root)` folder, then save.
4. Open the published URL after about a minute.

## Credits

Built with [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/). Assignment #3 for the Web Technologies course at Astana IT University.
