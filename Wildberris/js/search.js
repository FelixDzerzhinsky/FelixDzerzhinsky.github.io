// Поиск

const search = () => {
    const searchBlockInput = document.querySelector('.search-block > input');
    const searchBlockButton = document.querySelector('.search-block > button');

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

    const getData = (text) => {
        fetch('/db/db.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const dataArray = data.filter(good => {
                    // Поисковик
                    return good.name.toLowerCase().includes(text.toLowerCase())
                })
                localStorage.setItem('goods', JSON.stringify(dataArray));

                if (window.location.pathname !== '/goods.html') {
                    window.location.href = '/goods.html';
                } else {
                    renderGoods(dataArray);
                }
            })
    }
    searchBlockButton.addEventListener('click', () => {
        getData(searchBlockInput.value);
    })
}

search();