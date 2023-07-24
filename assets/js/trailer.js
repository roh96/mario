$(document).ready(function () {
  const scrollButton = document.querySelector(".scrollBtn button");
  scrollButton.addEventListener("click", function (e) {
    window.scrollTo({
      top: document.querySelector(".trailer").offsetTop,
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

  //swiperjs
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 15,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      720: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 6,
      },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    effect: "fade",
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });

  //비디오 정지
  // $(".mySwiper .swiper-wrapper .swiper-slide").click(function () {
  //   $(".mySwiper2 .swiper-wrapper .swiper-slide")[0]
  //     .$(".videobox iframe")
  //     .contentWindow.postMessage(
  //       '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
  //       "*"
  //     );
  // });

  $(".mySwiper").click(function () {
    $(".youtube-video1")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video2")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video3")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video4")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video5")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video6")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  });
});

//버거버튼
const burger = document.querySelector(".mobileGnb");
const mobilenav = document.querySelector(".gnbList");

burger.onclick = function () {
  mobilenav.classList.toggle("burgeron");
};

//mobile trailer video
const thumb = document.querySelector(".mySwiper");
const mobile = document.querySelector(".mySwiper2");

thumb.onclick = function () {
  mobile.classList.add("videoOn");
};

$(".mySwiper2").click(function (e) {
  if ($(".mySwiper2 .swiper-wrapper").has(e.target).length === 0) {
    $(".youtube-video1")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video2")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video3")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video4")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video5")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    $(".youtube-video6")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
    mobile.classList.remove("videoOn");
  }
});
