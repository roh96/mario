$(document).ready(function () {
  // //masonry
  $(".grid").masonry({
    itemSelector: ".griditem",
    columnWidth: 300,
    gutter: 10,

    // gutter: ".gutter-sizer",
    horizontalOrder: true,
    isFitWidth: true,
  });

  //scroll down 버튼
  const scrollButton = document.querySelector(".scrollBtn button");
  scrollButton.addEventListener("click", function (e) {
    window.scrollTo({
      top: document.querySelector(".gallery").offsetTop,
      behavior: "smooth",
    });
  });

  //스크롤시 등장이벤트
  function contents() {
    window.addEventListener("scroll", contents);

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
});
