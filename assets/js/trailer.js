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
    breakpoints: {
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

  const thumbCl = document.querySelectorAll(
    ".mySwiper .swiper-wrapper .swiper-slide"
  );
  const videoPl = document.querySelectorAll(
    ".mySwiper2 .swiper-wrapper .swiper-slide"
  );

  // thumbCl.forEach(function (cont, key) {
  // cont.onclick = function () {
  // console.log(thumbCl);
  // console.log(videoPl[key].children[0].innerHTML);
  // videoPl[key].children
  // contentWindow.postMessage(
  //   '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
  //   "*"
  // );
  // not.videoPl[key]
  //   .$(".videobox iframe")
  //   .contentWindow.postMessage(
  //     '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
  //     "*"
  //   );
  // };
  // });

  // thumbCl.addEventListener("click", function (e) {
  //   thumbCl.forEach(function (cont, key) {
  //     not.videoPl[key]
  //       .$(".videobox iframe")
  //       .contentWindow.postMessage(
  //         '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
  //         "*"
  //       );
  //   });
  // });

  // const clickImg = document.querySelector(".mySwiper");
  // const ifr = document.querySelector("#iframe");
  // function pauseV(e) {
  //   console.log("ddf");
  //   pauseVideo();
  // }

  // clickImg.addEventListener("click", function (e) {
  //   console.log(ifr);
  //   pauseV(ifr);
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
