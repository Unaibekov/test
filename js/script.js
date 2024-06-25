$( () => {

	// On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.header').addClass('header-scroll') : $('.header').removeClass('header-scroll');
		windowTop > 150 ? $('.logo-full').addClass('logo-full-scroll') : $('.logo-full').removeClass('logo-full-scroll');
		windowTop > 150 ? $('.logo-texts').addClass('logo-texts-scroll') : $('.logo-texts').removeClass('logo-texts-scroll');
		windowTop > 150 ? $('.logo-karakuz-text').addClass('logo-karakuz-text-scroll') : $('.logo-karakuz-text').removeClass('logo-karakuz-text-scroll');
		windowTop > 150 ? $('.logo-karakuz-number').addClass('logo-karakuz-number-scroll') : $('.logo-karakuz-number').removeClass('logo-karakuz-number-scroll');
		windowTop > 150 ? $('.logo-bftn').addClass('logo-bftn-scroll') : $('.logo-bftn').removeClass('logo-bftn-scroll');
        windowTop > 150 ? $('#top-second').addClass('top-second-open') : $('#top-second').removeClass('top-second-open');
	});

	// Smooth scroll
    $('nav a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 60
            }, 500);
            $('nav a').removeClass('active');
            $(this).addClass('active');
            $('.nav').removeClass('nav-open');
            $('.overlay').fadeOut(300); // Управление оверлеем
            $('body').css('overflow','auto');
        }
    });
	// Mobile menu
	$('.menu-open').click(function() {
		$('.nav').toggleClass('nav-open');
		$('.overlay').fadeToggle(300); // Управление оверлеем
		$('body').toggleClass('no-scroll');
	});

	$('.close-menu, .overlay').click(function() {
		$('.nav').removeClass('nav-open');
		$('.overlay').fadeOut(300); // Управление оверлеем
		$('body').removeClass('no-scroll');
	});

	$('li > a').click(function() {
		$('.top-nav').removeClass('is-active');
		$('.close-menu').removeClass('is-active');
		$('.nav').removeClass('nav-open');
		$('.overlay').fadeOut(300); // Управление оверлеем
		$('body').removeClass('no-scroll');
	});
});
