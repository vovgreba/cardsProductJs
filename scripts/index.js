const showProductBtn = document.querySelector('.show_product');
const cardsProducts = document.querySelector('.cards_products');
const cardsButtons = document.querySelector('.cards_buttons');
const sortPrice = document.querySelector('.sort-price');




const productsArray = [
  {
    image: 'images/bike 1.jpg',
    name: 'bike standart',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea, voluptates numquam id dolorem, nostrum dolores accusamus harum temporibus veritatis.',
    rating: '*',
    availability: 50,
    price: 500,
  },
  {
    image: 'images/bike 1.jpg',
    name: 'bike-pro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea, voluptates numquam id dolorem, nostrum dolores accusamus harum temporibus veritatis.',
    rating: '****',
    availability: 15,
    price: 3000,
  },
  {
    image: 'images/bike 1.jpg',
    name: 'bike-medium ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea, voluptates numquam id dolorem, nostrum dolores accusamus harum temporibus veritatis.',
    rating: '**',
    availability: 30,
    price: 1500,
  },
  {
    image: 'images/bike 1.jpg',
    name: 'bike sport-pro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea, voluptates numquam id dolorem, nostrum dolores accusamus harum temporibus veritatis.',
    rating: '*****',
    availability: 10,
    price: 5000,
  },
  {
    image: 'images/bike 1.jpg',
    name: 'bike-sport',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea, voluptates numquam id dolorem, nostrum dolores accusamus harum temporibus veritatis.',
    rating: '***',
    availability: 5,
    price: 2000,
  }
]


const showProduct = () => {
  
  const rootElement = document.createElement('div')
  rootElement.className = 'cards_wrapper'

  productsArray.forEach(el => {
    const div = document.createElement('div');
    div.className = 'card_product';
  
    if(el.image) {

      const html = `<div class="card_images"><img src="${el.image}" alt="bike"></div>`;
      div.insertAdjacentHTML('beforeend', html);

    }
    
    if(el.name) {

      const html = (`<h2 class="card_name">Велосипед взрослый <span>${el.name}</span></h2> `)
      div.insertAdjacentHTML('beforeend', html);
      
    }

    if(el.description) {
      const html = (`<p class="card_desc">${el.description}</p>`)
      div.insertAdjacentHTML('beforeend', html);

    }
    if(el.rating && el.availability) {
      const html = (`<div class="card_options">
      <div class="card_rating">rating <span>${el.rating}</span></div>
      <div class="card_availability">availability <span>${el.availability}</span> </div>
      </div>`)
      div.insertAdjacentHTML('beforeend', html);
    }
    if(el.price) {
      const html = (`<div class="card_options">
      <div class="card_price">rating <span>${el.price}$</span></div>
      <button class="card_price-btn" type="button">Купить</button>
      </div>`)
      div.insertAdjacentHTML('beforeend', html);
    }
    rootElement.appendChild(div);
  })
  cardsProducts.appendChild(rootElement);
}
const checkElementsOnPage = nodeEl => {
  for(let el of nodeEl) {
    if(el.className === 'cards_wrapper') {
      el.remove()
    }
  }
}

const getSortCardProductByPrice = (event) => {
  checkElementsOnPage(cardsProducts.children)

  if(event === 'От меньшего к большему') {
    productsArray.sort((a,b) => {
      if(a.price > b.price) {
        return 1;
      }
      if(a.price < b.price) {
        return -1;
      }
    })
  }
  if(event === 'От большего к меньшему') {
    productsArray.sort((a,b) => {
      if(a.price > b.price) {
        return -1;
      }
      if(a.price < b.price) {
        return 1;
      }
  })
  
  }
  showProduct();
}



sortPrice.addEventListener('change', ev => {
  getSortCardProductByPrice(ev.target.value)
  
})

showProductBtn.addEventListener('click', () => {
  showProduct();
  
})


