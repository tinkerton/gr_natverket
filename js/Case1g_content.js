var Case1g = (function(self){
self.ID = {"text":"Case1g"};

self.preload = {"images":
[{"url":"bg4.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};


self.nodes = {"content": 
	[{  "ID": "1.7",
		"type":"chapter", 
		"title":"En vanlig dag",
		"background":{"type":"image","url":"bg4.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.7.1",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"~ * Intro till En vanlig dag * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	},
	{  	"ID": "1.¨7.2",
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

    ]
};


	return self;

})({});
