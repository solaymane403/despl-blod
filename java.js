// Minimal, dependency-free scripts for the welcome page

// 1) Initialize particles background if library is available
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Particles !== "undefined") {
    try {
      Particles.init({
        selector: ".background",
        color: ["#03dac6", "#ff0266", "#03dac6", "#ff0266"],
        connectParticles: true,
        maxParticles: 90,
        responsive: [
          {
            breakpoint: 900,
            options: { maxParticles: 60, connectParticles: false }
          },
          {
            breakpoint: 600,
            options: { maxParticles: 40, connectParticles: false }
          }
        ]
      });
    } catch (e) {
      console.warn("Particles init failed:", e);
    }
  }

  // 2) Mobile navigation toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-nav');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // 3) Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
