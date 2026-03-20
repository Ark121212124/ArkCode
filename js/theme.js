/* =========================
ПОЛУЧЕНИЕ КНОПКИ
========================= */

const themeBtn = document.querySelector(".theme-btn")



/* =========================
ПРИМЕНЕНИЕ ТЕМЫ
========================= */

function applyTheme(theme){

if(theme === "dark"){

document.body.classList.add("dark")

if(themeBtn) themeBtn.textContent="☀"

}else{

document.body.classList.remove("dark")

if(themeBtn) themeBtn.textContent="🌙"

}

}



/* =========================
ПЕРЕКЛЮЧЕНИЕ ТЕМЫ
========================= */

function toggleTheme(){

let currentTheme =
document.body.classList.contains("dark")
? "dark"
: "light"

let newTheme =
currentTheme === "dark"
? "light"
: "dark"

applyTheme(newTheme)

localStorage.setItem("theme",newTheme)

}



/* =========================
ЗАГРУЗКА ТЕМЫ
========================= */

function loadTheme(){

let savedTheme =
localStorage.getItem("theme")

/* если пользователь уже выбирал тему */

if(savedTheme){

applyTheme(savedTheme)

return

}

/* если нет — берем системную */

let prefersDark =
window.matchMedia(
"(prefers-color-scheme: dark)"
).matches

applyTheme(prefersDark ? "dark" : "light")

}



/* =========================
ИНИЦИАЛИЗАЦИЯ
========================= */

loadTheme()



/* =========================
ОТСЛЕЖИВАНИЕ СИСТЕМНОЙ ТЕМЫ
========================= */

window.matchMedia(
"(prefers-color-scheme: dark)"
).addEventListener("change", e => {

if(!localStorage.getItem("theme")){

applyTheme(e.matches ? "dark" : "light")

}

})