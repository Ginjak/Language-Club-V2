document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper instance for "swiper-gallery"
  const swiperGallery = new Swiper(".swiper-gallery", {
    loop: true, // Enable looping
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },

    // Navigation buttons
    navigation: {
      nextEl: ".swiper-button-gallery-next", // Next button
      prevEl: ".swiper-button-gallery-prev", // Previous button
    },
  });
});
