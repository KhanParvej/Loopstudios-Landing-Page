const menuBar = document.querySelector(".menu-bar");
const iconHamburger = document.querySelector(".menu-bar__icon--hamburger");
const iconClose = document.querySelector(".menu-bar__icon--close");
const navBar = document.querySelector(".navbar");


menuBar.addEventListener("click", function() {
    iconHamburger.classList.toggle("hide");
    iconClose.classList.toggle("hide");
    navBar.classList.toggle("hide-side");

})