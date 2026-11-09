/**
 * Ethio Marketplace - Main JavaScript
 * Shared functionality used on every page:
 * - Mobile navigation toggle
 * - Dark mode toggle
 * - Scroll-to-top button
 * - Active nav link highlighting
 */

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  initDarkMode();
  initScrollToTop();
  highlightActiveNav();
  initFaqAccordion();
});

/**
 * Mobile navigation menu toggle.
 * Shows/hides the nav links when the hamburger button is clicked.
 */
function initMobileNav() {
  const toggleBtn = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      // Change icon between hamburger and X
      toggleBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        toggleBtn.textContent = "☰";
      });
    });
  }
}

/**
 * Dark mode toggle.
 * Saves the user's preference in localStorage.
 */
function initDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("ethio-theme");

  // Apply saved theme on page load
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      if (newTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️";
      } else {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.textContent = "🌙";
      }

      localStorage.setItem("ethio-theme", newTheme);
    });
  }
}

/**
 * Scroll-to-top button.
 * Appears when user scrolls down, hides when at top.
 */
function initScrollToTop() {
  const scrollBtn = document.getElementById("scroll-top");

  if (scrollBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    });

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/**
 * Highlight the active navigation link based on current page.
 */
function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

/**
 * FAQ accordion on the Contact page.
 * Click a question to show/hide its answer.
 */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isOpen = answer.classList.contains("open");

      // Close all other answers
      document.querySelectorAll(".faq-answer").forEach(function (ans) {
        ans.classList.remove("open");
      });
      document.querySelectorAll(".faq-question").forEach(function (q) {
        q.setAttribute("aria-expanded", "false");
      });

      // Toggle current answer
      if (!isOpen) {
        answer.classList.add("open");
        this.setAttribute("aria-expanded", "true");
      }
    });
  });
}
