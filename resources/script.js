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

function curriculo_event() {
  const complementoElement = document.getElementById("complemento");
  complementoElement.style.visibility = "visible";
}

document.addEventListener('click', function(event) {
  const complementoElement = document.getElementById('complemento');
  const buttonElement = document.querySelector('button');

    if (event.target !== complementoElement && event.target !== buttonElement) {
        complementoElement.style.visibility = "hidden";
    }
});
