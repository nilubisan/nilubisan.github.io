"use strict";

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function (e) {
    document.querySelector("html").classList.toggle("lock");
    document.getElementById("nav-bar").classList.toggle("active");
    this.classList.toggle("active");
  });

  document.querySelector("#nav-bar").addEventListener("click", function (e) {
    if (
      e.target.className == "nav active"
    )
      return; 
    document.querySelector("html").classList.remove("lock");
    document.getElementById("nav-bar").classList.remove("active");
    document.getElementById("burger").classList.remove("active");
  });
});