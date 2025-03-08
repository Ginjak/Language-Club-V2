document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Swiper instance for "swiper-atsiliepimai"
  const swiperAtsiliepimai = new Swiper(".swiper-atsiliepimai", {
    loop: true, // Enable looping
    autoplay: {
      delay: 3000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 600,

    // Optionally, you can add pagination if you need it
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Enable pagination clicks
    },
    navigation: {
      nextEl: ".swiper-button-custom-next", // Next button
      prevEl: ".swiper-button-custom-prev", // Previous button
    },
    breakpoints: {
      900: {
        slidesPerView: 2,
      },
      1250: {
        slidesPerView: 3,
      },
    },
  });
});
