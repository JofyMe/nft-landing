// Connecting SCSS styles
import "../scss/main.scss";

// Connecting block animations
AOS.init();

//This script adds an open class for further animation
const burger = document.querySelector(".header__burger");
const navbar = document.querySelector(".header__navbar");

burger.addEventListener("click", (e) => {
  e.preventDefault();

  burger.classList.toggle("active");
  navbar.classList.toggle("open");
});
