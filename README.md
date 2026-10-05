# SkyRoute - Flight Booking Website

**Web Technologies - Front-End Development** | Astana IT University | Team project

SkyRoute is a responsive flight-booking website for nonstop domestic routes from Astana to nine cities in Kazakhstan. Visitors can search flights, browse and filter destinations, pick a flight, see a live price total and confirm a booking.


**Live website:** https://abdddr.github.io/skyroute/
**Repository:** https://github.com/abdddr/skyroute

## Team

| Member | Group | Pages (HTML) | Scripts (JS) |
|---|---|---|---|
| Kagan Tasbolat | SE-2502 | `index.html`, `destinations.html` | `js/index.js`, `js/destinations.js` |
| Abdrakhman Almukhan | SE-2502 | `booking.html`, `about.html` | `js/booking.js`, `js/about.js` |

Each member owns two HTML pages. Shared files: `css/styles.css`, `images/`, this README.

## Pages and features

| Page | What it does |
|---|---|
| `index.html` | Hero, flight search form (dates, passengers, class, max price, trip type), two-column and three-column grid sections, popular destinations card group, link to help |
| `destinations.html` | Sidebar filters (region and price) that really filter the cards, a 9-image carousel, and 9 destination cards |
| `booking.html` | Reads the search from the address bar, lists three nonstop flights, lets you choose one, shows a live total and confirms the booking |
| `about.html` | About text, team cards, FAQ accordion, and a contact form (`#contact`) |

How the pages work together: the search form on the home page and every "View Flights" button send the chosen city to `booking.html` (for example `booking.html?destination=Aktau`), and the booking page builds the matching flights.

## Project structure

```
skyroute/
  index.html
  destinations.html
  booking.html
  about.html
  css/
    styles.css        custom CSS (contrast colours, image sizes, hero, hover, ticket cards)
  js/
    index.js          return date logic for the search form
    destinations.js   region and price filters
    booking.js        flights, selection, live total, confirmation
    about.js          contact form validation
  images/             9 city illustrations (SVG)
  README.md
```

## Technologies

- HTML5 with semantic elements (`nav`, `main`, `section`, `article`, `aside`, `footer`, `fieldset`/`legend`)
- CSS3: custom properties, media queries, `object-fit`
- Flexbox through Bootstrap utilities (`d-flex`, `flex-column`, `flex-md-row`, `justify-content-*`, `gap-*`)
- Bootstrap 5.3.3 from the jsDelivr CDN with integrity hashes (grid, navbar, forms, cards, carousel, accordion, buttons)
- Plain JavaScript (no libraries)

## Responsive design

The layout is mobile-first and uses Bootstrap breakpoints.

| Breakpoint | Starts at | What changes |
|---|---|---|
| `sm` | 576px | Destination cards go from 1 to 2 per row; feature boxes go to 2 per row |
| `md` | 768px | Form fields sit side by side; destination cards 3 per row; flight cards become horizontal with a dashed ticket stub; carousel is taller |
| `lg` | 992px | Navbar expands (hamburger below this); filter sidebar sits beside the content; `col-lg-6` and `col-lg-4` sections; carousel is tallest |

Images use `object-fit: cover` with fixed heights, so they are never stretched. Wide content never causes sideways scrolling.

## Accessibility

- Skip-to-content link, one `h1` per page, headings in order
- Every form control has a linked `<label>`; every image has `alt` text
- Icon-only controls (hamburger, carousel arrows and dots) have `aria-label` or hidden text
- `aria-current="page"` on the active menu link; `aria-live` regions for filter counts, booking summary and messages
- Form errors are shown in text and focus moves to the first problem
- Colours checked against WCAG AA (4.5:1): body text 15.4:1, secondary text 8.2:1, blue buttons and links 6.4:1, white on the hero 6.4:1 or better
- Hover animation is switched off for users who prefer reduced motion

## How to run

1. Download or clone the repository.
2. Open `index.html` in a browser. No build step or server is needed.
3. An internet connection is needed for Bootstrap (CDN).

## Deployment (GitHub Pages)

1. Push the project to the repository with `index.html` in the root folder (keep the `css/`, `js/` and `images/` folders).
2. Open **Settings -> Pages**.
3. Set **Source** to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then save.
4. After about a minute the site is live at the URL at the top of this file.

## Known limitations

- Demo project: flight data is generated in `js/booking.js`, and the forms do not send data anywhere.
- Fares, flight times and airports are examples.

## Credits

Built with [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/). City illustrations are original SVG drawings made for this project.
