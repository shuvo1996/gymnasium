$(function(){

    "use strict"

// Menu Fixing

  var menuoff = $('.menu_part').offset().top;
  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > menuoff){
      $('.menu_part').addClass('menufix ');
    }
    else{
      $('.menu_part').removeClass('menufix ');
    }

  });





    //  Banner Slider

    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        dots: true,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
      });


// VenoBox in About Part

$('.venobox').venobox({
    titleattr: 'data-title'
});




// Slick Slider in Team Part

$('.team_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 2000,
  });




// Slider in Testimonial Part

$('.slider_start').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    speed: 2000,
  });




// CounterUp 

$('.counter').counterUp({
    delay: 10,
    time: 1500,
});



// ColorfullTab on Class Part
$("#colorful").colorfulTab();  




// Slick Slider in marketPlace Part

$('.market_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
});


});

