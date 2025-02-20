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
  }
});
