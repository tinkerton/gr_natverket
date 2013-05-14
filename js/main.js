// Gumby is ready to go
Gumby.ready(function() {
	console.log('Gumby is ready to go...', Gumby.debug());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {
	console.log("Oldie");
});

// Document ready
$(function() {
	var i = 0;
	

	$(document).on('click', '#nextButton', function() {
 			var main = $('#main_div');
 			main.fadeOut(200, function () {main.html(addContent(i))}).fadeIn();
 			

 		
 		i++;
	});

		
		function addContent(nodeId) {
			var result = "<div class='twelve columns'><h1 class='lead'>YOU DID IT ("+nodeId+")!</h1><h2>Good work chap!</h2><div class='medium warning btn' id='nextButton'><a href='#'>Next</a></div></div>";
		     return result;
		} 	
});

