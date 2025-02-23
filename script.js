document.addEventListener("DOMContentLoaded", function () {
  // Kalbu pasirinkimas
  const selectLng = document.getElementById("select-lng");
  const languageEnglish = document.querySelector(".language-english");
  const languageWrapper = document.querySelector(".language-wraper");

  if (selectLng && languageEnglish && languageWrapper) {
    selectLng.addEventListener("click", function () {
      languageEnglish.classList.toggle("d-none");
      languageEnglish.classList.toggle("d-block");
    });

    languageWrapper.addEventListener("mouseleave", function () {
      if (languageEnglish.classList.contains("d-block")) {
        languageEnglish.classList.remove("d-block");
        languageEnglish.classList.add("d-none");
      }
    });

    languageWrapper.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (languageEnglish.classList.contains("d-block")) {
          languageEnglish.classList.remove("d-block");
          languageEnglish.classList.add("d-none");
        }
      });
    });
  }

  // Swiper
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".swiper", {
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

    const swiperKodel = new Swiper(".swiper-kodel", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
        },
      },
    });

    const swiperAtsiliepimai = new Swiper(".swiper-atsiliepimai", {
      loop: true, // Infinite loop
      autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false,
      },
      slidesPerView: 3,
      spaceBetween: 20,

      navigation: {
        nextEl: ".swiper-button-custom-next",
        prevEl: ".swiper-button-custom-prev",
      },
    });

    var brandSwiper = new Swiper(".swiper-brands", {
      loop: true,
      slidesPerView: 7,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      },
    });
  }

  // Footer current year
  function displayCurrentYear() {
    const currentYear = new Date().getFullYear(); // Get the current year
    const elements = document.querySelectorAll(".current-year"); // Select all elements with the class 'current-year'

    // Update the text content of each selected element
    elements.forEach((element) => {
      element.textContent = currentYear;
    });
  }
  displayCurrentYear();
});
