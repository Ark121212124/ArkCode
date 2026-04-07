/* =========================
ЛОКАЛЬНЫЕ ПУТИ К КАРТИНКАМ
========================= */
function imgPath(path) {
  return path
    .split("/")
    .map(part => encodeURIComponent(part))
    .join("/");
}

/* =========================
ПОРЯДОК КАТЕГОРИЙ
========================= */
const categoryOrder = [
  "cpu",
  "gpu",
  "memory",
  "motherboard",
  "storage",
  "cooler",
  "psu",
  "case"
];

/* =========================
НАЗВАНИЯ КАТЕГОРИЙ
========================= */
const categoryLabels = {
  cpu: "Процессоры",
  gpu: "Видеокарты",
  memory: "Оперативная память",
  motherboard: "Материнские платы",
  storage: "Накопители",
  cooler: "Охлаждение",
  psu: "Блоки питания",
  case: "Корпуса"
};

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
    description: "Мощный процессор Intel Core i7 13-го поколения для игр, разработки, стриминга и работы с графикой.",
    specs: [
      "Ядра / потоки: 16 / 24",
      "Частота: до 5.4 GHz",
      "Сокет: LGA1700",
      "Память: DDR5",
      "TDP: 125W"
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
    description: "Флагманский процессор AMD Ryzen для производительных игровых систем и рабочих станций.",
    specs: [
      "Ядра / потоки: 12 / 24",
      "Частота: до 5.6 GHz",
      "Сокет: AM5",
      "Память: DDR5",
      "Интерфейс: PCIe 5.0"
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
    description: "Один из лучших процессоров Intel для игровых сборок и универсального домашнего ПК.",
    specs: [
      "Ядра / потоки: 14 / 20",
      "Частота: до 5.1 GHz",
      "Сокет: LGA1700",
      "Память: DDR4 / DDR5",
      "Встроенная графика: отсутствует"
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
    description: "Быстрый 8-ядерный процессор AMD Ryzen для игр, монтажа и многозадачной работы.",
    specs: [
      "Ядра / потоки: 8 / 16",
      "Частота: до 5.4 GHz",
      "Сокет: AM5",
      "Память: DDR5",
      "Интерфейс: PCIe 5.0"
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
    description: "Топовый процессор Intel для тяжёлых задач, мощных игровых ПК и профессиональной работы.",
    specs: [
      "Ядра / потоки: 24 / 32",
      "Частота: до 5.8 GHz",
      "Сокет: LGA1700",
      "Память: DDR5",
      "Класс: высокая производительность"
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
    description: "Отличный процессор AMD для игрового ПК среднего и высокого уровня с хорошим запасом на будущее.",
    specs: [
      "Ядра / потоки: 6 / 12",
      "Частота: до 5.3 GHz",
      "Сокет: AM5",
      "Память: DDR5",
      "Особенность: энергоэффективность"
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
    description: "Современная видеокарта NVIDIA RTX 4070 с поддержкой Ray Tracing и DLSS 3 для игр в 1440p и 4K.",
    specs: [
      "Видеопамять: 12GB GDDR6X",
      "Технологии: Ray Tracing",
      "Апскейлинг: DLSS 3",
      "Интерфейс: PCIe 4.0",
      "Разрешение: поддержка 4K"
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
    description: "Высокопроизводительная видеокарта AMD Radeon для современных игр в 1440p и 4K.",
    specs: [
      "Видеопамять: 16GB GDDR6",
      "Архитектура: RDNA 3",
      "Интерфейс: PCIe 4.0",
      "Технологии: Ray Tracing",
      "Видеоразъём: HDMI 2.1"
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
    description: "Хорошая видеокарта для Full HD и 1440p-гейминга с поддержкой современных технологий NVIDIA.",
    specs: [
      "Видеопамять: 8GB GDDR6",
      "Апскейлинг: DLSS 3",
      "Технологии: Ray Tracing",
      "Интерфейс: PCIe 4.0",
      "Особенность: низкое энергопотребление"
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
    description: "Мощная видеокарта AMD для игр в 1440p на высоких настройках и хорошей графике.",
    specs: [
      "Видеопамять: 12GB GDDR6",
      "Архитектура: RDNA 3",
      "Интерфейс: PCIe 4.0",
      "Технологии: FidelityFX",
      "Видеоразъём: DisplayPort 2.1"
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
    description: "Флагманская видеокарта для 4K-гейминга, 3D-рендера и профессиональных задач.",
    specs: [
      "Видеопамять: 16GB GDDR6X",
      "Апскейлинг: DLSS 3.5",
      "Технологии: Ray Tracing",
      "Интерфейс: PCIe 4.0",
      "Класс: высокая производительность"
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
    description: "Сильная видеокарта AMD для тяжёлых игр, высоких настроек графики и работы с контентом.",
    specs: [
      "Видеопамять: 16GB GDDR6",
      "Архитектура: RDNA 3",
      "Интерфейс: PCIe 4.0",
      "Технологии: Ray Tracing",
      "Разрешение: поддержка 4K"
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
    description: "Высокоскоростная оперативная память DDR5 для современных игровых и рабочих ПК.",
    specs: [
      "Объём: 32GB (2x16GB)",
      "Тип памяти: DDR5",
      "Частота: 5600MHz",
      "Подсветка: RGB",
      "Особенность: низкие тайминги"
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
    description: "Надёжная оперативная память Kingston для игровых и домашних систем.",
    specs: [
      "Объём: 16GB",
      "Тип памяти: DDR4",
      "Частота: 3200MHz",
      "Профиль: XMP",
      "Особенность: низкое энергопотребление"
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
    description: "Премиальная DDR5 память большого объёма для мощных рабочих станций и топовых сборок.",
    specs: [
      "Объём: 64GB (2x32GB)",
      "Тип памяти: DDR5",
      "Частота: 6000MHz",
      "Подсветка: RGB",
      "Особенность: премиальные радиаторы"
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
    description: "Современная DDR5 память для игровых и рабочих сборок с хорошим запасом по скорости.",
    specs: [
      "Объём: 32GB (2x16GB)",
      "Тип памяти: DDR5",
      "Частота: 5600MHz",
      "Профиль: XMP",
      "Охлаждение: надёжные радиаторы"
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
    description: "Доступная DDR4 память для повседневных задач, игр и рабочих приложений.",
    specs: [
      "Объём: 16GB (2x8GB)",
      "Тип памяти: DDR4",
      "Частота: 3200MHz",
      "Профиль: XMP",
      "Особенность: низкие тайминги"
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
    description: "Надёжная память большого объёма для многозадачности, игр и рабочих программ.",
    specs: [
      "Объём: 32GB (2x16GB)",
      "Тип памяти: DDR4",
      "Частота: 3600MHz",
      "Профиль: XMP",
      "Охлаждение: радиаторы"
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
    description: "Премиальная материнская плата ASUS для мощных Intel-сборок и современных игровых систем.",
    specs: [
      "Сокет: LGA1700",
      "Чипсет: Z790",
      "Память: DDR5",
      "Беспроводная связь: Wi-Fi 6E",
      "Интерфейс: PCIe 5.0"
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
    description: "Популярная материнская плата MSI для AMD Ryzen AM5 с хорошим набором функций.",
    specs: [
      "Сокет: AM5",
      "Чипсет: B650",
      "Память: DDR5",
      "Беспроводная связь: Wi-Fi",
      "Интерфейс: PCIe 4.0"
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
    description: "Надёжная материнская плата для Intel с хорошим охлаждением и современными интерфейсами.",
    specs: [
      "Сокет: LGA1700",
      "Чипсет: B760",
      "Память: DDR5",
      "Беспроводная связь: Wi-Fi 6",
      "Накопители: M.2 NVMe"
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
    description: "Практичная материнская плата для AMD Ryzen AM4 и сборок среднего класса.",
    specs: [
      "Сокет: AM4",
      "Чипсет: B550",
      "Память: DDR4",
      "Форм-фактор: Micro-ATX",
      "Накопители: M.2 PCIe"
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
    description: "Быстрый NVMe SSD накопитель для игр, системы, рабочих файлов и монтажа.",
    specs: [
      "Объём: 1TB",
      "Интерфейс: NVMe PCIe 4.0",
      "Скорость чтения: до 7000 MB/s",
      "Формат: M.2 2280",
      "Особенность: высокая надёжность"
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
    description: "Игровой SSD большого объёма с очень высокой скоростью для тяжёлых проектов и игр.",
    specs: [
      "Объём: 2TB",
      "Интерфейс: NVMe PCIe 4.0",
      "Скорость чтения: до 7300 MB/s",
      "Формат: M.2",
      "Назначение: игры и работа"
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
    description: "Доступный NVMe SSD для ускорения системы, приложений и хранения данных.",
    specs: [
      "Объём: 1TB",
      "Интерфейс: NVMe PCIe 4.0",
      "Скорость чтения: до 5000 MB/s",
      "Формат: M.2",
      "Преимущество: хорошая цена"
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
    description: "Компактный и недорогой SSD для системы, браузера, документов и повседневных задач.",
    specs: [
      "Объём: 500GB",
      "Интерфейс: NVMe PCIe 4.0",
      "Формат: M.2 2280",
      "Назначение: повседневный ПК",
      "Преимущество: низкая цена"
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
    description: "Эффективный башенный кулер для мощных процессоров с хорошим балансом шума и температуры.",
    specs: [
      "Тип охлаждения: воздушное",
      "Вентиляторы: 2 шт.",
      "Совместимость: Intel / AMD",
      "Уровень шума: низкий",
      "Эффективность: высокая"
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
    description: "Жидкостное охлаждение для современных производительных ПК, игровых и рабочих систем.",
    specs: [
      "Тип охлаждения: СЖО 240 мм",
      "Подсветка: RGB",
      "Совместимость: Intel / AMD",
      "Уровень шума: тихая работа",
      "Назначение: для мощных CPU"
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
    description: "Надёжный блок питания с высоким КПД для игровых и рабочих систем.",
    specs: [
      "Мощность: 750W",
      "Сертификат: 80 Plus Gold",
      "Кабели: полностью модульный",
      "Охлаждение: тихий вентилятор",
      "Компоненты: надёжные"
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
    description: "Тихий и мощный блок питания для современных игровых и рабочих сборок.",
    specs: [
      "Мощность: 850W",
      "Сертификат: 80 Plus Gold",
      "Стандарт: ATX 3.0",
      "Кабели: модульные",
      "Особенность: тихая работа"
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
    description: "Стильный корпус с хорошей вентиляцией для современной игровой или рабочей сборки.",
    specs: [
      "Форм-фактор: Mid Tower",
      "Охлаждение: хороший airflow",
      "Совместимость: ATX",
      "Панель: стеклянная боковая",
      "Сборка: удобный кабель-менеджмент"
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
    description: "Просторный корпус с отличным охлаждением, современным дизайном и удобной сборкой.",
    specs: [
      "Форм-фактор: Mid Tower",
      "Совместимость: большие GPU",
      "Охлаждение: высокая продуваемость",
      "Передняя панель: USB-C",
      "Сборка: удобная"
    ]
  }
];

/* =========================
НОРМАЛИЗАЦИЯ ТОВАРОВ
========================= */
function normalizeProducts(items) {
  if (!Array.isArray(items)) return [];

  return items
    .filter(Boolean)
    .map(product => ({
      ...product,
      id: Number(product.id),
      category: String(product.category || "").toLowerCase().trim(),
      brand: String(product.brand || "").trim(),
      name: String(product.name || "").trim(),
      description: String(product.description || "").trim(),
      image: product.image || "",
      images: Array.isArray(product.images) ? product.images : [],
      specs: Array.isArray(product.specs) ? product.specs : [],
      rating: Number(product.rating) || 0,
      price: Number(product.price) || 0,
      stock: Number(product.stock) || 0
    }))
    .filter(product => product.id && product.name);
}

/* =========================
СОРТИРОВКА ТОВАРОВ
1. по порядку категорий
2. внутри категории по названию
========================= */
function sortProducts(items) {
  return [...items].sort((a, b) => {
    const categoryA = categoryOrder.indexOf(a.category);
    const categoryB = categoryOrder.indexOf(b.category);

    if (categoryA !== categoryB) {
      return categoryA - categoryB;
    }

    return a.name.localeCompare(b.name, "ru");
  });
}

/* =========================
ГРУППИРОВКА ПО КАТЕГОРИЯМ
========================= */
function groupProductsByCategory(items) {
  const grouped = {};

  categoryOrder.forEach(category => {
    grouped[category] = {
      label: categoryLabels[category],
      items: []
    };
  });

  items.forEach(product => {
    if (!grouped[product.category]) {
      grouped[product.category] = {
        label: product.category,
        items: []
      };
    }

    grouped[product.category].items.push(product);
  });

  return grouped;
}

/* =========================
СБРОС ТОВАРОВ ДО ДЕФОЛТНЫХ
используй вручную в консоли:
resetProductsStorage()
========================= */
function resetProductsStorage() {
  const preparedProducts = sortProducts(normalizeProducts(defaultProducts));
  localStorage.setItem("products", JSON.stringify(preparedProducts));
  location.reload();
}

/* =========================
LOCALSTORAGE
Не перезаписываем товары каждый раз
========================= */
let storedProducts = [];

try {
  storedProducts = JSON.parse(localStorage.getItem("products")) || [];
} catch (error) {
  storedProducts = [];
}

if (!Array.isArray(storedProducts) || !storedProducts.length) {
  const preparedProducts = sortProducts(normalizeProducts(defaultProducts));
  localStorage.setItem("products", JSON.stringify(preparedProducts));
  storedProducts = preparedProducts;
}

let products = sortProducts(normalizeProducts(storedProducts));

/* =========================
СГРУППИРОВАННЫЕ ТОВАРЫ
========================= */
const productsByCategory = groupProductsByCategory(products);

/* =========================
ЭКСПОРТ В WINDOW
========================= */
window.defaultProducts = defaultProducts;
window.products = products;
window.productsByCategory = productsByCategory;
window.categoryOrder = categoryOrder;
window.categoryLabels = categoryLabels;
window.normalizeProducts = normalizeProducts;
window.sortProducts = sortProducts;
window.groupProductsByCategory = groupProductsByCategory;
window.resetProductsStorage = resetProductsStorage;

console.log("Все товары:", products);
console.log("Товары по категориям:", productsByCategory);
