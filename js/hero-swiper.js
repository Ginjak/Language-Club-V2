document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper for hero section
  const heroSwiper = new Swiper(".swiper-hero", {
    loop: true, // Infinite loop
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
