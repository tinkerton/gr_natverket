var Case1e = (function(self){
self.ID = {"text":"Case1e"};

self.preload = {"images":
[{"url":"bg4.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};


self.nodes = {"content": 
	[{  "ID": "1.5",
		"type":"chapter", 
		"title":"Polisens arbete",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.5.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Nu ska du få veta mer om hur polisväsende arbetar mot trafficking. * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  "ID": "1.5.2",
		"type":"info", 
		"title":"Intervju med polisen",
		"background":{"type":"image","url":"bg4.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.5.3",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68434439",
			 	 "gotoID":"1"
			 },
			{
				"sequenceID":"1",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"-Vill du berätta något om polisens arbete med detta?", "gotoID":"2"},
							{"text":"-Hur fungerar den här sortens brottslighet?", "gotoID":"3"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434440",
			 	 "gotoID":"4"
			},
			{	
				"sequenceID":"3",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434443",
			 	 "gotoID":"4"
			},
			{
				"sequenceID":"4",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"-Vad är det svåraste i det här arbetet? ", "gotoID":"5"},
							{"text":"-Finns det något som man som privatperson kan göra?", "gotoID":"6"}
				]
			},
			{	
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434441",
			 	 "gotoID":"7"
			},
			{	
				"sequenceID":"6",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434442",
			 	 "gotoID":"7"
			},
			{
				"sequenceID":"7",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434512"		 	
			 }],
     	"animation":"left",
		 "showNextButton":"-1"
	},
	{  "ID": "1.5.4",
		"type":"info", 
		"title":"Intervju med granne",
		"background":{"type":"image","url":"bg4.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.5.5",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[

		/*	{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68434439",
			 	 "gotoID":"1"
			 },*/
			{
				"sequenceID":"0",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"-Kan du berätta något om vad du märkt av det som skedde här?", "gotoID":"1"},
							{"text":"-Vad var det som gjorde dig misstänksam?", "gotoID":"2"}
				]
			},
			{	
				"sequenceID":"1",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68480173",
			 	 "gotoID":"3"//4
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68480174",
			 	 "gotoID":"3"//4
			},
			{
				"sequenceID":"3",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"-Ringde du polisen?", "gotoID":"4"},
							{"text":"-Varför tog det så lång tid innan du ringde?", "gotoID":"5"}
				]
			},
			{	
				"sequenceID":"4",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68480175",
			 	// "gotoID":"7"
			},
			{	
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68480177",
			 //	 "gotoID":"7"
			},
		/*	{
				"sequenceID":"7",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434512"		 	
			 }*/
			 ],
     	"animation":"left",
		 "showNextButton":"-1"
	},
	{  	"ID": "1.5.6",
		"type":"question", 
		"analysisLog":"1.5.6 Fråga kapitel 5, Case 1",
		"question":"~ * Besvara påståendet: De som sysslar med människohandel är ofta delar av större kriminella nätverk. * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "1.5.7",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Medan vapen och droger bara kan säljas en gång, så kan en människa säljas om och om igen. Trafficking är den tredje största inkomsten för den organiserade brottsligheten. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case1_HUB"
			
	}

    ]
};


	return self;

})({});
