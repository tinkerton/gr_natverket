/*global $, jQuery, _, TweenMax, console, CaseIntro, Case1_HUB, Case2_HUB, Case1a, Case2a, Case1b, Case2b,  Modernizer*/

var FS = (function(self){
	"use strict";
	

	var activeCase, 
		caseNodeId,
		contentObj,
		currentBlur,
		currentNodeNr,
		maxNodeNr,
		comicsToFadeIn,
		currentComic,
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
		animateTextTimeout,
		DEBUG,
		BV,
		globalAnimation,
		myTimeout,
		unlockedChapters;


	

	




	function addNodeHeader (nodeId) {
		var cols = "ten";
		if (contentObj[nodeId].size!=undefined) cols = contentObj[nodeId].size;
		return "<div class='centered " + cols + " columns' id='nodeHeader'>";
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
	
	
		$.backstretch("img/"+url);
	}

	function setupBackground(nodeId) {
		
		$("#big-video-wrap").hide();
		



		if (contentObj[nodeId].background == undefined || contentObj[nodeId].background.url==oldBackground) return;
		oldBackground = contentObj[nodeId].background.url;
		
		if(FS.initComplete){
			TweenMax.to($(".backstretch"),1, {autoAlpha:0, onComplete:setnewBG, onCompleteParams:[oldBackground]});

		switch(contentObj[nodeId].background.type) {
			case "video":
				if (Modernizr.touch) {
    				$.backstretch("img/"+contentObj[nodeId].background.ipadBG);
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
			$.backstretch("img/"+oldBackground);
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
				res+="<div class='"+imageClass+"'><img class='imgOfNode' src='img/"+images[i].url+"'/></div>"
			}
			return res;
	}

function startComicSingle(nrOfSlides) {
		var winHeight = 0;
		TweenMax.to($("#comicScroller"),0,{top:winHeight});
		TweenMax.to($(".comicSingleWrapper"),1,{css:{"opacity":"1"},delay:0});
/*
		for (var i=0; i<nrOfSlides; i++) {
			$("#slide_"+i).data("nr",i)
			$("#slide_"+i).click(function(){
	
				var scrollto = winHeight -440* parseInt($(this).data("nr"));	
				TweenMax.to($("#comicScroller"),0,{top:scrollto});
				
			});
		}
*/	
	}

	function startComicParallel(nrOfSlides) {
		var winHeight,
		comicHeight,
		myObj = contentObj[FS.currentNodeNr].comicparallel[0].slide; 

		if (myObj.url !=undefined) {
			comicHeight = 200;
			winHeight=0;
		}
		if (myObj.url2 !=undefined) {
			comicHeight =370;
			winHeight= $(window).height()/4;
	}
		if (myObj.url3 !=undefined) {
			comicHeight =225;
			winHeight= $(window).height()/3 -30;
	}
		if (myObj.url4 !=undefined) {
			comicHeight =185;
			winHeight= $(window).height()/3 -30;
		}

		TweenMax.to($("#comicScroller"),0,{top:winHeight});
		TweenMax.to($(".comicParallelWrapper"),1,{css:{"opacity":"1"},delay:0});
		currentComic = 0;
		for (var i=0; i<nrOfSlides; i++) {
			$("#slide_"+i).data("nr",i)
			$("#slide_"+i).click(function(){
				var currentNr = parseInt($(this).data("nr"));
				emptyWallTweens();
				if(currentComic==currentNr && currentNr < nrOfSlides-1) {
					currentNr++;
				}
				else if (currentComic<currentNr && currentComic<nrOfSlides-1) currentNr = currentComic+1;
				else if (currentComic>currentNr && currentComic>0) currentNr = currentComic-1;
			
				resetAllComicParallels(nrOfSlides, currentNr);
					
				var scrollto = winHeight -(comicHeight)* currentNr;
				//console.log("scrollto "+ scrollto + "  currentNr="+currentNr + "            currentComic="+currentComic);
				TweenMax.to($("#comicScroller"),0,{top:scrollto});
				currentComic = currentNr;
	
				$("#slide_"+currentNr).addClass("comicActive");
				TweenMax.to($("#slide_"+currentNr),0, {css:{"opacity":"1"}});
				startComicHint(nrOfSlides);
			});
		}
		resetAllComicParallels(nrOfSlides, 0);
		startComicHint(nrOfSlides);
		$("#slide_0").addClass("comicActive");
	}
function resetAllComicParallels(nrOfSlides,exceptSlide) {
			window.clearTimeout(myTimeout);
		 //console.log("resetAllComicParallels " + nrOfSlides+ ","+exceptSlide);
		for (var i=0; i<nrOfSlides; i++) {
			
				$("#slide_"+i).removeClass("comicActive")
				
			
		}
		
	}

	function startComicHint(nrOfSlides) {
		//console.log("startComicHint " + nrOfSlides+ ","+currentComic);
		window.clearTimeout(myTimeout);
		var myT;
			for (var i=0; i<nrOfSlides; i++) {
				if (i != currentComic) {
				$("#slide_"+i).removeClass("comicActive")
				myT = TweenMax.fromTo($("#slide_"+i),0.15,{css:{"opacity":"0.1"}}, {css:{"opacity":"0.5"}, yoyo:true, repeat:3, repeatDelay:0.25, delay:5});
				arrayOfWallTweens.push(myT);
				
				}
			}
			myTimeout = setTimeout(function(){startComicHint(nrOfSlides)},8000);
	}

	function addNodeComicParallel(nodeId) {
		var res,
			comicSlides,
			nrOfSlides,
			myObj,
			comicWidth,
			comicHeight;
			

			comicSlides = contentObj[nodeId].comicparallel; 
			if (comicSlides === undefined) {
				comicsToFadeIn=0;
				return "";}

			nrOfSlides= comicsToFadeIn = _.size(comicSlides);

			//comic_row_height = contentObj[nodeId].comic_row_height;

			res ="<div class='comicParallelWrapper'>";
			res +="<div id='comicScroller'>";
			//width:280px;
			if (comicSlides[0].slide.url !=undefined) {comicWidth = 660;}
		 	if (comicSlides[0].slide.url2 !=undefined) {comicWidth =460;}
			if (comicSlides[0].slide.url3 !=undefined) {comicWidth =300;}
			if (comicSlides[0].slide.url4 !=undefined){ comicWidth =220;}
			
			comicHeight = contentObj[nodeId].comic_row_height;

			for (var i=0; i<nrOfSlides; i++) {
				myObj = comicSlides[i].slide;
				res +="<div id='slide_"+i+"' class='comicSlide";
				if (i==0) res +=" comicActive";
				res +="'  style='height:"+comicHeight+";'>";
				//if (myObj.text != undefined) res +="<div id='li_"+i+"text' class='comicHeader'>"+myObj.text+"</div>";
				if (myObj.url != undefined) res +="<div id='li_"+i+"a' class='parallelcomic' style='width:"+comicWidth+"px;'><img src='img/"+myObj.url+"' /></div>";
				if (myObj.url2 != undefined) res +="<div id='li_"+i+"b' class='parallelcomic' style='width:"+comicWidth+"px;'><img src='img/"+myObj.url2+"' /></div>";
				if (myObj.url3 != undefined) res +="<div id='li_"+i+"c' class='parallelcomic' style='width:"+comicWidth+"px;'><img src='img/"+myObj.url3+"' /></div>";
				if (myObj.url4 != undefined) res +="<div id='li_"+i+"c' class='parallelcomic' style='width:"+comicWidth+"px;'><img src='img/"+myObj.url4+"' /></div>";
			
				
				res +="</div>";
			}
			res +="</div></div>";


		return res;



	}

function addNodeComicSingle(nodeId) {
		var res,
			comicSlides,
			nrOfSlides,
			myObj;
			

			comicSlides = contentObj[nodeId].comicsingle; 
			if (comicSlides === undefined) {
				comicsToFadeIn=0;
				return "";}

			nrOfSlides= comicsToFadeIn = _.size(comicSlides);


			res ="<div class='comicSingleWrapper' style='height:"+nrOfSlides * 517+"px;'>";
			res +="<div id='comicScroller'>";
			for (var i=0; i<nrOfSlides; i++) {
				myObj = comicSlides[i].slide;
				res +="<div id='slide_"+i+"' class='singleComicSlide";
				if (i==0) res +=" comicActive";
				res +="'>";
				if (myObj.url != undefined) res +="<div id='li_"+i+"a' class='singlecomic'><img src='img/"+myObj.url+"' /></div>";
				if (myObj.text != undefined) res +="<div id='li_"+i+"text' class='comicSingleHeader'>"+myObj.text+"</div>";
					
				res +="</div>";
			}
			res +="</div></div>";


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
	function checkToUnlockChapters() {
		
		var myObj=contentObj[FS.currentNodeNr],
			nrOfUnlocks = _.size(FS.unlockedChapters);
		
		for (var i=0; i<_.size(myObj.chapters); i++) {
				if (myObj.chapters[i].lockeduntil<=nrOfUnlocks) {
					$("#chapter_"+myObj.chapters[i].ID).removeClass("locked");
					
				}
			
					if (_.contains(FS.unlockedChapters, myObj.chapters[i].callback)) {
						$("#chapter_"+i).addClass("visitedChapter");
						
					}
			
		}
			
	}

	function exitChapter(nextHUB) {
		var foundNextHUB =false,
			currentCase = activeCase.ID.text;	

			
		for (var i=0; i<=_.size(FS.unlockedChapters); i++) {
			if (FS.unlockedChapters[i] == currentCase) {
				foundNextHUB = true;
				FS.unlockedChapters.length = 0;
				FS.unlockedChapters = [];
				break;
			}
			
		}
		if(currentCase!="CaseIntro" && foundNextHUB == false) FS.unlockedChapters.push(currentCase);
		
		 ////console.log("exitChapter goto:"+ nextHUB  + "    unlockedChapters:" + _.size(FS.unlockedChapters) +" " + currentCase);
	
		TweenMax.to($("#main_div"),1,{css:{"opacity":"0"}, onComplete:FS.startCase, onCompleteParams:[nextHUB]});
	}


	self.saveAnswer = function (answer) {
		if(globalAnimation==1) return;
		globalAnimation=1;
		
		var myObj=contentObj[FS.currentNodeNr],
			myCallback = myObj.answers[answer].callback;

			ga('send', 'event', 'answers',  activeCase.ID.text, myObj.analysisLog , myObj.answers[answer].analysisLog);



		//console.log("LOG: "+ activeCase.ID.text+", " + myObj.analysisLog + ", "  +myObj.answers[answer].analysisLog);
		
		if(myCallback!=undefined && myCallback!="Case1_HUB"  && myCallback!="Case2_HUB") {
			//console.log( myCallback);
			TweenMax.to($("#main_div"),1,{css:{"opacity":"0"}, onComplete:FS.startCase, onCompleteParams:[myCallback]});

		}else {
			if(myCallback =="Case1_HUB" || myCallback=="Case2_HUB") {

				exitChapter(myCallback);
			}
			else {
				globalAnimation=0;
				TweenMax.to($("#main_div"),1,{css:{"opacity":"0"}, onComplete: FS.gotoNode,onCompleteParams:[FS.currentNodeNr,1]});
			}

		}
	}

	function addNodeQuestion(nodeId) {
		var res="",
			myObj=contentObj[nodeId];
			
		

			res +="<div class='centered eleven columns'>";
			
			res +="<article class='questionDiv'>";
			res +="<div class='questionHeadline'>"+myObj.question +"</div>";
			for (var i =0; i<_.size(myObj.answers); i++) {
			res +="<div class='sequenceAnswer' onClick=FS.saveAnswer("+i+")>"+ myObj.answers[i].text +"</div>";
				
			}
			res +="</article></div>";

			return res;

	}

	self.populateSequence = function() {
		$("#seqWrapper").html(addNodeVideoSequence(FS.currentNodeNr));
		 TweenMax.to($("#seqWrapper"), 0.5, {alpha:1, onComplete:FS.startVideoListener})
	}

	self.gotoSequence = function(sequenceID) {
		 if (sequenceID == "-1") {
		 	 //console.log("END of video");
		 	FS.gotoNode(FS.currentNodeNr,1); 
		 return; 
		}
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
					res +="<article class=''>";
					res +="<div class='sequenceHeadline'>"+myObj.text +"</div>";
					for (var i=0; i<_.size(myObj.answers); i++) {
						res +="<div class='sequenceAnswer videoQuestion' onClick='FS.gotoSequence("+myObj.answers[i].gotoID+")'>"+ myObj.answers[i].text +"</div>";
					//if(myObj.answers[1]!=undefined) res +="<div class='sequenceAnswer videoQuestion' onClick='FS.gotoSequence("+myObj.answers[1].gotoID+")'>"+ myObj.answers[1].text +"</div>";
					}

					res +="</article></div>";
				
				break;
				case "text":
					res +="<div class='centered eleven columns'>";
					res +="<article class=''>";
					if  (myObj.header!=undefined) res +="<div class='sequenceHeadline'>"+myObj.header +"</div>";
					if  (myObj.content!=undefined) res +="<div class='sequenceText'>"+ myObj.content +"</div>";
					res +="</article></div>";
				
					
				break;
				


			}
			if (FS.currentSequence == 0) res+="</div>"
		
		return res;
	}


	function addNodeVideos (nodeId) {

		var videos,
			nrOfCols,
			res, 
			autoplay;
		
		videos = contentObj[nodeId].videos; 
		if (videos === undefined) {return "";}

		autoplay=1;


		FS.nrOfVideos = _.size(videos);
		if (FS.nrOfVideos>1) autoplay=0;

		nrOfCols="twelve";
		
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




		

		res ="<div class='row'>";

		for (var i=0; i<FS.nrOfVideos; i++) {
			if(FS.nrOfVideos<=1) res +="<div class='centered "+nrOfCols+" columns'>";
			else res +="<div class='"+nrOfCols+" columns'>";
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
				res +="<iframe id='iframe_"+i+"'' style='visibility:hidden;' onload='FS.showIframe("+i+")' ";
				res += "src='" + videos[i].videoURL + "?title=0&byline=0&portrait=0&autoplay="+autoplay+"&api=1&player_id=iframe_"+i+"' width='500' height='281' frameboder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''>";
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
		currentlyClickedWallText=0;
	
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
		return;
		var res ="",
			musicURL = contentObj[nodeId].music ;
		if ( musicURL== undefined) return "";
		res +="<audio id='soundtrack'  loop='loop' preload='auto' volume='1' autoplay='autoplay'>";
		res +="<source src='"+musicURL+".mp3' type='audio/mpeg'>";
		res +="<source src='"+musicURL+".ogg' type='audio/ogg'>";
    	res +="</audio>";
    	return res;
	}


	self.respondToHUB = function (chapter) {	
		if(globalAnimation==1) return;
	

		var myObj=contentObj[FS.currentNodeNr];
		//console.log("goto chapter " + chapter + " : " + myObj.chapters[chapter].lockeduntil + " | " +  _.size(FS.unlockedChapters));
		if (myObj.chapters[chapter].lockeduntil > _.size(FS.unlockedChapters)) {
				// //console.log("return");
				return;
		}
		globalAnimation=1;
		//console.log("respondToHUB: "+ myObj.analysisLog + " - "  +myObj.chapters[chapter].analysisLog);
		
		if(myObj.chapters[chapter].callback!=undefined) {
		//	console.log( myObj.chapters[chapter].callback);
			TweenMax.to($("#main_div"),1,{css:{"opacity":"0"}, onComplete:FS.startCase, onCompleteParams:[myObj.chapters[chapter].callback]});
		}
		//else console.log("HUB error: could not found callback action in function respondToHUB");
	}



	


	function addHubMenu(nodeId) {
		var res, 
			nrOfChapters,
			myObj,
		 	wHeight;

			//res = "<div class='chapterWrapper' style='height:"+$(window).height()+"px; width:"+$(window).width()+"px; '>";
			wHeight =$(window).height();
			//if (wHeight>768) wHeight = 768px;

			res = "<div class='chapterWrapper' style='height:"+wHeight+"px; width:960px; '>";

			myObj = contentObj[nodeId].chapters;
			nrOfChapters = _.size(myObj);

			for (var i=0; i<nrOfChapters; i++) {

				res +="<div id='chapter_"+myObj[i].ID+"' class='chapterItem";
				if(myObj[i].lockeduntil!=undefined) {
					res +=" locked";
				}
				res +="' style='height:"+myObj[i].height+"; width:"+myObj[i].width+"; left:"+myObj[i].left+"; top:"+myObj[i].top+"; padding-top:"+myObj[i].paddingtop+"; font-size:"+myObj[i].fontsize+"em;'  onClick=FS.respondToHUB("+i+")>"+myObj[i].text+"</div>";
			
			}



			res+="</div>";
		return res;
	}

	self.addContent = function(nodeId) {

		FS.currentNodeType = contentObj[nodeId].type;

		var result = addNodeHeader(nodeId) + addNodeTitle(nodeId,2);
		
		switch (FS.currentNodeType) {
			case "info":
				result  += addNodePreText(nodeId) + addNodeImages(nodeId) + addNodeVideos(nodeId) +  addNodePostText(nodeId);
		   
			break;
			case "video":
				result +=addNodeVideos(nodeId);
			break;
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
			case "comicparallel":
				result += addNodeComicParallel(nodeId);
			break;
			case "comicsingle":
				result += addNodeComicSingle(nodeId);
			break;
			
			case "agent":
				result += addNodeAgent(nodeId);
		   
			break;
			case "walloftext":
				result += addNodeWalloftext(nodeId);
		   

			break;
			case "hub":
				result = addHubMenu(nodeId);
		   

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

				//	currTween = TweenMax.to($("#wall_"+wallID), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
					currentlyClickedWallText=-1;
		}
		else{  //clicked on another walltext, not the zoomed in
			if (currentlyClickedWallText!=-1){ //in some walltext is zoomed in
				var currTween = arrayOfWallTweens[currentlyClickedWallText];
				$("#wall_"+currentlyClickedWallText).removeClass("wallSelected");
				//currTween = TweenMax.to($("#wall_"+currentlyClickedWallText), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+currentlyClickedWallText, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			}
				
		
			//arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+currentlyClickedWallText),20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			$("#wall_"+wallID).removeClass("wallSelected");
			currentlyClickedWallText=wallID;
			
			//arrayOfWallTweens[wallID].kill();

			//arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+wallID),0.25,{scaleX:1,scaleY:1, alpha:1, zIndex:550+wallID});
			$("#wall_"+wallID).addClass("wallSelected");

		}

	
		}

self.zoomIn_BUP = function(wallID) {
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
			
      		var rownr = 0;
   			var myDiv = $("#myCanvas");

   			var maxX = $("#nodeHeader").width()-500;
   			currentlyClickedWallText =0;
   		 	myDiv.append("<ignorefirstchild/><div class='centered twelve columns' id='myDiv_column'><div class='row' id='myDiv_row"+rownr+"'><ignorefirstchild/>");
    	   for (var i = 0; i<_.size(walloftext); i++) {
    	   		//var randx = 0 +150*(i%4);//0 + Math.floor((Math.random()*480)+1);
    	   		//var randy = Math.floor((Math.random()*$(window).height()*0.6)+1);
    	   		//var rando  = 1 / ((i+1));
    	   		
    	   		
    	   		//(i/_.size(walloftext)
    	   		//var style ="top:"+ randy + "px; left:"+randx+"px;" ;
    	   		if (i==3 || i==6) {
    	   				 $("#myDiv_column").append("</div>");
    	   				rownr++;
    	   				 $("#myDiv_column").append("<div class='row' id='myDiv_row"+rownr+"'><ignorefirstchild/>");
    	   		}
    	   		if(i==0) $("#myDiv_row"+rownr).append("<div id='wall_"+i+"' class='three columns walloftextcontent2 wallSelected'><span class='wallOfTextHitarea'>- ” "+walloftext[i].text+" ”</span></div>");
    	   		else if(i<6) $("#myDiv_row"+rownr).append("<div id='wall_"+i+"' class='three columns walloftextcontent2'><span class='wallOfTextHitarea'>- ” "+walloftext[i].text+" ”</span></div>");
    			else  $("#myDiv_row"+rownr).append("<div id='wall_"+i+"' class='five columns walloftextcontent2'><span class='wallOfTextHitarea'>- ” "+walloftext[i].text+" ”</span></div>");
    			 /*TweenMax.set($("#wall_"+i), {zIndex:100+i, autoAlpha:0, scaleX:0.5, scaleY:0.5});
    			 var myDelay = i;
    			 if (i>2) myDelay = (i-2)*5 +(i-2); 
    	   		 var myT = TweenMax.to($("#wall_"+i), 20, {scaleX:1, scaleY:1, autoAlpha:1, zIndex:500+i, yoyo:true, repeat:-1, repeatDelay:3, delay:myDelay,  ease:Linear.easeNone});
    	   			arrayOfWallTweens.push(myT);
				*/
    	   		 myDiv.append("<script>$('#wall_"+i+"').click(function() {FS.zoomIn("+ i +")});</script>");
    	   		
    	   }
    	   myDiv.append("</div></div>");


	}

	function startWallOfText_BUP(myIDWallOfText) {
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

	self.video_onSingleVideoFinish =function(id) {
			var iframe = $('#iframe_0');
   			if(iframe==undefined) return;
			FS.video_player = $f(iframe);
    	
   			FS.video_player.removeEvent('ready');
			FS.video_player.removeEvent('finish');
			//console.log("end of video");
		
		 /*	if (contentObj[FS.currentNodeNr].callback!=undefined && contentObj[FS.currentNodeNr].callback!="-1") {
		  	 		exitChapter(contentObj[FS.currentNodeNr].callback);

		  	 	}else {
		  */
		  	 		FS.gotoNode(FS.currentNodeNr,1);
		  //	 	}
		
	}

	self.video_onFinish = function(id) {
		  	
		  	
		  	 removeVideoListener();
		  	// console.log("video on finish");
		  	 FS.currentSequence =  contentObj[FS.currentNodeNr].sequences[FS.currentSequence].gotoID;
		   	 if ( FS.currentSequence!=undefined)  TweenMax.to($("#seqWrapper"), 0.5, {alpha:0, onComplete:FS.populateSequence})
		  	 else {
		  	 	if (contentObj[FS.currentNodeNr].callback!=undefined) {
		  	 		//console.log("vof1");
		  	 		exitChapter(contentObj[FS.currentNodeNr].callback);

		  	 	}else {
		  	 		//console.log("vof2");
		  	 		FS.gotoNode(FS.currentNodeNr,1);
		  	 	}
		  	 }
		  //	 console.log(FS.currentSequence);
		  //	 console.log(addNodeVideoSequence(FS.currentNodeNr));
		  
			



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
	self.startSingleVideoListener = function () {
		var iframe = $('#iframe_0');
		FS.video_player = $f(iframe);
    		
		FS.video_player.addEvent('ready', function() {
    		    FS.video_player.addEvent('finish',  FS.video_onSingleVideoFinish);
		});
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

	function startHUBAnimation() {
	return;
		var myObj, nrOfChapters;
		myObj = contentObj[FS.currentNodeNr].chapters;
			nrOfChapters = _.size(myObj);

			for (var i=0; i<nrOfChapters; i++) {
				var delay  = Math.random();
				TweenMax.to($("#chapter_"+i), 2, {scaleX:1.05, scaleY:1.05,  yoyo:true, repeat:-1, repeatDelay:delay*3, delay:i*delay,  ease:Quad.easeInOut});
			}
	}


	function startNode() {
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
		globalAnimation=0;
		window.clearTimeout(myTimeout);

		switch(FS.currentNodeType) {
			case "comic":
				 showComics(comicsToFadeIn);
				 comicsToFadeIn =0;
			break;
			case "comicparallel": 
				 startComicParallel(comicsToFadeIn);
				 comicsToFadeIn =0;
			break;
			case "comicsingle":
				 startComicSingle(comicsToFadeIn);
				 comicsToFadeIn =0;
			break;
			case "video_seq":
				 FS.startVideoListener();
			break;
			case "video":
				 FS.startSingleVideoListener();
			break;
			case "walloftext":
				  startWallOfText(FS.IDWallOfText);
				  FS.IDWallOfText=-1;
			break
			case "agent":
				 $("#agent").css("visibility","visible");
				animateText($("#agent").children(), showNext);
			break;
			case "hub":
				checkToUnlockChapters();
				showNextButton=-1;
				$("#nextButton").fadeOut();	
				startHUBAnimation();
			break;

		}
		if (showNextButton>=0) {
			//console.log("showNextButton: " + showNextButton);
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
			maindiv.fadeIn('slow');
			startNode();
		}else {
			switch (animationType) {
				case "up":
					TweenMax.fromTo (maindiv, speed, { css:{"top": "1000px", "opacity":"0"}}, {alpha:1, css:{"top": "0px", "opacity":"1"},  onComplete:startNode, ease:Quad.easeInOut});
				break;
				case "down":
					TweenMax.fromTo (maindiv, speed, {css:{"top": "-1000px", "opacity":"0"}}, {autoAlpha:1, css:{"top": "0px", "opacity":"1"},  onComplete:startNode, ease:Quad.easeInOut});
	
				break;
				case "left":
					TweenMax.fromTo (maindiv, speed, { css:{"left": "2000px", "opacity":"0"}}, {autoAlpha:1, css:{"left": "0px", "opacity":"1"},  onComplete:startNode, ease:Quad.easeInOut});
				break;
				case "right":
					TweenMax.fromTo (maindiv, speed, { css:{"left": "-2000px", "opacity":"0" }}, {autoAlpha:1, css:{"left": "0px", "opacity":"1"},  onComplete:startNode, ease:Quad.easeInOut});
				break;
				case "zoom":
					TweenMax.fromTo (maindiv, speed, {autoAlpha:0, scaleX:0.5, scaleY:0.5},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:startNode, ease:Quad.easeInOut});
		
				break;
				case "fade":
						TweenMax.fromTo (maindiv, speed, {css:{ "opacity":"0"} },{css:{ "opacity":"1"} , onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:startNode, ease:Quad.easeInOut});
		
				break;
				case "none": default:
					TweenMax.fromTo (maindiv, 0, {autoAlpha:0 },{autoAlpha:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:startNode, ease:Quad.easeInOut});
		
				break;

			}


		/*TweenMax.fromTo (maindiv, speed, {alpha:0, scaleX:0.5, scaleY:0.5},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:startNode, ease:Quad.easeIn});
		*/
		//	TweenMax.fromTo (maindiv, speed, {autoAlpha:0, scaleX:0, scaleY:0},{autoAlpha:1, scaleX:1, scaleY:1, onUpdate:updateLessBlur, onUpdateParams:[speed], onComplete:startNode, ease:Quad.easeIn});
			}
	}


	self.gotoNode = function(nextNodeId, direction) {
		var oldNodeId, maindiv, speed;
		
		if ((nextNodeId+direction == FS.currentNodeNr) && FS.initComplete) return;
		if(globalAnimation==1) return;
		globalAnimation =1;
		 removeVideoListener();

		currentBlur = 0;
		speed=0.809;
		maindiv = $('#main_div');

		oldNodeId = FS.currentNodeNr;

	   	FS.currentSequence = 0;
	 
		FS.nrOfVideos = 0;
	   	FS.currentNodeNr = nextNodeId + direction;
		
		try{
	   	//console.log("gotoNode " +  activeCase.ID.text +", " +contentObj[FS.currentNodeNr].ID);
		ga('send', 'event', 'startNode',  activeCase.ID.text, contentObj[FS.currentNodeNr].ID);
		
		 }catch(err) {}
		//REMOVE POSSIBILTY TO NAVIGATE FREELY
		//	FS.checkArrows(FS.currentNodeNr);
		FS.checkDebugArrows(FS.currentNodeNr);
		
		try
 		 {
  			if (contentObj[oldNodeId].callback!=undefined) {
  				if (contentObj[oldNodeId].callback=="OUTRO") window.location = "outro.html";
  				else {
  				
		
  						exitChapter(contentObj[oldNodeId].callback);
  					return;	
  				}	
  				
  			};
		 }catch(err) {}
	
		

		if (FS.DEBUG == "true") $("#nodeNrDebug").html("Node " + contentObj[FS.currentNodeNr].ID);

		 clearTimeout(nextArrowTimeout);
		 clearTimeout(animateTextTimeout);

		emptyWallTweens();

		setupBackground(FS.currentNodeNr);
		
		FS.setUpThumbs();
		var nType = contentObj[FS.currentNodeNr].type;

		/*if (!(nType=="chapter" || nType=="question")) $("#topleft-overlay").fadeOut();
		else  {
		
			$("#topleft-overlay").fadeIn();
			$("#topleft-overlay").css("background-image","url("+activeCase.topLeftImage.url+")");
		}
		*/

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
	self.checkDebugArrows = function(currentNodeNr) {
			if (currentNodeNr<_.size(activeCase.nodes.content)-1) {
 				$("#debugNextButton").fadeIn();
 			}
 			else{
 				$("#debugNextButton").fadeOut();
 			}

 	 			
 			if(currentNodeNr==0) {
 				$("#debugPrevButton").fadeOut();
 				
 			}else{
 					$("#debugPrevButton").fadeIn();
 			}
 			

	}


	self.preloadImages = function() {
		var nrOfImages = _.size(activeCase.preload.images);
		if (activeCase.preload.images[0].url=="") return;
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
		//console.log("startCase " + newActiveCase + " (" +eval(newActiveCase)+")");
		activeCase = eval(newActiveCase);
		globalAnimation=0;
		caseNodeId = 0;
		
		nrOfVideos = 0;
		currentNodeType= "";
		currentSequence = 0;
		TweenMax.to($("#main_div"),1,{css:{"opacity":"1"}});
	
		FS.initComplete = false;
		IDWallOfText = -1;
		arrayOfWallTweens = [];
		currentlyClickedWallText=-1;

		contentObj = activeCase.nodes.content;

		currentNodeNr = -1;
		maxNodeNr = -1;

		$(".backstretch").remove();
	
		FS.preloadImages();

		//FS.setUpThumbs();

		ga('send', 'event', 'startcase',  activeCase.ID.text );
	
		FS.gotoNode(currentNodeNr,1);
	}




	self.startMain = function() {
		
		$("#prevButton").hide();
		
		//SET TO TRUE TO ENABLE DEBUG MODE FOR FEEDBACK
	DEBUG = "false";
		if (params.debug ==1) DEBUG = "true";

		if (DEBUG == "false") {
			$("#case-nav-wrapper").hide();
			$("#debugNextButton").hide();
			$("#debugPrevButton").hide();
		}
		else {
			$("#case-nav-wrapper").css("display","block");
		}

	//BV = new $.BigVideo();
	//BV.init();
 
	FS.globalAnimation = 0;
	FS.unlockedChapters = new Array();

	//START CASE HERE - MAIN
	FS.startCase(CaseIntro);
	//FS.startCase(Case1d);


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
}






	return self;

})({});



// Gumby is ready to go
Gumby.ready(function() {
	//console.log('Gumby is ready to go...', Gumby.debug());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}





});




// Oldie document loaded
Gumby.oldie(function() {
	//console.log("Oldie");
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


var prmstr = window.location.search.substr(1);
var prmarr = prmstr.split ("&");
var params = {};

for ( var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
}