var Case1d = (function(self){
self.ID = {"text":"Case1d"};

self.preload = {"images":
[{"url":"bg4.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "1.4",
		"type":"chapter", 
		"title":"Människorna som säljs",
		"background":{"type":"image","url":"bg4.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.4.1",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"~ * Intro till Människorna som säljs * ~",
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
	
	{  	"ID": "1.4.5",
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
