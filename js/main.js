$(document).ready(function(){
	var $currHero = $('img').first().addClass('shown');
	var $heroName = $currHero.attr('title');

	$('h1').text($heroName);

	$('button.next').on('click', function(){
		var $nextHero = $currHero.next();
		if ( $currHero.hasClass('shown') )

			$currHero.removeClass('shown');
			// $nextHero.addClass('shown');

	});

});
