$(document).ready(function(){

	var $currHero = $('img:first-child').addClass('shown');

	$('.name').text( $('.shown').attr('title') );
	//there must be a better way to display name 
	//and then change later??

	$('button.next').on('click', function(){

		$('.shown').next().addClass('shown');
		$('.shown').prev().removeClass('shown');

		var $heroName = $('img.shown').attr('title');
		$('.name').text($heroName);

	});

	$('button.prev').on('click', function(){

		$('.shown').prev().addClass('shown');
		$('.shown').next().removeClass('shown');

		var $heroName = $('img.shown').attr('title');
		$('.name').text($heroName);

	});


});
