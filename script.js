let cartCount = 0;
let total = 0;

function addToCart(price) {
    cartCount++;
    total += price;

    document.getElementById("cart-count").textContent = cartCount;
    document.getElementById("total").textContent = total;

    document.getElementById("message").textContent =
        "Product added to cart!";
}

function checkout() {
    if (cartCount === 0) {
        document.getElementById("message").textContent =
            "Your cart is empty!";
    } else {
        document.getElementById("message").textContent =
            "Demo checkout successful! Total: ₹" + total;
    }
}
