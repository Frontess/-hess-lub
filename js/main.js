document.addEventListener("DOMContentLoaded", function () {
  let stagesSwiper = new Swiper(".stages__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".stages__button_next",
      prevEl: ".stages__button_prev",
    },
    pagination: {
      el: ".stages__pagination",
      clickable: true,
    },
  });

  let swiper = new Swiper(".partners__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".partners__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".partners__button_next",
      prevEl: ".partners__button_prev",
    },
    breakpoints: {
      707: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },

    speed: 4000, //Интервал 4 сек

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
