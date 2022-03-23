// Корзина

const cart = () => {
    const buttonCart = document.querySelector('.button-cart');
    const modalCart = document.getElementById('modal-cart');
    const modalClose = document.querySelector('.modal-close');
    const longGoodsList = document.querySelector('.long-goods-list');

    buttonCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
    })

    modalClose.addEventListener('click', () => {
        modalCart.style.display = '';
    })

    longGoodsList.addEventListener('click', (event) => {
        
    })
}

cart();