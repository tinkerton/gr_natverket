/*global $, jQuery, _, TweenMax, console, Case1*/

var FS = (function(self){
	"use strict";

	var activeCase, 
		caseNodeId,
		contentObj,
		currentBlur,
		currentNodeNr;

	activeCase = 0;
	caseNodeId = 0;
	contentObj = Case1.nodes.content;

	var BV;




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

	function removeLoader(iframeId) {
		$('#loader_'+iframeId).remove();
	}
	
	self.showIframe = function(iframeId) {
		TweenMax.to($('#iframe_'+iframeId),0.75, {autoAlpha:1, onComplete:removeLoader, onCompleteParams:[iframeId]});
	}


	function setupBackground(nodeId) {
		
		$("#big-video-wrap").hide();
		$(".backstretch").hide();
		
		switch(contentObj[nodeId].background.type) {
			case "video":
				if (Modernizr.touch) {
    				$.backstretch("../img/"+contentObj[nodeId].background.ipadBG);
    				$(".backstretch").fadeIn();
		

		    } else {
   				FS.BV.show(contentObj[nodeId].background.url,{ambient:true});
   				$("#big-video-wrap").fadeIn();
			}
	
			break;
			case "image":
		
				$.backstretch("../img/"+contentObj[nodeId].background.url);
				$(".backstretch").fadeIn();
			break;
			
		}
		

	}


	function addNodeVideos (nodeId) {

		var videos,
			nrOfVideos,
			nrOfCols,
			res;
		
		videos = contentObj[nodeId].videos; 
		if (videos === undefined) {return "";}

		nrOfVideos = _.size(videos);
	

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
			res +="<div class='"+nrOfCols+" columns'>";
			res +="<div class='loading' id='loader_"+i+"'><div class='track'></div><div class='spinner'><div class='mask'><div class='maskedCircle'></div></div></div></div>";
			res +="<article class='vimeo video videoBg'>";
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
			var result = addNodeHeader() + addNodeTitle(nodeId,1) + addNodeVideos(nodeId) + addNodePreText(nodeId) + addNodePostText(nodeId) + addNodeFooter();
		    return result;
	};


	
	function updateBlur(speed) {
		currentBlur++;
		if (currentBlur>(50*speed)) {return};
		if (currentBlur % (10*speed) ==0) {

			$('#main_div').addClass("blur"+currentBlur/(10*speed));
		}
	
	}


	function updateLessBlur(speed) {
		currentBlur--;
		if (currentBlur>(50*speed)) {return};
		if (currentBlur % (10*speed) ==0) {
				$('#main_div').removeClass("blur"+(currentBlur/(10*speed)));
		
		}
	
	}



	function resetNodeAttributes() {
		var maindiv = $('#main_div');
		for (var i=1; i<=5; i++) {
			maindiv.removeClass("blur"+i);
		}
		TweenMax.to(maindiv, 0, {alpha:1, scaleX:1, scaleY:1});
		currentBlur=0;
		FS.setUpThumbs();
		FS.resize();

	}



	function onCompleteFadeoutNode(maindiv, nextNodeId, speed) {
		
		setupBackground(nextNodeId);

		maindiv.html(FS.addContent(nextNodeId));


		TweenMax.fromTo (maindiv, speed, {alpha:0, scaleX:0.5, scaleY:0.5},{alpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeOut});
	}


	self.gotoNode = function(nextNodeId, direction) {
		var oldNodeId, maindiv, speed;
		/*		
		if (direction==1) { 
			oldNodeId = nextNodeId-1;
		}
		else if (direction==-1){
			oldNodeId = nextNodeId+1;
		} 
		else {
			oldNodeId = ?;	
		}
	*/
		  
    	FS.currentNodeNr = nextNodeId;

		FS.checkArrows(nextNodeId);
		currentBlur = 0;
		speed=0.25;
		maindiv = $('#main_div');
		
		TweenMax.to (maindiv, speed, {alpha:0, scaleX:1.2, scaleY:1.2, onUpdate:updateBlur, onUpdateParams:[speed], onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, nextNodeId, speed],  ease:Quad.easeIn});
		
	}

	self.setUpThumbs = function() {
		var nrOfNodes = _.size(Case1.nodes.content);
		var navObj = $("#case-nav");
		var res ="";

		for (var i=0; i<nrOfNodes; i++) {
			switch (contentObj[i].type) {
				case "info":
					res += "<div class='node-thumb node-info";
					if (FS.currentNodeNr==i) { res += " node-selected";}
					res+="' onclick='FS.gotoNode("+i+",0);'></div>";
				break;
				case "question":
				  res += "<div class='node-thumb node-question";
				  if (FS.currentNodeNr==i) { res += " node-selected";}
					res+="' onclick='FS.gotoNode("+i+",0);'></div>";
				break;
				case "hidden":

				break;
				
			}
		}
			
		navObj.html(res);

	}
	self.resize = function() {
		var inner =  $('#inner');
		var wind =  $(window);
		var scrollwidth=17;


		console.log("resize " + $("#main_div").height() + "  " + $(window).height() );

		inner.css('max-height', wind.height()-60+'px');
		inner.css('top', '-30px');

		if ($("#main_div").height() > $(window).height()) {
			inner.css("overflow-y","auto");
			if (navigator.userAgent.match(/webkit/i)) {
			 		scrollwidth=8;
    		}
    		TweenMax.to($('#nextButton'), 0.25,{css:{"right": scrollwidth + "px"}});
    	}else {
			inner.css("overflow-y","hidden");
			TweenMax.to($('#nextButton'), 0.25,{css:{"right":"0px"}});
		}
	}

	self.checkArrows = function(currentNodeNr) {
			if (currentNodeNr<_.size(Case1.nodes.content)-1) {
 				$("#nextButton").fadeIn();
 			}
 			else{
 				$("#nextButton").fadeOut();
 			}

 	 			
 			if(currentNodeNr==0) {
 				$("#prevButton").fadeOut();
 				
 			}else{
 					$("#prevButton").fadeIn();
 			}
 			

	}


	self.preloadImages = function() {
		var nrOfImages = _.size(Case1.preload.images);
		var prelObj = $("#js-preload");
		var res ="";

		for (var i=0; i<nrOfImages; i++) {
			if (i>0) res +=", ";
			res +="url('img/"+ Case1.preload.images[i].url+"')";

		}
		prelObj.css("background-image",res);
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
	FS.currentNodeNr = 0;

	FS.BV = new $.BigVideo();
	FS.BV.init();
	
	FS.preloadImages();

	FS.setUpThumbs();
	FS.gotoNode(FS.currentNodeNr,1);
	
	$(document).on('click', '#nextButton', function() {
 		
 			
 			FS.currentNodeNr ++;
 			
 			FS.gotoNode(FS.currentNodeNr,1);

 		
 	
	});
	$(document).on('click', '#prevButton', function() {
 			FS.currentNodeNr--;
 		
 			FS.gotoNode(FS.currentNodeNr,-1);

 	
	});
	
		
		
});

