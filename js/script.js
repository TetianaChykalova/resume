let navBurger = document.querySelector("#nav-burger");
let menuBurger = document.querySelector("#menu-burger");

navBurger.addEventListener("click", function() {
    menuBurger.classList.toggle("active");
})