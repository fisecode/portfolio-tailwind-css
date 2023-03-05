//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  const isClickOutSide =
    !hamburger.contains(event.target) && !navMenu.contains(event.target);

  if (isClickOutSide) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
