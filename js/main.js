$(document).ready(function(){

	var $currHero = $('img:first-child').addClass('shown');

	$('.name').text( $('.shown').attr('title') );


	$('button.next').on('click', function(){

		$('.shown').next().addClass('shown');
		$('.shown').prev().removeClass('shown');

		var $heroName = $('img.shown').attr('title');
		$('.name').text($heroName);
		
	});

});
