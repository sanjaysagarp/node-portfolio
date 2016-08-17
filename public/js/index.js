$(function() {
	$('ul.nav a').bind('click',function(e){
		var $anchor = $(this);

		// $('html, body').stop().animate({
		// 	scrollTop: $($anchor.attr('href')).offset().top
		// }, 1500,'easeInOutExpo');
	
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 45
		}, 1000);
		e.preventDefault();
	});

	$('#coaudButton').bind('click',function(e){
		e.preventDefault();
		unbindButtons();
		$('#coaudButton').addClass("selected");

		$('#image').html('<a href="http://www.co-aud.io" target="_blank"><img id="picture" src="img/coaud.png" class="img-responsive"></a>');

		$('#description').html('Co-Aud focuses on fostering a creative incubator for those interested in animating, game developing, and voice acting. Co-Aud aims to create a simple interface that will make collaborating between content creators and voice actors as easy as possible. Co-Aud will streamline the process for content creators to post an opportunity and to find the right voice actors/actresses the role. In addition, this will provide voice actors/actresses a way to increase their experience and skills. Not only will Co-Aud act as a central hub, it will also challenge the community with monthly contests. The goal is to connect communities in an organized and efficient manner to reach out and collaborate on communal projects. We would also like to provide a platform through which amateur voice actors can showcase their talents and contact others who are trying to get into the industry, and network with content creators who provide projects and feedback.');
	});

	$('#infoButton').bind('click',function(e){
		e.preventDefault();
		unbindButtons();
		$('#infoButton').addClass("selected");

		$('#image').html('<a href="/projects/info.pdf" target="_blank"><img id="picture" src="img/infographic.png" class="img-responsive"></a>');
		$('#description').html('Infographic description');
	});

	$('#stfButton').bind('click',function(e){
		e.preventDefault();
		unbindButtons();
		$('#stfButton').addClass("selected");

		$('#image').html('<a href="https://www.uwstf.org" target="_blank"><img id="picture" src="img/stf.png" class="img-responsive"></a>');
		$('#description').html('STF description');
	});

	function unbindButtons() {
		$('#coaudButton').removeClass('selected');
		$('#infoButton').removeClass('selected');
		$('#stfButton').removeClass('selected');
	}


});