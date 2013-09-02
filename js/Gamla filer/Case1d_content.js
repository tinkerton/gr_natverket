var Case1d = (function(self){
self.ID = {"text":"Case1d"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[/*{  "ID": "1.4",
		"type":"chapter", 
		"title":"Människorna som säljs",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	{  	"ID": "1.4.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Nu kommer du lära dig mer om de människor som hamnar i trafficking. * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  	"ID": "1.4.2",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"1.4.1_blogg2.png"} 
		],
		 "animation":"down",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "1.4.3",
		"type":"comicparallel",
		"background":{"type":"image","url":"bg4.jpg"},
		"comicparallel" : [	{"slide": 
								{"url":"1.4.2_bild1.png",
								"url2":"1.4.2_bild2.png",}
					},
					{"slide": 
								{"url":"1.4.2_bild3.png",
								"url2":"1.4.2_bild4.png"}
					},
					{"slide": 
								{"url":"1.4.2_bild5.png"}
					}
					
										  	
		],
		"comic_row_height":"320px",
		 "animation":"fade",
		 "showNextButton":"1500"
	
	},
	{  	"ID": "1.4.4",
		"type":"question", 
		"analysisLog":"1.4.4 Fråga kapitel 4, Case 1",
		"question":"~ * Besvara påståendet: Personer som hamnar i trafficking är ofta mycket fattiga i sitt hemland. * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "1.4.5",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Det är inte ovanligt att personer som traffickeras gör det frivilligt i tron att det är ett tillfälligt jobb som de måste ta för att kunna försörja sin familj. Människohandlarna använder ofta barn och närstående som ett sätt att kontrollera och utpressa de som traffickerats. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case1_HUB"
			
	}

    ]
};


	return self;

})({});
