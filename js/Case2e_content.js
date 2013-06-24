var Case2e = (function(self){
self.ID = {"text":"Case1c"};

self.preload = {"images":
[{"url":"bg.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.5",
		"type":"chapter", 
		"title":"Mikaelas samtal med kuratorn",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "2.5.1",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		"text":"~ * Intro till Mikaelas samtal med kuratorn * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  	"ID": "2.5.2",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68372429",
			 	 "gotoID":"1"
			 },
			 {
				"sequenceID":"1",
				"type":"question",
				"text":"Kuratorn frågar:",
				"answers":[
							{"text":"-Var inte du kär i Samuel?", "gotoID":"2"},
							{"text":"-Hade du druckit alkohol under festen med Samuel och James?", "gotoID":"5"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372426", //Kär i samuel
			 	 "gotoID":"3"
			},
			 {
				"sequenceID":"3",
				"type":"question",
				"text":"Kuratorn frågar:",
				"answers":[
							{"text":"-Hade du druckit alkohol under festen med Samuel och James?", "gotoID":"4"}
				]
			},
			{	
				"sequenceID":"4",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372428", //druckit alkohol
			 	 "gotoID":"8"
			},
			{	
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372428",
			 	 "gotoID":"6"
			},
			 {
				"sequenceID":"6",
				"type":"question",
				"text":"Kuratorn frågar:",
				"answers":[
							{"text":"-Var inte du kär i Samuel?", "gotoID":"7"}
				]
			},
			{	
				"sequenceID":"7",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372426",
			 	 "gotoID":"8"
			},

			{	
				"sequenceID":"8",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372427"
			 	
			}],
     	"animation":"left",
		 "showNextButton":"-1"
	},
	{  	"ID": "2.5.3",
		"type":"question", 
		"analysisLog":"2.5.3 Fråga kapitel 5, Case 2",
		"question":"Fråga?",
		"background":{"type":"image","url":"bg3.jpg"},
		"answers":[
							{"text":"- svar 1","analysisLog":"1. Svar 1"},
							{"text":"-svar 2","analysisLog":"2. Svar 2"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "2.5.4",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		"text":"~ * Svar till frågan * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case2_HUB"
			
	}

    ]
};


	return self;

})({});
