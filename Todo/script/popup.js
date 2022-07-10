"use strict"

const accountBtn = document.querySelector('.account__btn')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')

accountBtn.addEventListener('click', () => {
  popup.classList.add('active')
})

popupClose.addEventListener('click', () => {
  popup.classList.remove('active')
})


