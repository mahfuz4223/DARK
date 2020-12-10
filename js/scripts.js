
jQuery(function ($) {

  'use strict';

  //fixed navbar
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 58) {
      $('.navbar').addClass('affix');
      $('.scroll-to-target').addClass('open');
    } else {
      $('.navbar').removeClass('affix');
      $('.scroll-to-target').removeClass('open');
    }
  });

  // page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 58
      }, 900, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // closes the responsive menu on menu item click
  $(window).ready(function () {
    $(".navbar-toggler").addClass('collapsed');
    $(".navbar-collapse").addClass('collapse');
  });

  $(".navbar-nav li a").on("click", function(event) {
    if (!($(this).parent().hasClass('dropdown') || $(this).parent().parent().hasClass('sub-menu'))) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  // back to top
  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);

    });
  }

  // client-testimonial one item carousel
  $('.client-testimonial').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

    // client logo item carousel
  $('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 6
      }

    }
  });


  // wow js
  function wowAnimation() {
    new WOW({
      offset: 100,
      mobile: true
    }).init()
  }

  wowAnimation()

  // Screenshots slider
  $('.screen-carousel').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      991: {
        items: 4
      },
      1200: {
        items: 4
      },
      1920: {
        items: 4
      }
    }
  });

  // countdown or coming soon

  $('#clock').countdown('2022/01/30', function(event) {
    $(this).html(event.strftime('' +
      '<div class="row">' +
      '<div class="col">' +
      '<h2 class="mb-1">%-D</h2>' +
      '<h5>Day%!d</h5>' +
      '</div>' +
      '<div class="col">' +
      '<h2 class="mb-1">%H</h2>' +
      '<h5>Hours</h5>' +
      '</div>' +
      '<div class="col">' +
      '<h2 class="mb-1">%M</h2>' +
      '<h5>Minutes</h5>' +
      '</div>' +
      '<div class="col">' +
      '<h2 class="mb-1">%S</h2>' +
      '<h5>Seconds</h5>' +
      '</div>' +
      '</div>'));
  });

}); // JQuery end