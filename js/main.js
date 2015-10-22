$(document).ready(function(){

	var $firstHero = $('img:first-child');
	var $lastHero = $('img:last-child');

	$firstHero.addClass('shown');

	$('.name').text( $('.shown').attr('title') );

	$('button.next').on('click', function(){
		if ( $lastHero.hasClass('shown') ){
			$lastHero.removeClass('shown');
			$firstHero.addClass('shown');
		}


		$('.shown').next().addClass('shown');
		$('.shown').prev().removeClass('shown');


		var $heroName = $('img.shown').attr('title');
		$('.name').text($heroName);

	});

	$('button.prev').on('click', function(){

		$('.shown').prev().addClass('shown');
		$('.shown').next().removeClass('shown');

		if ( $firstHero.hasClass('shown') ){
			$firstHero.removeClass('shown');
			$lastHero.addClass('shown');
		}

		var $heroName = $('img.shown').attr('title');
		$('.name').text($heroName);

	});



});
