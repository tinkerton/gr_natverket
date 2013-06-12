/*global $, jQuery, _, TweenMax, console, CaseIntro, Case1_HUB, Case1, Modernizer*/

var FS = (function(self){
	"use strict";
	var DEBUG = true;

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
		currentlyClickedWallText,
		nrOfVideos,
		video_player,
		currentNodeType,
		currentSequence,
		nextArrowTimeout,
		animateTextTimeout;


	

	var BV;




	function addNodeHeader () {
		return "<div class='centered ten columns' id='nodeHeader'>";
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
	function addNodeImages(nodeId,imageClass) {
		var images,
			nrOfImages,
			res;
			images = contentObj[nodeId].image; 
			if (images === undefined) { return "";}

			if (imageClass ==undefined) imageClass ="node-image";
			nrOfImages=  _.size(images);

			res="";
			for (var i=0; i<nrOfImages; i++) {
				res+="<div class='"+imageClass+"'><img src='img/"+images[i].url+"'/></div>"
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

	function startCase1() {
			FS.startCase(Case1);
	}
	function startCase2() {
		alert("Case 2 är inte byggt ännu.");
		//		FS.startCase(Case2);
	}
	function startCase1HUB() {
			FS.startCase(Case1_HUB);
	}
	function startCase2HUB() {
		alert("Case 2 HUB är inte byggt ännu.");
		//		FS.startCase(Case2);
	}



	self.saveAnswer = function (answer) {
		var myObj=contentObj[FS.currentNodeNr];

		console.log("LOG: "+ myObj.analysisLog + " - "  +myObj.answers[answer].analysisLog);
		
		if(myObj.answers[answer].callback!=undefined) {
			console.log(myObj.answers[answer].callback);
			eval(myObj.answers[answer].callback)();
		}else FS.gotoNode(FS.currentNodeNr,1);
	}

	function addNodeQuestion(nodeId) {
		var res="",
			myObj=contentObj[nodeId];
			
		

			res +="<div class='centered eleven columns'>";
			
			res +="<article class='questionDiv'>";
			res +="<div class='questionHeadline'>"+myObj.question +"</div>";
			res +="<div class='sequenceAnswer' onClick=FS.saveAnswer(0)>"+ myObj.answers[0].text +"</div>";
			 
			res +="<div class='sequenceAnswer' onClick=FS.saveAnswer(1)>"+ myObj.answers[1].text +"</div>";
			res +="</article></div>";

			return res;

	}

	self.populateSequence = function() {
		$("#seqWrapper").html(addNodeVideoSequence(FS.currentNodeNr));
		 TweenMax.to($("#seqWrapper"), 0.5, {alpha:1, onComplete:FS.startVideoListener})
	}

	self.gotoSequence = function(sequenceID) {
		 FS.currentSequence =  sequenceID;
		 TweenMax.to($("#seqWrapper"), 0.5, {alpha:0, onComplete:FS.populateSequence})
	
	}

	function addNodeVideoSequence(nodeId) {
		var res ="",
			seq_type,
			myObj;
			
			
			myObj=contentObj[nodeId].sequences[FS.currentSequence];
			seq_type=myObj.type;
			if (FS.currentSequence == 0) {res ="<div class='row' id='seqWrapper'>"}

			switch (seq_type) {
				case "video":
					res +="<div class='centered eleven columns'><div class='loading' id='loader_0'><div class='track'></div><div class='spinner'><div class='mask'><div class='maskedCircle'></div></div></div></div>";
					res +="<article class='vimeo video videoBg'>";
					res +="<iframe id='iframe_"+myObj.sequenceID+"' style='visibility:hidden;' onload='FS.showIframe("+myObj.sequenceID+")' ";
					res += "src='" + myObj.url + "?title=0&byline=0&portrait=0&autoplay=1&api=1&player_id=iframe_"+myObj.sequenceID+"' width='500' height='281' frameboder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''>";
					res +="</iframe></article></div>";

				break;
				case "question":
					res +="<div class='centered eleven columns'>";
					res +="<article class='vimeo video videoBg'>";
					res +="<div class='sequenceHeadline'>"+myObj.text +"</div>";
					res +="<div class='sequenceAnswer' onClick='FS.gotoSequence("+myObj.answers[0].gotoID+")'>"+ myObj.answers[0].text +"</div>";
					res +="<div class='sequenceAnswer' onClick='FS.gotoSequence("+myObj.answers[1].gotoID+")'>"+ myObj.answers[1].text +"</div>";
					res +="</article></div>";
				
				break;
				case "text":
					res +="<div class='centered eleven columns'>";
					res +="<article class='vimeo video videoBg'>";
					res +="<div class='sequenceHeadline'>"+myObj.header +"</div>";
					res +="<div class='sequenceText'>"+ myObj.content +"</div>";
					res +="</article></div>";
				
					
				break;
				


			}
			if (FS.currentSequence == 0) res+="</div>"
		
		return res;
	}


	function addNodeVideos (nodeId) {

		var videos,
			nrOfCols,
			res;
		
		videos = contentObj[nodeId].videos; 
		if (videos === undefined) {return "";}

		FS.nrOfVideos = _.size(videos);
	

		nrOfCols="eleven";
		/*
		switch (FS.nrOfVideos) {
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
		*/

		res ="<div class='row'>";

		for (var i=0; i<FS.nrOfVideos; i++) {
			res +="<div class='centered "+nrOfCols+" columns'>";
			res +="<div class='loading' id='loader_"+i+"'><div class='track'></div><div class='spinner'><div class='mask'><div class='maskedCircle'></div></div></div></div>";
			
			if ( videos[i].source  == "youtube") {
				res +="<article class='youtube video videoBg'>";
				res +="<iframe width='560' height='315' src='"+ videos[i].videoURL + "?showinfo=0' frameborder='0' allowfullscreen></iframe>";
				res +="</iframe>";
				FS.nrOfVideos = 0;

			}
			else {
				//KEEP ONLY THIS, SHOW ONLY ONE VIDEO AT A TIME ANYWAY
				res +="<article class='vimeo video videoBg'>";
				res +="<iframe id='iframe_"+i+"' style='visibility:hidden;' onload='FS.showIframe("+i+")' ";
				res += "src='" + videos[i].videoURL + "?title=0&byline=0&portrait=0&api=1&player_id=iframe_"+i+"' width='500' height='281' frameboder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''>";
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

	function addNodeAgent(nodeId) {
		var res="";
			if (contentObj[nodeId].image != undefined) {
				res +="<ul class='two_up tiles agentul'><li>"+addNodeImages(nodeId,"agentImage")+"</li><li><div id='agent'>";
				res +="<p>"+contentObj[nodeId].text + "</p></div></li></ul>";
			}else { 
				res +="<div class='twelve columns row agentul' id='agent'>";
				res +="<p>"+contentObj[nodeId].text + "</p></div>";
			}
			
			return res;


	}
	function addNodeMusic(nodeId) {
		var res ="",
			musicURL = contentObj[nodeId].music ;
		if ( musicURL== undefined) return "";
		res +="<audio id='soundtrack'  loop='loop' preload='auto' volume='1' autoplay='autoplay'>";
		res +="<source src='"+musicURL+".mp3' type='audio/mpeg'>";
		res +="<source src='"+musicURL+".ogg' type='audio/ogg'>";
    	res +="</audio>";
    	return res;
	}

	self.addContent = function(nodeId) {

		FS.currentNodeType = contentObj[nodeId].type;

		var result = addNodeHeader() + addNodeTitle(nodeId,2);
		
		switch (FS.currentNodeType) {
			case "info":
				result  += addNodePreText(nodeId) + addNodeImages(nodeId) + addNodeVideos(nodeId) +  addNodePostText(nodeId);
		   
			break
			case "video_seq":
				result  += addNodeVideoSequence(nodeId);
		   
			break;
			case "chapter":
				//add no more
		   
			break;
			case "question":
				result  +=  addNodeQuestion(nodeId);
		   
			break;
			case "comic":
				result += addNodeComic(nodeId);
		   
			break;
			case "agent":
				result += addNodeAgent(nodeId);
		   
			break;
			case "walloftext":
				result += addNodeWalloftext(nodeId);
		   

			break;


		}
			result += addNodeFooter();
	 		return result;
	};

	self.zoomIn = function(wallID) {
		//console.log("wallID clicked "+ wallID + "(old:"+currentlyClickedWallText+") size:"+_.size(arrayOfWallTweens));


		if(currentlyClickedWallText==wallID) { //click on a zoomed in walltext
			
					var currTween = arrayOfWallTweens[wallID];
					$("#wall_"+wallID).removeClass("wallSelected");

					currTween = TweenMax.to($("#wall_"+wallID), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
					currentlyClickedWallText=-1;
		}
		else{  //clicked on another walltext, not the zoomed in
			if (currentlyClickedWallText!=-1){ //in some walltext is zoomed in
				var currTween = arrayOfWallTweens[currentlyClickedWallText];
				$("#wall_"+currentlyClickedWallText).removeClass("wallSelected");
				currTween = TweenMax.to($("#wall_"+currentlyClickedWallText), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+currentlyClickedWallText, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			}
				
		
			arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+currentlyClickedWallText),20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			$("#wall_"+wallID).removeClass("wallSelected");
			currentlyClickedWallText=wallID;
			
			arrayOfWallTweens[wallID].kill();

			arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+wallID),0.25,{scaleX:1,scaleY:1, alpha:1, zIndex:550+wallID});
			$("#wall_"+wallID).addClass("wallSelected");

		}

	
		}

	

	function startWallOfText(myIDWallOfText) {
 		var walloftext = contentObj[myIDWallOfText].walloftext;
			
      	
   			var myDiv = $("#myCanvas");

   			var maxX = $("#nodeHeader").width()-500;

    	   for (var i = 0; i<_.size(walloftext); i++) {
    	   		var randx = 0 + Math.floor((Math.random()*maxX)+1);//0 + Math.floor((Math.random()*480)+1);
    	   		var randy = Math.floor((Math.random()*$(window).height()*0.6)+1);
    	   		var rando  = 1 / ((i+1));
    	   		
    	   		
    	   		//(i/_.size(walloftext)
    	   		var style ="top:"+ randy + "px; left:"+randx+"px;" ;
    	   		myDiv.append("<div id='wall_"+i+"' class='walloftextcontent' style='"+style+"''><span class='wallOfTextHitarea'>- ” "+walloftext[i].text+" ”</span></div>");
    			
    			 TweenMax.set($("#wall_"+i), {zIndex:100+i, autoAlpha:0, scaleX:0.5, scaleY:0.5});
    			 var myDelay = i;
    			 if (i>2) myDelay = (i-2)*5 +(i-2); 
    	   		 var myT = TweenMax.to($("#wall_"+i), 20, {scaleX:1, scaleY:1, autoAlpha:1, zIndex:500+i, yoyo:true, repeat:-1, repeatDelay:3, delay:myDelay,  ease:Linear.easeNone});
    	   			arrayOfWallTweens.push(myT);

    	   		 myDiv.append("<script>$('#wall_"+i+"').click(function() {FS.zoomIn("+ i +")});</script>");
    	   		
    	   }


	}

	
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


	self.video_onFinish = function(id) {
		  	
		  	
		  	 removeVideoListener();
		  	 FS.currentSequence =  contentObj[FS.currentNodeNr].sequences[FS.currentSequence].gotoID;
		  //	 console.log(FS.currentSequence);
		  //	 console.log(addNodeVideoSequence(FS.currentNodeNr));
		   TweenMax.to($("#seqWrapper"), 0.5, {alpha:0, onComplete:FS.populateSequence})
			



	}
	function removeVideoListener() {
	//	console.log("removeVideoListener " +FS.currentSequence );
   		var iframe = $('#iframe_'+FS.currentSequence)[0];
   		if(iframe==undefined) return;
//console.log("remove sucess");
   		FS.video_player = $f(iframe);
    	
   		// When the player is ready, add listeners for pause, finish, and playProgress
		FS.video_player.removeEvent('ready');
		FS.video_player.removeEvent('finish');
		$('button').unbind();

	

		
		
	}

	self.startVideoListener = function() {
	//	console.log("startVideoListener " +FS.currentSequence );
   		var iframe = $('#iframe_'+FS.currentSequence)[0];
   		if(iframe==undefined) return;
//console.log("start sucess");
   		FS.video_player = $f(iframe);
    	
   		// When the player is ready, add listeners for pause, finish, and playProgress
		FS.video_player.addEvent('ready', function() {
    	
    
  		//	FS.video_player.addEvent('pause',  FS.video_onPause);
		    FS.video_player.addEvent('finish',  FS.video_onFinish);
		//    FS.video_player.addEvent('playProgress',  FS.video_onPlayProgress);
		});

		// Call the API when a button is pressed
		$('button').bind('click', function() {
		    FS.video_player.api($(this).text().toLowerCase());
		});

		
		
	}

	function showNext() {
		$("#nextButton").fadeIn();

	}
	function killSound(){
		$("#soundtrack").remove();
	}

	function resetNodeAttributes() {
	/*	var maindiv = $('#main_div');
		for (var i=1; i<=5; i++) {
			maindiv.removeClass("blur"+i);
		}
		TweenMax.to(maindiv, 0, {alpha:1, scaleX:1, scaleY:1});
		currentBlur=0;
	*/	
		var music,
			showNextButton = contentObj[FS.currentNodeNr].showNextButton;
		FS.resize();

		switch(FS.currentNodeType) {
			case "comic":
				 showComics(comicsToFadeIn);
				 comicsToFadeIn =0;
			break;
			case "video_seq":
				 FS.startVideoListener();
			break;
			case "walloftext":
				  startWallOfText(FS.IDWallOfText);
				  FS.IDWallOfText=-1;
			break
			case "agent":
				 $("#agent").css("visibility","visible");
				animateText($("#agent").children(), showNext);
			break;

		}
		if (showNextButton>=0) {
			console.log(showNextButton);
			nextArrowTimeout = setTimeout(showNext,parseInt(showNextButton));	
		}


		music = contentObj[FS.currentNodeNr].music;
		if (music!=undefined && music!="continue") {

			$("#audioWrapper").html(addNodeMusic(FS.currentNodeNr));
		}else if (contentObj[FS.currentNodeNr].music!="continue") {
			TweenMax.to($("#soundtrack"),1,{volume:0, onComplete:killSound});
			
		}
	


	}



	function onCompleteFadeoutNode(maindiv, nextNodeId, speed, animationType) {
		var maindiv;
		maindiv = maindiv = $('#main_div');

		/*maindiv.css('visibility', 'hidden');
		*/
		

		maindiv.html(FS.addContent(nextNodeId));
	
		if (!FS.initComplete){ // ||(Modernizr.touch 
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
						TweenMax.fromTo (maindiv, speed, {css:{ "opacity":"0"} },{css:{ "opacity":"1"} , onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:resetNodeAttributes, ease:Quad.easeInOut});
		
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
		 removeVideoListener();

		currentBlur = 0;
		speed=0.809;
		maindiv = $('#main_div');

		oldNodeId = FS.currentNodeNr;

	   	FS.currentSequence = 0;
	 
		FS.nrOfVideos = 0;
	   	FS.currentNodeNr = nextNodeId + direction;
	
		//REMOVE POSSIBILTY TO NAVIGATE FREELY
		//	FS.checkArrows(FS.currentNodeNr);
	
		if (DEBUG == true) $("#nodeNrDebug").html("DEBUG: Node " + contentObj[FS.currentNodeNr].ID);

		 clearTimeout(nextArrowTimeout);
		 clearTimeout(animateTextTimeout);

		emptyWallTweens();

		setupBackground(FS.currentNodeNr);
		
		FS.setUpThumbs();
		var nType = contentObj[FS.currentNodeNr].type;

		if (!(nType=="chapter" || nType=="question")) $("#topleft-overlay").fadeOut();
		else  {
		
			$("#topleft-overlay").fadeIn();
			$("#topleft-overlay").css("background-image","url("+activeCase.topLeftImage.url+")");
		}
		if (!FS.initComplete){  // Modernizr.touch || 
			maindiv.hide();
				
			onCompleteFadeoutNode(maindiv, FS.currentNodeNr , speed,"none");
		}else {
			$("#nextButton").fadeOut();	
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

		//HIDE THUMBS********************************************************************
																				return;


		//*******************************************************************************																		
																
		if (FS.maxNodeNr<FS.currentNodeNr) {
			FS.maxNodeNr = FS.currentNodeNr;
			
		} 

		for (var i=0; i<nrOfNodes; i++) {
			switch (contentObj[i].type) {
				case "info": case "chapter": default:
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
		inner.css('top', '-50px');
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





	function animateText(elements, callback) {
		/* get: array with hidden elements to be displayes, callback function */
   		 var i = 0;

    	(function iterate() {
       		 if (i < elements.length) {
         	    elements[i].style.display = "block"; // show
       	     	animateNode(elements[i], iterate); 
           		i++;
        	 } else if (callback != undefined)
            	callback();
    	})();    
    
    	function animateNode(element, callback) {
        	var pieces = [];
        	if (element.nodeType==1) {
            	while (element.hasChildNodes())
                	pieces.push(element.removeChild(element.firstChild));
           			animateTextTimeout = setTimeout(function childStep() {
                	if (pieces.length) {
                    	animateNode(pieces[0], childStep); 
                    	element.appendChild(pieces.shift());
                	} else if (callback != undefined)
                    	callback();
            		}, 2000/60);
        	} else if (element.nodeType==3) {
            	pieces = element.data.match(/.{0,2}/g); // 2: Number of chars per frame
            	element.data = "";
            	(function addText(){
                	element.data += pieces.shift();
                	animateTextTimeout = setTimeout(pieces.length
                    ? addText
                    : callback,
                  	2000/60);
            	})();
        	}
    	}
	}





	self.startCase = function(newActiveCase) {
		console.log("start case " +newActiveCase);
		activeCase = newActiveCase;

		caseNodeId = 0;
	
		nrOfVideos = 0;
		currentNodeType= "";
		currentSequence = 0;
	
		FS.initComplete = false;
		initComplete = false;
		IDWallOfText = -1;
		arrayOfWallTweens = [];
		currentlyClickedWallText=-1;

		contentObj = activeCase.nodes.content;

		currentNodeNr = -1;
		maxNodeNr = -1;

		
	
		FS.preloadImages();

		//FS.setUpThumbs();
		
		FS.gotoNode(currentNodeNr,1);
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

	
		//HIDE THUMBS
		
		$("#prevButton").hide();

		if (FS.DEBUG == false) {
			$("#case-nav-wrapper").hide();
			$("#debugNextButton").hide();
			$("#debugPrevButton").hide();
		}

	BV = new $.BigVideo();
	BV.init();

	//START CASE HERE - MAIN
	FS.startCase(CaseIntro);

	$(document).on('click', '#nextButton', function() {
 		
 			TweenMax.to($('#nextButton'), 0.25,{css:{"right": "-8px"}});
 			
 			
 			FS.gotoNode(FS.currentNodeNr,1);

 		
 	
	});
	$(document).on('click', '#prevButton', function() {
		TweenMax.to($('#prevButton'), 0.25,{css:{"left": "-8px"}});
 			 		
 			FS.gotoNode(FS.currentNodeNr,-1);

 	
	});



	$(document).on('click', '#debugNextButton', function() {
 		
 				
 			
 			FS.gotoNode(FS.currentNodeNr,1);

 		
 	
	});
	$(document).on('click', '#debugPrevButton', function() {
		
 			 		
 			FS.gotoNode(FS.currentNodeNr,-1);

 	
	});



	$(window).resize(function() {
		//FS.setUpThumbs();
		FS.resize();
	});
	

});



// Oldie document loaded
Gumby.oldie(function() {
	console.log("Oldie");
});


function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("body")[0].appendChild(script);
}


