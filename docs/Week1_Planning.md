# Week 1 – Requirements and Architecture Design

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 1 of 10

---

## What I Did This Week

This week was all about planning before writing any code. I wrote out the
requirements for the application, planned how the folders and files will be
structured, described what each JavaScript class will do, and sketched out
what each page needs to look like.

---

## 1. Requirements

Before starting to build anything I needed to figure out exactly what the
app has to do. I split the requirements into two types — functional
(what the app does) and non-functional (how well it does it).

### 1.1 Functional Requirements

These are the actual features the app needs to have.

| ID | Requirement | Priority |
|----|-------------|----------|
| FR01 | Display a list of products loaded from a JavaScript data file | Must |
| FR02 | Each product shows name, image, price and category | Must |
| FR03 | User can filter products by category | Must |
| FR04 | User can search for products by name | Must |
| FR05 | User can sort products by price (low to high / high to low) | Must |
| FR06 | Clicking a product opens its individual detail page | Must |
| FR07 | Product detail page loads the correct product using a URL parameter | Must |
| FR08 | Product detail page shows full description, image, price and add-to-basket button | Must |
| FR09 | User can add a product to the basket from the detail page | Must |
| FR10 | User can view all items currently in their basket | Must |
| FR11 | User can update the quantity of an item in the basket | Must |
| FR12 | User can remove an item from the basket | Must |
| FR13 | Basket automatically recalculates the total when items change | Must |
| FR14 | Basket contents are saved to localStorage so they persist on page refresh | Must |
| FR15 | Checkout page has a form with name, email, address and card fields | Must |
| FR16 | Checkout form validates all fields before submission | Must |
| FR17 | A confirmation message is shown after successful checkout | Must |
| FR18 | Navigation bar shows the current number of items in the basket | Want |
| FR19 | User can continue shopping from the basket page without losing basket contents | Want |

### 1.2 Non-Functional Requirements

These are about quality, performance and how the app is built rather than
specific features.

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR01 | App must be fully responsive on desktop, tablet and mobile | Must |
| NFR02 | All pages load quickly in a browser with no build tools or server needed | Must |
| NFR03 | Code is split into separate modules — data, models, pages | Must |
| NFR04 | All JavaScript uses ES6+ syntax including classes, modules and arrow functions | Must |
| NFR05 | App works correctly in Chrome and Firefox at minimum | Must |
| NFR06 | Variable and function names are clear and consistent throughout | Must |
| NFR07 | Visual design is consistent across all pages | Must |
| NFR08 | Error messages and validation feedback are easy for the user to understand | Must |
| NFR09 | No back-end server or database — everything runs client-side only | Must |
| NFR10 | Git used for version control with regular commits after each meaningful change | Must |

---

## 2. Architecture Plan

### 2.1 Technologies

| Technology | What it is used for |
|------------|---------------------|
| HTML5 | Structure and content of each page |
| CSS3 | Custom styling on top of Bootstrap |
| Bootstrap 5 | Responsive grid layout and UI components |
| JavaScript ES6+ | All application logic, classes and DOM manipulation |
| localStorage API | Saving basket contents in the browser |
| Visual Studio Code | Code editor |
| Git and GitHub | Version control and tracking progress |
| Chrome Developer Tools | Testing, debugging and checking responsiveness |

### 2.2 Folder Structure
```
technest-webapp/
├── index.html                  -- Home / landing page
├── products.html               -- Product listing with filter and search
├── product-detail.html         -- Individual product detail page
├── basket.html                 -- Basket page
├── checkout.html               -- Checkout form and confirmation
├── css/
│   └── style.css               -- All custom CSS styles
├── js/
│   ├── data/
│   │   └── products.js         -- Product data as JavaScript objects
│   ├── models/
│   │   ├── Product.js          -- ES6 class for a single product
│   │   ├── Basket.js           -- ES6 class handling all basket logic
│   │   └── Storage.js          -- ES6 class wrapping localStorage
│   └── pages/                  -- Page-specific JS files (added later)
├── assets/
│   └── images/                 -- Product images
└── docs/                       -- Planning documents
```

### 2.3 JavaScript Classes

**Product.js**  
Represents a single product. Each product in the data file gets turned into
a Product object when the app loads. It will store things like the product
ID, name, description, price, category and image path.

**Basket.js**  
Handles everything to do with the shopping basket. This includes adding a
product, updating the quantity of an existing item, removing an item,
calculating the total price and returning the current list of items. It
works together with the Storage class to save and load from localStorage.

**Storage.js**  
A wrapper around the browser's localStorage API. Rather than writing
localStorage calls all over the codebase, this class handles it all in one
place. It will have methods for saving the basket, loading the basket and
clearing it.

### 2.4 Page Flow
```
Home Page
    └── Products Page
            └── Product Detail Page
                    └── Basket Page
                            └── Checkout Page
                                    └── Confirmation Message
```

The navigation bar is visible on every page so the user can jump to the
basket or back to products at any time.

---

## 3. Wireframe Descriptions

These are text descriptions of what each page should look like. I used
these as a guide when drawing the actual wireframes on paper.

### Home Page (index.html)

**Layout:** Full-width header, large hero/banner section, row of category
buttons, footer.

**Elements:**
- Navigation bar with TechNest logo on the left, links to Products and
  Basket on the right, basket item count badge
- Hero section with a welcome heading, short description of the shop and
  a "Shop Now" button linking to products.html
- A row of category buttons (e.g. Laptops, Phones, Accessories, All)
- Simple footer with project name and student number

---

### Products Page (products.html)

**Layout:** Navigation bar, filter/search bar below it, grid of product
cards, footer.

**Elements:**
- Search input on the left, sort dropdown on the right
- Row of category filter buttons below the search bar
- Grid of product cards — each card has a product image, name, category
  label, price and a "View Details" button
- Grid is 3 columns on desktop, 2 on tablet, 1 on mobile

---

### Product Detail Page (product-detail.html)

**Layout:** Navigation bar, two-column layout in the main area (image left,
info right), footer.

**Elements:**
- A "Back to Products" link above the two columns
- Left column: large product image
- Right column: product name as heading, category badge, description
  paragraph, price in large bold text, quantity input, "Add to Basket"
  button

---

### Basket Page (basket.html)

**Layout:** Navigation bar, two-column layout (basket items on left, order
summary on right), footer.

**Elements:**
- Left side: list of basket items — each row shows a small product image,
  product name, unit price, quantity input, remove button and line total
- Right side: order summary box with subtotal and "Proceed to Checkout"
  button
- If basket is empty: a message saying "Your basket is empty" and a link
  back to the products page

---

### Checkout Page (checkout.html)

**Layout:** Navigation bar, two-column layout (form on left, order summary
on right), footer.

**Elements:**
- Left side form split into three sections:
  - Personal Details: First Name, Last Name, Email
  - Delivery Address: Address Line 1, Address Line 2 (optional), City,
    Postcode
  - Payment Details: Card Number, Expiry Date, CVV
- "Place Order" button at the bottom of the form
- Right side: small summary of basket items and final total
- After successful submission: main content replaced with a confirmation
  message, basket cleared

---

## 4. Week 1 Summary

- Wrote all functional and non-functional requirements
- Planned the folder and file structure for the whole project
- Described what each of the three JavaScript classes will do
- Described the layout and elements for all five pages
- Created the GitHub repository and set up the initial folder structure
- Made the first commit

**Next week:** Build the HTML structure for all five pages including the
shared navigation bar and footer.
