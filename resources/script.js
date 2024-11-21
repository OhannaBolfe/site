const toggleButton = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  mainContent.classList.toggle('active');
  toggleButton.setAttribute('aria-expanded', sidebar.classList.contains('active'));
});

document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.remove('active');
    mainContent.classList.remove('active');
    toggleButton.setAttribute('aria-expanded', false);
  }
});

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

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const profileImage = document.querySelector('.profile-pic img'); // Seleciona a imagem fora do acordeão

  header.addEventListener('click', () => {
    // Alternar o estado do acordeão:
    content.classList.toggle('accordion-active');
    header.classList.toggle('accordion-active');

    // Adicionar ou remover a classe 'accordion-img' na imagem
    if (profileImage) {
      profileImage.classList.toggle('accordion-img', content.classList.contains('accordion-active'));
    }
  });
});

