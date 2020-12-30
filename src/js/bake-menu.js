const bakeMenuItem = document.querySelectorAll('.bake-nav__item');
bakeMenuItem.forEach(item =>{
    item.addEventListener('click', e =>{
        e.preventDefault();
        bakeMenuItem.forEach(i =>{
            i.classList.remove('active');
        })
        item.classList.add('active');
    })
})