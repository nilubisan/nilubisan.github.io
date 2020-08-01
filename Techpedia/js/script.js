window.addEventListener('resize',() => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


window.addEventListener("DOMContentLoaded", function () {
  let listToggler = document.querySelectorAll(".navbar-link-pointer");
  [].forEach.call(listToggler, function (item) {
    item.addEventListener("click", function (e) {
      if (item.innerHTML == "⯆") item.innerHTML = "⯈";
      else item.innerHTML = "⯆";
      let sibl = e.target.nextElementSibling;
      sibl.nextElementSibling.classList.toggle("nested-show");
    });
  });

  document.getElementById("burger").addEventListener("click", function (e) {
    document.querySelector("html").classList.toggle("lock");
    document.getElementById("navbar").classList.toggle("active");
    document.getElementById("main-doc").classList.toggle("active");
    this.classList.toggle("active");
  });

  let linkList = document.querySelectorAll(".nav-link");
  [].forEach.call(linkList, function (item) {
    item.addEventListener("click", function (e) {
      document.querySelector("html").classList.remove("lock");
      document.getElementById("navbar").classList.remove("active");
      document.getElementById("burger").classList.remove("active");
      document.getElementById("main-doc").classList.remove("active");
    });
  });
});
