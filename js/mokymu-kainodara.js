document.addEventListener("DOMContentLoaded", function () {
  function showContent(buttonId, contentId) {
    const content = document.getElementById(contentId);

    // Remove d-none class and add fade-in effect
    content.classList.remove("d-none");
    content.classList.add("fade-in");

    // Ensure other content is hidden if the button is clicked again
    if (buttonId === "centralizuotas") {
      document
        .getElementById("necentralizuoti-mokymai")
        .classList.add("d-none");
    } else if (buttonId === "necentralizuotas") {
      document.getElementById("centralizuoti-mokymai").classList.add("d-none");
    }
  }

  // Correcting the button IDs
  document
    .getElementById("centralizuotas")
    .addEventListener("click", function () {
      showContent("centralizuotas", "centralizuoti-mokymai");
    });

  document
    .getElementById("necentralizuotas")
    .addEventListener("click", function () {
      showContent("necentralizuotas", "necentralizuoti-mokymai");
    });
});
