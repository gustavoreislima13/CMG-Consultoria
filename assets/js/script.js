'use strict';

/**
 * navbar variables
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
  const testimonialsWrapper = document.querySelector('.testimonials-wrapper');

  testimonialsWrapper.addEventListener('wheel', (event) => {
    event.preventDefault();
    testimonialsWrapper.scrollBy({
      left: event.deltaY < 0 ? -30 : 30
    });
  });
});
