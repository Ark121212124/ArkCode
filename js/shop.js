/* =========================
ТОВАРЫ
========================= */

let allProducts = products

let filteredProducts = [...allProducts]



/* =========================
РЕНДЕР ТОВАРОВ
========================= */

function renderProducts(list){

let container = document.getElementById("product-list")

if(!container) return

container.innerHTML=""

list.forEach(p=>{

let rating = "⭐".repeat(p.rating)

container.innerHTML += `

<div class="product" data-category="${p.category}">

<a href="product.html?id=${p.id}">

<img src="${p.image}" alt="${p.name}">

<h3>${p.name}</h3>

</a>

<div class="rating">
${rating}
</div>

<p class="price">$${p.price}</p>

<button onclick="addToCart('${p.name}',${p.price},'${p.image}')">
В корзину
</button>

</div>

`

})

}



/* =========================
ПОИСК
========================= */

function searchProducts(){

let input = document
.getElementById("search")
.value
.toLowerCase()

filteredProducts = allProducts.filter(p =>

p.name.toLowerCase().includes(input) ||
p.brand?.toLowerCase().includes(input)

)

renderProducts(filteredProducts)

}



/* =========================
ФИЛЬТР КАТЕГОРИЙ
========================= */

function filterCategory(category){

if(category==="all"){

filteredProducts = [...allProducts]

}else{

filteredProducts = allProducts.filter(p =>
p.category === category
)

}

renderProducts(filteredProducts)

}



/* =========================
СОРТИРОВКА
========================= */

function sortProducts(type){

if(type==="priceLow"){

filteredProducts.sort((a,b)=>a.price-b.price)

}

if(type==="priceHigh"){

filteredProducts.sort((a,b)=>b.price-a.price)

}

if(type==="rating"){

filteredProducts.sort((a,b)=>b.rating-a.rating)

}

renderProducts(filteredProducts)

}



/* =========================
МОБИЛЬНОЕ МЕНЮ
========================= */

function toggleMenu(){

let nav = document.querySelector("nav")

if(nav){

nav.classList.toggle("show")

}

}



/* =========================
ЗАПУСК
========================= */

renderProducts(allProducts)