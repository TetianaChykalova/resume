let navBurger = document.querySelector("#nav-burger");
let menuBurger = document.querySelector("#menu-burger");
let body = document.body;

navBurger.addEventListener("click", function() {
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


//multilingual
const allLang = ["ua", "en"];
let select = document.querySelector(".change-lang");

select.addEventListener("change", changeURLLang);

function changeURLLang() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
    console.log(lang);
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.slice(1);

    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#en";
        location.reload();
    }
    select.value = hash;

    let title = document.querySelector('title');
    title.innerHTML = langTitle["unit"][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-'+key);
        if(elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}
changeLang ();

// let navBurger = document.querySelector("#nav-burger");
// let menuBurger = document.querySelector("#menu-burger");
// let body = document.body;
//
// navBurger.addEventListener("click", function() {
//     console.log(menuBurger);
//     menuBurger.classList.toggle("active");
//     body.classList.toggle("overflow-hidden");
// })
//
// const menuLinks = document.querySelectorAll(".nav__link");
// menuLinks.forEach(link => {
//     link.addEventListener("click", setScroll);
// })
//
// function setScroll(e) {
//     let elem = e.target;
//     let elemId = elem.dataset.goto
//     let gotoBlock = document.querySelector(`#${elemId}`);
//     let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector(".nav").offsetHeight;
//
//     if(menuBurger.classList.contains("active")) {
//         menuBurger.classList.remove("active");
//         body.classList.remove("overflow-hidden");
//     }
//
//     window.scrollTo({
//         top: gotoBlockValue,
//         behavior: "smooth"
//     });
//     e.preventDefault();
// }
//
//
// //multilingual
// const allLang = ["ua", "en"];
// let select = document.querySelector(".change-lang");
//
// select.addEventListener("change", changeURLLang);
//
// function changeURLLang() {
//     let lang = select.value;
//     location.href = window.location.pathname + "#" + lang;
//     location.reload();
//     console.log(lang);
// }
//
// function changeLang() {
//     let hash = window.location.hash;
//     hash = hash.slice(1);
//
//     if (!allLang.includes(hash)) {
//         location.href = window.location.pathname + "#en";
//         location.reload();
//     }
//     select.value = hash;
//
//     let title = document.querySelector('title');
//     title.innerHTML = langTitle["unit"][hash];
//     for (let key in langArr) {
//         let elem = document.querySelector('.lng-'+key);
//         if(elem) {
//             elem.innerHTML = langArr[key][hash];
//         }
//     }
// }
// changeLang ();
