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

    copyrightElement.setAttribute('content', `Ohanna Schmitt Bolfe, ${currentYear}`);
    yearElement.textContent = currentYear; 
});

function curriculo_event(button) {
  const complementoElement = button.nextElementSibling;
  complementoElement.style.visibility = "visible";
}

document.addEventListener('click', function(event) {
    const complementoElements = document.querySelectorAll('.complemento');
    if (!event.target.closest('.curriculo')) {
    complementoElements.forEach(el => el.style.visibility = 'hidden');
    }
});
