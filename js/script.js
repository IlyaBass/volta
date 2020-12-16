$(function(){

	// ibg
    function ibg(){
    	$.each($('.ibg'), function(index, val){
    		if($(this).find('img').length>0){
    			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    		}
    	});
    }
    ibg();
    // /ibg

    // Плавная прокрутка к якорю================================================
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.header').height()
        }, 700);
        return false;
    });
    // /Плавная прокрутка к якорю================================================

	$('body').css('padding-top', $('.header').css('height'));
	$('.header__nav-btn').click(function(){
		$('.header__nav').slideToggle();
	});
	if ($(window).width() <= 1042){
		$('.header__nav').css('display', 'none');
		$('body').css('padding-top', $('.header').css('height'));
        $('.header__nav-item a').click(function(){
            $('.header__nav').slideUp();
        });
	}

    $('.direction__slider').slick({
        infinite: true,
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 992.98,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });

    $('.organs__items').slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
              breakpoint: 868,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 562,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            },
        ]
    });

    let wWidth = $(window).width();

    if (wWidth <= 956){
        $('.life_btn').css('display', 'none');

        $('.life__slider').addClass('life__slider-slick');
        $('.life__slider').removeClass('life__slider-wheel');
    }
    else{
        $('.life__slider').removeClass('life__slider-slick');
        $('.life__slider').addClass('life__slider-wheel');

        $('.life__prev').bind('click', function () {
            carousel.prev();
            return false
        });

        $('.life__next').bind('click', function () {
            carousel.next();
            return false;
        });
    }
    $(window).resize(function() {
        if (wWidth <= 956){
            $('.life__slider').addClass('life__slider-slick');
            $('.life__slider').removeClass('life__slider-wheel');

            $('.life_btn').css('display', 'none');
        }
        else{
            $('.life__slider').removeClass('life__slider-slick');
            $('.life__slider').addClass('life__slider-wheel');

            $('.life__prev').bind('click', function () {
                carousel.prev();
                return false
            });

            $('.life__next').bind('click', function () {
                carousel.next();
                return false;
            });
        }
    });
    $('.life__slider-slick').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 562,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            },
        ]
    });
    let carousel = $(".life__slider-wheel").waterwheelCarousel({
        flankingItems: 3,
        opacityMultiplier: 1,
        autoPlay: 3000,
    });



});