$(document).ready(function(){

	var heroName = $('img').attr('title');

	$('img:first-child').addClass('shown');
	$('h1').text(heroName);

});
