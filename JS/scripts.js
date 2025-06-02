document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");
  const header = document.querySelector(".site-header");
  const scrollToTop = document.getElementById("scrollToTop");

  // Toggle mobile menu
  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  // Header scroll effect
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    });
  }

  // Scroll to Top visibility and click handler
  if (scrollToTop) {
    window.addEventListener("scroll", () => {
      scrollToTop.style.opacity = window.scrollY > 200 ? 1 : 0;

      // Optional: update circle fill (if SVG circle progress is used)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / docHeight) * 100;
      const progressCircle = scrollToTop.querySelector(".progress");
      if (progressCircle) {
        const offset = 100 - scrollPercent;
        progressCircle.style.strokeDashoffset = offset;
      }
    });

    scrollToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check for saved preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    });
  }



  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".works-grid img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Optional: click outside image to close
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
