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
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.6.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ *  Nu ska du få veta vad som händer efter att en person har räddats ifrån trafficking och sexslaveri. * ~",
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
		"question":"~ * Besvara påståendet: Även om de skyldiga blivit dömda, kan de som blivit offer för människohandel inte känna sig helt trygga. * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "1.6.5",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * När personer räddats ur trafficking reser tillbaka till sitt hemland är risken stor att de åter igen fångas av samma nätverk. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case1_HUB"
			
	}

    ]
};


	return self;

})({});
