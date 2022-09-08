let navBurger = document.querySelector("#nav-burger");
let menuBurger = document.querySelector("#menu-burger");
let body = document.body;

navBurger.addEventListener("click", function() {
    console.log(menuBurger);
    menuBurger.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
})

const menuLinks = document.querySelectorAll(".nav__link");
menuLinks.forEach(link => {
    link.addEventListener("click", setScroll);
})

function setScroll(e) {
    let elem = e.target;
    let elemId = elem.dataset.goto
    let gotoBlock = document.querySelector(`#${elemId}`);
    let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector(".nav").offsetHeight;

    if(menuBurger.classList.contains("active")) {
        menuBurger.classList.remove("active");
        body.classList.remove("overflow-hidden");
    }

    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
    });
    e.preventDefault();
}