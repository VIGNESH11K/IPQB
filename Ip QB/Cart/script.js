const products = document.querySelectorAll('.product');
const cartItems = document.querySelector('.cart-items');
const totalElement = document.querySelector('.total');

let cart = [];

products.forEach((product, index) => {
    const addToCartButton = product.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => addToCart(index));
});

function addToCart(index) {
    const product = products[index];
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
    
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
        cartItems.appendChild(listItem);

        total += item.price * item.quantity;
    });

    totalElement.textContent = total.toFixed(2);
}
