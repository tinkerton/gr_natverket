/*global $, jQuery, _, TweenMax, console, Case1, Modernizer*/

var FS = (function(self){
	"use strict";

	var activeCase, 
		caseNodeId,
		contentObj,
		currentBlur,
		currentNodeNr,
		comicsToFadeIn,
		initComplete;

	activeCase = 0;
	caseNodeId = 0;
	contentObj = Case1.nodes.content;

	initComplete = false;
	currentNodeNr =0;
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
		
		if (contentObj[nodeId].title == undefined) return "";
		if (size===undefined) { size=2; }

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
		if (contentObj[nodeId].background == undefined) return;


		switch(contentObj[nodeId].background.type) {
			case "video":
				if (Modernizr.touch) {
    				$.backstretch("../img/"+contentObj[nodeId].background.ipadBG);
    				$(".backstretch").show();
		

		    } else {
   				FS.BV.show(contentObj[nodeId].background.url,{ambient:true});
   				$("#big-video-wrap").show();
			}
	
			break;
			case "image":
		
				$.backstretch("../img/"+contentObj[nodeId].background.url);
				$(".backstretch").show();
			break;
			
		}
		

	}
	function addNodeImages(nodeId) {
		var images,
			nrOfImages,
			res;
			images = contentObj[nodeId].image; 
			if (images === undefined) { return "";}

			nrOfImages=  _.size(images);

			res="";
			for (var i=0; i<nrOfImages; i++) {
				res+="<div class='node-image'><img src='img/"+images[i].url+"'/></div>"
			}
			return res;
	}


	function addNodeComic (nodeId) {
		var comicImages,
			nrOfImages,
			nrOfCols1,
			nrOfCols2,
			res,
			addedSecondRow,
			comic_row_height;

		comicImages = contentObj[nodeId].comic; 
		if (comicImages === undefined) {
			comicsToFadeIn=0;
			return "";}
	
		nrOfImages= comicsToFadeIn = _.size(comicImages);
		
		switch (nrOfImages/2) {
			case 4: //8 images
				nrOfCols1 = nrOfCols2= "four_up";
			break;
			case 3: //6 images
				nrOfCols1 = nrOfCols2= "three_up";
			break;
			case 2: //4 images
				nrOfCols1 = nrOfCols2=  "two_up";
			break;
			case 1: //2 images
				nrOfCols1 = nrOfCols2= "one_up";
			break;

			case 3.5: //7 images
				nrOfCols1 = "tree_up";
				nrOfCols2= "four_up";
			break;
			case 2.5: //5 images
				nrOfCols1 = "two_up";
				nrOfCols2= "three_up";
			break;
			case 1.5: //3 images
				nrOfCols1 = "one_up";
				nrOfCols2=  "two_up";
			break;
			default: //? images
				nrOfCols1 = "one_up";
				nrOfCols2= "one_up";
			break;


		}


		comic_row_height = contentObj[nodeId].comic_row_height;

		addedSecondRow = false;
		for (var i=0; i<nrOfImages; i++) {
			
			if (i==0) {
				res ="<ul class='tiles'>";	
			}

			if (nrOfImages%2!=0 && (i+1)>(nrOfImages)/2 && !addedSecondRow) {
				addedSecondRow = true;
				
				res +="</ul><ul class='tiles'>";
			}

			res +="<li id='li_"+i+"' class='hiddenComic'><img src='img/"+comicImages[i].url+"' style='height:"+comic_row_height+";' class='comicImg'/></li>";
		}
		res+"</ul>";


		return res;


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
		var pretext = contentObj[nodeId].pretext;
		if (pretext == undefined) return "";
		return "<h3>"+ contentObj[nodeId].pretext+"</h3>";
		
	}

	function addNodePostText (nodeId) {
		var posttext = contentObj[nodeId].posttext;
		if (posttext == undefined) return "";
		return "<p>"+ contentObj[nodeId].posttext+"</p>";
		
	}




	self.addContent = function(nodeId) {
			var result = addNodeHeader() + addNodeTitle(nodeId,2) + addNodePreText(nodeId) + addNodeImages(nodeId) + addNodeVideos(nodeId) + addNodeComic(nodeId)  + addNodePostText(nodeId) + addNodeFooter();
		    return result;
	};


	
	function updateBlur(speed) {
		return;
		currentBlur++;
		if (currentBlur>(50*speed)) {return};
		if (currentBlur % (10*speed) ==0) {

			$('#main_div').addClass("blur"+currentBlur/(10*speed));
		}
	
	}


	function updateLessBlur(speed) {
		return;
		currentBlur--;
		if (currentBlur>(50*speed)) {return};
		if (currentBlur % (10*speed) ==0) {
				$('#main_div').removeClass("blur"+(currentBlur/(10*speed)));
		
		}
	
	}

	function showComics(comicsToFadeIn) {
		for (var i=0; i<comicsToFadeIn; i++) {
			TweenMax.to($('#li_'+i),1,{opacity:1, delay:(i*2)});
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
		if (comicsToFadeIn>0) showComics(comicsToFadeIn);
		comicsToFadeIn =0;


	}



	function onCompleteFadeoutNode(maindiv, nextNodeId, speed, animationType) {
		var maindiv;
		maindiv = maindiv = $('#main_div');

		/*maindiv.css('visibility', 'hidden');
		*/
		setupBackground(nextNodeId);

		maindiv.html(FS.addContent(nextNodeId));
		if (Modernizr.touch || !FS.initComplete){
			FS.initComplete = true;
			maindiv.show();
			resetNodeAttributes();
		}else {
			switch (animationType) {
				case "up":
					TweenMax.fromTo (maindiv, speed, {autoAlpha:0, css:{"padding-bottom": "30px", "padding-top": "2000px"}}, {autoAlpha:1, css:{"padding-bottom": "30px", "padding-top": "20px"},  onComplete:resetNodeAttributes, ease:Quad.easeOut});
				break;
				case "down":
					TweenMax.fromTo (maindiv, speed, {autoAlpha:0, css:{"padding-top": "20px", "padding-bottom": "2000px"}}, {autoAlpha:1, css:{"padding-bottom": "30px", "padding-top": "20px"},  onComplete:resetNodeAttributes, ease:Quad.easeOut});
	
				break;
				case "left":
					TweenMax.fromTo (maindiv, speed, {autoAlpha:0, css:{"left": "2000px"}}, {autoAlpha:1, css:{"left": "0px"},  onComplete:resetNodeAttributes, ease:Quad.easeOut});
				break;
				case "right":
					TweenMax.fromTo (maindiv, speed, {autoAlpha:0, css:{"left": "-2000px" }}, {autoAlpha:1, css:{"left": "0px"},  onComplete:resetNodeAttributes, ease:Quad.easeOut});
				break;
				case "zoom":
					TweenMax.fromTo (maindiv, speed, {autoAlpha:0, scaleX:0, scaleY:0},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeOut});
		
				break;
				case "fade":
						TweenMax.fromTo (maindiv, speed, {alpha:0 },{alpha:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeOut});
		
				break;
				case "none": default:
					TweenMax.fromTo (maindiv, 0, {autoAlpha:0 },{autoAlpha:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeOut});
		
				break;

			}


		/*TweenMax.fromTo (maindiv, speed, {alpha:0, scaleX:0.5, scaleY:0.5},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeOut});
		*/
		//	TweenMax.fromTo (maindiv, speed, {autoAlpha:0, scaleX:0, scaleY:0},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeOut});
			}
	}


	self.gotoNode = function(nextNodeId, direction) {
		var oldNodeId, maindiv, speed;
		currentBlur = 0;
		speed=0.5;
		maindiv = $('#main_div');

		oldNodeId = FS.currentNodeNr;

	   	FS.currentNodeNr = nextNodeId + direction;
	
		FS.checkArrows(nextNodeId +direction);
	
		

		if (Modernizr.touch || !FS.initComplete){
			maindiv.hide();
			onCompleteFadeoutNode(maindiv, FS.currentNodeNr , speed,"none");
		}else {
				console.log(oldNodeId + " " + nextNodeId);
			var animationType = contentObj[oldNodeId].animation; 
			switch (animationType) {
				case "up":
					TweenMax.to (maindiv, speed, {autoAlpha:0, css:{"padding-bottom": "2000px"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeIn});
				break;
				case "down":
					TweenMax.to (maindiv, speed, {autoAlpha:0,  css:{"padding-top": "2000px"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeIn});
				break;
				case "left":
					TweenMax.to (maindiv, speed, {autoAlpha:0, css:{"left": "-2000px"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeIn});
				break;
				case "right":
					TweenMax.to (maindiv, speed, {autoAlpha:0, css:{"left": "2000px"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeIn});
				break;
				case "zoom":
					TweenMax.to (maindiv, speed, {autoAlpha:0, scaleX:1.2, scaleY:1.2, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeIn});
				break;
				case "fade":
					TweenMax.to (maindiv, speed, {alpha:0, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeIn});
				break;
				case "none": default:
					TweenMax.to (maindiv, 0, {autoAlpha:0, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeIn});
				break;




			}
		}
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


		

		inner.css('max-height', wind.height()-60+'px');
		inner.css('top', '-30px');
		TweenMax.to($('#prevButton'), 0.125,{css:{"left": "0px"}});
		if ($("#main_div").height() > $(window).height()) {
			inner.css("overflow-y","auto");
			if (navigator.userAgent.match(/webkit/i)) {
			 		scrollwidth=8;
    		}
    		TweenMax.to($('#nextButton'), 0.125,{css:{"right": scrollwidth + "px"}});
    	}else {
			inner.css("overflow-y","hidden");
			TweenMax.to($('#nextButton'), 0.125,{css:{"right":"0px"}});
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

	FS.currentNodeNr = 0;

	FS.BV = new $.BigVideo();
	FS.BV.init();
	
	FS.preloadImages();

	FS.setUpThumbs();
	FS.gotoNode(FS.currentNodeNr,0);
	
	$(document).on('click', '#nextButton', function() {
 		
 			TweenMax.to($('#nextButton'), 0.25,{css:{"right": "-8px"}});
 			
 			
 			FS.gotoNode(FS.currentNodeNr,1);

 		
 	
	});
	$(document).on('click', '#prevButton', function() {
		TweenMax.to($('#prevButton'), 0.25,{css:{"left": "-8px"}});
 			 		
 			FS.gotoNode(FS.currentNodeNr,-1);

 	
	});
	

});



// Oldie document loaded
Gumby.oldie(function() {
	console.log("Oldie");
});

