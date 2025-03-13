// Show or hide #juridinis-asmuo-info based on radio selection
document.addEventListener("DOMContentLoaded", function () {
  const juridinisAsmuoRadio = document.getElementById("juridinis-asmuo");
  const fizinisAsmuoRadio = document.getElementById("fizinis-asmuo");
  const juridinisAsmuoInfo = document.getElementById("juridinis-asmuo-info");

  // Function to toggle visibility
  function toggleJuridinisInfo() {
    if (juridinisAsmuoRadio.checked) {
      juridinisAsmuoInfo.classList.remove("d-none");
    } else {
      juridinisAsmuoInfo.classList.add("d-none");
    }
  }

  // Run once on page load in case the radio is pre-selected
  toggleJuridinisInfo();

  // Listen for changes on BOTH radio buttons
  juridinisAsmuoRadio.addEventListener("change", toggleJuridinisInfo);
  fizinisAsmuoRadio.addEventListener("change", toggleJuridinisInfo);
});
