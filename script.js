let cart = [];
let totalPrice = 0;

function addToCart(pizzaName, price) {
    cart.push({ name: pizzaName, price });
    totalPrice += price;
    document.getElementById('cart-count').innerText = cart.length;
    alert(`${pizzaName} добавлена в корзину!`);
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ${item.price}грн`;
        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Удалить';
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').innerText = `${totalPrice}грн`;
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    document.getElementById('cart-count').innerText = cart.length;
    renderCart();
}

function checkout() {
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    cart = [];
    totalPrice = 0;
    document.getElementById('cart-count').innerText = 0;
    toggleCart();
}

document.getElementById('review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const reviewText = document.getElementById('review-text').value;
    const reviewList = document.getElementById('review-list');
    const p = document.createElement('p');
    p.innerText = reviewText;
    reviewList.appendChild(p);
    document.getElementById('review-text').value = '';
});
