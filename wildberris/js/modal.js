"use strict"

const modal = () => {
  const buttonCart = document.querySelector('.button-cart')
  const modalCart = document.querySelector('#modal-cart')

  // Открытие модального окна
  buttonCart.addEventListener('click', () => {
    modalCart.style.display = 'flex'
  })

  // Закрытие модального окна
  modalCart.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-close') || event.target == modalCart) {
      modalCart.style.display = 'none'
    }
  })
}

modal()