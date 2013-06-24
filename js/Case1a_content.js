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
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.1.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * För att få mer kunskap om trafficking och sex mot ersättning ska du nu få lära dig mer om definition av trafficking, begrepp och fakta. * ~",
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
		"question":"~ * Besvara påståendet: Största delen av traffickingindustrin består av att människor säljs för sexuella syften.  * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "1.1.5",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * 58% av all trafficking är för sexuella syften. De som säljs i Sverige är kvinnor, men utomlands säljs även barn. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case1_HUB"
			
	}
]
};


	return self;

})({});
