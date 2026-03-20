# Week 4 – Data Modelling and OOP Structure

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 4 of 10

---

## What I Did This Week

This week was about starting the JavaScript side of the application. The focus was
on defining what a product looks like in code before anything gets rendered in the
browser. The Product class was written as the first ES6 model in the project.

The original proposal listed all three classes and the data file as week 4 work, but
after thinking it through that did not make practical sense. Basket.js and
StorageManager.js are only needed when the basket functionality is built in week 7,
and the products data file is only needed when dynamic rendering is implemented in
week 5. Creating files weeks before anything uses them would have been putting the
cart before the horse. So the plan was adjusted — Product.js is written now because
it defines the data structure the rest of the project depends on, and the other files
will be created in the weeks they are actually needed.

---

## 1. Class Created

### 1.1 Product.js (js/models/Product.js)

Represents a single product in the shop. When the products page loads in week 5,
each entry in the data file will be turned into a Product object.

**Properties:**
- `id` — unique string identifier (e.g. "p001")
- `name` — product display name
- `price` — stored as a number (e.g. 899.99) so arithmetic works correctly
  when calculating basket totals
- `category` — category string used for filtering (e.g. "Laptops")
- `description` — full product description shown on the detail page
- `image` — relative path to the product image (e.g. assets/images/p001.jpg)

**Methods:**
- `constructor(id, name, price, category, description, image)` — sets all six
  properties on the object
- `getSummary()` — returns a short string combining the name and formatted
  price, used when displaying items in the basket and checkout summary

**Key decision:** Price is stored as a plain number rather than a formatted string.
Doing arithmetic on a string like "€899.99" would not work. The euro symbol and
two decimal places are added at the display stage only, keeping the data clean
and the maths reliable.

---

## 2. File Structure After Week 4

```
technest-webapp/
├── index.html
├── products.html
├── product-detail.html
├── basket.html
├── checkout.html
├── css/
│   └── style.css                  -- completed in week 3
├── js/
│   ├── data/                      -- empty, products.js added week 5
│   ├── models/
│   │   ├── Product.js             -- NEW: ES6 Product class
│   │   ├── Basket.js              -- added week 7
│   │   └── StorageManager.js      -- added week 7
│   └── pages/                     -- empty, page scripts added week 5+
├── assets/
│   └── images/                    -- empty, images added week 5
└── docs/
```

---

## 3. Decisions Made This Week

**Only Product.js created this week** — the original proposal had all three classes
and the data file in week 4. After thinking it through, Basket.js and
StorageManager.js only make sense to write in week 7 when the basket page is
being built and they are actually needed. The products data file belongs in week 5
alongside the rendering script that uses it. Creating files weeks before anything
uses them felt unnatural and went against the incremental approach being followed
throughout the project.

**StorageManager.js renamed from Storage.js** — the original plan in weeks one and
two used Storage.js as the filename. The name was changed to StorageManager.js
because it makes the purpose of the class clearer. The README, report and class
diagram were all updated to reflect this ahead of the class being written in week 7.

**Price stored as a number** — price is stored as a plain number rather than a
formatted string so that arithmetic works correctly when the basket calculates
totals. Currency formatting is handled at the display stage only.

---

## 4. Week 4 Summary

- Created Product.js ES6 class with six properties and two methods
- Decided to defer products data file to week 5 and Basket/StorageManager to week 7
- Updated the README and planning notes to reflect the adjusted timeline
- Committed Product.js to GitHub

**Next week:** Create the products data file with 20 product objects and write the
products.js page script to render product cards dynamically using DOM manipulation,
with category filtering, keyword search and sort functionality.
