document.addEventListener("DOMContentLoaded", function () {
  const kontaktiniuInput = document.getElementById("pamokos-kontaktiniu-budu");
  const onlineInput = document.getElementById("online-pamokos");
  const pirktiKrepselis = document.querySelectorAll(".pirkti-krepselis");
  const visoKaina = document.querySelectorAll(".viso-kaina");
  const pirktiKrepselisSusisiekti = document.querySelector(
    ".pirkti-krepselis-susisiekti"
  );

  function toggleVisibility() {
    if (kontaktiniuInput.checked) {
      pirktiKrepselis.forEach((el) => el.classList.add("d-none"));
      visoKaina.forEach((el) => el.classList.add("d-none"));
      pirktiKrepselisSusisiekti.classList.remove("d-none"); // Show this div
    } else if (onlineInput.checked) {
      pirktiKrepselis.forEach((el) => el.classList.remove("d-none"));
      visoKaina.forEach((el) => el.classList.remove("d-none"));
      pirktiKrepselisSusisiekti.classList.add("d-none"); // Hide this div
    }
  }

  // Add event listeners to radio buttons
  kontaktiniuInput.addEventListener("change", toggleVisibility);
  onlineInput.addEventListener("change", toggleVisibility);

  // Run the function on page load to apply the correct state
  toggleVisibility();
});
