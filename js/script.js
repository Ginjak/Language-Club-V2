document.addEventListener("DOMContentLoaded", function () {
  // 🌟 Hamburger Menu
  const menuToggle = document.querySelector(".hamburger-menu-toggle-wraper");
  const bottomNav = document.getElementById("bottom-nav");
  const closeButton = document.querySelector(".close");

  if (bottomNav) {
    bottomNav.style.transition = "top 0.3s ease-in-out"; // Smooth transition

    function toggleMenu() {
      bottomNav.classList.toggle("menu-open"); // Add or remove class
    }

    // Open menu
    if (menuToggle) {
      menuToggle.addEventListener("click", toggleMenu);
    }

    // Close menu
    if (closeButton) {
      closeButton.addEventListener("click", toggleMenu);
    }

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !bottomNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        bottomNav.classList.remove("menu-open");
      }
    });
  }

  const searchIcon = document.querySelector(".search-ico"); // Search icon
  const searchBarMobile = document.getElementById("search-bar-mobile"); // Search bar
  const closeSearch = document.getElementById("close-search"); // Close button
  const searchInput = document.getElementById("search"); // Search input field

  // Show search bar with fade-in effect
  if (searchIcon) {
    searchIcon.addEventListener("click", function () {
      // Remove the d-none class, and add show class to trigger fade-in
      searchBarMobile.classList.remove("d-none");
      setTimeout(() => {
        searchBarMobile.classList.add("show"); // Trigger fade-in transition
      }, 10); // Small delay to ensure transition works
    });
  }

  // Hide search bar with fade-out effect when close button is clicked
  if (closeSearch) {
    closeSearch.addEventListener("click", function () {
      searchBarMobile.classList.remove("show"); // Remove show class to trigger fade-out
      // After the fade-out is complete, add the d-none class to hide the element
      setTimeout(() => {
        searchBarMobile.classList.add("d-none");
      }, 300); // Wait for fade-out transition to complete (300ms)
    });
  }

  // Close the search bar when the Enter key is pressed
  if (searchInput) {
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        // Check if the pressed key is Enter
        searchBarMobile.classList.remove("show"); // Remove the show class for fade-out
        // After the fade-out is complete, add the d-none class to hide the element
        setTimeout(() => {
          searchBarMobile.classList.add("d-none");
        }, 300); // Wait for fade-out transition to complete (300ms)
      }
    });
  }

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
    var mokytojaiSwiper = new Swiper(".swiper-mokytojai", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-custom-next",
        prevEl: ".swiper-button-custom-prev",
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
          slidesPerView: 4,
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
