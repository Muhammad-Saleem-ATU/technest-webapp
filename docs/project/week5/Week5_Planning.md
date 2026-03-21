# Week 5 – Dynamic Rendering and Filtering

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 5 of 10

---

## What I Did This Week

This week was the first time the application actually came to life in the browser.
The product data file was created with 20 products across four categories, and the
two page scripts for the home page and the products page were written. While
testing the products page it became clear that a flat grid of 20 products did not
look right — with 5 products per category, one card always wrapped onto a new
line. The layout was redesigned to show each category as its own labelled section
with a Swiper carousel, which looks much better and makes it easier to browse by
category. A few other small issues were also spotted and fixed during testing this
week, including footer links that were still pointing to the wrong categories and
the home page category buttons not pre-selecting the right filter when arriving on
the products page.

---

## 1. Product Data File

### 1.1 js/data/products.js

A static JavaScript array called `productsData` containing all 20 product objects.
This is the single source of truth for all product information in the application.
Page scripts read from it but never modify it at runtime.

Each object in the array has the same six properties that match the Product class
defined in week 4:

```javascript
{
    id          : 'p001',
    name        : 'ProBook X15 Laptop',
    price       : 899.99,
    category    : 'Laptops',
    description : '...',
    image       : 'assets/images/p001.jpg'
}
```

**Categories and products:**

| Category | Products |
|----------|----------|
| Laptops | ProBook X15, UltraSlim 13, GameForce Pro, WorkStation 17, BudgetBook Essential |
| Phones | NovaPro X, NovaPro Lite, ZenPhone Ultra, CompactView Mini, RugedX Outdoor |
| Audio | SoundWave Pro Headphones, BassCore Earbuds, StudioMix Speaker, ClearVoice USB Microphone, AudioPhile Wired Headphones |
| Gaming | ProPad Elite Controller, RapidClick Gaming Mouse, TactilePro Gaming Keyboard, VisionX 27 Monitor, HyperSound Gaming Headset |

Image paths use placeholder filenames (assets/images/p001.jpg through p020.jpg).
Real product images will be downloaded from Unsplash and added to assets/images/
this week or next.

---

## 2. Page Scripts Written

### 2.1 js/pages/products.js

The page script for products.html. Handles everything on the products page —
building the category sections and carousels, filtering by category, searching by
keyword, sorting by price and reading the category from the URL on load.

**State variables at the top of the file:**

- `CATEGORIES` — a constant array listing the four category names in display order
- `activeCategory` — starts as `'All'`, updated when a filter button is clicked
- `searchQuery` — starts as an empty string, updated on every keystroke
- `sortOrder` — starts as `'price-asc'`, updated when the sort dropdown changes
- `swiperInstances` — an array holding references to each active Swiper instance
  so they can be destroyed and rebuilt cleanly when filters change

**Functions:**

- `renderSections()` — the main function. Destroys any existing Swiper instances
  first, then loops through the categories to show, filters and sorts the products
  for each one, builds the HTML for each category section including the Swiper
  markup, injects everything into the page and then initialises a fresh Swiper
  instance for each section.
- `setupFilterButtons()` — attaches click listeners to each filter button. Updates
  `activeCategory` from the button's `data-category` attribute and calls
  `renderSections()`.
- `setupSearch()` — attaches an `input` event listener to the search box so
  sections re-render on every keystroke.
- `setupSort()` — attaches a `change` listener to the sort dropdown.
- `checkUrlCategory()` — reads `?category=` from the URL using `URLSearchParams`.
  If a category is found it sets `activeCategory` and highlights the matching
  filter button before the sections render. This means clicking a category button
  on the home page arrives on the products page with that category already showing.
- `updateBasketBadge()` — reads directly from localStorage using
  `localStorage.getItem()` and updates the navbar badge count. StorageManager
  is not used here yet since it is not created until week 7.

### 2.2 js/pages/index.js

The page script for index.html. Renders four featured products on the home page
and updates the basket badge.

**Functions:**

- `renderFeaturedProducts()` — loops through the four category names and uses
  `Array.find()` to get the first product from each category in `productsData`.
  Builds a product card for each and injects them into the `featured-products`
  container.
- `updateBasketBadge()` — same as products.js, reads directly from localStorage.
  No StorageManager used yet.

---

## 3. HTML and CSS Changes

### 3.1 products.html

The products page was redesigned this week from a single flat grid to a
category-section layout. The old `#product-grid` div was replaced with a
`#category-sections` container that JavaScript now fills with one section per
category, each containing a Swiper carousel.

- Old single grid replaced with `#category-sections` div
- `#no-results` message div added for when search finds nothing
- Swiper CSS added in `<head>` via CDN
- Swiper JS added in `<body>` before the page scripts
- Filter buttons updated with `class="filter-btn"` and `data-category` attributes
- Script tags added in the correct load order

### 3.2 index.html

- Category section buttons updated to include `?category=Laptops` etc in the href
  so clicking through pre-selects the right category on the products page
- Footer shop links updated to match
- Script tags added in the correct load order

### 3.3 style.css

Swiper-specific styles added at the bottom of the stylesheet:

- `.category-section-block` — padding and bottom border between each section
- `.category-section-title` — orange underlined heading above each carousel
- Swiper arrow and pagination dot colours overridden to match the orange theme

### 3.4 Fixes spotted during testing

While testing the products page this week a couple of issues were found in files
from earlier weeks and fixed at the same time:

- `basket.html` and `checkout.html` footer shop links were still pointing to
  `products.html` with no category and still listed Accessories instead of Audio
  and Gaming. Updated to use `?category=` links with the correct categories.

---

## 4. File Structure After Week 5

```
technest-webapp/
├── index.html                     -- updated: scripts linked, category URLs fixed
├── products.html                  -- updated: Swiper layout, scripts linked
├── product-detail.html            -- unchanged
├── basket.html                    -- updated: footer links corrected
├── checkout.html                  -- updated: footer links corrected
├── css/
│   └── style.css                  -- updated: Swiper styles added
├── js/
│   ├── data/
│   │   └── products.js            -- NEW: 20 product objects
│   ├── models/
│   │   ├── Product.js             -- unchanged, created week 4
│   │   ├── Basket.js              -- added week 7
│   │   └── StorageManager.js      -- added week 7
│   └── pages/
│       ├── index.js               -- NEW: featured products and badge
│       └── products.js            -- NEW: category sections, Swiper, filter, search, sort
├── assets/
│   └── images/                    -- product images being added this week
└── docs/
```

---

## 5. Decisions Made This Week

**Swiper carousel per category instead of a flat grid** — when the products page
was first tested with 20 products in a flat grid, 5 products per category meant
one card always wrapped onto a second row creating an uneven layout. Grouping
products by category with a Swiper carousel per section solves this and also makes
browsing by category much clearer. Each category has its own heading and the
carousel shows 4 cards at a time on desktop, scaling down on smaller screens.

**Swiper.js chosen over Bootstrap carousel** — Swiper.js is a dedicated carousel
library that handles responsive breakpoints, touch swiping and smooth transitions
out of the box with very little setup. Bootstrap's built-in carousel is designed
for full-width image sliders rather than multi-card product grids, so Swiper was
the more suitable choice here.

**Destroy and reinitialise Swiper on each filter change** — when the filter,
search or sort changes the sections need to be rebuilt with new content. Simply
updating the HTML is not enough because Swiper has already attached itself to the
old elements. Each Swiper instance is stored in `swiperInstances` and properly
destroyed using `swiper.destroy()` before the HTML is replaced and new instances
are created. This prevents memory leaks and broken carousel behaviour.

**URL parameter for category pre-selection** — rather than relying on the user
to click a filter button again after arriving from the home page, the category
buttons on the home page now pass `?category=Laptops` in the URL. The
`checkUrlCategory()` function reads this on load and sets the active filter
automatically. This is a much better user experience.

**data-category attributes on filter buttons** — each filter button has a
`data-category` attribute rather than a specific id. The script reads
`btn.dataset.category` to get the value, which makes it easy to add a new
category by just adding one button in the HTML with no JavaScript changes needed.

**input event for search** — the search box re-renders on every keystroke so
results update as the user types without needing a search button or Enter key.

---

## 6. Week 5 Summary

- Created products.js data file with 20 product objects across four categories
- Written products.js page script with Swiper category sections, filter, search and sort
- Written index.js page script with featured products and basket badge
- Redesigned products page layout from flat grid to category sections with carousels
- Added Swiper.js via CDN and added Swiper styles to style.css
- Added URL category parameter to home page category buttons
- Updated index.html and products.html with correct scripts and category links
- Fixed footer shop links in basket.html and checkout.html spotted during testing
- Began adding product images to assets/images/
- Committed all new and updated files to GitHub

**Next week:** Write the product-detail.js page script to read the product id from
the URL, load the correct product from the data array and render the full product
detail page including the image, description, price, quantity input and Add to
Basket button.
