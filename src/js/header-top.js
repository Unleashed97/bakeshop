const headerTop = () =>{
    const header = document.querySelector('.header');
    let is_root = location.pathname == "/";

    if(!is_root && location.pathname !== '/index.html'){
        header.classList.add('scroll');
    }
    else if(is_root || location.pathname == '/index.html' || location.pathname == '/bakeshop/dist/index.html'){
        const intro = document.querySelector('.intro');
        let introHeight = intro.scrollHeight;
        window.addEventListener('scroll', () =>{
            if(pageYOffset > introHeight - 80){
                header.classList.add('scroll')
            }
            else header.classList.remove('scroll');
        });
    }
}
headerTop();