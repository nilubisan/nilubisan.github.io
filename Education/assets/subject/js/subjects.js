"use strict";


window.addEventListener('DOMContentLoaded', function() {


let subjectList = {
  maths: "https://www.youtube.com/embed/PnURrJqOM1s",
  chemistry: "https://www.youtube.com/embed/bka20Q9TN6M",
  biology: "https://www.youtube.com/embed/_GwCUM13EVc",
  physics: "https://www.youtube.com/embed/WL5_T-g3Fxw",
  compscience: "https://www.youtube.com/embed/fgSV2wXNJUs",
  engllit: "https://www.youtube.com/embed/fhwl_yMDHUU",
  french: "https://www.youtube.com/embed/6fb5Kg2CLZM",
  accounting: "https://www.youtube.com/embed/B5ncY0F5wbg",
  other: "https://www.youtube.com/embed/-ZPpsI79y2w",
};

document.querySelector("#subjects").addEventListener("click", function (e) {
  let activeSub = document.querySelector(".subject__subject-name_active");
    if (e.target.id == "subjects" || e.target.id == activeSub.id) return;
    activeSub.classList.remove("subject__subject-name_active");
    e.target.classList.add("subject__subject-name_active");
    let videoFrame = document.querySelector(".subject__iframe");
    videoFrame.setAttribute("src", subjectList[e.target.id]);
});


});