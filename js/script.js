// Preloader
window.onload = function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
};

// Burger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".btn-menu");
  const nav = document.getElementById("mainnav");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }
});
