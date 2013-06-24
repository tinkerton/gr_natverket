var Case2a = (function(self){
self.ID = {"text":"Case2a"};

self.preload = {"images":
[{"url":"bg3.jpg"}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.1",
		"type":"chapter", 
		"title":"Det som skrevs i tidningen",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "2.1.1",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		"text":"~ * Intro till Det som skrevs i tidningen * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  	"ID": "2.1.2",
		"type":"info",
		"background":{"type":"image","url":"bg3.jpg"},
		"image": [
			{"url":"2.1.4_artikel-om-fallet.png"} 
		],
		 "animation":"right",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "2.1.3",
		"type":"info",
		"background":{"type":"image","url":"bg3.jpg"},
		"image": [
			{"url":"2.2.2_artikel.png"} 
		],
		 "animation":"left",
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
