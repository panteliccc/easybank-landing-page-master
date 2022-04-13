const menu_btt = document.querySelector(".menu-btt");
const menu = document.querySelector(".modal");
const html = document.querySelector("html")
let ind = 1;
menu_btt.addEventListener("click",function(){
    if(ind === 1) { 
        ind = 0;
        menu.classList.add("active");
        html.classList.add("mobile");
        menu_btt.src = "./images/icon-close.svg"

    }
    else {
        ind = 1;
        menu.classList.remove("active");
        html.classList.remove("mobile");
        menu_btt.src = "./images/icon-hamburger.svg"
    }
});