/* =========================
ЛОКАЛЬНЫЕ ПУТИ К КАРТИНКАМ
========================= */

function imgPath(path){
  return encodeURI(path);
}

const defaultProducts = [

/* =========================
CPU
========================= */

{
  id: 1,
  name: "Intel Core i7-13700K",
  price: 399,
  category: "cpu",
  brand: "Intel",
  stock: 12,

  image: imgPath("images/Intel Core i7-13700K BOX/1.jpg"),

  images: [
    imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/2.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/3.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/4.jpg")
  ],

  rating: 5,

  description: "Мощный процессор Intel Core i7 13-го поколения для игр, разработки и работы с графикой.",

  specs: [
    "16 ядер / 24 потока",
    "Частота до 5.4 GHz",
    "Сокет LGA1700",
    "Поддержка DDR5",
    "TDP 125W"
  ]
},

{
  id: 2,
  name: "AMD Ryzen 9 7900X",
  price: 449,
  category: "cpu",
  brand: "AMD",
  stock: 8,

  image: imgPath("images/Процессор AMD Ryzen 9 7900X OEM/1.jpg"),

  images: [
    imgPath("images/Процессор AMD Ryzen 9 7900X OEM/1.jpg"),
    imgPath("images/Процессор AMD Ryzen 9 7900X OEM/2.jpg")
  ],

  rating: 5,

  description: "Флагманский процессор AMD Ryzen для высокопроизводительных рабочих станций.",

  specs: [
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
  id: 3,
  name: "NVIDIA RTX 4070",
  price: 699,
  category: "gpu",
  brand: "NVIDIA",
  stock: 10,

  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),

  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/2.jpg"),
    imgPath("images/Видеокарта RTX 4070/3.jpg"),
    imgPath("images/Видеокарта RTX 4070/4.jpg"),
    imgPath("images/Видеокарта RTX 4070/5.jpg"),
    imgPath("images/Видеокарта RTX 4070/6.jpg"),
    imgPath("images/Видеокарта RTX 4070/7.jpg"),
    imgPath("images/Видеокарта RTX 4070/8.jpg"),
    imgPath("images/Видеокарта RTX 4070/9.jpg")
  ],

  rating: 5,

  description: "Современная видеокарта NVIDIA RTX 4070 с поддержкой Ray Tracing и DLSS 3.",

  specs: [
    "12GB GDDR6X",
    "Ray Tracing",
    "DLSS 3",
    "PCIe 4.0",
    "Поддержка 4K"
  ]
},

{
  id: 4,
  name: "AMD Radeon RX 7800 XT",
  price: 649,
  category: "gpu",
  brand: "AMD",
  stock: 6,

  image: imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),

  images: [
    imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/2.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/3.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/4.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/5.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/6.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/7.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/8.jpg")
  ],

  rating: 4,

  description: "Высокопроизводительная видеокарта AMD Radeon для игр в 1440p и 4K.",

  specs: [
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
  id: 5,
  name: "Corsair Vengeance DDR5 32GB",
  price: 159,
  category: "memory",
  brand: "Corsair",
  stock: 15,

  image: imgPath("images/Оперативная память Corsair/1.jpg"),

  images: [
    imgPath("images/Оперативная память Corsair/1.jpg"),
    imgPath("images/Оперативная память Corsair/2.jpg"),
    imgPath("images/Оперативная память Corsair/3.jpg"),
    imgPath("images/Оперативная память Corsair/4.jpg"),
    imgPath("images/Оперативная память Corsair/5.jpg")
  ],

  rating: 4,

  description: "Высокоскоростная оперативная память DDR5 для современных ПК.",

  specs: [
    "32GB (2x16GB)",
    "DDR5",
    "5600MHz",
    "RGB подсветка",
    "Низкие тайминги"
  ]
},

{
  id: 6,
  name: "Kingston Fury 16GB DDR4",
  price: 79,
  category: "memory",
  brand: "Kingston",
  stock: 20,

  image: imgPath("images/Оперативная память Kingston/1.jpg"),

  images: [
    imgPath("images/Оперативная память Kingston/1.jpg"),
    imgPath("images/Оперативная память Kingston/2.jpg"),
    imgPath("images/Оперативная память Kingston/3.jpg"),
    imgPath("images/Оперативная память Kingston/4.jpg")
  ],

  rating: 4,

  description: "Надежная оперативная память Kingston для игровых ПК.",

  specs: [
    "16GB",
    "DDR4",
    "3200MHz",
    "XMP профиль",
    "Низкое энергопотребление"
  ]
}

];

/* =========================
LOCALSTORAGE
========================= */

let products = defaultProducts;

/* 
Если хочешь всегда брать свежие данные из файла:
оставь так, как ниже.
Это перезапишет старые ссылки на Unsplash.
*/
localStorage.setItem("products", JSON.stringify(defaultProducts));
products = JSON.parse(localStorage.getItem("products")) || defaultProducts;
