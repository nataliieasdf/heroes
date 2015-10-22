$(document).ready(function(){

	var $firstHero = $('img:first-child');
	var $lastHero = $('img:last-child');

	$firstHero.addClass('shown');

	$('.name').text( $('.shown').attr('title') );
	//there must be a better way to display name 
	//and then change later??

	$('button.next').on('click', function(){

		$('.shown').next().addClass('shown');
		$('.shown').prev().removeClass('shown');


		if ( $lastHero.hasClass('shown') ){
			$lastHero.removeClass('shown');
			$firstHero.addClass('shown');
		}

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
