const btn = document.querySelectorAll('.slider__item-consist');
btn.forEach(item => {
    item.addEventListener('click', e =>{
        e.preventDefault();
        let parent = item.closest('.slider__item');
        parent.querySelector('.slider__item-popup').classList.add('active');
    })
})