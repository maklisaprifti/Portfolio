document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Hamburger toggle
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active"); // slide down menu
      hamburger.classList.toggle("active"); // animate hamburger to X
    });
  }
});
