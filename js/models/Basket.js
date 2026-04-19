// ============================================================
//  js/models/Basket.js
//  ES6 class handling all shopping basket logic in TechNest.
//  Works with StorageManager to keep basket contents saved
//  across page navigation via localStorage.
//
//  Each item in the basket is stored as a flat object:
//  { id, name, price, image, qty }
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 7 - Basket CRUD and localStorage Integration
// ============================================================

class Basket {

    constructor() {
        this.storage = new StorageManager('technest-basket');
        this.items   = [];
        this.loadFromStorage();
    }


    // ── Add item ──────────────────────────────────────────────
    // Adds a product to the basket. If it is already in the
    // basket the quantity is increased rather than duplicating.

    addItem(product, qty) {
        const existing = this.items.find(function (item) {
            return item.id === product.id;
        });

        if (existing) {
            existing.qty += qty;
        } else {
            this.items.push({
                id    : product.id,
                name  : product.name,
                price : product.price,
                image : product.image,
                qty   : qty
            });
        }

        this.saveToStorage();
    }


    // ── Update quantity ───────────────────────────────────────
    // Updates the quantity of a basket item by product id.
    // If the new quantity is 0 or less the item is removed.

    updateQty(id, qty) {
        if (qty <= 0) {
            this.removeItem(id);
            return;
        }

        const item = this.items.find(function (i) {
            return i.id === id;
        });

        if (item) {
            item.qty = qty;
            this.saveToStorage();
        }
    }


    // ── Remove item ───────────────────────────────────────────
    // Removes an item from the basket by product id.

    removeItem(id) {
        this.items = this.items.filter(function (item) {
            return item.id !== id;
        });
        this.saveToStorage();
    }


    // ── Get total ─────────────────────────────────────────────
    // Returns the total cost of all items combined.

    getTotal() {
        return this.items.reduce(function (total, item) {
            return total + (item.price * item.qty);
        }, 0);
    }


    // ── Get count ─────────────────────────────────────────────
    // Returns the total number of individual items across all
    // entries. Used to update the navbar basket badge.

    getCount() {
        return this.items.reduce(function (count, item) {
            return count + item.qty;
        }, 0);
    }


    // ── Is empty ──────────────────────────────────────────────
    // Returns true if the basket has no items.

    isEmpty() {
        return this.items.length === 0;
    }


    // ── Clear ─────────────────────────────────────────────────
    // Empties the basket and clears localStorage.
    // Called after a successful checkout.

    clear() {
        this.items = [];
        this.storage.clear();
    }


    // ── Save to storage ───────────────────────────────────────

    saveToStorage() {
        this.storage.save(this.items);
    }


    // ── Load from storage ─────────────────────────────────────
    // Loads saved basket from localStorage on page load.

    loadFromStorage() {
        const saved = this.storage.load();
        if (saved.length > 0) {
            this.items = saved;
        }
    }

}
