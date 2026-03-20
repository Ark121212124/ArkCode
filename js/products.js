/* =========================
ЗАГРУЗКА ТОВАРОВ
========================= */

let products =
JSON.parse(localStorage.getItem("products")) || [

/* =========================
CPU
========================= */

{
id:1,

name:"Intel Core i7-13700K",

price:399,

category:"cpu",

brand:"Intel",

stock:12,

image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",

images:[

"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
"https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"

],

rating:5,

description:
"Мощный процессор Intel Core i7 13-го поколения для игр, разработки и работы с графикой.",

specs:[

"16 ядер / 24 потока",
"Частота до 5.4 GHz",
"Сокет LGA1700",
"Поддержка DDR5",
"TDP 125W"

]

},



{
id:2,

name:"AMD Ryzen 9 7900X",

price:449,

category:"cpu",

brand:"AMD",

stock:8,

image:"https://images.unsplash.com/photo-1591799265444-d66432b91588",

images:[

"https://images.unsplash.com/photo-1591799265444-d66432b91588",
"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
"https://images.unsplash.com/photo-1518779578993-ec3579fee39f"

],

rating:5,

description:
"Флагманский процессор AMD Ryzen для высокопроизводительных рабочих станций.",

specs:[

"12 ядер / 24 потока",
"Частота до 5.6 GHz",
"Сокет AM5",
"Поддержка DDR5",
"PCIe 5.0"

]

},



/* =========================
GPU
========================= */

{
id:3,

name:"NVIDIA RTX 4070",

price:699,

category:"gpu",

brand:"NVIDIA",

stock:10,

image:"https://images.unsplash.com/photo-1591488320449-011701bb6704",

images:[

"https://images.unsplash.com/photo-1591488320449-011701bb6704",
"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
"https://images.unsplash.com/photo-1591799265444-d66432b91588"

],

rating:5,

description:
"Современная видеокарта NVIDIA RTX 4070 с поддержкой Ray Tracing и DLSS 3.",

specs:[

"12GB GDDR6X",
"Ray Tracing",
"DLSS 3",
"PCIe 4.0",
"Поддержка 4K"

]

},



{
id:4,

name:"AMD Radeon RX 7800 XT",

price:649,

category:"gpu",

brand:"AMD",

stock:6,

image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",

images:[

"https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
"https://images.unsplash.com/photo-1591488320449-011701bb6704",
"https://images.unsplash.com/photo-1591799265444-d66432b91588"

],

rating:4,

description:
"Высокопроизводительная видеокарта AMD Radeon для игр в 1440p и 4K.",

specs:[

"16GB GDDR6",
"RDNA 3",
"PCIe 4.0",
"Ray Tracing",
"HDMI 2.1"

]

},



/* =========================
RAM
========================= */

{
id:5,

name:"Corsair Vengeance DDR5 32GB",

price:159,

category:"memory",

brand:"Corsair",

stock:15,

image:"https://images.unsplash.com/photo-1591799265444-d66432b91588",

images:[

"https://images.unsplash.com/photo-1591799265444-d66432b91588",
"https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"

],

rating:4,

description:
"Высокоскоростная оперативная память DDR5 для современных ПК.",

specs:[

"32GB (2x16GB)",
"DDR5",
"5600MHz",
"RGB подсветка",
"Низкие тайминги"

]

},



{
id:6,

name:"Kingston Fury 16GB DDR4",

price:79,

category:"memory",

brand:"Kingston",

stock:20,

image:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f",

images:[

"https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
"https://images.unsplash.com/photo-1591799265444-d66432b91588",
"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"

],

rating:4,

description:
"Надежная оперативная память Kingston для игровых ПК.",

specs:[

"16GB",
"DDR4",
"3200MHz",
"XMP профиль",
"Низкое энергопотребление"

]

}

]



/* =========================
СОХРАНИТЬ В LOCALSTORAGE
========================= */

localStorage.setItem(
"products",
JSON.stringify(products)
)