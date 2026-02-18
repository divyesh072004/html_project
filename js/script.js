'use strict';

// Sample JavaScript functionality for an e-commerce website

// Function to add item to the cart
function addToCart(itemId, quantity) {
    console.log(`Item ${itemId} added to cart with quantity ${quantity}`);
}

// Function to remove item from the cart
function removeFromCart(itemId) {
    console.log(`Item ${itemId} removed from cart`);
}

// Function to calculate total price
function calculateTotal(cartItems) {
    let total = 0;
    for (let item of cartItems) {
        total += item.price * item.quantity;
    }
    return total;
}

// Sample cart items
const cartItems = [
    { id: 1, price: 10, quantity: 2 },
    { id: 2, price: 15, quantity: 1 }
];

// Log total price
console.log(`Total Price: $${calculateTotal(cartItems)}`);
