/* =========================
ПОЛУЧЕНИЕ ПОЛЬЗОВАТЕЛЯ
========================= */

let user =
JSON.parse(localStorage.getItem("currentUser"))

if(!user){

location.href="login.html"

}



/* =========================
ПОКАЗ EMAIL
========================= */

let emailEl =
document.getElementById("user-email")

if(emailEl){

emailEl.textContent = user.email

}



/* =========================
ДАТА РЕГИСТРАЦИИ
========================= */

let dateEl =
document.getElementById("user-created")

if(dateEl && user.created){

dateEl.textContent = user.created

}



/* =========================
ЗАКАЗЫ
========================= */

let orders =
JSON.parse(localStorage.getItem("ordersList")) || []

let list =
document.getElementById("orders-list")



function renderOrders(){

if(!list) return

list.innerHTML=""



if(orders.length===0){

list.innerHTML = `
<p class="empty-orders">
У вас пока нет заказов
</p>
`

return

}



orders.forEach((order,index)=>{

let li=document.createElement("li")

li.className="order-item"



li.innerHTML=`

<div class="order-card">

<div class="order-top">

<h3>Заказ #${index+1}</h3>

<span class="order-date">
${order.date || ""}
</span>

</div>


<div class="order-products">

${order.items.map(item => `

<div class="order-product">

<span>${item.name}</span>

<span>$${item.price}</span>

</div>

`).join("")}

</div>


<div class="order-total">

Итого: $${order.total}

</div>

</div>

`

list.appendChild(li)

})

}



/* =========================
ВЫХОД
========================= */

function logout(){

if(confirm("Выйти из аккаунта?")){

localStorage.removeItem("currentUser")

location.href="index.html"

}

}



/* =========================
ЗАПУСК
========================= */

renderOrders()