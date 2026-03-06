# Week 2 – Structural Design and HTML Implementation

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 2 of 10

---

## What I Did This Week

This week focused on producing the structural diagrams for the project and building
the HTML skeleton for all five pages. The architecture diagram and class diagram were
drawn up now that the module structure and class design had been confirmed from
week one. The HTML for each page was then built using semantic elements and a
shared navigation bar and footer were put in place across all pages.

---

## 1. Structural Diagrams

Two structural diagrams were produced this week to give a clear visual picture of
how the application is organised before any JavaScript was written. These build on
the architecture plan and class descriptions from week one.

### 1.1 Layered Architecture Diagram

The architecture diagram shows TechNest organised into four layers stacked from
top to bottom.

**Presentation Layer** contains the five HTML pages and the shared style.css and
Bootstrap 5, which handle layout and styling across every page.

**Logic Layer** contains the page-specific JavaScript modules in js/pages/ and the
two ES6 class files, Basket.js and Product.js, which hold the core application logic.

**Data Layer** contains StorageManager.js for reading and writing to localStorage,
and the products.js data file in js/data/ which is a static array of product objects
and acts as the single source of truth. There is no database or server — this is an
intentional design decision.

**Browser Runtime Layer** at the bottom shows the three browser APIs the
application depends on: localStorage API, DOM API and URL/Location API.

### 1.2 Class Diagram

The class diagram shows the three ES6 classes and how they relate to each other.

**Product** holds six properties — id, name, price, category, description and image —
plus a constructor and a getSummary() method. It has no dependencies on the
other classes.

**Basket** is the most involved class. It holds an items array and has methods for
addItem(), updateQty(), removeItem(), getTotal(), getCount(), clear(),
loadFromStorage() and saveToStorage(). Product objects are stored inside the
Basket items array, shown by a solid arrow from Product to Basket.

**StorageManager** handles all localStorage interaction. It has a KEY property and
five methods: constructor(key), save(), load(), clear() and exists(). The dashed
arrow from Basket to StorageManager shows the dependency — Basket calls
StorageManager to persist and retrieve its state.

---

## 2. HTML Structure

All five HTML pages were built this week using semantic HTML5 elements. Each page
shares the same navigation bar and footer. No styling or JavaScript was added at
this stage — the focus was purely on getting the correct structure in place.

### 2.1 Shared Elements

A shared navigation bar was built and copied across all five pages. It contains:

- TechNest logo/brand name on the left linking back to index.html
- A Products link in the centre navigation
- A Basket icon on the right with a badge showing the item count (set to 0 for now)

A shared footer was also added to each page containing the project name and
student number.

### 2.2 Page Structures Built

**index.html – Home Page**

```
<header>
  <nav> -- shared navbar </nav>
</header>
<main>
  <section class="hero"> -- heading, description, Shop Now button </section>
  <section class="categories"> -- category filter buttons </section>
  <section class="featured-products"> -- placeholder for product cards </section>
</main>
<footer> -- shared footer </footer>
```

**products.html – Product Listing**

```
<header>
  <nav> -- shared navbar </nav>
</header>
<main>
  <section class="filters">
    <input type="search"> -- keyword search
    <select> -- sort by price dropdown
    <div class="category-buttons"> -- category filter buttons
  </section>
  <section class="product-grid"> -- placeholder for rendered product cards </section>
</main>
<footer> -- shared footer </footer>
```

**product-detail.html – Product Detail**

```
<header>
  <nav> -- shared navbar </nav>
</header>
<main>
  <a href="products.html"> -- Back to Products link
  <section class="product-detail">
    <div class="product-image"> -- large product image placeholder
    <div class="product-info">
      -- product name heading
      -- category badge
      -- description paragraph
      -- price display
      -- quantity input
      -- Add to Basket button
    </div>
  </section>
</main>
<footer> -- shared footer </footer>
```

**basket.html – Basket Page**

```
<header>
  <nav> -- shared navbar </nav>
</header>
<main>
  <section class="basket-layout">
    <div class="basket-items"> -- list of basket items (empty placeholder)
    <div class="order-summary">
      -- subtotal display
      -- Proceed to Checkout button
    </div>
  </section>
  <p class="empty-basket"> -- Your basket is empty message (hidden by default)
</main>
<footer> -- shared footer </footer>
```

**checkout.html – Checkout Page**

```
<header>
  <nav> -- shared navbar </nav>
</header>
<main>
  <section class="checkout-layout">
    <form id="checkout-form">
      <fieldset> -- Personal Details: first name, last name, email
      <fieldset> -- Delivery Address: address line 1, address line 2, city, postcode
      <fieldset> -- Payment Details: card number, expiry date, CVV
      <button type="submit"> -- Place Order
    </form>
    <div class="order-summary"> -- basket summary and total
  </section>
  <div class="confirmation" hidden> -- Thank you message shown after order
</main>
<footer> -- shared footer </footer>
```

---

## 3. Bootstrap Integration

Bootstrap 5 was linked via CDN in the `<head>` of every page this week. No custom
CSS was added yet. The following Bootstrap classes were used in the HTML structure
to get the basic responsive layout working:

| Class | Purpose |
|-------|---------|
| container | Centres content with consistent side margins |
| row / col | Grid layout for two-column pages (detail, basket, checkout) |
| navbar / navbar-expand-lg | Responsive navigation bar |
| btn / btn-primary | Styled buttons |
| badge | Basket item count in the navbar |
| card | Product card structure on the products page |
| form-control | Styled form inputs on the checkout page |

---

## 4. Decisions Made This Week

**Semantic HTML over divs** — semantic elements like `<main>`, `<section>`,
`<header>`, `<footer>` and `<fieldset>` were used throughout rather than plain
`<div>` elements wherever the element has a meaningful role on the page.

**Shared navbar copied manually** — at this stage the navbar is copied and pasted
into each HTML file. There is no templating system since TechNest has no backend.
This means if the navbar changes it needs updating in all five files, which is
acceptable for a five-page project.

**Confirmation div hidden with `hidden` attribute** — on the checkout page the
confirmation message is placed in the HTML but hidden using the HTML `hidden`
attribute. JavaScript will show it and hide the form when the order is placed.

**Empty basket message hidden by default** — similarly on the basket page the
empty basket message is in the HTML but hidden. JavaScript will toggle it depending
on whether the basket has items.

---

## 5. Week 2 Summary

- Produced the layered architecture diagram showing the four-layer structure
- Produced the class diagram showing Product, Basket and StorageManager
- Built semantic HTML structure for all five pages
- Set up the shared navigation bar and footer across all pages
- Linked Bootstrap 5 via CDN on every page
- Committed HTML structure to GitHub

**Next week:** Add custom CSS styling and begin work on the products data file and
product card rendering on the products page.
