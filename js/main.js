$(document).ready(function(){

	var $firstHero = $('img:first-child');
	var $lastHero = $('img:last-child');

	$firstHero.addClass('shown');

	$('.name').text( $('.shown').attr('title') )
		.stop(true, true)
		.slideDown(500)
		.show()
		.fadeOut(2000);


	$('button.next').on('click', function(){

		if ( $lastHero.hasClass('shown') ){
			$lastHero.removeClass('shown');
			$firstHero.addClass('shown');
		}

		else{
			$('.shown').removeClass('shown').next().addClass('shown');
		}
		
		var $heroName = $('img.shown').attr('title');


		$('.name').text($heroName)
		.stop(true, true)
		.slideDown(500)
		.show()
		.fadeOut(2000)
		;



	});

	$('button.prev').on('click', function(){

		if ( $firstHero.hasClass('shown') ){
			$firstHero.removeClass('shown');
			$lastHero.addClass('shown');
		}

		else {

			$('.shown').removeClass('shown').prev().addClass('shown');

		}

		var $heroName = $('img.shown').attr('title');


		$('.name').text($heroName)
		.stop(true, true)
		.slideDown(500)
		.show()
		.fadeOut(2000)

	});



});
