var Case1f = (function(self){
self.ID = {"text":"Case1f"};

self.preload = {"images":
[{"url":"bg4.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};


self.nodes = {"content": 
	[{  "ID": "1.6",
		"type":"chapter", 
		"title":"Vad händer efteråt?",
		"background":{"type":"image","url":"bg4.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.6.1",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"~ * Intro till Vad händer efteråt * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  	"ID": "1.6.2",
		"type":"info",
		"background":{"type":"image","url":"bg4.jpg"},
		"size":"twelve",
		"image": [
			{"url":"1.5.1_domen.png"} 
		],
		 "animation":"down",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "1.6.3",
		"type":"info",
		"background":{"type":"image","url":"bg4.jpg"},
		"size":"eleven",
		"image": [
			{"url":"1.3.1_insandare.png"} 
		], 
			"animation":"left",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "1.6.4",
		"type":"question", 
		"analysisLog":"1.6.4 Fråga kapitel 6, Case 1",
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
	
	{  	"ID": "1.6.5",
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
