/* =========================
   ДАННЫЕ
========================= */

let products =
JSON.parse(localStorage.getItem("products")) || []

let categories =
JSON.parse(localStorage.getItem("categories")) || ["CPU","GPU","RAM"]

let orders =
JSON.parse(localStorage.getItem("orders")) || 0



/* =========================
   СОХРАНЕНИЕ
========================= */

function saveProducts(){

localStorage.setItem("products",JSON.stringify(products))

}

function saveCategories(){

localStorage.setItem("categories",JSON.stringify(categories))

}



/* =========================
   КАТЕГОРИИ
========================= */

function addCategory(){

let name = document.getElementById("catName").value.trim()

if(!name){

alert("Введите название категории")

return

}

categories.push(name)

saveCategories()

renderCategories()

document.getElementById("catName").value=""

}



/* =========================
   ОТОБРАЖЕНИЕ КАТЕГОРИЙ
========================= */

function renderCategories(){

let select=document.getElementById("category")

if(!select) return

select.innerHTML=""

categories.forEach(cat=>{

let option=document.createElement("option")

option.value = cat
option.textContent = cat

select.appendChild(option)

})

}



/* =========================
   ДОБАВИТЬ ТОВАР
========================= */

function addProduct(){

let name=document.getElementById("name").value.trim()
let price=document.getElementById("price").value.trim()
let image=document.getElementById("image").value.trim()
let desc=document.getElementById("desc").value.trim()
let category=document.getElementById("category").value


if(!name || !price){

alert("Введите название и цену товара")

return

}


let newProduct = {

id: Date.now(),

name: name,

price: Number(price),

image: image || "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",

desc: desc || "Описание отсутствует",

category: category

}


products.push(newProduct)

saveProducts()

renderProducts()

clearInputs()

}



/* =========================
   ОЧИСТКА ПОЛЕЙ
========================= */

function clearInputs(){

document.getElementById("name").value=""
document.getElementById("price").value=""
document.getElementById("image").value=""
document.getElementById("desc").value=""

}



/* =========================
   УДАЛЕНИЕ ТОВАРА
========================= */

function deleteProduct(id){

if(!confirm("Удалить товар?")) return

products = products.filter(p => p.id !== id)

saveProducts()

renderProducts()

}



/* =========================
   ОТОБРАЖЕНИЕ ТОВАРОВ
========================= */

function renderProducts(){

let container=document.getElementById("products")

if(!container) return

container.innerHTML=""

products.forEach(p=>{

let card=document.createElement("div")

card.className="product"

card.innerHTML=`

<img src="${p.image}">

<h3>${p.name}</h3>

<p class="price">$${p.price}</p>

<p>${p.desc}</p>

<p><b>${p.category}</b></p>

<button class="btn" onclick="deleteProduct(${p.id})">
Удалить
</button>

`

container.appendChild(card)

})


/* обновить статистику */

let count=document.getElementById("productsCount")

if(count){

count.textContent = products.length

}

}



/* =========================
   СТАТИСТИКА
========================= */

function renderStats(){

let ordersEl = document.getElementById("orders")

if(ordersEl){

ordersEl.textContent = orders

}

}



/* =========================
   ЗАПУСК
========================= */

renderCategories()

renderProducts()

renderStats()