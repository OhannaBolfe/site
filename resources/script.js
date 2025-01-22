$(document).ready(function() {
    $('.carregamento').addClass('loading');
    setTimeout(function(){
        $('.carregamento').removeClass('loading'); // Remove a classe loading primeiro
        $('.loaderpage').fadeOut(300); // Em seguida, o fadeOut
    }, 500);
});

// Atualiza o ano no rodapé
document.getElementById('currentYear').textContent = new Date().getFullYear();


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

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('meta[name="copyright"]');
    const yearElement = document.getElementById("currentYear");

    