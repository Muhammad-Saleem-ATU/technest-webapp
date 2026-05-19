// ============================================================
//  js/models/Basket.js
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

        const currentQty = existing ? existing.qty : 0;

        // Prevent adding beyond stock
        if (currentQty + qty > product.stock) {
            alert(`Only ${product.stock} items available.`);
            return false;
        }

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
        return true;
    }


    // ── Update quantity ───────────────────────────────────────

    updateQty(id, qty) {

        const productId = String(id);

        if (qty <= 0) {
            this.removeItem(productId);
            return true;
        }

        const item = this.items.find(
            i => String(i.id) === productId
        );

        const products =
            JSON.parse(localStorage.getItem('technest-products'))
            || productsData;

        const product = products.find(
            p => String(p.id) === productId
        );

        // Prevent increasing beyond stock
        if (product && qty > product.stock) {

            alert(`Only ${product.stock} items available.`);

            return false;
        }

        if (item) {

            item.qty = qty;

            this.saveToStorage();

            return true;
        }

        return false;
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