import pets from "../../script/our-pets.js";

const burger = document.querySelector(".burger");
const shadow = document.querySelector(".shadow");

burger.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("no-scroll");
  burger.classList.toggle("burger_open");
  document.querySelector(".nav-menu").classList.toggle("nav-menu_open");
  shadow.classList.toggle("hidden");
  let navigation = document.querySelector(".nav-menu");
  navigation.addEventListener("click", function (event) {
    if (event.target.classList.contains("paragraph-mobile-menu")) {
      burger.classList.remove("burger_open");
      document.querySelector(".nav-menu").classList.remove("nav-menu_open");
      shadow.classList.add("hidden");
      document.querySelector("body").classList.remove("no-scroll");
    }
  });
  shadow.addEventListener("click", function (event) {
    if (event.target.classList.contains("shadow")) {
      document.querySelector("body").classList.remove("no-scroll");
      burger.classList.remove("burger_open");
      document.querySelector(".nav-menu").classList.remove("nav-menu_open");
      shadow.classList.add("hidden");
    }
  });
});
