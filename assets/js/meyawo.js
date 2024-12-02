// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scrolled');   
  
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
});

// Aguardar o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
const navbar = document.querySelector('.custom-navbar');
// Função para adicionar/remover a classe 'scrolled' com base no scroll
function handleScroll() {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');  // Adiciona a classe 'scrolled' quando rolar
    } else {
        navbar.classList.remove('scrolled');  // Remove a classe 'scrolled' quando voltar ao topo
    }
}   
// Adiciona o evento de scroll
window.addEventListener('scroll', handleScroll);
});