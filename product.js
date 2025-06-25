const items=[
    {
        id:1,
        image:"images/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        Quantity:0
    },
    {
        id:2,
        image:"images/fruite-item-2.jpg",
        name:"Rasberries",
        price:5.93,
        stock:20,
        Quantity:0
    },
    {
        id:3,
        image:"images/fruite-item-4.jpg",
        name:"Apricots",
        price:4.80,
        stock:25,
        Quantity:0
    },
    {
        id:4,
        image:"images/fruite-item-3.jpg",
        name:"Banana",
        price:5.93,
        stock:20,
        Quantity:0
    },
    {
        id:5,
        image:"images/fruite-item-1.jpg",
        name:"Orange",
        price:4.96,
        stock:25,
        Quantity:0
    },
    {
        id:6,
        image:"images/featur-1.jpg",
        name:"Apples",
        price:8.90,
        stock:20,
        Quantity:0
    },
    {
        id:7,
        image:"images/featur-2.jpg",
        name:"Strawberry",
        price:6.90,
        stock:27,
        Quantity:0
    },
    {
        id:8,
        image:"images/featur-3.jpg",
        name:"Brocolli",
        price:5.90,
        stock:9,
        Quantity:0
    },
    {
        id:9,
        image:"images/vegetable-item-1.jpg",
        name:"Tomatoes",
        price:5.90,
        stock:9,
        Quantity:0
    },
    {
        id:10,
        image:"images/vegetable-item-4.jpg",
        name:"Capsicum",
        price:3.99,
        stock:25,
        Quantity:0
    },
    {
        id:11,
        image:"images/vegetable-item-5.jpg",
        name:"Potatoes",
        price:2.99,
        stock:20,
        Quantity:0
    },
    {
        id:12,
        image:"images/vegetable-item-6.jpg",
        name:"Parsely",
        price:3.69,
        stock:21,
        Quantity:0
    },
    {
        id:13,
        image:"images/bread-item1.jpg",
        name:"Roasted Bread",
        price:1.69,
        stock:12,
        Quantity:0
    },
    {
        id:14,
        image:"images/bread-item1.jpg",
        name:"Garlic Bread",
        price:3.69,
        stock:21,
        Quantity:0
    },
    {
        id:15,
        image:"images/meat-item1.jpg",
        name:"Mixed Salad",
        price:3.69,
        stock:21,
        Quantity:0
    },
    {
        id:16,
        image:"images/meat-item2.jpg",
        name:"Chicken Masala",
        price:3.57,
        stock:15,
        Quantity:0
    }    
]
let productel=document.querySelector('.products')
console.log(productel)
function displayproducts()
{
    items.map((prod)=>{
        productel.innerHTML+=
        `<div class="col">
        <div class="card border-warning">
          <img src="${prod.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-center">${prod.name}</h5>
            <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
            <h5>$${prod.price} / kg</h5>
            <button type="button" class="btn btn-outline-warning rounded-pill fw-bold" style="color: #81C408;"><i class="fa-solid fa-bag-shopping me-2"></i>Add To Cart</button>
          </div>
        </div>
      </div>`
    })
}
displayproducts()
let vegesel=document.querySelector('.veges')
console.log(vegesel)
function displayveges()
{
    items.slice(7,12).map((prod)=>{
        vegesel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayveges()
let fruitel=document.querySelector('.fruits')
console.log(fruitel)
function displayfruits()
{
    items.slice(0,7).map((prod)=>{
        fruitel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displayfruits()
let breadel=document.querySelector('.bread')
console.log(breadel)
function displaybread()
{
    items.slice(12,14).map((prod)=>{
        breadel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaybread()
let meatel=document.querySelector('.meat')
console.log(meatel)
function displaymeat()
{
    items.slice(14,17).map((prod)=>{
        meatel.innerHTML+=`
        <div class="col">
              <div class="card">
                <img src=${prod.image} class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaymeat()

let bestprodel=document.querySelector(".bestprods")
let bestfruits=[
  {
    id:1,
    image:"images/best-product-1.jpg",
    name:"Orange",
    price:4.99,
    stock:30,
    Quantity:0
},
{
    id:2,
    image:"images/best-product-2.jpg",
    name:"Rasberries",
    price:5.93,
    stock:20,
    Quantity:0
},
{
    id:3,
    image:"images/best-product-3.jpg",
    name:"Banana",
    price:4.80,
    stock:25,
    Quantity:0
},
{
    id:4,
    image:"images/best-product-4.jpg",
    name:"Apricots",
    price:5.93,
    stock:20,
    Quantity:0
},
{
    id:5,
    image:"images/best-product-5.jpg",
    name:"Grapes",
    price:4.96,
    stock:25,
    Quantity:0
},
{
    id:6,
    image:"images/best-product-6.jpg",
    name:"Apples",
    price:8.90,
    stock:20,
    Quantity:0
}
]
function displaybest()
{
    bestfruits.map((prod)=>{
        bestprodel.innerHTML+=`
        <div class="col">
      <div class="card mb-3 p-4 rounded bg-light" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-6">
            <img src="${prod.image}" class="img-fluid rounded-circle" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">${prod.name}</h5>
              <p class="card-text">
                <i class="fa-solid fa-star" style="color: #81C408;"></i>
                <i class="fa-solid fa-star" style="color: #81C408;"></i>
                <i class="fa-solid fa-star" style="color: #81C408;"></i>
                <i class="fa-solid fa-star" style="color: #81C408;"></i>
                <i class="fa-solid fa-star text-secondry"></i>
              </p>
              <p class="card-text">${prod.price}$</p>
              <button type="button" class="btn btn-outline-warning text-success rounded-pill p-3 fs-5">
                <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
    })
}
displaybest()
let bestprodel1=document.querySelector(".bestprods1")
function displaybest1()
{
    bestfruits.slice(0,4).map((prod)=>{
        bestprodel1.innerHTML+=`
        <div class="col">
              <div class="card border-0">
                <img src=${prod.image} class="card-img-top h-50 w-100" alt="...">
                <div class="card-body text-center">
                  <h4 class="card-title">${prod.name}</h4>
                  <p class="fs-5"><i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star text-secondry"></i></p>
                  <h5>$${prod.price} / kg</h5>
                  <button type="button" class="btn btn-outline-warning text-success rounded-pill">
                    <i class="fa-solid fa-bag-shopping me-2"></i> Add to cart
                  </button>
                </div>
              </div>
            </div>`
    })
}
displaybest1()