/*global $, jQuery, _, TweenMax, console, Case1, Modernizer*/

var FS = (function(self){
	"use strict";

	var activeCase, 
		caseNodeId,
		contentObj,
		currentBlur,
		currentNodeNr,
		maxNodeNr,
		comicsToFadeIn,
		initComplete,
		oldBackground,
		IDWallOfText,
		arrayOfWallTweens,
		currentlyClickedWallText;


	activeCase = Case1;
	caseNodeId = 0;
	
	contentObj = activeCase.nodes.content;

	initComplete = false;
	currentNodeNr =0;
	IDWallOfText = -1;
	arrayOfWallTweens = [];
	currentlyClickedWallText=-1;

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

		var titleArr = contentObj[nodeId].title.split("<br/>");
		var res ="<div class='titleDiv'>";
		for (var i=0; i<_.size(titleArr); i++) {
			if (i>0) res+="<br/>";
		 res += "<span class='text-black-bg title'>"+titleArr[i]+"</span>";   //"<h"+size + ">"+ contentObj[nodeId].title+"</h"+size+">";
		}
		res +="</div>";
		return res;
	}

	function removeLoader(iframeId) {
		$('#loader_'+iframeId).remove();
	}
	
	self.showIframe = function(iframeId) {
		TweenMax.to($('#iframe_'+iframeId),0.75, {autoAlpha:1, onComplete:removeLoader, onCompleteParams:[iframeId]});
	}

	function setnewBG(url) {
		$(".backstretch").remove();
		$.backstretch("../img/"+url);
	}

	function setupBackground(nodeId) {
		
		$("#big-video-wrap").hide();
		



		if (contentObj[nodeId].background == undefined || contentObj[nodeId].background.url==oldBackground ) return;
		oldBackground = contentObj[nodeId].background.url;
		
		if(FS.initComplete){
			TweenMax.to($(".backstretch"),1, {autoAlpha:0, onComplete:setnewBG, onCompleteParams:[oldBackground]});

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
		
				
				TweenMax.to($(".backstretch"),0, {autoAlpha:1,delay:1});
			break;
			
			}
		}
		else {
			$.backstretch("../img/"+oldBackground);
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

		res ="<div class='comicWrapper'>";
		for (var i=0; i<nrOfImages; i++) {
			res +="<div id='li_"+i+"' class='hiddenComic'><img src='img/"+comicImages[i].url+"' style='max-height:"+comic_row_height+";' class='comicImg'/></div>";
		}
		res +="</div>";

			/*
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

*/
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
			
			if ( videos[i].source  == "youtube") {
				res +="<article class='youtube video videoBg'>";
				res +="<iframe width='560' height='315' src='"+ videos[i].videoURL + "?showinfo=0' frameborder='0' allowfullscreen></iframe>";
				res +="</iframe>";

			}
			else {
				res +="<article class='vimeo video videoBg'>";
				res +="<iframe id='iframe_"+i+"' style='visibility:hidden;' onload='FS.showIframe("+i+")' ";
				res += "src='" + videos[i].videoURL + "?title=0&byline=0&portrait=0' width='500' height='281' frameboder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''>";
				res +="</iframe>";

			}
			res +="</article></div>";
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

	function emptyWallTweens() {
			for (var i=0; i<_.size(arrayOfWallTweens); i++) {
			
				arrayOfWallTweens[i].kill();

			}
		arrayOfWallTweens=[];
		currentlyClickedWallText=-1;
	
	}

	function addNodeWalloftext(nodeId) {
		var walltext, canvasHeight, canvasWidth;
	
		walltext = contentObj[nodeId].walloftext;
		if (walltext === undefined) {
			if (_.size(arrayOfWallTweens)>0) {emptyWallTweens();}
			return "";}

		FS.IDWallOfText = nodeId;
		return "<div id='myCanvas'  style='height:"+$(document).height() * 0.8+"px' ></div>";
	/*	canvasHeight =  $(document).height() * 0.8;
		canvasWidth =$(document).width() * 0.8;
		if (canvasWidth>940) canvasWidth = 940;
		return "<canvas id='myCanvas' width='"+canvasWidth+"px' height='"+canvasHeight+"px'></canvas>";
	*/

	}


	self.addContent = function(nodeId) {
			var result = addNodeHeader() + addNodeTitle(nodeId,2) + addNodePreText(nodeId) + addNodeImages(nodeId) + addNodeVideos(nodeId) + addNodeComic(nodeId)  + addNodePostText(nodeId) + addNodeWalloftext(nodeId)+ addNodeFooter();
		    return result;
	};

	self.zoomIn = function(wallID) {
		console.log("wallID clicked "+ wallID + "(old:"+currentlyClickedWallText+") size:"+_.size(arrayOfWallTweens));


		if(currentlyClickedWallText==wallID) {
			
					var currTween = arrayOfWallTweens[wallID];
					currTween = TweenMax.to($("#wall_"+wallID), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
					currentlyClickedWallText=-1;
		}
		else{ 
			if (currentlyClickedWallText!=-1){
				var currTween = arrayOfWallTweens[currentlyClickedWallText];
				currTween = TweenMax.to($("#wall_"+currentlyClickedWallText), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+currentlyClickedWallText, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			}
				
	
			arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+currentlyClickedWallText),20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			currentlyClickedWallText=wallID;
			
			arrayOfWallTweens[wallID].kill();
			arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+wallID),0.25,{scaleX:1,scaleY:1, alpha:1, zIndex:500+wallID});

		}

	
		}

	

	function startWallOfText(myIDWallOfText) {
 		var walloftext = contentObj[myIDWallOfText].walloftext;
			
      		var startX = 10;
   		
   		
   			var myDiv = $("#myCanvas");



    	   for (var i = 0; i<_.size(walloftext); i++) {
    	   		var randx = 0 + Math.floor((Math.random()*480)+1);
    	   		var randy = Math.floor((Math.random()*$(window).height()*0.6)+1);
    	   		var rando  = 1 / ((i+1));
    	   		
    	   		
    	   		//(i/_.size(walloftext)
    	   		var style ="top:"+ randy + "px; left:"+randx+"px;" ;
    	   		myDiv.append("<div id='wall_"+i+"' class='walloftextcontent' style='"+style+"''>- ” "+walloftext[i].text+" ”</div>");
    			
    			 TweenMax.set($("#wall_"+i), {zIndex:100+i, autoAlpha:0, scaleX:0.5, scaleY:0.5});
    	   		 var myT = TweenMax.to($("#wall_"+i), 20, {scaleX:1, scaleY:1, autoAlpha:1, zIndex:500+i, yoyo:true, repeat:-1, repeatDelay:3, delay:i*5 + i,  ease:Linear.easeNone});
    	   			arrayOfWallTweens.push(myT);

    	   		 myDiv.append("<script>$('#wall_"+i+"').click(function() {FS.zoomIn("+ i +")});</script>");
    	   		
    	   }

	}

	/*function startWallOfText(myIDWallOfText) {
			var canvas = document.getElementById('myCanvas'); //$("#myCanvas");
		    var context = canvas.getContext('2d');
			var x = canvas.width/2;
			var y = canvas.height/2;

			 context.font = '14pt Calibri';
			  context.textAlign = 'left';
    	   context.fillStyle = 'white';

      		 var walloftext = contentObj[myIDWallOfText].walloftext;
			
      		 var startx = 10;
   			var currenty = 20;	
   		


    	   for (var i = 0; i<_.size(walloftext); i++) {
    	  
    	   		context.fillText(i, 0,  currenty);
    	  	 var textvalArr = toMultiLine(walloftext[i].text);
     			for(var j = 0; j < textvalArr.length; j++){
        			context.fillText(textvalArr[j], startx,currenty);
        			currenty +=20;
        			
   			 }

      	
      		}
	}
	
	function toMultiLine(text){
		   var textArr = new Array();
		   text = text.replace(/\n\r?/g, '<br/>');
		   textArr = text.split("<br/>");
		   return textArr;
	}
	*/
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
		
		FS.resize();

		if (comicsToFadeIn>0) showComics(comicsToFadeIn);
		if (FS.IDWallOfText>-1) startWallOfText(FS.IDWallOfText);
		FS.IDWallOfText=-1;
		comicsToFadeIn =0;


	}



	function onCompleteFadeoutNode(maindiv, nextNodeId, speed, animationType) {
		var maindiv;
		maindiv = maindiv = $('#main_div');

		/*maindiv.css('visibility', 'hidden');
		*/
		

		maindiv.html(FS.addContent(nextNodeId));
	
		if (Modernizr.touch || !FS.initComplete){
			FS.initComplete = true;
			maindiv.show();
			resetNodeAttributes();
		}else {
			switch (animationType) {
				case "up":
					TweenMax.fromTo (maindiv, speed, { css:{"top": "1000px", "opacity":"0"}}, {alpha:1, css:{"top": "0px", "opacity":"1"},  onComplete:resetNodeAttributes, ease:Quad.easeInOut});
				break;
				case "down":
					TweenMax.fromTo (maindiv, speed, {css:{"top": "-1000px", "opacity":"0"}}, {autoAlpha:1, css:{"top": "0px", "opacity":"1"},  onComplete:resetNodeAttributes, ease:Quad.easeInOut});
	
				break;
				case "left":
					TweenMax.fromTo (maindiv, speed, { css:{"left": "2000px", "opacity":"0"}}, {autoAlpha:1, css:{"left": "0px", "opacity":"1"},  onComplete:resetNodeAttributes, ease:Quad.easeInOut});
				break;
				case "right":
					TweenMax.fromTo (maindiv, speed, { css:{"left": "-2000px", "opacity":"0" }}, {autoAlpha:1, css:{"left": "0px", "opacity":"1"},  onComplete:resetNodeAttributes, ease:Quad.easeInOut});
				break;
				case "zoom":
					TweenMax.fromTo (maindiv, speed, {autoAlpha:0, scaleX:0.5, scaleY:0.5},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeInOut});
		
				break;
				case "fade":
						TweenMax.fromTo (maindiv, speed, {autoAlpha:0 },{autoAlpha:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeInOut});
		
				break;
				case "none": default:
					TweenMax.fromTo (maindiv, 0, {autoAlpha:0 },{autoAlpha:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeInOut});
		
				break;

			}


		/*TweenMax.fromTo (maindiv, speed, {alpha:0, scaleX:0.5, scaleY:0.5},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeIn});
		*/
		//	TweenMax.fromTo (maindiv, speed, {autoAlpha:0, scaleX:0, scaleY:0},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeIn});
			}
	}


	self.gotoNode = function(nextNodeId, direction) {
		var oldNodeId, maindiv, speed;
	
		if (nextNodeId+direction == FS.currentNodeNr) return;

		currentBlur = 0;
		speed=0.809;
		maindiv = $('#main_div');

		oldNodeId = FS.currentNodeNr;
	   
	
	   	FS.currentNodeNr = nextNodeId + direction;
	
		FS.checkArrows(FS.currentNodeNr);
	
		setupBackground(FS.currentNodeNr);
		
		FS.setUpThumbs();

		if (contentObj[FS.currentNodeNr].type=="info") $("#topleft-overlay").fadeOut();
		else  $("#topleft-overlay").fadeIn();

		if (Modernizr.touch || !FS.initComplete){
			maindiv.hide();
			onCompleteFadeoutNode(maindiv, FS.currentNodeNr , speed,"none");
		}else {
				
			var animationType = contentObj[oldNodeId].animation; 
			switch (animationType) {
				case "up":
					TweenMax.to (maindiv, speed, { css:{"top": "-1000px", "opacity":"0"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
				case "down":
					TweenMax.to (maindiv, speed, { css:{"top": "1000px", "opacity":"0"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
				case "left":
					TweenMax.to (maindiv, speed, {css:{"left": "-2000px", "opacity":"0"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
				case "right":
					TweenMax.to (maindiv, speed, { css:{"left": "2000px", "opacity":"0"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
				case "zoom":
					TweenMax.to (maindiv, speed, {autoAlpha:0, scaleX:1.5, scaleY:1.5, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
				case "fade":
					TweenMax.to (maindiv, speed, {alpha:0, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
				case "none": default:
					TweenMax.to (maindiv, 0, {autoAlpha:0, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;




			}
		}
	}

	self.setUpThumbs = function() {
		var nrOfNodes = _.size(activeCase.nodes.content);
		var navObj = $("#case-nav");
		var res ="";
		
		if (FS.maxNodeNr<FS.currentNodeNr) {
			FS.maxNodeNr = FS.currentNodeNr;
			
		} 

		for (var i=0; i<nrOfNodes; i++) {
			switch (contentObj[i].type) {
				case "info": case "chapter":
					res += "<div class='node-thumb node-info";
					if (FS.currentNodeNr==i) { res += " node-selected";}
					if (FS.maxNodeNr>=i) {
						res +=" node-visited";
						res +="' onclick='FS.gotoNode("+i+",0);'>";
					}
					else{
						res +="'>"
					}

					res +="</div>";
				break;
				case "question":
				  res += "<div class='node-thumb node-question";
				  if (FS.currentNodeNr==i) { res += " node-selected";}
				  if (FS.maxNodeNr>=i) {
				  	res +=" node-visited";
				  	res +="' onclick='FS.gotoNode("+i+",0);'>";
				   }
				   else{
						res +="'>"
					}
					res +="</div>";
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
			if (currentNodeNr<_.size(activeCase.nodes.content)-1) {
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
		var nrOfImages = _.size(activeCase.preload.images);
		var prelObj = $("#js-preload");
		var res ="";

		for (var i=0; i<nrOfImages; i++) {
			if (i>0) res +=", ";
			res +="url('img/"+ activeCase.preload.images[i].url+"')";

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

	FS.currentNodeNr = -1;
	FS.maxNodeNr = -1;

	FS.BV = new $.BigVideo();
	FS.BV.init();
	
	FS.preloadImages();

	FS.setUpThumbs();
	FS.gotoNode(FS.currentNodeNr,1);

	$(document).on('click', '#nextButton', function() {
 		
 			TweenMax.to($('#nextButton'), 0.25,{css:{"right": "-8px"}});
 			
 			
 			FS.gotoNode(FS.currentNodeNr,1);

 		
 	
	});
	$(document).on('click', '#prevButton', function() {
		TweenMax.to($('#prevButton'), 0.25,{css:{"left": "-8px"}});
 			 		
 			FS.gotoNode(FS.currentNodeNr,-1);

 	
	});

	$(window).resize(function() {
		FS.setUpThumbs();
		FS.resize();
	});
	

});



// Oldie document loaded
Gumby.oldie(function() {
	console.log("Oldie");
});

