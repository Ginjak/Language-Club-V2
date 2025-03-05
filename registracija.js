// Registracija - rodyti darboviete
document.addEventListener("DOMContentLoaded", function () {
  const sutikimasCheckbox = document.getElementById("sutikimas");
  const darbuovieteInput = document.getElementById("darbuoviete");
  const darbuovieteWraper = document.getElementById("darbuoviete-wraper");

  sutikimasCheckbox.addEventListener("change", function () {
    if (sutikimasCheckbox.checked) {
      // Remove d-none and add d-block when checked
      darbuovieteWraper.classList.remove("d-none");
      darbuovieteWraper.classList.add("d-block");
    } else {
      // Remove d-block and add d-none when unchecked
      darbuovieteWraper.classList.remove("d-block");
      darbuovieteWraper.classList.add("d-none");

      // Clear the value of #darbuoviete input when checkbox is unchecked
      darbuovieteInput.value = "";
    }
  });
});
