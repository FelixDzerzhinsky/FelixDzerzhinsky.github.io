"use strict"

const search = () => {
  const formControl = document.querySelector('.form-control > input')
  const btnOutlineSecondary = document.querySelector('.btn-outline-secondary')
  
  btnOutlineSecondary.addEventListener('click', () => {
    console.log(formControl.value);
  })
}

search()