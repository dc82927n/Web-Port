

$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000, 
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: [" ", "Web Developer", "Food Connoisseur", "Front-End Developer", "Full Stack Developer"],
        typeSpeed: 120, 
        loop: true, 
        startDelay: 20, 
        showCursor: false
    }); 

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });



}); 



