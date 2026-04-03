/* =========================
ЛОКАЛЬНЫЕ ПУТИ К КАРТИНКАМ
========================= */
function imgPath(path) {
  return path
    .split("/")
    .map(part => encodeURIComponent(part))
    .join("/");
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
  id: 3,
  name: "Intel Core i5-13600KF",
  price: 329,
  category: "cpu",
  brand: "Intel",
  stock: 10,
  image: imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
  images: [
    imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/2.jpg")
  ],
  rating: 5,
  description: "Отличный игровой процессор Intel для современных сборок.",
  specs: [
    "14 ядер / 20 потоков",
    "Частота до 5.1 GHz",
    "Сокет LGA1700",
    "DDR4 / DDR5",
    "Без встроенной графики"
  ]
},
{
  id: 4,
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
  description: "Быстрый 8-ядерный процессор AMD Ryzen для игр и работы.",
  specs: [
    "8 ядер / 16 потоков",
    "Частота до 5.4 GHz",
    "Сокет AM5",
    "Поддержка DDR5",
    "PCIe 5.0"
  ]
},
{
  id: 5,
  name: "Intel Core i9-13900K",
  price: 599,
  category: "cpu",
  brand: "Intel",
  stock: 4,
  image: imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
  images: [
    imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/3.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/4.jpg")
  ],
  rating: 5,
  description: "Топовый процессор Intel для тяжёлых задач и мощных игровых ПК.",
  specs: [
    "24 ядра / 32 потока",
    "Частота до 5.8 GHz",
    "Сокет LGA1700",
    "Поддержка DDR5",
    "Высокая производительность"
  ]
},
{
  id: 6,
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
  description: "Отличный процессор AMD для игровых ПК среднего и высокого уровня.",
  specs: [
    "6 ядер / 12 потоков",
    "Частота до 5.3 GHz",
    "Сокет AM5",
    "DDR5",
    "Энергоэффективность"
  ]
},

/* =========================
GPU
========================= */
{
  id: 7,
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
  id: 8,
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
  id: 9,
  name: "NVIDIA RTX 4060 Ti",
  price: 499,
  category: "gpu",
  brand: "NVIDIA",
  stock: 12,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/2.jpg"),
    imgPath("images/Видеокарта RTX 4070/3.jpg")
  ],
  rating: 4,
  description: "Хорошая видеокарта для Full HD и 1440p-гейминга.",
  specs: [
    "8GB GDDR6",
    "DLSS 3",
    "Ray Tracing",
    "PCIe 4.0",
    "Низкое энергопотребление"
  ]
},
{
  id: 10,
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
  description: "Мощная видеокарта AMD для игр в 1440p и высоких настройках.",
  specs: [
    "12GB GDDR6",
    "RDNA 3",
    "PCIe 4.0",
    "FidelityFX",
    "DisplayPort 2.1"
  ]
},
{
  id: 11,
  name: "NVIDIA RTX 4080 SUPER",
  price: 1199,
  category: "gpu",
  brand: "NVIDIA",
  stock: 3,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/4.jpg"),
    imgPath("images/Видеокарта RTX 4070/5.jpg")
  ],
  rating: 5,
  description: "Флагманская видеокарта для 4K-гейминга и профессиональных задач.",
  specs: [
    "16GB GDDR6X",
    "DLSS 3.5",
    "Ray Tracing",
    "PCIe 4.0",
    "Высокая производительность"
  ]
},
{
  id: 12,
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
  description: "Сильная видеокарта AMD для тяжёлых игр и графических задач.",
  specs: [
    "16GB GDDR6",
    "RDNA 3",
    "PCIe 4.0",
    "Ray Tracing",
    "Поддержка 4K"
  ]
},

/* =========================
MEMORY
========================= */
{
  id: 13,
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
  id: 14,
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
  description: "Премиальная DDR5 память большого объёма для мощных ПК.",
  specs: [
    "64GB (2x32GB)",
    "DDR5",
    "6000MHz",
    "RGB подсветка",
    "Премиальные радиаторы"
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
  description: "Современная DDR5 память для игровых и рабочих сборок.",
  specs: [
    "32GB (2x16GB)",
    "DDR5",
    "5600MHz",
    "XMP",
    "Надёжное охлаждение"
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
  description: "Доступная DDR4 память для повседневных и игровых ПК.",
  specs: [
    "16GB (2x8GB)",
    "DDR4",
    "3200MHz",
    "XMP",
    "Низкие тайминги"
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
  description: "Надежная память большого объёма для многозадачности и игр.",
  specs: [
    "32GB (2x16GB)",
    "DDR4",
    "3600MHz",
    "XMP профиль",
    "Радиаторы охлаждения"
  ]
},

/* =========================
MOTHERBOARD
========================= */
{
  id: 19,
  name: "ASUS ROG Strix Z790-F Gaming WiFi",
  price: 389,
  category: "motherboard",
  brand: "ASUS",
  stock: 7,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/2.jpg")
  ],
  rating: 5,
  description: "Премиальная материнская плата ASUS для мощных Intel-сборок.",
  specs: [
    "Сокет LGA1700",
    "Чипсет Z790",
    "DDR5",
    "Wi-Fi 6E",
    "PCIe 5.0"
  ]
},
{
  id: 20,
  name: "MSI MAG B650 Tomahawk WiFi",
  price: 249,
  category: "motherboard",
  brand: "MSI",
  stock: 11,
  image: imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
  images: [
    imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/2.jpg")
  ],
  rating: 5,
  description: "Популярная материнская плата MSI для AMD Ryzen AM5.",
  specs: [
    "Сокет AM5",
    "Чипсет B650",
    "DDR5",
    "Wi-Fi",
    "PCIe 4.0"
  ]
},
{
  id: 21,
  name: "Gigabyte B760 AORUS Elite AX",
  price: 219,
  category: "motherboard",
  brand: "Gigabyte",
  stock: 9,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/3.jpg")
  ],
  rating: 4,
  description: "Надежная материнская плата для Intel с хорошим набором функций.",
  specs: [
    "Сокет LGA1700",
    "B760",
    "DDR5",
    "Wi-Fi 6",
    "M.2 NVMe"
  ]
},
{
  id: 22,
  name: "ASRock B550M Pro4",
  price: 129,
  category: "motherboard",
  brand: "ASRock",
  stock: 13,
  image: imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
  images: [
    imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/4.jpg")
  ],
  rating: 4,
  description: "Практичная материнская плата для AMD Ryzen AM4.",
  specs: [
    "Сокет AM4",
    "B550",
    "DDR4",
    "Micro-ATX",
    "M.2 PCIe"
  ]
},

/* =========================
STORAGE
========================= */
{
  id: 23,
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
  description: "Быстрый NVMe SSD накопитель для игр, системы и работы.",
  specs: [
    "1TB",
    "NVMe PCIe 4.0",
    "До 7000 MB/s",
    "M.2 2280",
    "Высокая надёжность"
  ]
},
{
  id: 24,
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
  description: "Игровой SSD большого объёма с очень высокой скоростью.",
  specs: [
    "2TB",
    "NVMe PCIe 4.0",
    "До 7300 MB/s",
    "M.2",
    "Для игр и работы"
  ]
},
{
  id: 25,
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
  description: "Доступный NVMe SSD для ускорения системы и хранения данных.",
  specs: [
    "1TB",
    "NVMe PCIe 4.0",
    "До 5000 MB/s",
    "M.2",
    "Хорошая цена"
  ]
},
{
  id: 26,
  name: "Kingston NV2 500GB",
  price: 49,
  category: "storage",
  brand: "Kingston",
  stock: 25,
  image: imgPath("images/Оперативная память Kingston/1.jpg"),
  images: [
    imgPath("images/Оперативная память Kingston/1.jpg"),
    imgPath("images/Оперативная память Kingston/2.jpg")
  ],
  rating: 4,
  description: "Компактный и недорогой SSD для системы и базовых задач.",
  specs: [
    "500GB",
    "NVMe PCIe 4.0",
    "M.2 2280",
    "Для повседневного ПК",
    "Низкая цена"
  ]
},

/* =========================
COOLER
========================= */
{
  id: 27,
  name: "DeepCool AK620",
  price: 69,
  category: "cooler",
  brand: "DeepCool",
  stock: 14,
  image: imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
  images: [
    imgPath("images/Intel Core i7-13700K BOX/1.jpg"),
    imgPath("images/Intel Core i7-13700K BOX/2.jpg")
  ],
  rating: 5,
  description: "Эффективный башенный кулер для мощных процессоров.",
  specs: [
    "Воздушное охлаждение",
    "Два вентилятора",
    "Поддержка Intel/AMD",
    "Низкий шум",
    "Высокая эффективность"
  ]
},
{
  id: 28,
  name: "NZXT Kraken 240",
  price: 139,
  category: "cooler",
  brand: "NZXT",
  stock: 8,
  image: imgPath("images/Процессор AMD Ryzen 9 7900X OEM/1.jpg"),
  images: [
    imgPath("images/Процессор AMD Ryzen 9 7900X OEM/1.jpg"),
    imgPath("images/Процессор AMD Ryzen 9 7900X OEM/2.jpg")
  ],
  rating: 5,
  description: "Жидкостное охлаждение для современных производительных ПК.",
  specs: [
    "СЖО 240 мм",
    "RGB подсветка",
    "Поддержка Intel/AMD",
    "Тихая работа",
    "Для мощных CPU"
  ]
},

/* =========================
PSU
========================= */
{
  id: 29,
  name: "Corsair RM750x",
  price: 129,
  category: "psu",
  brand: "Corsair",
  stock: 12,
  image: imgPath("images/Оперативная память Corsair/1.jpg"),
  images: [
    imgPath("images/Оперативная память Corsair/1.jpg"),
    imgPath("images/Оперативная память Corsair/2.jpg")
  ],
  rating: 5,
  description: "Надежный блок питания с сертификатом 80 Plus Gold.",
  specs: [
    "750W",
    "80 Plus Gold",
    "Полностью модульный",
    "Тихий вентилятор",
    "Надёжные компоненты"
  ]
},
{
  id: 30,
  name: "be quiet! Pure Power 12 M 850W",
  price: 149,
  category: "psu",
  brand: "be quiet!",
  stock: 9,
  image: imgPath("images/Оперативная память Kingston/1.jpg"),
  images: [
    imgPath("images/Оперативная память Kingston/1.jpg"),
    imgPath("images/Оперативная память Kingston/2.jpg")
  ],
  rating: 5,
  description: "Тихий и мощный блок питания для игровых и рабочих систем.",
  specs: [
    "850W",
    "80 Plus Gold",
    "ATX 3.0",
    "Модульные кабели",
    "Тихая работа"
  ]
},

/* =========================
CASE
========================= */
{
  id: 31,
  name: "NZXT H5 Flow",
  price: 99,
  category: "case",
  brand: "NZXT",
  stock: 10,
  image: imgPath("images/Видеокарта RTX 4070/1.jpg"),
  images: [
    imgPath("images/Видеокарта RTX 4070/1.jpg"),
    imgPath("images/Видеокарта RTX 4070/2.jpg")
  ],
  rating: 4,
  description: "Стильный корпус с хорошей вентиляцией для современной сборки.",
  specs: [
    "Mid Tower",
    "Хороший airflow",
    "Поддержка ATX",
    "Стеклянная боковая панель",
    "Удобный кабель-менеджмент"
  ]
},
{
  id: 32,
  name: "Lian Li Lancool 216",
  price: 119,
  category: "case",
  brand: "Lian Li",
  stock: 7,
  image: imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
  images: [
    imgPath("images/Видеокарта AMD Radeon RX 7800/1.jpg"),
    imgPath("images/Видеокарта AMD Radeon RX 7800/2.jpg")
  ],
  rating: 5,
  description: "Просторный корпус с отличным охлаждением и современным дизайном.",
  specs: [
    "Mid Tower",
    "Поддержка больших GPU",
    "Хорошая продуваемость",
    "USB-C на панели",
    "Удобная сборка"
  ]
}
];

/* =========================
LOCALSTORAGE
========================= */
localStorage.setItem("products", JSON.stringify(defaultProducts));
let products = JSON.parse(localStorage.getItem("products")) || defaultProducts;
