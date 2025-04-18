function enableTimelineScroll(selector) {
  const timeline = document.querySelector(selector);
  if (!timeline) return; // Prevent errors if the element doesn't exist

  let isMouseDown = false;
  let startX;
  let scrollLeft;

  timeline.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - timeline.offsetLeft;
    scrollLeft = timeline.scrollLeft;
    timeline.style.cursor = "grabbing"; // Change cursor when dragging
  });

  timeline.addEventListener("mouseleave", () => {
    isMouseDown = false;
    timeline.style.cursor = "grab"; // Reset cursor when leaving the container
  });

  timeline.addEventListener("mouseup", () => {
    isMouseDown = false;
    timeline.style.cursor = "grab"; // Reset cursor after releasing mouse
  });

  timeline.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - timeline.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the speed of scrolling
    timeline.scrollLeft = scrollLeft - walk;
  });

  // Add horizontal scroll with mouse wheel
  timeline.addEventListener("wheel", (e) => {
    if (e.deltaY === 0) return; // Only trigger for horizontal scrolling
    e.preventDefault();
    timeline.scrollLeft += e.deltaY; // Scroll horizontally based on wheel movement
  });
}

// Call the function with your selector
enableTimelineScroll("#svarbi-info-ispanu .timeline");
