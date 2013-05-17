/*global $, jQuery, _, TweenMax, console, Case1*/

var FS = (function(self){
	"use strict";

	var activeCase, 
		caseNodeId,
		contentObj,
		currentBlur;

	activeCase = 0;
	caseNodeId = 0;
	contentObj = Case1.nodes.content;

	self.dimNextButton  = function() {
		TweenMax.to($('#nextButton'),1, {opacity:0.2});
	};


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
		
		if (size===undefined) { size=1; }

		var res = "<h"+size + ">"+ contentObj[nodeId].title+"</h"+size+">";
		return res;
	}

	
	self.showIframe = function(iframeId) {
		TweenMax.to($('#iframe_'+iframeId),1, {autoAlpha:1});
	}


	function addNodeVideos (nodeId) {

		var videos,
			nrOfVideos,
			nrOfCols,
			res;
		
		videos = contentObj[nodeId].videos; 
		if (videos === undefined) {return "";}

		nrOfVideos = _.size(videos);
		console.log("videonrs " + nrOfVideos);

		nrOfCols="twelve";
		
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


		res ="<div class='row'>";

		for (var i=0; i<nrOfVideos; i++) {
			res +="<div class='"+nrOfCols+" columns'><article class='vimeo video videoBg'>";
			res +="<iframe id='iframe_"+i+"' style='visibility:hidden;' onload='FS.showIframe("+i+")' ";
			res += "src='" + videos[i].videoURL + "?title=0&byline=0&portrait=0' width='500' height='281' frameboder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''>";
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




	self.addContent = function(nodeId) {
			var result = addNodeHeader() + addNodeTitle(nodeId,1) + addNodeVideos(nodeId) + addNodePreText(nodeId) + addNodePostText(nodeId) + addNodeNextButton() + addNodeFooter();
		    return result;
	};


	
	function updateBlur(speed) {
		currentBlur++;
		if (currentBlur>(50*speed)) {return};
		if (currentBlur % (10*speed) ==0) {

			console.log("currentBlur " + currentBlur/(10*speed));
			$('#main_div').addClass("blur"+currentBlur/(10*speed));
		}
	
	}


	function updateLessBlur(speed) {
		currentBlur--;
		if (currentBlur>(50*speed)) {return};
		if (currentBlur % (10*speed) ==0) {

			console.log("currentBlur " + currentBlur/(10*speed));
		//	$('#main_div').addClass("blur"+currentBlur/10);
				$('#main_div').removeClass("blur"+(currentBlur/(10*speed)));
		
		}
	
	}
	function resetNodeAttributes() {
		var maindiv = $('#main_div');
		for (var i=1; i<=5; i++) {
			maindiv.removeClass("blur"+i);
		}
		TweenMax.to(maindiv, 0, {alpha:1, scaleX:1, scaleY:1});
		TweenMax.to($('#nextButton'), 0, {autoAlpha:1});
		currentBlur=0;
	}

	function onCompleteFadeoutNode(maindiv, nextNodeId, speed) {
		console.log("nextNodeId " +nextNodeId);
		maindiv.html(FS.addContent(nextNodeId));
		TweenMax.fromTo (maindiv, speed, {alpha:0, scaleX:0.5, scaleY:0.5},{alpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeOut});
	}


	self.gotoNode = function(nextNodeId, direction) {
		var oldNodeId, maindiv, speed;
				
		if (direction==1) { 
			oldNodeId = nextNodeId-1;
		}
		else {
			oldNodeId = nextNodeId+1;
		} 

		currentBlur = 0;
		speed=0.25;
		maindiv = $('#main_div');
		TweenMax.to($('#nextButton'), 0.1, {autoAlpha:0});
		TweenMax.to (maindiv, speed, {alpha:0, scaleX:1.2, scaleY:1.2, onUpdate:updateBlur, onUpdateParams:[speed], onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, nextNodeId, speed],  ease:Quad.easeIn});
		
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
	

	var i = 0;
	
	$(document).on('click', '#nextButton', function() {
 			/*var main = $('#main_div');
 			main.fadeOut(200, function () {main.html(FS.addContent(i))}).fadeIn();*/
 			FS.gotoNode(i,1);

 			

 		
 		i++;
	});

		
		
});

