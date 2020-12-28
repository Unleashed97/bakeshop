//  Инициализация Swiper
new Swiper('.slider', {
    // arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // nav
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 3,
    spaceBetween: 130,


    breakpoints: {
        319: {
            slidesPerView: 1,
            spaceBetween: 80,
        },

        576: {
            slidesPerView: 2,
            spaceBetween: 80,
        },

        // 768: {
        //     slidesPerView: 2,
        // },

        992: {
            slidesPerView: 3,
        },
    }
});