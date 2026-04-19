# Week 7 – Basket CRUD and localStorage Integration

**Project:** TechNest – Front-End eCommerce Web Application  
**Student:** Muhammad Saleem | L00196822  
**Institution:** Atlantic Technological University  
**Week:** 7 of 10

---

## What I Did This Week

This week was the most complex week so far. The basket page was made fully
functional using two new JavaScript classes — Basket and StorageManager — along
with a new page script for basket.html. The Basket class handles all the basket
logic such as adding items, updating quantities and calculating totals. The
StorageManager class handles saving and loading data from localStorage so the
basket contents survive page navigation. All other page scripts were also updated
this week to use the Basket class properly instead of reading localStorage directly
as they had been doing since week 5.

---

## 1. New Model Classes

### 1.1 js/models/StorageManager.js

A wrapper class around the browser's localStorage API. The purpose of this class
is to keep all localStorage access in one place. If the storage method ever needed
to change, only this file would need updating rather than every page script.

**Constructor:** `constructor(key)` — takes a storage key string and saves it as
`this.KEY`. All save and load operations use this key.

**Methods:**

- `save(data)` — converts the data to a JSON string using `JSON.stringify()` and
  saves it to localStorage under `this.KEY`.
- `load()` — reads from localStorage, parses the JSON string and returns the data.
  Returns an empty array if nothing has been saved yet.
- `clear()` — removes the entry from localStorage using `removeItem()`.
- `exists()` — returns true if a value exists under this key, false otherwise.

### 1.2 js/models/Basket.js

The main basket class. Handles all basket operations and uses StorageManager
internally to keep the basket saved across page navigation.

Each item in the basket is stored as a plain object with five properties:
`{ id, name, price, image, qty }`

**Constructor:** `constructor()` — creates a `new StorageManager('technest-basket')`,
sets `this.items` to an empty array and immediately calls `loadFromStorage()` to
restore any previously saved basket.

**Methods:**

- `addItem(product, qty)` — checks if the product is already in the basket using
  `Array.find()`. If it is, the quantity is increased. If not, a new item object
  is pushed to `this.items`. Calls `saveToStorage()` after either change.
- `updateQty(id, qty)` — finds the item by id and updates its quantity. If the new
  quantity is 0 or less the item is removed by calling `removeItem()`.
- `removeItem(id)` — uses `Array.filter()` to return a new array without the item
  matching the given id. Calls `saveToStorage()` afterwards.
- `getTotal()` — uses `Array.reduce()` to calculate the total cost of all items
  by multiplying each item's price by its quantity and summing the results.
- `getCount()` — uses `Array.reduce()` to count the total number of individual
  items across all entries. Used to update the navbar badge.
- `isEmpty()` — returns true if `this.items.length === 0`.
- `clear()` — empties `this.items` and calls `storage.clear()`. Used after a
  successful checkout in week 8.
- `saveToStorage()` — calls `this.storage.save(this.items)`.
- `loadFromStorage()` — calls `this.storage.load()` and assigns the result to
  `this.items` if it is not empty.

---

## 2. New Page Script

### 2.1 js/pages/basket.js

The page script for basket.html. A single `Basket` instance is created at the top
of the file and reused throughout — this ensures the same basket data is used for
all operations on the page.

**Functions:**

- `renderBasket()` — the main function. Checks if the basket is empty and shows
  the empty state message if so. Otherwise hides the empty message, loops through
  `basket.items` building an HTML string with `buildBasketRow()` for each item,
  injects it into the `#basket-items` container, updates the subtotal and total
  in the order summary, then calls `setupRowListeners()`. This function is called
  on load and after every change so the page always reflects the current state.

- `buildBasketRow(item)` — returns an HTML string for a single basket item. Each
  row shows the product image, name, unit price, quantity controls with minus and
  plus buttons, the line subtotal and a remove button. Each button has a
  `data-id` attribute set to the product id so the listeners can identify which
  item was acted on.

- `setupRowListeners()` — uses `querySelectorAll` to find all qty and remove
  buttons and attaches click listeners. This must be called after every
  `renderBasket()` because the HTML is rebuilt each time and previously attached
  listeners are lost. The minus button calls `basket.updateQty()` with qty minus
  one — if qty reaches zero the Basket class removes the item automatically. The
  plus button increases qty by one. The remove button calls `basket.removeItem()`
  to remove the item entirely regardless of quantity.

- `updateBasketBadge()` — uses `basket.getCount()` directly since the Basket
  instance is already loaded on this page. Updates both the desktop and mobile
  badge elements.

---

## 3. Updated Page Scripts

All three existing page scripts were updated this week to use the Basket class
instead of reading localStorage directly as they had been since weeks 5 and 6.

### 3.1 js/pages/product-detail.js

`setupAddToBasket()` was updated to use `new Basket()` and `basket.addItem()`
instead of manually reading and writing localStorage. The Basket class now handles
all the storage internally.

`updateBasketBadge()` was updated to use `new Basket().getCount()`.

### 3.2 js/pages/index.js and js/pages/products.js

`updateBasketBadge()` updated in both files to use `new Basket().getCount()`.

---

## 4. HTML and CSS Changes

### 4.1 index.html, products.html, product-detail.html

StorageManager.js and Basket.js script tags added before Product.js in the correct
load order. StorageManager must load first because Basket depends on it:

```html
<script src="js/models/StorageManager.js"></script>
<script src="js/models/Basket.js"></script>
<script src="js/models/Product.js"></script>
```

### 4.2 style.css

Quantity control styles added at the bottom of the stylesheet for the new basket
row elements:

- `.qty-controls` — flex container for the minus, value and plus elements
- `.qty-btn` — shared style for both minus and plus buttons, orange border on hover
- `.qty-value` — centred bold number between the buttons
- `.item-subtotal` — right-aligned orange line total per item

---

## 5. File Structure After Week 7

```text
technest-webapp/
├── index.html                     -- updated: StorageManager + Basket scripts added
├── products.html                  -- updated: StorageManager + Basket scripts added
├── product-detail.html            -- updated: StorageManager + Basket scripts added
├── basket.html                    -- unchanged (scripts already linked)
├── checkout.html                  -- unchanged
├── css/
│   └── style.css                  -- updated: qty control styles added
├── icons/
│   └── favicon.ico                -- unchanged
├── js/
│   ├── data/
│   │   └── products.js            -- unchanged
│   ├── models/
│   │   ├── Product.js             -- unchanged
│   │   ├── Basket.js              -- COMPLETED week 7
│   │   └── StorageManager.js      -- COMPLETED week 7
│   └── pages/
│       ├── index.js               -- updated: uses Basket class
│       ├── products.js            -- updated: uses Basket class
│       ├── product-detail.js      -- updated: uses Basket class
│       ├── basket.js              -- NEW: basket page script
│       └── checkout.js            -- added week 8
├── assets/
│   └── images/
└── docs/
    └── diagrams/
```

---

## 6. Decisions Made This Week

**Single Basket instance on the basket page** — a single `const basket = new Basket()`
is declared at the top of basket.js and reused throughout. This means `loadFromStorage()`
is only called once when the page loads rather than creating a new instance on every
button click. Every button click operates on the same in-memory object and the
class handles saving to localStorage automatically.

**Re-attach listeners after every render** — because `renderBasket()` completely
replaces the innerHTML of the container, any previously attached event listeners
are destroyed along with the old elements. `setupRowListeners()` is called at the
end of every `renderBasket()` to re-attach them to the newly created buttons. This
is simpler than event delegation for this size of project.

**data-id attributes on buttons** — each qty and remove button has `data-id` set
to the product id. The listener reads `btn.dataset.id` to know which item to act
on. This avoids needing to pass the id as a parameter or use closures.

**updateQty handles removal automatically** — the Basket class `updateQty()` method
checks if the new quantity is zero or less and calls `removeItem()` if so. This
means the minus button in basket.js does not need any special logic for the last
item — it just calls `updateQty()` with qty minus one and the class handles the
rest.

**StorageManager as a separate class** — rather than writing `localStorage.setItem()`
and `localStorage.getItem()` directly in every class and script, all storage access
goes through StorageManager. This follows the single responsibility principle and
means the storage key `technest-basket` only needs to be defined in one place.

---

## 7. Week 7 Summary

- Completed StorageManager.js class with save, load, clear and exists methods
- Completed Basket.js class with addItem, updateQty, removeItem, getTotal, getCount,
  isEmpty, clear, saveToStorage and loadFromStorage methods
- Written basket.js page script with full CRUD functionality
- Updated product-detail.js to use Basket class for adding items and badge
- Updated index.js and products.js to use Basket class for badge
- Added StorageManager and Basket script tags to index.html, products.html and
  product-detail.html
- Added qty control CSS to style.css
- Committed all new and updated files to GitHub

**Next week:** Write checkout.js to read the basket contents into the order summary,
handle the checkout form with client-side validation and show a confirmation message
after a successful order. The basket will be cleared after checkout.
