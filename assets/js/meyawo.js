/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('custom-navbar');
    if (window.scrollY > 0) {
        custom-navbarr.classList.add('scrolled'); // Adiciona a classe quando rola
    } else {
        custom-navbar.classList.remove('scrolled'); // Remove a classe quando volta ao topo
    }
  }); 
