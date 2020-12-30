const cartBtn = document.querySelectorAll('.into-cart');
const cartAmountSpan = document.querySelector('.header__cart-amount');

let cartAmount = 0;

let cart = [];

cartBtn.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        cartAmount++;
        cartAmountSpan.classList.add('active');
        cartAmountSpan.innerHTML = cartAmount;


        let parent = item.closest('.slider__item') || item.closest('.bake-menu-content__item');

        if(parent){
            // cart.push({
            //     name: parent.querySelector('.slider__item-name').innerHTML,
            //     price: parent.querySelector('.slider__item-price').innerHTML,
            //     amount: 'cart number of the same positions'

            // })
        }

    })
})