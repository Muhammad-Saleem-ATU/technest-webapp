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

    addItem(product, qty) {

        const productId = String(product.id);

        const existing = this.items.find(item => item.id === productId);

        if (existing) {
            existing.qty += qty;
        } else {
            this.items.push({
                id    : productId,
                name  : product.name,
                price : product.price,
                image : product.image,
                qty   : qty
            });
        }

        this.saveToStorage();
    }


    // ── Update quantity ───────────────────────────────────────

    updateQty(id, qty) {

        const productId = String(id);

        if (qty <= 0) {
            this.removeItem(productId);
            return;
        }

        const item = this.items.find(i => i.id === productId);

        if (item) {
            item.qty = qty;
            this.saveToStorage();
        }
    }


    // ── Remove item ───────────────────────────────────────────

    removeItem(id) {

        const productId = String(id);

        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
    }


    // ── Get total ─────────────────────────────────────────────

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.qty);
        }, 0);
    }


    // ── Get count ─────────────────────────────────────────────

    getCount() {
        return this.items.reduce((count, item) => {
            return count + item.qty;
        }, 0);
    }


    // ── Is empty ──────────────────────────────────────────────

    isEmpty() {
        return this.items.length === 0;
    }


    // ── Clear ─────────────────────────────────────────────────

    clear() {
        this.items = [];
        this.storage.clear();
    }


    // ── Save to storage ───────────────────────────────────────

    saveToStorage() {
        this.storage.save(this.items);
    }


    // ── Load from storage ─────────────────────────────────────

    loadFromStorage() {
        const saved = this.storage.load();
        if (saved && saved.length > 0) {
            this.items = saved.map(item => ({
                ...item,
                id: String(item.id)
            }));
        }
    }

}
