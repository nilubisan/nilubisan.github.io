"use strict";

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function (e) {
    document.querySelector("html").classList.toggle("lock");
    document.getElementById("menu").classList.toggle("active");
    this.classList.toggle("active");
  });

  document.querySelector("#menu").addEventListener("click", function (e) {
    if (
      e.target.className == "menu active" ||
      e.target.className == "menu__item"
    )
      return;
    document.querySelector("html").classList.remove("lock");
    document.getElementById("menu").classList.remove("active");
    document.getElementById("burger").classList.remove("active");
  });
});
