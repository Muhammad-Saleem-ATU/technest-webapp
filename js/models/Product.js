// ============================================================
//  js/pages/Product.js
//  ES6 class representing a single product in TechNest.
//  Each entry in products.js gets turned into a Product object
//  when the page loads.
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 4 - Data Modelling and OOP Structure
// ============================================================

class Product {

    constructor(id, name, price, category, description, image) {
        this.id          = id;
        this.name        = name;
        this.price       = price;        // stored as a number, e.g. 299.99
        this.category    = category;
        this.description = description;
        this.image       = image;        // relative path, e.g. assets/images/p001.jpg
    }

    // Returns a short display string used in basket and checkout summary
    getSummary() {
        return `${this.name} - €${this.price.toFixed(2)}`;
    }

}
