$(function() {
	$('ul.nav a').bind('click',function(event){
		var $anchor = $(this);

		// $('html, body').stop().animate({
		// 	scrollTop: $($anchor.attr('href')).offset().top
		// }, 1500,'easeInOutExpo');
	
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 45
		}, 1000);
		event.preventDefault();
	});
});