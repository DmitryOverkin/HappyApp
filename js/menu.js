$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
        $('.header__burger, .nav__list').toggleClass('active');
        $('body').toggleClass('fixed-page');
        
        
    });
});


$(document).ready(function() {
    $('.nav__link').click(function() {
        
        $('.menu-burger__header').removeClass('open-menu');
        $('.nav').removeClass('open-menu');
        $('.header__burger, .nav__list').removeClass('active');
        $('body').removeClass('fixed-page');
        
    });
});




const leftIcon = '<img src="images/arrow-left.png" alt=""></img>';
const rightIcon = '<img src="images/arrow-right.png" alt=""></img>';

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 16,
        nav: true,
        dots: true,
        navText : [leftIcon, rightIcon],
        mergeFit: false,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
  });
