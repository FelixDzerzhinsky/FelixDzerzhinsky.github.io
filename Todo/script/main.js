"use strict"

const addMessage = document.querySelector('.message')
const addButton = document.querySelector('.add')
const todo = document.querySelector('.todo')

let todoList = []

// Функция добавления дела 
const displayMessage = () => {
  let message = ''

  if (todoList.length === 0) {
    todo.innerHTML = ''
  }

  todoList.forEach((item, i) => {
    message += `
    <li>
      <input type='checkbox' id='item_${i}' ${item.isChecked ? 'checked' : ''} >
      <label for='item_${i}'>${item.todo}</label> 
    </li>
    `
    todo.innerHTML = message
  })
}

// Возвращение данных из local storage
if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'))
  displayMessage()
}

// Добавление дела
addButton.addEventListener('click', () => {
  const newTodo = {
    todo: addMessage.value,
    isChecked: false,
    isImportant: false,
  }

  todoList.push(newTodo)
  displayMessage()
  localStorage.setItem('todo', JSON.stringify(todoList))
  addMessage.value = ''
})

// Удалене дела
todo.addEventListener('contextmenu', (event) => {
  event.preventDefault() // Отключение меню при нажатии пкм

  todoList.forEach((item, i) => {

    if (item.todo === event.target.innerHTML) {
      todoList.splice(i, 1)
    }

  })

  displayMessage()
  localStorage.setItem('todo', JSON.stringify(todoList))
})

// Функция на выполнения/невыполения дела пользователя
todo.addEventListener('change', (event) => {
  let idInput = event.target.getAttribute('id')
  let forLabel = todo.querySelector('[for=' + idInput + ']')
  let valueLabel = forLabel.innerHTML

  todoList.forEach(item => {

    if (item.todo === valueLabel) {
      item.isChecked = !item.isChecked
      localStorage.setItem('todo', JSON.stringify(todoList))
    }

  })
})

// Отправка данных
const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  });

  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
  }

  return await response.json();
}


const sendTodo = () => {
  const popupInput = document.querySelectorAll('.popup__input')
  const formBtn = document.querySelector('.form__btn')

  formBtn.addEventListener('click', () => {
    const data = {
      email: popupInput[0].value,
      password: popupInput[1].value,
    }

    sendData('https://jsonplaceholder.typicode.com/todos', JSON.stringify(data))
  })
}

sendTodo()