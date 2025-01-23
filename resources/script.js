$(document).ready(function() {
    // Fade out o loader após o carregamento completo da página
    window.onload = function() {
        $('.loaderpage').fadeOut(1000);
    };
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('meta[name="copyright"]');
    const yearElement = document.getElementById("currentYear");
});