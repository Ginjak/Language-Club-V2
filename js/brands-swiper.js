document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper for the kodėl section
  const brandSwiper = new Swiper(".swiper-brands", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });
});
