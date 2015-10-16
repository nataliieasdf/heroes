var curHero = $('img').hasClass('shown');
var nextHero = $(curHero).next();

$(document).ready(function(){

	var heroName = $('img').attr('title');

	$('img:first-child').addClass('shown');
	$('h1').text(heroName);

	$('button.next').on('click', function(){

		$(curHero).removeClass('shown');
		$(nextHero).addClass('shown');

	});
});
