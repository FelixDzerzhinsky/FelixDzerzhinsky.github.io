// Получение данных с сервера

const getGoods = () => {
    const navigationLink = document.querySelectorAll('.navigation-link');

    const renderGoods = (goods) => {
        const longGoodsList = document.querySelector('.long-goods-list');
        longGoodsList.innerHTML = '';

        goods.forEach(good => {
            const goodBlock = document.createElement('div');

            goodBlock.classList.add('col-lg-3');
            goodBlock.classList.add('col-sm-6');

            goodBlock.innerHTML = `
                <div class="goods-card">
					<span class="label">${good.label}</span>
					<img src="db/${good.img}" alt="${good.name}" class="goods-image">
					<h3 class="goods-title">${good.name}</h3>
					<p class="goods-description">${good.description}</p>
					<button class="button goods-card-btn add-to-cart" data-id="${good.id}">
						<span class="button-price">$${good.price}</span>
					</button>
				</div>
            `
            longGoodsList.append(goodBlock);
        })
    }

    const getData = (text, category) => {
        fetch('/db/db.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const dataArray = category ? data.filter((item) => item[category] === text) : data;
                localStorage.setItem('goods', JSON.stringify(dataArray));
                
                if (window.location.pathname !== '/goods.html'){
                    window.location.href = '/goods.html';
                }
                else{
                    renderGoods(dataArray);
                }
            })
    }
    
    navigationLink.forEach((link) => {
        link.addEventListener('click', (event) => {

            // Убирает переход по ссылке 
            event.preventDefault(); 

            const dataFieldText = link.textContent;
            const dataFieldCategory = link.dataset.field;

            getData(dataFieldText, dataFieldCategory);
            
        })
    })

    if (localStorage.getItem('goods') && window.location.pathname === '/goods.html'){
        renderGoods(JSON.parse(localStorage.getItem('goods')));
    }
}

getGoods();