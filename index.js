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
  // CODE RAIN BACKGROUND ANIMATION

  // Get the canvas and the drawing context
  const canvas = document.getElementById("codeRain");
  const ctx = canvas.getContext("2d");

  // Make the canvas fill the entire browser window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Characters that will fall down the screen
  const letters = "01<>/{}[]+=-*/";
  const matrix = letters.split("");

  const fontSize = 16;
  const columns = canvas.width / fontSize;

  // Number of columns across the screen
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#c1f8ed";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      // Pick a random character from our list
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      // Draw the character at the column and current drop position
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // If the drop goes off the screen, randomly reset it to the top
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      // Move the drop downward
      drops[i]++;
    }
  }

  setInterval(draw, 40);

  // Handle resizing
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});

