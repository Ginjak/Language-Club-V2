document.addEventListener("DOMContentLoaded", function () {
  const bodyEl = document.querySelector("body");
  const apieLygiusHeading = document.querySelector(".apie-lygius-heading");
  const a1Wraper = document.querySelector(".grid-scale-a1-wraper");
  const skaleA1 = document.querySelector(".skale .item.a1");

  if (a1Wraper && skaleA1) {
    a1Wraper.addEventListener("mouseenter", function () {
      skaleA1.style.transform = "scale(1.1)";
      skaleA1.style.transition = "transform 0.3s ease-in-out";
      skaleA1.style.color = "white";
      a1Wraper.style.color = "white";
      apieLygiusHeading.style.color = "white";
      bodyEl.classList.add("black-rgba");
    });

    a1Wraper.addEventListener("mouseleave", function () {
      skaleA1.style.transform = "scale(1)";
      bodyEl.classList.remove("black-rgba");
      a1Wraper.style.color = "#212529";
      apieLygiusHeading.style.color = "#212529";
    });
  }
});
