document.addEventListener("DOMContentLoaded", function () {
  const bodyEl = document.querySelector("body");
  const apieLygiusHeading = document.querySelector(".apie-lygius-heading");

  // Function to handle hover effects dynamically
  function addHoverEffect(
    wrapperSelector,
    scaleSelector,
    headingSelectors,
    skaleSelectors
  ) {
    const wrapper = document.querySelector(wrapperSelector);
    const scaleItem = document.querySelector(scaleSelector);
    const headings = headingSelectors
      .map((selector) => document.querySelector(selector))
      .filter(Boolean);
    const skaleOpacityItems = skaleSelectors
      .map((selector) => document.querySelector(selector))
      .filter(Boolean);

    if (!wrapper || !scaleItem) return; // Exit if elements are not found

    function handleMouseEnter() {
      if (window.innerWidth > 991) {
        scaleItem.style.transform = "scale(1.1)";
        scaleItem.style.zIndex = "5";
        scaleItem.style.transition = "transform 0.3s ease-in-out";
        apieLygiusHeading.style.color = "white";
        bodyEl.classList.add("black-rgba");
        wrapper.classList.add("white-txt-color");
        wrapper.style.cursor = "pointer";
        scaleItem.classList.add("white-txt-color");

        // Apply white text color to all target headings
        headings.forEach((heading) =>
          heading.classList.add("black-rgba-color")
        );

        // Apply opacity reduction effect
        skaleOpacityItems.forEach((item) =>
          item.classList.add("black-rgba-opacity-1", "reduce")
        );
      }
    }

    function handleMouseLeave() {
      if (window.innerWidth > 991) {
        scaleItem.style.transform = "scale(1)";
        bodyEl.classList.remove("black-rgba");
        wrapper.classList.remove("white-txt-color");
        scaleItem.classList.remove("white-txt-color");
        apieLygiusHeading.style.color = "#212529";

        // Remove white text color from all target headings
        headings.forEach((heading) =>
          heading.classList.remove("black-rgba-color")
        );

        // Remove opacity reduction effect
        skaleOpacityItems.forEach((item) =>
          item.classList.remove("black-rgba-opacity-1", "reduce")
        );

        // Delay z-index reset to avoid flickering
        setTimeout(() => {
          scaleItem.style.zIndex = "1";
        }, 300);
      }
    }

    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseleave", handleMouseLeave);
  }

  // Add hover effects for multiple elements
  addHoverEffect(
    ".grid-scale-a1-wraper",
    ".skale .item.a1",
    [
      ".grid-scale-a2-wraper h3",
      ".grid-scale-b1-wraper h3",
      ".grid-scale-b11-wraper h3",
      ".grid-scale-b2-wraper h3",
      ".grid-scale-c1-wraper h3",
      ".grid-scale-c2-wraper h3",
    ],
    [
      ".skale .item.a2",
      ".skale .item.b1",
      ".skale .item.b11",
      ".skale .item.b2",
      ".skale .item.c1",
      ".skale .item.c2",
    ]
  );
  addHoverEffect(
    ".grid-scale-a2-wraper",
    ".skale .item.a2",
    [
      ".grid-scale-a1-wraper h3",
      ".grid-scale-b1-wraper h3",
      ".grid-scale-b11-wraper h3",
      ".grid-scale-b2-wraper h3",
      ".grid-scale-c1-wraper h3",
      ".grid-scale-c2-wraper h3",
    ],
    [
      ".skale .item.a1",
      ".skale .item.b1",
      ".skale .item.b11",
      ".skale .item.b2",
      ".skale .item.c1",
      ".skale .item.c2",
    ]
  );
  addHoverEffect(
    ".grid-scale-b1-wraper",
    ".skale .item.b1",
    [
      ".grid-scale-a1-wraper h3",
      ".grid-scale-a2-wraper h3",
      ".grid-scale-b11-wraper h3",
      ".grid-scale-b2-wraper h3",
      ".grid-scale-c1-wraper h3",
      ".grid-scale-c2-wraper h3",
    ],
    [
      ".skale .item.a1",
      ".skale .item.a2",
      ".skale .item.b11",
      ".skale .item.b2",
      ".skale .item.c1",
      ".skale .item.c2",
    ]
  );
  addHoverEffect(
    ".grid-scale-b11-wraper",
    ".skale .item.b11",
    [
      ".grid-scale-a1-wraper h3",
      ".grid-scale-a2-wraper h3",
      ".grid-scale-b1-wraper h3",
      ".grid-scale-b2-wraper h3",
      ".grid-scale-c1-wraper h3",
      ".grid-scale-c2-wraper h3",
    ],
    [
      ".skale .item.a1",
      ".skale .item.a2",
      ".skale .item.b1",
      ".skale .item.b2",
      ".skale .item.c1",
      ".skale .item.c2",
    ]
  );
  addHoverEffect(
    ".grid-scale-b2-wraper",
    ".skale .item.b2",
    [
      ".grid-scale-a1-wraper h3",
      ".grid-scale-a2-wraper h3",
      ".grid-scale-b1-wraper h3",
      ".grid-scale-b11-wraper h3",
      ".grid-scale-c1-wraper h3",
      ".grid-scale-c2-wraper h3",
    ],
    [
      ".skale .item.a1",
      ".skale .item.a2",
      ".skale .item.b1",
      ".skale .item.b11",
      ".skale .item.c1",
      ".skale .item.c2",
    ]
  );
  addHoverEffect(
    ".grid-scale-c1-wraper",
    ".skale .item.c1",
    [
      ".grid-scale-a1-wraper h3",
      ".grid-scale-a2-wraper h3",
      ".grid-scale-b1-wraper h3",
      ".grid-scale-b11-wraper h3",
      ".grid-scale-b2-wraper h3",
      ".grid-scale-c2-wraper h3",
    ],
    [
      ".skale .item.a1",
      ".skale .item.a2",
      ".skale .item.b1",
      ".skale .item.b11",
      ".skale .item.b2",
      ".skale .item.c2",
    ]
  );
  addHoverEffect(
    ".grid-scale-c2-wraper",
    ".skale .item.c2",
    [
      ".grid-scale-a1-wraper h3",
      ".grid-scale-a2-wraper h3",
      ".grid-scale-b1-wraper h3",
      ".grid-scale-b11-wraper h3",
      ".grid-scale-b2-wraper h3",
      ".grid-scale-c1-wraper h3",
    ],
    [
      ".skale .item.a1",
      ".skale .item.a2",
      ".skale .item.b1",
      ".skale .item.b11",
      ".skale .item.b2",
      ".skale .item.c1",
    ]
  );
});
