const cartBtn = document.querySelectorAll('.into-cart');
const cartAmountSpan = document.querySelector('.header__cart-amount');
const cartBlock = document.querySelector('.cart');

let cartAmount = 0;
let cart = [];

const createCartItem  = () =>{
    let cartItem = document.createElement('div');
    let cartItemCol1 = document.createElement('div');
    let cartItemCol2 = document.createElement('div');
    let cartItemCol3 = document.createElement('div');
    let cartItemCol4 = document.createElement('div');
    let cartItemName = document.createElement('p');
    let cartItemPrice = document.createElement('p');
    let cartItemAmount = document.createElement('div');
    let cartItemAmountLess = document.createElement('span');
    let cartItemAmountNumber = document.createElement('span');
    let cartItemAmountMore = document.createElement('span');
    let cartItemSum = document.createElement('div');
    let cartItemRemove = document.createElement('i');

    cartItem.className = 'cart__item';
    cartItemCol1.className = 'cart__item-col';
    cartItemCol2.className = 'cart__item-col';
    cartItemCol3.className = 'cart__item-col';
    cartItemCol4.className = 'cart__item-col';
    cartItemName.className = 'cart__item-name';
    cartItemPrice.className = 'cart__item-price';
    cartItemAmount.className = 'cart__item-amount';
    cartItemAmountLess.className = 'cart__item-amount-less';
    cartItemAmountNumber.className = 'cart__item-amount-number';
    cartItemAmountMore.className = 'cart__item-amount-more';
    cartItemSum.className = 'cart__item-sum';
    cartItemRemove.className = 'fas fa-trash-alt';

    cartBlock.append(cartItem);
    cartItem.append(cartItemCol1);
    cartItem.append(cartItemCol2);
    cartItem.append(cartItemCol3);
    cartItem.append(cartItemCol4);
    cartItemCol1.append(cartItemName);
    cartItemCol1.append(cartItemPrice);
    cartItemCol2.append(cartItemAmount);
    cartItemAmount.append(cartItemAmountLess);
    cartItemAmount.append(cartItemAmountNumber);
    cartItemAmount.append(cartItemAmountMore);
    cartItemCol3.append(cartItemSum);
    cartItemCol4.append(cartItemRemove);
};

const cartFill = ()=>{
    if(window.location.path == '/cart'){
        createCartItem();


    }
}
const cartAdding = ()=>{
    cartBtn.forEach(item => {
        item.addEventListener('click', e => {
            cartAmount++;
            cartAmountSpan.classList.add('active');
            cartAmountSpan.innerHTML = cartAmount;
    
            let parent = item.closest('.product__item');
    
            if(parent){
                if(item.classList.contains('added-to-cart')){
                    for(let i =0; i<cart.length; i++){
                        if(parent.querySelector('.product__item-name').innerHTML == cart[i].name){
                            cart[i].amount++;
                        }
                    }     
                }
                else{
                    cart.push({
                        name: parent.querySelector('.product__item-name').innerHTML,
                        price: parent.querySelector('.product__item-price').innerHTML,
                        amount: 0
                    })
                    item.classList.add('added-to-cart');
                }
            }
            cartFill();
            // console.log(cart);
        })
    })
}
cartAdding();