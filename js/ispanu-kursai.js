// Function to handle showing the content with fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  function showContent(buttonId, contentId) {
    const content = document.getElementById(contentId);

    // Remove d-none class and add fade-in effect
    content.classList.remove("d-none");
    content.classList.add("fade-in");

    // Ensure other content is hidden if the button is clicked again
    if (buttonId === "individualus") {
      const grupejeContent = document.getElementById("mokymai-grupeje");
      grupejeContent.classList.add("d-none");
    } else if (buttonId === "grupeje") {
      const individualusContent = document.getElementById(
        "mokymai-individualus"
      );
      individualusContent.classList.add("d-none");
    }
  }

  // Add event listeners to the buttons
  document
    .getElementById("individualus")
    .addEventListener("click", function () {
      showContent("individualus", "mokymai-individualus");
    });

  document.getElementById("grupeje").addEventListener("click", function () {
    showContent("grupeje", "mokymai-grupeje");
  });
});
