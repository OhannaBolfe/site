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



document.addEventListener('DOMContentLoaded', function() {
    const listas = document.querySelectorAll('.lista-com-controle');
    
    listas.forEach(lista => {
        
        // Verificar se a lista excede 2 linhas
        const lineHeight = parseFloat(window.getComputedStyle(lista.querySelector('li')).lineHeight);
        const items = lista.querySelectorAll('li').length;
        const alturaLimite = 2 * lineHeight;
        
        if(items > 2) {
          lista.classList.add('limitado');

          lista.addEventListener('click', function(event) {
            event.stopPropagation();
            lista.classList.toggle('expandido');
          });
        }

    });


    document.addEventListener('click', function() {
         listas.forEach(lista => {
              if(lista.classList.contains('expandido')){
                  lista.classList.remove('expandido');
              }
        });
    });
});