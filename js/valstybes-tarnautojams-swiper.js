document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper instance for "swiper-duk"
  const swiperDuk = new Swiper(".swiper-valstybes-tarnautojams", {
    loop: true, // Enable looping
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 600,

    // Optionally, you can add pagination if needed
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Enable pagination clicks
    },
    navigation: {
      nextEl: ".swiper-button-duk-next", // Next button
      prevEl: ".swiper-button-duk-prev", // Previous button
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  });
});
