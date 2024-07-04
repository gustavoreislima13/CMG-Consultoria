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

  // Função para duplicar os elementos para rolagem infinita
  function cloneTestimonials() {
    testimonials.forEach(testimonial => {
      const clone = testimonial.cloneNode(true);
      testimonialsWrapper.appendChild(clone);
    });
  }

  cloneTestimonials(); // Clona os depoimentos

  testimonialsWrapper.scrollLeft = 0; // Inicializa a rolagem no início

  testimonialsWrapper.addEventListener('wheel', (event) => {
    event.preventDefault();
    testimonialsWrapper.scrollBy({
      left: event.deltaY < 0 ? -30 : 30
    });

    // Verifica se chegou ao final
    if (testimonialsWrapper.scrollLeft + testimonialsWrapper.clientWidth >= testimonialsWrapper.scrollWidth) {
      testimonialsWrapper.scrollLeft = 0; // Reinicia a rolagem para o início
    }

    // Verifica se chegou ao início
    if (testimonialsWrapper.scrollLeft <= 0) {
      testimonialsWrapper.scrollLeft = testimonialsWrapper.scrollWidth - testimonialsWrapper.clientWidth; // Rola para o final
    }
  });

  testimonialsWrapper.addEventListener('click', (event) => {
    if (event.target.closest('.testimonial')) {
      const testimonial = event.target.closest('.testimonial');
      modalName.textContent = testimonial.querySelector('.testimonial-name').textContent;
      modalText.textContent = testimonial.querySelector('.testimonial-text').textContent;
      modal.style.display = "flex";
    }
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
