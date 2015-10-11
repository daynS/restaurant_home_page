$( document ).ready(function() {
	var $topbar = $('<div id="top-bar"><h1 class="rainbow">This Place is Bananas</h1></div>');
	var $hometxt = $('<p class="current" id="intro">You gotta understand, man. This place serves all bananas all the time.\
		You want banana cream pie? BAM! You got banana cream pie. You want pancakes and bananas?\
		BAM! You got pancakes and bananas. Well, at least the bananas part.\
		Pancakes are outside of our core competence. You want eggs? Try somewhere else.</p>');

	var $menu = $('<p class="current" id="menu">It\'s all bananas, bro. For real.</p>');
	var $location = $("<p id='location' class='current'>You don't wanna eat here. Unless you're like a monkey or sum tin tsss tsss...</p>");

	$('#content').append($topbar).append($hometxt);

	var showHome = function(){
		console.log("HOME");
		$('.current').replaceWith($hometxt);
	};

	var showMenu = function(){
		console.log("MENU");
		$('.current').replaceWith($menu);
	};

	var showLocation = function(){
		console.log("location");
		$('.current').replaceWith($location);
	};

	$( "#menu" ).click(function() {
  		showMenu();
	});

	$( "#home" ).click(function() {
  		showHome();
	});

	$( "#location" ).click(function() {
  		showLocation();
	});

});