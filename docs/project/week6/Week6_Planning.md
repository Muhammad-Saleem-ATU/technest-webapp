# Week 6 – Product Detail Page and Favicon

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 6 of 10

---

## What I Did This Week

This week the product detail page was made fully functional. Up until now clicking
View Details on any product card would open product-detail.html but the page just
showed placeholder text and a static image. The page script written this week reads
the product id from the URL, finds the matching product in the data array and fills
in all the details dynamically. The Add to Basket button was also implemented this
week so users can now add products to their basket with a selected quantity. A
favicon was added to all five pages as a small finishing touch.

---

## 1. New File

### 1.1 js/pages/product-detail.js

The page script for product-detail.html. This is the main task for week 6.

**How the page loads a product:**

When a user clicks View Details on a product card they are sent to
`product-detail.html?id=p001` for example. The `?id=p001` part is the URL
parameter. This script reads that id on page load, searches the `productsData`
array for a matching product and then fills in the page elements with the real
data. If no matching product is found a friendly error message is shown instead.

**Functions:**

- `getProductFromUrl()` — uses `URLSearchParams` to read the `?id=` value from
  the URL. Then uses `Array.find()` to search `productsData` for a product whose
  id matches. Returns the product object if found or `null` if not.

- `renderProduct(product)` — takes the product object returned by
  `getProductFromUrl()` and fills in each element on the page by id. Updates the
  image `src` and `alt`, the category badge, the product name, description and
  price. Also updates `document.title` so the browser tab shows the product name
  rather than just "TechNest - Product Detail".

- `showNotFound()` — called if `getProductFromUrl()` returns null. Replaces the
  product detail section with a simple error message and a button back to the
  products page. This handles cases where someone types a wrong URL manually.

- `setupAddToBasket(product)` — attaches a click listener to the Add to Basket
  button. When clicked it reads the quantity input value, loads the existing basket
  from localStorage, checks if the product is already in the basket and either
  increases the existing quantity or adds it as a new item. Saves the updated
  basket back to localStorage and calls both `updateBasketBadge()` and
  `showAddedFeedback()`.

- `showAddedFeedback(btn)` — changes the button text to "Added!" and disables it
  briefly so the user knows the action worked. After 1.5 seconds it resets back to
  "Add to Basket" and re-enables.

- `updateBasketBadge()` — reads directly from localStorage and updates both the
  desktop and mobile basket badge counts. StorageManager is not used yet as it is
  not created until week 7.

---

## 2. HTML Changes

### 2.1 product-detail.html

- Favicon link tag added in `<head>`
- Three script tags added before the closing `</body>` tag in the correct load
  order — Product.js must load before products.js, and products.js must load before
  product-detail.js because the page script reads from `productsData`

```html
<script src="js/models/Product.js"></script>
<script src="js/data/products.js"></script>
<script src="js/pages/product-detail.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/..."></script>
```

### 2.2 All other HTML files

Favicon link tag added to the `<head>` of index.html, products.html, basket.html
and checkout.html:

```html
<link rel="shortcut icon" type="image/x-icon" href="icons/favicon.ico">
```

---

## 3. Favicon

A favicon was generated using favicon.io with the following settings:

- Text: TN
- Background: Rounded
- Background colour: #1a1a1a
- Font colour: #E87722
- Font family: Roboto
- Font variant: Bold 700
- Font size: 110

The downloaded `favicon.ico` file was placed in a new `icons/` folder in the
project root. The favicon shows in the browser tab on all five pages.

---

## 4. File Structure After Week 6

```
technest-webapp/
├── index.html                     -- updated: favicon added
├── products.html                  -- updated: favicon added
├── product-detail.html            -- updated: favicon + scripts linked
├── basket.html                    -- updated: favicon added
├── checkout.html                  -- updated: favicon added
├── css/
│   └── style.css                  -- unchanged
├── icons/
│   └── favicon.ico                -- NEW: site favicon
├── js/
│   ├── data/
│   │   └── products.js            -- unchanged
│   ├── models/
│   │   ├── Product.js             -- unchanged
│   │   ├── Basket.js              -- added week 7
│   │   └── StorageManager.js      -- added week 7
│   └── pages/
│       ├── index.js               -- unchanged
│       ├── products.js            -- unchanged
│       ├── product-detail.js      -- NEW: detail page script
│       ├── basket.js              -- added week 7
│       └── checkout.js            -- added week 8
├── assets/
│   └── images/                    -- unchanged
└── docs/
    └── diagrams/
```

---

## 5. Decisions Made This Week

**URLSearchParams to read the product id** — the built-in `URLSearchParams` API
makes reading URL parameters straightforward without needing any extra library or
string manipulation. `new URLSearchParams(window.location.search)` gives access to
all parameters in the URL and `.get('id')` returns the value cleanly.

**Array.find() to look up the product** — rather than looping through the whole
array manually, `Array.find()` was used to search `productsData` for the first
product whose id matches the URL parameter. It returns the product object directly
which is cleaner and more readable than a for loop with a break statement.

**document.title updated dynamically** — the page title shown in the browser tab
is updated to include the product name when the page loads. This is a small detail
but it makes the browser history and open tabs more useful if someone has multiple
product pages open.

**Add to Basket without StorageManager** — the basket integration this week is
intentionally simple. The item is saved directly to localStorage as a plain object
with id, name, price, image and qty. StorageManager and the full Basket class will
be introduced in week 7 and will take over managing the basket properly. The data
format saved this week is compatible with what week 7 will expect so nothing will
break when that transition happens.

**Quantity increase instead of duplicate** — if a user adds a product that is
already in the basket the script increases the existing quantity rather than adding
a second entry for the same product. This prevents duplicates in the basket and is
the expected behaviour for any shopping cart.

**Button feedback with setTimeout** — after clicking Add to Basket the button
text changes to "Added!" and is disabled for 1.5 seconds. This gives the user
clear confirmation that the action worked without needing a popup or alert. Using
`setTimeout` to reset it keeps the code simple.

---

## 6. Week 6 Summary

- Written product-detail.js with URL parameter reading, dynamic rendering and Add
  to Basket functionality
- Product detail page now fully working — loads correct product from URL
- Browser tab title updates to show the product name
- Add to Basket button saves item to localStorage with selected quantity
- Basket badge updates immediately after adding a product
- Favicon generated and added to all five pages
- Committed all new and updated files to GitHub

**Next week:** Write Basket.js and StorageManager.js classes and the basket.js
page script to display all basket items, allow quantity changes and item removal,
and show the running total.
