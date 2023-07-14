$(document).ready(function () {
  //swiper
  function init() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  init();

  //스크롤시 등장이벤트
  function contents() {
    const elMove = document.querySelectorAll(".sectionName");
    window.addEventListener("scroll", contents);

    elMove.forEach(function (cont, key) {
      if (
        elMove[key].offsetTop - window.innerHeight * 0.8 <
        window.pageYOffset
      ) {
        cont.classList.add("car");
      }
    });

    const scrollColor = document.querySelector(".headerArea");
    if (window.pageYOffset > window.innerHeight) {
      scrollColor.classList.add("blue");
    } else {
      scrollColor.classList.remove("blue");
    }
  }
  contents();

  //Top버튼
  const Top = document.querySelector(".upBtn");
  Top.addEventListener("click", function (e) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const scrollButton = document.querySelector(".scrollBtn button");
  scrollButton.addEventListener("click", function (e) {
    window.scrollTo({
      top: document.querySelector(".about").offsetTop,
      behavior: "smooth",
    });
  });
});

const burger = document.querySelector(".mobileGnb");
const mobilenav = document.querySelector(".gnbList");

burger.onclick = function () {
  mobilenav.classList.toggle("burgeron");
};
