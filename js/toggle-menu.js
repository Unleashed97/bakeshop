'use strict';

window.onload = () => {
    const toggleNav = document.querySelector('.toggle-nav');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const body = document.querySelector('body'); 
    // const headerInner = document.querySelector('.header__inner');
    // const navInner = document.querySelector('.nav__inner');


    toggleNav.addEventListener('click', e => {
        toggleNav.classList.toggle('active');
        header.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
};