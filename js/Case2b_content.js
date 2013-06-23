var Case2b = (function(self){
self.ID = {"text":"Case2b"};

self.preload = {"images":
[{"url":"bg.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.b.0",
		"type":"chapter", 
		"title":"Kapitel - case2b",
		"background":{"type":"image","url":"bg.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.5.2",
		"type":"comicparallel",
		"background":{"type":"image","url":"bg4.jpg"},
		"comicparallel" : [	{"slide": 
								{"url":"1.5.2_horan1.png",
								"text":"8.00"},
					},
					{"slide": 
								{"url":"1.5.2_horan2.png",
								"text":"9.00"},
					},
					{"slide": 
								{"url":"1.5.2_horan3.png",
								"text":"10.00"},
					},
					{"slide": 
								{"url":"1.5.2_horan4.png",
								"text":"11.00"},
					},
					{"slide": 
								{"url":"1.5.2_horan5.png",
								"text":"12.00"},
								},
					{"slide": 
								{"url":"1.5.2_horan6.png",
								"text":"13.00"},
								},
					{"slide": 
								{"url":"1.5.2_horan7.png",
								"text":"14.00"},
								},
					{"slide": 
								{"url":"1.5.2_horan8.png",
								"text":"15.00"},
					}
										  	
		],
		"comic_row_height":"273px",
		 "animation":"fade",
		 "showNextButton":"1500"
	
	},
	
	{  	"ID": "1.c.END",
		"type":"question", 
		"analysisLog":"1.5 Reflektionsfråga kapitel 5",
		"question":"Is this the end?",
		"background":{"type":"image","url":"bg2.jpg"},
		"answers":[
							{"text":"- Yes","analysisLog":"1. Yes", "callback":"Case2_HUB"},
							{"text":"- No","analysisLog":"2. No", "callback":"Case2_HUB"}
				]
		 ,
		 "animation":"down",
		 "showNextButton":"-1"
	},

    ]
};


	return self;

})({});
