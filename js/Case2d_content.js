var Case2d = (function(self){
self.ID = {"text":"Case2d"};

self.preload = {"images":
[{"url":"bg3.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.4",
		"type":"chapter", 
		"title":"Hur många fejkar?",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "2.1.1",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		"text":"~ * Intro till Hur många fejkar * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  	"ID": "2.1.2",
		"type":"info",
		"background":{"type":"image","url":"bg3.jpg"},
		"image": [
			{"url":"2.3.1_statistik.png"} 
		],
		 "animation":"right",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "2.1.4",
		"type":"question", 
		"analysisLog":"2.1.4 Fråga kapitel 1, Case 2",
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
	
	{  	"ID": "2.1.5",
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
