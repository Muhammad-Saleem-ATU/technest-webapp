// ============================================================
//  StorageManager.js
//  Wrapper around the browser's localStorage API.
//  All storage access goes through this class so that if the
//  storage method ever changes, only this file needs updating.
//
//  Author : Muhammad Saleem
//  Student: L00196822
//  Week 4 - Data Modelling and OOP Structure
// ============================================================

class StorageManager {

    constructor(key) {
        this.KEY = key;
    }

    // Saves data to localStorage as a JSON string
    save(data) {
        localStorage.setItem(this.KEY, JSON.stringify(data));
    }

    // Loads and parses data from localStorage.
    // Returns an empty array if nothing is saved yet.
    load() {
        const stored = localStorage.getItem(this.KEY);
        if (stored === null) {
            return [];
        }
        return JSON.parse(stored);
    }

    // Removes the entry from localStorage
    clear() {
        localStorage.removeItem(this.KEY);
    }

    // Returns true if a value exists under this key, false otherwise
    exists() {
        return localStorage.getItem(this.KEY) !== null;
    }

}
