let btn = document.getElementById("btn_menu")

let menu = document.getElementById("header");
let nav = document.getElementById("nav");
let body = document.getElementById("container_all");
btn.addEventListener("click", mostrar_menu);
function mostrar_menu(e){
   menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
    body.classList.toggle('move_content'); 
};
window.addEventListener("resize", function(){
    if (window.innerWidth > 760){
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
        body.classList.remove('move_content'); 
    }
})