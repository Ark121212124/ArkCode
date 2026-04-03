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

  image: imgPath("images/Видеокарта  AMD Radeon RX 7800/1.jpg"),

  images: [
    imgPath("images/Видеокарта  AMD Radeon RX 7800/1.jpg"),
    imgPath("images/Видеокарта  AMD Radeon RX 7800/2.jpg"),
    imgPath("images/Видеокарта  AMD Radeon RX 7800/3.jpg"),
    imgPath("images/Видеокарта  AMD Radeon RX 7800/4.jpg"),
    imgPath("images/Видеокарта  AMD Radeon RX 7800/5.jpg"),
    imgPath("images/Видеокарта  AMD Radeon RX 7800/6.jpg"),
    imgPath("images/Видеокарта  AMD Radeon RX 7800/7.jpg"),
    imgPath("images/Видеокарта  AMD Radeon RX 7800/8.jpg")
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
{
  id: 7,
  name: "Intel Core i5-13600KF",
  price: 329,
  category: "cpu",
  brand: "Intel",
  stock: 11,
  image: imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
  images: [
    imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/2.jpg")
  ],
  rating: 5,
  description: "Производительный процессор Intel для игр, стриминга и повседневной работы.",
  specs: [
    "14 ядер / 20 потоков",
    "Частота до 5.1 GHz",
    "Сокет LGA1700",
    "Поддержка DDR4 / DDR5",
    "Без встроенной графики"
  ]
},
{
  id: 8,
  name: "AMD Ryzen 7 7700X",
  price: 359,
  category: "cpu",
  brand: "AMD",
  stock: 9,
  image: imgPath("images/Процессор AMD Ryzen 9 7900X OEM/1.jpg"),
  images: [
    imgPath("images/Процессор AMD Ryzen 9 7900X OEM/1.jpg"),
    imgPath("images/Процессор AMD Ryzen 9 7900X OEM/2.jpg")
  ],
  rating: 5,
  description: "Быстрый 8-ядерный процессор AMD Ryzen для игр и производительных сборок.",
  specs: [
    "8 ядер / 16 потоков",
    "Частота до 5.4 GHz",
    "Сокет AM5",
    "Поддержка DDR5",
    "PCIe 5.0"
  ]
},
{
  id: 9,
  name: "Intel Core i9-13900K",
  price: 599,
  category: "cpu",
  brand: "Intel",
  stock: 5,
  image: imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
  images: [
    imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/3.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/4.jpg")
  ],
  rating: 5,
  description: "Топовый процессор Intel Core i9 для тяжёлых задач, монтажа и современных игр.",
  specs: [
    "24 ядра / 32 потока",
    "Частота до 5.8 GHz",
    "Сокет LGA1700",
    "Поддержка DDR5",
    "Высокая производительность"
  ]
},
{
  id: 10,
  name: "AMD Ryzen 5 7600X",
  price: 269,
  category: "cpu",
  brand: "AMD",
  stock: 14,
  image: imgPath("images/Процессор AMD Ryzen 9 7900X OEM/1.jpg"),
  images: [
    imgPath("images/Процессор AMD Ryzen 9 7900X OEM/1.jpg"),
    imgPath("images/Процессор AMD Ryzen 9 7900X OEM/2.jpg")
  ],
  rating: 4,
  description: "Оптимальный процессор AMD для игровых ПК среднего и высокого класса.",
  specs: [
    "6 ядер / 12 потоков",
    "Частота до 5.3 GHz",
    "Сокет AM5",
    "DDR5",
    "Энергоэффективный"
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
{
  id: 11,
  name: "NVIDIA RTX 4060 Ti",
  price: 499,
  category: "gpu",
  brand: "NVIDIA",
  stock: 13,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/2.jpg"),
    imgPath("images/Видеокарта RTX 4070/3.jpg")
  ],
  rating: 4,
  description: "Видеокарта NVIDIA для комфортной игры в Full HD и 1440p.",
  specs: [
    "8GB GDDR6",
    "DLSS 3",
    "Ray Tracing",
    "PCIe 4.0",
    "Низкое энергопотребление"
  ]
},
{
  id: 12,
  name: "AMD Radeon RX 7700 XT",
  price: 549,
  category: "gpu",
  brand: "AMD",
  stock: 7,
  image: imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
  images: [
    imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/2.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/3.jpg")
  ],
  rating: 4,
  description: "Мощная видеокарта AMD Radeon для современных игр в 1440p.",
  specs: [
    "12GB GDDR6",
    "RDNA 3",
    "PCIe 4.0",
    "Поддержка FidelityFX",
    "DisplayPort 2.1"
  ]
},
{
  id: 13,
  name: "NVIDIA RTX 4080 SUPER",
  price: 1199,
  category: "gpu",
  brand: "NVIDIA",
  stock: 4,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/4.jpg"),
    imgPath("images/Видеокарта RTX 4070/5.jpg")
  ],
  rating: 5,
  description: "Флагманская видеокарта для 4K-гейминга, работы с графикой и AI-задач.",
  specs: [
    "16GB GDDR6X",
    "DLSS 3.5",
    "Ray Tracing",
    "PCIe 4.0",
    "Высокая производительность"
  ]
},
{
  id: 14,
  name: "AMD Radeon RX 7900 GRE",
  price: 729,
  category: "gpu",
  brand: "AMD",
  stock: 5,
  image: imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
  images: [
    imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/5.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/6.jpg")
  ],
  rating: 4,
  description: "Производительная видеокарта AMD для игр на высоких настройках и в 4K.",
  specs: [
    "16GB GDDR6",
    "RDNA 3",
    "PCIe 4.0",
    "Ray Tracing",
    "Поддержка 4K"
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
},
{
  id: 15,
  name: "Corsair Dominator Platinum DDR5 64GB",
  price: 329,
  category: "memory",
  brand: "Corsair",
  stock: 6,
  image: imgPath("images/Оперативная память Corsair/1.jpg"),
  images: [
    imgPath("images/Оперативная память Corsair/1.jpg"),
    imgPath("images/Оперативная память Corsair/2.jpg"),
    imgPath("images/Оперативная память Corsair/3.jpg")
  ],
  rating: 5,
  description: "Премиальная память DDR5 большого объёма для рабочих станций и топовых сборок.",
  specs: [
    "64GB (2x32GB)",
    "DDR5",
    "6000MHz",
    "RGB подсветка",
    "Премиальное охлаждение"
  ]
},
{
  id: 16,
  name: "Kingston Fury Beast DDR5 32GB",
  price: 149,
  category: "memory",
  brand: "Kingston",
  stock: 16,
  image: imgPath("images/Оперативная память Kingston/1.jpg"),
  images: [
    imgPath("images/Оперативная память Kingston/1.jpg"),
    imgPath("images/Оперативная память Kingston/2.jpg"),
    imgPath("images/Оперативная память Kingston/3.jpg")
  ],
  rating: 4,
  description: "Современная оперативная память DDR5 для игровых и рабочих ПК.",
  specs: [
    "32GB (2x16GB)",
    "DDR5",
    "5600MHz",
    "Поддержка XMP",
    "Надежные радиаторы"
  ]
},
{
  id: 17,
  name: "Corsair Vengeance DDR4 16GB",
  price: 69,
  category: "memory",
  brand: "Corsair",
  stock: 18,
  image: imgPath("images/Оперативная память Corsair/1.jpg"),
  images: [
    imgPath("images/Оперативная память Corsair/1.jpg"),
    imgPath("images/Оперативная память Corsair/4.jpg")
  ],
  rating: 4,
  description: "Доступная и быстрая DDR4 память для повседневных и игровых систем.",
  specs: [
    "16GB (2x8GB)",
    "DDR4",
    "3200MHz",
    "Низкие тайминги",
    "Поддержка XMP"
  ]
},
{
  id: 18,
  name: "Kingston Fury Beast DDR4 32GB",
  price: 119,
  category: "memory",
  brand: "Kingston",
  stock: 12,
  image: imgPath("images/Оперативная память Kingston/1.jpg"),
  images: [
    imgPath("images/Оперативная память Kingston/1.jpg"),
    imgPath("images/Оперативная память Kingston/4.jpg")
  ],
  rating: 4,
  description: "Надежная память большого объёма для игр, работы и многозадачности.",
  specs: [
    "32GB (2x16GB)",
    "DDR4",
    "3600MHz",
    "Профиль XMP",
    "Компактные радиаторы"
  ]
},

/* =========================
SSD
========================= */
{
  id: 19,
  name: "Samsung 980 PRO 1TB",
  price: 129,
  category: "storage",
  brand: "Samsung",
  stock: 17,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/2.jpg")
  ],
  rating: 5,
  description: "Быстрый NVMe SSD накопитель для системы, игр и профессиональных приложений.",
  specs: [
    "1TB",
    "NVMe PCIe 4.0",
    "До 7000 MB/s",
    "Форм-фактор M.2",
    "Высокая надежность"
  ]
},
{
  id: 20,
  name: "WD Black SN850X 2TB",
  price: 219,
  category: "storage",
  brand: "Western Digital",
  stock: 10,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/3.jpg")
  ],
  rating: 5,
  description: "Игровой SSD большого объёма с высокой скоростью чтения и записи.",
  specs: [
    "2TB",
    "NVMe PCIe 4.0",
    "До 7300 MB/s",
    "M.2 2280",
    "Подходит для игр"
  ]
},
{
  id: 21,
  name: "Crucial P3 Plus 1TB",
  price: 89,
  category: "storage",
  brand: "Crucial",
  stock: 22,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/4.jpg")
  ],
  rating: 4,
  description: "Доступный NVMe SSD для ускорения системы и хранения файлов.",
  specs: [
    "1TB",
    "NVMe PCIe 4.0",
    "До 5000 MB/s",
    "M.2",
    "Оптимальная цена"
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
