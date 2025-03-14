document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper instance for "swiper-mokytojas"
  const swiperMokytojas = new Swiper(".swiper-mokytojas", {
    loop: true, // Enable looping
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 600,

    // Pagination (if needed)
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Enable pagination clicks
    },

    // Navigation buttons
    navigation: {
      nextEl: ".swiper-button-mokytojas-next", // Next button
      prevEl: ".swiper-button-mokytojas-prev", // Previous button
    },

    // Responsive breakpoints
    breakpoints: {
      768: {
        slidesPerView: 2,
      },

      1150: {
        slidesPerView: 3,
      },
    },
  });
});
