const hamburgerIcon = document.querySelector(".main-nav__burger-icon__wrapper");
const hamburgerCloseIcon =  document.querySelector(".main-nav__mobile-menu-close__icon-wrapper");
const mobileNav = document.querySelector(".main-nav__mobile-menu-container");

hamburgerIcon.addEventListener("click", function() {
    mobileNav.classList.toggle("active");
})

hamburgerCloseIcon.addEventListener("click", function() {
    mobileNav.classList.toggle("active");
})