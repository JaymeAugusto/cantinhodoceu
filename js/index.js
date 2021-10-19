const abreMenu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")
const fecha = document.querySelector(".btn-close")

abreMenu.addEventListener("click",function(){
    menu.classList.add("menuopen") 
})

fecha.addEventListener("click",function(){
    menu.classList.remove("menuopen") 
})