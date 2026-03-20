/* =========================
PLUGIN ТЕКСТ В ЦЕНТРЕ
========================= */

const centerTextPlugin = {

id: "centerTextPlugin",

afterDraw(chart){

const {ctx, chartArea:{width,height}} = chart

let text = chart.config.options.centerText

if(!text) return

ctx.save()

ctx.font = "bold 26px Inter, Arial"
ctx.fillStyle = "#1a1a1a"
ctx.textAlign = "center"
ctx.textBaseline = "middle"

ctx.fillText(
text,
width/2,
height/2
)

ctx.restore()

}

}



/* =========================
СОЗДАНИЕ ГРАФИКА
========================= */

function createChart(id,value,text){

let canvas=document.getElementById(id)

if(!canvas) return

let ctx=canvas.getContext("2d")


/* градиент */

let gradient=ctx.createLinearGradient(0,0,200,0)

gradient.addColorStop(0,"#ff7a18")
gradient.addColorStop(1,"#ff3d77")


new Chart(canvas,{

type:"doughnut",

data:{
datasets:[{

data:[value,100-value],

backgroundColor:[
gradient,
"#e9ecf3"
],

borderWidth:0,
hoverOffset:8

}]
},

options:{

cutout:"78%",

plugins:{
legend:{display:false},
tooltip:{enabled:false}
},

centerText:text,

animation:{
duration:1800,
easing:"easeOutQuart"
}

},

plugins:[centerTextPlugin]

})

}



/* =========================
АНИМАЦИЯ ПРИ СКРОЛЛЕ
========================= */

let chartsCreated=false

function initCharts(){

if(chartsCreated) return

let statsSection=document.querySelector(".stats")

if(!statsSection) return

let position=statsSection.getBoundingClientRect().top
let screen=window.innerHeight

if(position < screen-100){

chartsCreated=true

createChart("chartProducts",90,"100+")
createChart("chartUsers",70,"50+")
createChart("chartProjects",60,"20+")
createChart("chartRating",100,"5★")

}

}

window.addEventListener("scroll",initCharts)
window.addEventListener("load",initCharts)