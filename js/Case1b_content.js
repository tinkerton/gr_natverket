var Case1b = (function(self){
self.ID = {"text":"Case1b"};

self.preload = {"images":
[{"url":"bg.jpg"},
	{"url":"bg-case-1.jpg"},
	{"url":"1.5.2_horan1.png"},
	{"url":"1.5.2_torsken1.png"},
	{"url":"1.5.2_hallicken1.png"},
	{"url":"1.5.2_horan2.png"},
	{"url":"1.5.2_torsken2.png"},
	{"url":"1.5.2_hallicken2.png"},
	{"url":"1.5.2_horan3.png"},
	{"url":"1.5.2_torsken3.png"},
	{"url":"1.5.2_hallicken3.png"},
	{"url":"1.5.2_horan4.png"},
	{"url":"1.5.2_torsken4.png"},
	{"url":"1.5.2_hallicken4.png"},
	{"url":"1.5.2_horan5.png"},
	{"url":"1.5.2_torsken5.png"},
	{"url":"1.5.2_hallicken5.png"},
	{"url":"1.5.2_horan6.png"},
	{"url":"1.5.2_torsken6.png"},
	{"url":"1.5.2_hallicken6.png"},
	{"url":"1.5.2_horan7.png"},
	{"url":"1.5.2_torsken7.png"},
	{"url":"1.5.2_hallicken7.png"},
	{"url":"1.5.2_horan8.png"},
	{"url":"1.5.2_torsken8.png"},
	{"url":"1.5.2_hallicken8.png"}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "1.B.0",
		"type":"chapter", 
		"title":"Kapitel 1b - case1b",
		"background":{"type":"image","url":"bg.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.5.2",
		"type":"comicparallel",
		"background":{"type":"image","url":"bg4.jpg"},
		"comicparallel" : [	{"slide": 
								{"url":"1.5.2_horan1.png",
								"url2":"1.5.2_torsken1.png",
								"url3":"1.5.2_hallicken1.png",
								
								"text":"8.00"},
					},
					{"slide": 
								{"url":"1.5.2_horan2.png",
								"url2":"1.5.2_torsken2.png",
								"url3":"1.5.2_hallicken2.png",
								"text":"9.00"},
					},
					{"slide": 
								{"url":"1.5.2_horan3.png",
								"url2":"1.5.2_torsken3.png",
								"url3":"1.5.2_hallicken3.png",
								"text":"10.00"},
					},
					{"slide": 
								{"url":"1.5.2_horan4.png",
								"url2":"1.5.2_torsken4.png",
								"url3":"1.5.2_hallicken4.png",
								"text":"11.00"},
					},
					{"slide": 
								{"url":"1.5.2_horan5.png",
								"url2":"1.5.2_torsken5.png",
								"url3":"1.5.2_hallicken5.png",
								"text":"12.00"},
								},
					{"slide": 
								{"url":"1.5.2_horan6.png",
								"url2":"1.5.2_torsken6.png",
								"url3":"1.5.2_hallicken6.png",
								"text":"13.00"},
								},
					{"slide": 
								{"url":"1.5.2_horan7.png",
								"url2":"1.5.2_torsken7.png",
								"url3":"1.5.2_hallicken7.png",
								"text":"14.00"},
								},
					{"slide": 
								{"url":"1.5.2_horan8.png",
								"url2":"1.5.2_torsken8.png",
								"url3":"1.5.2_hallicken8.png",
								"text":"15.00"},
					}
										  	
		],
		"comic_row_height":"273px",
		 "animation":"fade",
		 "showNextButton":"1500"
	
	},
	
	{  	"ID": "1.B.END",
		"type":"question", 
		"analysisLog":"1.5 Reflektionsfråga kapitel 5",
		"question":"Is this the end?",
		"background":{"type":"image","url":"bg2.jpg"},
		"answers":[
							{"text":"- Yes","analysisLog":"1. Yes", "callback":"Case1_HUB"},
							{"text":"- No","analysisLog":"2. No", "callback":"Case1_HUB"}
				]
		 ,
		 "animation":"down",
		 "showNextButton":"-1"
	},

    ]
};


	return self;

})({});
