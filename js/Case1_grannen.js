var Case1_grannen = (function(self){
self.ID = {"text":"Case1_grannen"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};


self.nodes = {"content": 
	[/*{  "ID": "1.5",
		"type":"chapter", 
		"title":"Polisens arbete",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	/*{  	"ID": "1.5.4",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Du får nu möjlighet att ställa några frågor till ett vittne som ringde polisen angående ett misstänkt fall av trafficking. * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	},*/ 
	{  	"ID": "Case1_grannen_intervju",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68480172",
			 	 "gotoID":"1"
			},
			{
				"sequenceID":"1",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"Bor du här?", "gotoID":"2"},
							{"text":"Vad var det som fick dig att larma polisen?", "gotoID":"3"},
							{"text":"Hur visste du att det handlade om trafficking?", "gotoID":"4"},
							{"text":"Va du rädd?", "gotoID":"5"},
							{"text":"Blev du kontaktad av polisen efteråt?", "gotoID":"6"},
							{"text":"Vad skulle du ge för råd till andra som vill engagera sig i kampen mot trafficking?", "gotoID":"7"},
							{"text":"Avsluta", "gotoID":"Case1_grannen_fraga"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68480173",
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"3",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68480174",
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"4",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68480175",
			 	"gotoID":"1"
			},
			{	
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68480177",
			  "gotoID":"1"
			},
			{
				"sequenceID":"6",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434512",			  
			 	"gotoID":"1"
		 	
			 },
			 {
				"sequenceID":"7",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434512",			  
			 	"gotoID":"1"
		 	
			 }
			 ],
     	"animation":"left",
		 "showNextButton":"-1"
	},
	{  	"ID": "Case1_grannen_fraga",
		"type":"question", 
		"analysisLog":"Case1_grannen_fraga1",
		"question":"Vad tror du är huvudanledningen till att trafficking fortsätter?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Att det finns män som vill köpa sex. ","analysisLog":"1. Svar"},
							{"text":"Att samhället inte agerar hårdare mot de som köper sex och bidrar till trafficking-industrin.","analysisLog":"2. Svar"},
							{"text":"Att ligorna som sysslar med människohandel är duktiga på att dölja vad de håller på med.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case1_HUB"
	}

    ]
};


	return self;

})({});
