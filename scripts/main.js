// Дожидается загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Табы
    const tabs = () => {
        const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailsTitleElem = document.querySelector('.card-details__title');
        const cardImageItemElem = document.querySelector('.card__image_item');
        const cardDetailsPriceElem = document.querySelector('.card-details__price');

        // // Функция очистки у каждого элемента класса active
        // const hideAll = () => {
        //     for (let i = 0; i < cardDetailChangeElems.length; i++){
        //         cardDetailChangeElems[i].classList.remove('active');
        //         cardDetailsTitleElems[i].classList.remove('active');
        //         cardImageElems[i].classList.remove('active'); 

        //     }
        // };

        // for (let i = 0; i < cardDetailChangeElems.length; i++){
        //     cardDetailChangeElems[i].addEventListener('click', () => {
        //         hideAll();
        //         cardDetailChangeElems[i].classList.add('active');
        //         cardDetailsTitleElems[i].classList.add('active');
        //         cardImageElems[i].classList.add('active');
        //     })
        // }

        const data = [
            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 95900,
            },

            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
                img: 'img/iPhone-silver.png',
                price: 97900,
            },

            {
                name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price: 99900,
            },
        ]

        cardDetailChangeElems.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')){
                    cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
                    btn.classList.add('active');
                    cardDetailsTitleElem.textContent = data[i].name;
                    cardImageItemElem.src = data[i].img;
                    cardImageItemElem.alt = data[i].name;
                    cardDetailsPriceElem.textContent = data[i].price + 'Р';
                }
            });
        });
    };

    // Аккордeон
    const accordeon = () => {
        const characteristicsList = document.querySelector('.characteristics__list');
        const characteristicsItem = document.querySelectorAll('.characteristics__item');

        const open = (button, dropDown) => {
            closeAllDrops();
            dropDown.style.height = `${dropDown.scrollHeight}px`;
            button.classList.add('active');
            dropDown.classList.add('active');
        };

        const close = (button, dropDown) => {
            button.classList.remove('active');
            dropDown.classList.remove('active');
            dropDown.style.height = '';
        };

        const closeAllDrops = (button, dropDown) => {
            characteristicsItem.forEach((elem) => {
                if (elem.children[0] !== button && elem.children !== dropDown){
                    close(elem.children[0], elem.children[1]);
                }
            })
        }

        characteristicsList.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('characteristics__title')){
                const parent = target.closest('.characteristics__item');
                const description = parent.querySelector('.characteristics__description');
                description.classList.contains('active') ? close(target, description) : open(target, description);
            }
        });
    };

    //Модальное окно
    const modal = () => {
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const modal = document.querySelector('.modal');

        cardDetailsButtonBuy.addEventListener('click', () => {
            modal.classList.add('open');
        })

        modal.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('modal__close') || target === modal) {
                modal.classList.remove('open');
            }
        })

        document.addEventListener('keydown', (event) => {
            modal.classList.remove('open');
        })
    }


    // Вызов функций
    tabs();
    accordeon();
    modal();
});