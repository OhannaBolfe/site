const toggleButton = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

const sections = document.querySelectorAll('.section');
const headerHeight = document.querySelector('header').offsetHeight;

document.documentElement.style.setProperty('--header-height', headerHeight + 'px');

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  const sectionTop = section.getBoundingClientRect().top - headerHeight;
  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth'
  });
};

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('meta[name="copyright"]');
    const yearElement = document.getElementById("currentYear");

    copyrightElement.setAttribute('content', `Ohanna Schmitt Bolfe, ${currentYear}`);
    yearElement.textContent = currentYear; 
});

