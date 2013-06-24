var Case1a = (function(self){
self.ID = {"text":"Case1a"};

self.preload = {"images":
[{"url":"bg.jpg"}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "1.1",
		"type":"chapter", 
		"title":"Vad är trafficking?",
		"background":{"type":"image","url":"bg4.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.1.1",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"~ * Intro till vad är trafficking * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  	"ID": "1.1.2",
		"type":"info",
		"background":{"type":"image","url":"bg4.jpg"},
		"image": [
			{"url":"1.2.1_macrostatistik.png"} 
		],
		 "animation":"down",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "1.1.3",
		"type":"info",
		"background":{"type":"image","url":"bg4.jpg"},
		"image": [
			{"url":"1.2.2_microstatistik.png"} 
		],
		 "animation":"left",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "1.1.4",
		"type":"question", 
		"analysisLog":"1.1.4 Fråga kapitel 1, Case 1",
		"question":"Fråga?",
		"background":{"type":"image","url":"bg4.jpg"},
		"answers":[
							{"text":"- svar 1","analysisLog":"1. Svar 1"},
							{"text":"-svar 2","analysisLog":"2. Svar 2"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "1.1.5",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"~ * Svar till frågan * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case1_HUB"
			
	}
]
};


	return self;

})({});
