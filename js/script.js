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
    console.log(elem);
    let elemId = elem.dataset.goto
    let gotoBlock = document.querySelector(`#${elemId}`);
    console.log(gotoBlock);
    let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector(".nav").offsetHeight;
    console.log(gotoBlockValue);

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








// let buttonAboutMe = document.querySelector("#button-about-me");
// let buttonSkills = document.querySelector("#button-skills");
// let buttonEducation = document.querySelector("#button-education");
// let buttonContacts = document.querySelector("#button-contacts");
// let buttonProject = document.querySelector("#button-project");
//
// let infoAboutMe = document.querySelector("#about-me-info");
// let infoSkills = document.querySelector("#skills-info");
// let infoEducation = document.querySelector("#education-info");
// let infoContacts = document.querySelector("#contacts-info");
// let infoProject = document.querySelector("#project-info");
//
// setScroll(buttonEducation, infoEducation);
// buttonContacts.addEventListener("click", function () {
//     infoContacts.scrollIntoView({
//         block: "start",
//         inline: "nearest",
//         behavior: "smooth"
//     });
// })
//
// function setScroll(button, elem) {
//     button.addEventListener("click", function() {
//         elem.scrollIntoView({
//             block: "start",
//             inline: "nearest",
//             behavior: "smooth"
//         });
//         console.log("scroll");
//     });
//     menuBurger.classList.remove("active");
// }

