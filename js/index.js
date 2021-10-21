const abreMenu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")
const fecha = document.querySelector(".btn-close")

abreMenu.addEventListener("click",function(){
    menu.classList.add("menuopen") 
})

fecha.addEventListener("click",function(){
    menu.classList.remove("menuopen") 
})

const abrefotos = document.querySelector(".arrowdown")
const fechafotos = document.querySelector(".arrowup")
const divfotos = document.querySelector(".mostpic")

abrefotos.addEventListener("click",function(){
    divfotos.classList.remove("mostpic")
    divfotos.classList.add("mostpictrue")
    abrefotos.classList.remove("viewtrue")
    abrefotos.classList.add("viewfalse")
    fechafotos.classList.add("viewtrue")
    fechafotos.classList.remove("viewfalse")
})

fechafotos.addEventListener("click",function(){
    divfotos.classList.add("mostpic")
    divfotos.classList.remove("mostpictrue")
    abrefotos.classList.add("viewtrue")
    abrefotos.classList.remove("viewfalse")
    fechafotos.classList.remove("viewtrue")
    fechafotos.classList.add("viewfalse")
})