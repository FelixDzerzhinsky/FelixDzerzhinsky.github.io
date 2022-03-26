class List {
    items = [];

    constructor() {
        let goodsPromise = this.fetchGoods();
        goodsPromise.then(() => {
            this.render()
        })
    }

    fetchGoods() {
        const result = fetch('http://localhost:8000/database.json')
        return result
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                this.items = data.data.map(cur => {
                    return new GoodItem(cur)
                })
            })
    }

    render() {
        this.items.forEach(good => {
            good.render();
        })
    }
}

class GoodItem {
    name = '';
    price = 0;

    constructor({
        name,
        price
    }) {
        this.name = name;
        this.price = price;
    }

    render() {
        const placeToRender = document.querySelector('.goods__list');
        const block = document.createElement('div');
        block.classList.add('main__goods__list')
        block.innerHTML = `Товар ${this.name} = ${this.price}`;
        placeToRender.appendChild(block);
        console.log(this.name, this.price)
    }
}

const ListInstance = new List();