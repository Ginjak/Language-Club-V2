document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper instance for "swiper-mokytojai"
  const mokytojaiSwiper = new Swiper(".swiper-mokytojai", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    // Navigation buttons
    navigation: {
      nextEl: ".swiper-button-custom-next",
      prevEl: ".swiper-button-custom-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});
