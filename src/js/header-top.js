const header = document.querySelector('.header');
let loc = window.location.pathname;

if(loc == '/cart.html'){
    header.classList.add('scroll');
}
else{
    const intro = document.querySelector('.intro');
    let introHeight = intro.scrollHeight;
    window.addEventListener('scroll', () =>{
        if(pageYOffset > introHeight - 80){
            header.classList.add('scroll')
        }
        else header.classList.remove('scroll');
    
    });
}

