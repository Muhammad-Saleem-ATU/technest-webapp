# Week 3 – Responsive UI Design

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 3 of 10

---

## What I Did This Week

This week was all about making the application look like a real website. The full
custom stylesheet was written, Bootstrap was properly integrated into every page,
and the responsive layout was tested and adjusted across desktop, tablet and mobile
screen sizes. By the end of the week all five pages are styled and working visually,
even though the JavaScript functionality has not been added yet.

---

## 1. Design Decisions

Before writing any CSS, a few decisions were made about the overall visual style of
TechNest.

### 1.1 Colour Scheme

A dark tech theme was chosen to match the electronics and gadgets store concept.
The main background is near-black with a bright orange used as the accent colour
for buttons, highlights and interactive elements. CSS custom properties (variables)
were used to define the colours once at the top of the stylesheet so they can be
changed in one place if needed.

Colours defined:

| Variable | Value | Use |
|----------|-------|-----|
| --orange | #ff6600 | Primary accent, buttons, badges, prices |
| --orange-dark | #cc5200 | Button hover state |
| --black | #0a0a0a | Main background |
| --dark-1 | #111111 | Body background |
| --dark-2 | #1a1a1a | Cards, panels, page header sections |
| --dark-3 | #222222 | Form inputs, basket nav link |
| --border-dark | #333333 | All borders and dividers |
| --text-primary | #ffffff | Main headings and body text |
| --text-secondary | #aaaaaa | Paragraph and secondary text |
| --text-muted | #666666 | Labels, captions, muted elements |

### 1.2 Typography

Arial was used as the font throughout. No Google Fonts were imported to keep the
page loading fast and to avoid any external dependencies beyond Bootstrap. All
headings use bold weight. Navigation links, section titles and buttons use
letter-spacing and uppercase to give a clean tech feel.

### 1.3 Responsive Breakpoints

Two breakpoints were used, matching Bootstrap's standard breakpoints:

- **Tablet (max-width: 768px)** — hero padding reduced, summary panels set to
  static position, footer columns adjusted
- **Mobile (max-width: 576px)** — hero text and heading sizes reduced, navbar
  brand font size reduced, product card image heights reduced, basket item images
  reduced

---

## 2. Components Styled

### 2.1 Navbar

The navbar has a black background with a 2px orange bottom border and is set to
`position: sticky` so it stays visible when the user scrolls. The TechNest brand name
uses letter-spacing and uppercase styling. Nav links have a sliding orange underline
animation on hover using a CSS `::after` pseudo-element and `transform: scaleX()`.

The basket link on the right is styled differently from the other nav links — it has a
dark background, a border and a slightly different hover effect to make it stand out
as an action button rather than just a navigation link.

### 2.2 Buttons

Two button styles were created:

- **btn-primary** — solid orange background, used for main actions like Shop Now,
  Add to Basket and Place Order. Has an orange glow box-shadow on hover.
- **btn-outline-orange** — transparent with an orange border, used for category
  filter buttons and secondary actions. Fills with orange on hover or when active.

### 2.3 Hero Section

A large full-width hero section on the home page with a black background and two
subtle radial gradients using a low-opacity orange to give a gentle glow effect without
being distracting. The heading uses uppercase and letter-spacing to match the
overall design style.

### 2.4 Product Cards

Product cards use a dark background with a border that turns orange and adds a box
shadow on hover, using `transform: translateY(-5px)` to lift the card slightly. Each
card has a fixed height image, a category badge styled with a small orange border
and a semi-transparent orange background, and the price shown in orange.

### 2.5 Page Header Banner

A dark banner section used at the top of the Products, Basket and Checkout pages
to display the page title. Styled consistently across all three pages.

### 2.6 Search and Filter Bar

A dark section below the page header on the products page, containing the search
input and sort dropdown. Both inputs are styled with a dark background, border that
turns orange on focus, and a subtle orange glow focus ring.

### 2.7 Product Detail Page

The product detail page uses a two-column Bootstrap grid. The product image takes
the full left column. The right column shows the category badge, product name, price
in large orange text with a glow effect, description and quantity input. A Back to
Products link is styled in muted grey and turns orange on hover.

### 2.8 Basket Page

Basket items are displayed in a flex row with a small product image, item name,
price, quantity input and a remove button. The remove button uses a red colour on
hover to make it clear it is a destructive action. The order summary panel on the
right is sticky so it stays in view while scrolling through a long basket.

### 2.9 Checkout Page

The checkout form is split into three visual sections using small orange section
titles with an underline. The form inputs match the global dark input style. The
confirmation message shown after a successful order uses a green colour scheme
with a left border accent to distinguish it from the rest of the page.

### 2.10 Footer

A full multi-column footer with a black background and a 2px orange top border to
match the navbar. It includes a brand column with a tagline and social icon links, a
Shop column, an Info column and a Legal column. The footer bottom bar shows the
copyright line and legal links. On mobile the columns stack and the bottom bar
switches to a centred column layout.

### 2.11 Scrollbar

Custom scrollbar styling was added for Chrome, Edge and Safari using
`::-webkit-scrollbar`. A thin dark scrollbar is shown with an orange thumb on hover.
Firefox is handled separately using `scrollbar-width: thin` and `scrollbar-color`.

---

## 3. File Structure After Week 3

```
technest-webapp/
├── index.html
├── products.html
├── product-detail.html
├── basket.html
├── checkout.html
├── css/
│   └── style.css                  -- COMPLETED this week
├── js/
│   ├── data/                      -- empty, products.js added week 4
│   ├── models/                    -- empty, classes added week 4
│   └── pages/                     -- empty, page scripts added week 5+
├── assets/
│   └── images/                    -- empty, images added week 4
└── docs/
```

---

## 4. Decisions Made This Week

**CSS variables for all colours** — defining the colour palette as custom properties
at the top of the stylesheet meant every component used the same values. Changing
the orange accent or background colour only requires editing one line rather than
searching through the entire file.

**No external fonts** — Google Fonts was considered but ruled out. Loading an
external font adds a network request that could slow the page down. Arial is available
on all devices without any additional loading. The letter-spacing and uppercase
styling used throughout gives enough visual character without needing a custom font.

**Sticky navbar and sticky summary panels** — the navbar uses `position: sticky`
so the user always has access to the basket link and navigation. The order summary
panels on the basket and checkout pages are also sticky so the user can see the
total while scrolling through a long form or a large basket. On mobile these are set
back to `position: static` because sticky elements on small screens can take up too
much space.

**Orange glow effects used sparingly** — the glow box-shadow on buttons and the
price display gives the site a tech feel but was kept subtle. Using it on every element
would make the page look cluttered, so it was only applied to the most important
interactive elements.

---

## 5. Week 3 Summary

- Defined the full colour palette as CSS custom properties
- Styled the navbar with sticky positioning and hover underline animations
- Created btn-primary and btn-outline-orange button styles
- Styled the hero section with subtle radial gradient overlays
- Built and styled the product card component
- Styled the page header banner, search bar, product detail layout and back link
- Styled the basket item rows, remove button and sticky order summary panel
- Styled the checkout form sections, validation feedback states and confirmation message
- Built the full multi-column footer with bottom bar
- Added custom scrollbar styles for Chrome, Firefox and Edge
- Applied and tested responsive breakpoints for tablet and mobile
- Committed the completed stylesheet to GitHub

**Next week:** Write the three ES6 classes (Product, Basket, StorageManager) and
create the product data file with a full set of product objects.
