const img = document.querySelector('.header__logo-image');
const link = document.querySelectorAll('.nav__link');
const cart = document.querySelector('.header__cart i');

let loc = window.location.pathname;


if(loc == '/cart.html'){
    img.src = 'images/logo/logo-black.png';
    cart.style.color = 'black';
    link.forEach(item => {
        item.style.color = 'black';
    })
}