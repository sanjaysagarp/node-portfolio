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

		$('#description').html('<p>Co-Aud focuses on fostering a creative incubator for those interested in animating, game developing, and voice acting. Co-Aud aims to create a simple interface that will make collaborating between content creators and voice actors as easy as possible. Co-Aud will streamline the process for content creators to post an opportunity and to find the right voice actors/actresses the role. </p><p>Co-Aud was built using Golang, Mongodb, and jQuery. This website was created by Sanjay Sagar, Theo Chin, Jenna Han and Sean Cheong.</p>');
	});

	$('#infoButton').bind('click',function(e){
		e.preventDefault();
		unbindButtons();
		$('#infoButton').addClass("selected");

		$('#image').html('<a href="/projects/info.pdf" target="_blank"><img id="picture" src="img/infographic.png" class="img-responsive"></a>');
		$('#description').html('<p>This infographic is an expenditure breakdown of proposals in the past years and showcases the variety of departments that the Student Technology Fee Committee funds. In addition, it explains how an individual can request funding for a resource to be available for the students at the University of Washington.</p>');
	});

	$('#stfButton').bind('click',function(e){
		e.preventDefault();
		unbindButtons();
		$('#stfButton').addClass("selected");

		$('#image').html('<a href="http://www.uwstf.org" target="_blank"><img id="picture" src="img/stf.png" class="img-responsive"></a>');
		$('#description').html('<p>The Student Technology Fee is a fund established to supplement the availability of technology to UW students. This fund provides for capital investments in technology and projects that improve students’ educational opportunities. The Committee solicits proposals from campus units for projects that meet the technology needs of students. These awards are intended to be one-time sources of funding. </p><p>The STF website was built this last year using Node.js with Express, MySQL and jQuery.</p>');
	});

	function unbindButtons() {
		$('#coaudButton').removeClass('selected');
		$('#infoButton').removeClass('selected');
		$('#stfButton').removeClass('selected');
	}


});