document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Hide Loader
  var loader = function() {
    setTimeout(function() { 
      if($('#unslate_co--overlayer').length > 0) {
        $('#unslate_co--overlayer').fadeOut('slow');
      }
      if($('.site-loader-wrap').length > 0) {
        $('.site-loader-wrap').fadeOut('slow');
      }
    }, 500);
  };
  loader();

  // 2. Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      offset: 50
    });
  }

  // 3. Initialize Owl Carousel
  var owlCarousel = function() {
    if (jQuery().owlCarousel) {
      $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 700,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      });
    }
  };
  owlCarousel();

  // 4. Jarallax
  var jarallaxInit = function() {
    if (jQuery().jarallax) {
      $('.jarallax').jarallax({
        speed: 0.2
      });
    }
  };
  jarallaxInit();

  // 5. Mobile Menu
  var siteMenuClone = function() {
    $('.js-clone-nav').each(function() {
      var $this = $(this);
      $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
    });

    setTimeout(function() {
      var counter = 0;
      $('.site-mobile-inner .has-children').each(function(){
        var $this = $(this);
        $this.prepend('<span class="arrow-collapse collapsed">');
        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });
        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });
        counter++;
      });
    }, 1000);

    $('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
    });

    $(window).resize(function() {
      var $this = $(this),
          w = $this.width();
      if ( w > 768 ) {
        if ( $('body').hasClass('offcanvas-menu') ) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    })

    $('body').on('click', '.js-menu-toggle', function(e) {
      var $this = $(this);
      e.preventDefault();

      if ( $('body').hasClass('offcanvas-menu') ) {
        $('body').removeClass('offcanvas-menu');
        $this.removeClass('active');
      } else {
        $('body').addClass('offcanvas-menu');
        $this.addClass('active');
      }
    })

    // click outside offcanvas
    $(document).mouseup(function(e) {
      var container = $(".site-mobile-inner");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ( $('body').hasClass('offcanvas-menu') ) {
          $('body').removeClass('offcanvas-menu');
        }
      }
    });
  }; 
  siteMenuClone();

  // 6. GSAP Animations
  var gsapAnimate = function() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.gsap-reveal-hero').forEach(function(elem) {
        gsap.fromTo(elem, 
          { autoAlpha: 0, y: 20 }, 
          { duration: 1, autoAlpha: 1, y: 0, ease: "power2.out", scrollTrigger: { trigger: elem, start: "top 90%" } }
        );
      });

      gsap.utils.toArray('.gsap-reveal').forEach(function(elem) {
        gsap.fromTo(elem, 
          { autoAlpha: 0, y: 30 }, 
          { duration: 1, autoAlpha: 1, y: 0, ease: "power2.out", scrollTrigger: { trigger: elem, start: "top 85%" } }
        );
      });
      
      gsap.utils.toArray('.gsap-reveal-img').forEach(function(elem) {
        gsap.fromTo(elem, 
          { autoAlpha: 0, scale: 0.95 }, 
          { duration: 1, autoAlpha: 1, scale: 1, ease: "power2.out", scrollTrigger: { trigger: elem, start: "top 85%" } }
        );
      });
    }
  };
  gsapAnimate();

});
