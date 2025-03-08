document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-atsiliepimai", {
    loop: true, // Enable looping
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 3, // Show 3 slides at a time
    slidesPerGroup: 1, // Move only 1 slide at a time
    spaceBetween: 20, // Space between slides
    speed: 600, // Make transitions smooth

    navigation: {
      nextEl: ".swiper-button-custom-next",
      prevEl: ".swiper-button-custom-prev",
    },
  });
});
