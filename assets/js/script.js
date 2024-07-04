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
  const testimonials = document.querySelectorAll('.testimonial');
  const modal = document.getElementById('testimonial-modal');
  const modalName = document.querySelector('.modal-name');
  const modalText = document.querySelector('.modal-text');
  const closeButton = document.querySelector('.close-button');

  testimonialsWrapper.scrollLeft = testimonialsWrapper.scrollWidth / 2;

  testimonialsWrapper.addEventListener('wheel', (event) => {
    event.preventDefault();
    testimonialsWrapper.scrollBy({
      left: event.deltaY < 0 ? -30 : 30
    });

    // Verifica se chegou ao final
    if (testimonialsWrapper.scrollLeft + testimonialsWrapper.clientWidth >= testimonialsWrapper.scrollWidth) {
      testimonialsWrapper.scrollLeft = testimonialsWrapper.clientWidth;
    }

    // Verifica se chegou ao início
    if (testimonialsWrapper.scrollLeft <= 0) {
      testimonialsWrapper.scrollLeft = testimonialsWrapper.scrollWidth / 2;
    }
  });

  testimonials.forEach(testimonial => {
    testimonial.addEventListener('click', () => {
      modalName.textContent = testimonial.querySelector('.testimonial-name').textContent;
      modalText.textContent = testimonial.querySelector('.testimonial-text').textContent;
      modal.style.display = "flex";
    });
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = "none";
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Remove o preloader após um curto período
  setTimeout(function() {
    document.body.classList.remove("loading");
    document.getElementById("preloader").style.display = "none";
  }, 1000); // tempo reduzido para 1 segundo (1000 milissegundos)
});
