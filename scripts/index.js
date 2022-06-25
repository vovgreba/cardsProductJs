const showProductBtn = document.querySelector('.show_product');
const cardsProducts = document.querySelector('.cards_products');




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

  productsArray.forEach(el => {
    const div = document.createElement('div');
    div.className = 'card_product';
  
    
    if(el.image) {

      const html = `<div class="card_images">
      <img src="${el.image}" alt="bike">
      </div>`;

      div.insertAdjacentHTML('beforeend', html);
    }
    
    // if(el.name) {
    //   arrayElements.push(`<h2 class="card_name">Велосипед взрослый <span>${el.name}</span></h2> `)
    // }

    // if(el.description) {
    //   arrayElements.push(`<p class="card_desc">${el.description}</p>`)
    // }
    // if(el.rating && el.availability) {
    //   arrayElements.push(`<div class="card_options">
    //   <div class="card_rating">rating <span>${el.rating}</span></div>
    //   <div class="card_availability">availability <span>${el.availability}</span> </div>
    //   </div>`)
    // }
    // if(el.price) {
    //   arrayElements.push(`<div class="card_options">
    //   <div class="card_price">rating <span>${el.price}$</span></div>
    //   <button class="card_price-btn" type="button">Купить</button>
    //   </div>`)
    // }
    rootElement.appendChild(div);
  })
  cardsProducts.appendChild(rootElement);
}





showProductBtn.addEventListener('click', () => {
  showProduct();
})