[README.md](https://github.com/user-attachments/files/32481164/README.md)
# SkyRoute — Flight Booking Website

A demo flight-booking site for **Assignment #2: Advanced CSS (Flexbox & Grid)**, built on top of the Assignment #1 project.

**Team:** SkyRoute
**Members:** Kagan Tasbolat, Abdrakhman Almukhan
**Group:** [INSERT GROUP ID]
**Live site:** [INSERT GITHUB PAGES / NETLIFY URL]

## Objective

Apply modern CSS layout techniques — Flexbox and CSS Grid — to build a responsive, multi-page website without floats or external frameworks.

## Pages

| File | Description |
|---|---|
| `index.html` | Home page: flight search form, plus a Flexbox row of popular destination cards |
| `destinations.html` | Grid page layout (header / sidebar / main / footer) with a Grid image gallery of 9 domestic routes |
| `booking.html` | Search results and passenger details form |
| `styles.css` | Single shared stylesheet used by all three pages |

## Where Flexbox and Grid are used

**Flexbox**
- Site header / navigation bar (`index.html`, `booking.html`, `destinations.html`) — logo left, links right, vertically centered, spaced with `gap`
- Popular destination card row (`index.html`) — equal-height cards in a row with consistent spacing and a hover lift effect
- Search form and passenger form rows (`index.html`, `booking.html`) — field pairs laid out side by side, wrapping to a column on mobile

**CSS Grid**
- Page layout (`destinations.html`) — `grid-template-areas` defining header, sidebar, main content, and footer regions
- Image gallery (`destinations.html`) — `repeat(auto-fit, minmax(180px, 1fr))` grid of 9 destination tiles with a hover/focus caption overlay

## Responsiveness

A shared media query (`max-width: 600px`) stacks the header, form rows, and destination cards vertically, and collapses the `destinations.html` grid layout from a two-column (sidebar + main) layout into a single column.

## Running locally

No build step or dependencies — just open `index.html` in a browser, or serve the folder locally:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Notes

- Destination images are CSS gradient placeholders standing in for real photography — replace with actual photos before final submission if desired.
- The booking and search forms are demo-only and do not submit to a real backend.
