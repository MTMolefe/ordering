let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ''; // Clear the cart before adding updated items

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - R${item.price}`; // Change $ to R
        cartItems.appendChild(li);
    });

    document.getElementById("total").textContent = `R${total.toFixed(2)}`; // Change $ to R
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to the cart.");
    } else {
        alert(`Thank you for your order! Your total is R${total.toFixed(2)}.`); // Change $ to R
        cart = []; // Clear cart after checkout
        total = 0;
        updateCart();
    }
}

function clearCart() {
    cart = []; // Clear the cart array
    total = 0; // Reset the total
    updateCart(); // Update the cart display
}
