// Initial cart count
let cartCount = 0;

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener for each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Increment cart count
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
        alert('Item added to cart');
    });
});
