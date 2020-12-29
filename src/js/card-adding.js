const cartBtn = document.querySelectorAll('.into-cart');
const cartAmountSpan = document.querySelector('.header__cart-amount');

let cartAmount = 0;

cartBtn.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        cartAmount++;
        cartAmountSpan.classList.add('active');
        cartAmountSpan.innerHTML = cartAmount;
    })
})