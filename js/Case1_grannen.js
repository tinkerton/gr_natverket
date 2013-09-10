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
			 	"url":"http://player.vimeo.com/video/74039032",
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
							{"text":"Var du rädd?", "gotoID":"5"},
							{"text":"Blev du kontaktad av polisen efteråt?", "gotoID":"6"},
							{"text":"Vad skulle du ge för råd till andra som vill engagera sig i kampen mot trafficking?", "gotoID":"7"},
							{"text":"Avsluta", "gotoID":"-1"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74039033",
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"3",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74039061",
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"4",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74039062",
			 	"gotoID":"1"
			},
			{	
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74039063",
			  "gotoID":"1"
			},
			{
				"sequenceID":"6",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74039064",			  
			 	"gotoID":"1"
		 	
			 },
			 {
				"sequenceID":"7",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74039065",			  
			 	"gotoID":"1"
		 	
			 }
			 ],
     	"animation":"left",
		 "showNextButton":"0"
	},
	{  	"ID": "Case1_grannen_fraga",
		"type":"question", 
		"analysisLog":"Case1_grannen_fraga1",
		"question":"Kim: De allra flesta i Sverige har aldrig köpt sex. Bär dessa människor något ansvar för att trafficking fortsätter?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Nej. De som inte är en del av efterfrågan har inget ansvar alls.","analysisLog":"1. Svar"},
							{"text":"Delvis. Genom tydligare ställningstagande mot sexköp och trafficking kan andra göra stor skillnad.","analysisLog":"2. Svar"},
							{"text":"Ja. Genom att vända ryggen till problemet och göra det enkelt att syssla med människohandel och sexköp är andra också medskyldiga till att det fortsätter.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"0",
		 "callback":"Case1_HUB"
	}

    ]
};


	return self;

})({});
