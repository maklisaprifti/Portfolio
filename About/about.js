const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active"); // slide down menu
  hamburger.classList.toggle("active"); // animate hamburger to X
});
