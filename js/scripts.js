(function ($) {
"use strict";

//    // header-sticky
//    $(window).on('scroll', function () {
//        var scroll = $(window).scrollTop();
//        if (scroll < 175) {
//            $(".header-bottom").removeClass("header-sticky");
//        } else {
//            $(".header-bottom").addClass("header-sticky");
//        }
//    });

//    // mean-menu
//    $('#menu').meanmenu({
//        meanMenuContainer: '.mean-menu',
//        meanScreenWidth: "991",
//        onePage: false,
//    });
    

    
//   $('.offers-carousel-thumbnail').slick({
//       slidesToShow: 2,
//       slidesToScroll: 1,
////       asNavFor: '.offers-carousel',
//       dots: true,
//       centerMode: false,
//       focusOnSelect: true,
//       arrows: false,
//       vertical: true,
//       verticalSwiping: true,
//       dots: false,
//   });

//	// data-background (for background image)
//	$("[data-background]").each(function() {
//	    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
//	});

//    // project-carousel
//	$('.project-carousel').owlCarousel({
//	    loop:true,
//	    margin:30,
//		items:3,
//		autoplay:false,
//		autoplayTimeout: 9000,
//		animateOut: 'slideOutLeft',
//		animateIn: 'slideInRight',
//		navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
//	    nav:true,
//		dots:false,
//        responsive : {
//            0 : {
//                items: 1
//            },
//            768 : {
//                items:2
//            },
//            992 : {
//                items:3
//            }
//        }
//	});
    


//    // testimonial-carousel
//    $('.testimonial-carousel').owlCarousel({
//        loop:true,
//        margin:0,
//        items:1,
//        autoplay:true,
//        autoplayTimeout: 5000,
//        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
//        nav:false,
//        dots:false,
//    });

//    // partner-carousel
//    $('.partner-carousel').owlCarousel({
//        loop:true,
//        margin:30,
//        items:4,
//        autoplay: false,
//        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//        nav:false,
//        dots:false,
//        responsive:{
//            0:{
//                items:1
//            },
//            767:{
//                items:3
//            },
//            992:{
//                items:4
//            }
//        }
//    });
    
//    // isotop massonry
//    $('.grid').imagesLoaded(function () {
//        // init Isotope
//        var $grid = $('.grid').isotope({
//            itemSelector: '.grid-item',
//            percentPosition: true,
//            masonry: {
//                // use outer width of grid-sizer for columnWidth
//                columnWidth: 1,
//            }
//        });
//        // filter items on button click
//        $('.button-group').on('click', 'button', function () {
//            var filterValue = $(this).attr('data-filter');
//            $grid.isotope({
//                filter: filterValue
//            });
//        });
//    });
//    //for isotop massonry menu active class
//    $('.button-group > button').on('click', function (event) {
//        $(this).siblings('.active').removeClass('active');
//        $(this).addClass('active');
//        event.preventDefault();
//    });
   

//    // Page Preloader js
//    function loader() {
//        $(window).on('load', function () {
//            $('#ctn-preloader').addClass('loaded');
//            $("#loading").fadeOut(500);
//            // Una vez haya terminado el preloader aparezca el scroll
//            if ($('#ctn-preloader').hasClass('loaded')) {
//                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
//                $('#preloader').delay(900).queue(function () {
//                    $(this).remove();
//                });
//            }
//        });
//    }
//    loader();
    
    //mean - menu
    $('#menu').meanmenu({
        meanMenuContainer: '.mean-menu',
        meanScreenWidth: "991",
        onePage: false,
    });
    
    // wow js active
    new WOW().init();
    
    // data-background (for background image)
	$("[data-background]").each(function() {
	    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
    


    // offer-carousel
    $('.offer-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        nav: true,
        dots: true,
        responsive:{
            0:{
                margin: 30,
            },
            767:{
                margin: 30,
            },
            992:{
                margin: 0,
            }
        }
    });
    
        // review-carousel
        $('.review-carousel').owlCarousel({
            loop: true,
            margin: 600,
            items: 1,
            autoplay: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            nav: false,
            dots: true,
        });
//       $('.review-carousel').slick({
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false,
//           asNavFor: '.review-carousel-thumbnail',
//           dots: false,
//           // dotsClass:'slick-modified-dots',
//       });
//       $('.review-carousel-thumbnail').slick({
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           asNavFor: '.review-carousel',
//           dots: true,
//           centerMode: false,
//           focusOnSelect: true,
//           arrows: false,
//           vertical: true,
//           verticalSwiping: true,
//           dots: false,
//       });
//    
        // isotop massonry
    $('.grid').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
            
        });
        // filter items on button click
//        $('.button-group').on('click', 'button', function () {
//            var filterValue = $(this).attr('data-filter');
//            $grid.isotope({
//                filter: filterValue
//            });
//        });
    });
    //for isotop massonry menu active class
//    $('.button-group > button').on('click', function (event) {
//        $(this).siblings('.active').removeClass('active');
//        $(this).addClass('active');
//        event.preventDefault();
//    });
    // Page Preloader js
    function loader() {
        $(window).on('load', function () {
            $('#ctn-preloader').addClass('loaded');
            $("#loading").fadeOut(500);
            // Una vez haya terminado el preloader aparezca el scroll
            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

})(jQuery);	