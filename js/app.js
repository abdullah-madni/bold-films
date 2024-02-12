$(document).ready(function () {
   $('#navbar-toggler').click(function () {
      $(this).toggleClass('cross');
      $('#myNavbar').toggleClass('open')
   });


   $(window).scroll(function () {
      let x = $(window).scrollTop();
      if (x > 0) {
         $('#myNavbar').addClass('scrolled');
      } else {
         $('#myNavbar').removeClass('scrolled');
      }
   });

   setTimeout(() => {
      $('#video').hide();
   }, 8000);


   $('#hero_carousel').owlCarousel({
      loop: true,
      margin: 0,
      width: '100%',
      nav: true,
      dots: false,
      items: 1,
      animateOut: 'fadeOut',
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
   });


   $('#featured_carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         768: {
            items: 2
         },
         1024: {
            items: 3
         }
      }
   })



   $('#stories_carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         640: {
            items: 2
         },
         1024: {
            items: 3
         },
         1280: {
            items: 4
         }
      }
   })
});