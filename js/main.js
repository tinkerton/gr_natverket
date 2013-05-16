var FS = (function(self){

	var activeCase = 0;
	var caseNodeId = 0;
  
	var contentObj = Case1.nodes.content;

	self.dimNextButton  = function() {
		TweenMax.to($('#nextButton'),1, {opacity:0.2});
		
		
	}


	self.addContent = function(nodeId) {
			var result = addNodeHeader() + addNodeTitle(nodeId,1) + addNodeVideos(nodeId) + addNodePreText(nodeId) + addNodePostText(nodeId) + addNodeNextButton() + addNodeFooter();
		    return result;
	} 	


	function addNodeHeader () {
		return "<div class='twelve columns frameDecoration'>";
	}

	function addNodeFooter () {
		return "</div>";
	}

	function addNodeNextButton() {
		return "<div class='medium warning btn' id='nextButton'><a href='#'>Next</a></div>";

	}

	function addNodeTitle (nodeId, size) {
		
		if (size==undefined) size=1;

		var res = "<h"+size + ">"+ contentObj[nodeId].title+"</h"+size+">";
		return res;
	}


	function addNodeVideos (nodeId) {

		var videos = contentObj[nodeId].videos; 
		if (videos == undefined) return "";

		var nrOfVideos = _.size(videos);
		console.log("videonrs " + nrOfVideos);

		var nrOfCols="twelve";
		
		switch (nrOfVideos) {
			case 1:
				nrOfCols = "twelve";
			break;
			case 2:
				nrOfCols = "six";
			break;
			case 3:
				nrOfCols = "four";
			break;
			case 4:
				nrOfCols = "three";
			break;

		}
		var res ="<div class='row'>";

		for (var i=0; i<nrOfVideos; i++) {
			res +="<div class='"+nrOfCols+" columns'><article class='vimeo video'>";
			res +="<iframe style='visibility:hidden;' onload='this.style.visibility='visible'' ";
			res += "src='" + videos[i].videoURL+" 'width='500' height='281' frameboder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''>";
			res +="</iframe></article></div>";
		}
		res+"</div>";

		return res;
	}
	

	function addNodePreText (nodeId) {
		return "<h3>"+ contentObj[nodeId].pretext+"</h3>";
		
	}

	function addNodePostText (nodeId) {
		return "<p>"+ contentObj[nodeId].posttext+"</p>";
		
	}



	return self;

})({});



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
	var i = -1;
	
	$(document).on('click', '#nextButton', function() {
 			var main = $('#main_div');
 			main.fadeOut(200, function () {main.html(FS.addContent(i))}).fadeIn();
 			

 		
 		i++;
	});

		
		
});

