var Case1_envanligdag = (function(self){
self.ID = {"text":"Case1_envanligdag"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};


self.nodes = {"content": 
	[
	{  	"ID": "Case1_envanligdag_serie",
		"type":"comicparallel",
		"background":{"type":"image","url":"bg4.jpg"},
		"comicparallel" : [	{"slide": 
								{"url":"1.5.2_horan1.png",
								"url2":"1.5.2_torsken1.png",
								"url3":"1.5.2_hallicken1.png",
								
								"text":"8.00"}
					},
					{"slide": 
								{"url":"1.5.2_horan2.png",
								"url2":"1.5.2_torsken2.png",
								"url3":"1.5.2_hallicken2.png",
								"text":"9.00"}
					},
					{"slide": 
								{"url":"1.5.2_horan3.png",
								"url2":"1.5.2_torsken3.png",
								"url3":"1.5.2_hallicken3.png",
								"text":"10.30"}
					},
					{"slide": 
								{"url":"1.5.2_horan4.png",
								"url2":"1.5.2_torsken4.png",
								"url3":"1.5.2_hallicken4.png",
								"text":"14.30"}
					},
					{"slide": 
								{"url":"1.5.2_horan5.png",
								"url2":"1.5.2_torsken5.png",
								"url3":"1.5.2_hallicken5.png",
								"text":"17.00"}
								},
					{"slide": 
								{"url":"1.5.2_horan6.png",
								"url2":"1.5.2_torsken6.png",
								"url3":"1.5.2_hallicken6.png",
								"text":"18.30"}
								},
					{"slide": 
								{"url":"1.5.2_horan7.png",
								"url2":"1.5.2_torsken7.png",
								"url3":"1.5.2_hallicken7.png",
								"text":"20.30"}
								},
					{"slide": 
								{"url":"1.5.2_horan8.png",
								"url2":"1.5.2_torsken8.png",
								"url3":"1.5.2_hallicken8.png",
								"text":"23.30"}
					},
					{"slide": 
								{"url":"1.5.2_horan9.png",
								"url2":"1.5.2_torsken9.png",
								"url3":"1.5.2_hallicken9.png",
								"text":"00.00"}
					}
										  	
		],
		"comic_row_height":"221px",
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "Case1_envanligdag_fraga",
		"type":"question", 
		"analysisLog":"envanligdag_fraga",
		"question":"Vem av de tre karaktärerna tycker du har stört ansvar för Crinas situation?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Sexköparen. Utan att han och andra köper sex hade inte trafficking varit ett problem.","analysisLog":"1. svar"},
							{"text":"Hallicken. Han utnyttjar Crina och tvingar henne att stanna i prostitution, och tjänar dessutom pengar på det.","analysisLog":"2. svar"},
							{"text":"Crina. Hon borde göra något åt sin situation, söka hjälp eller försöka ta sig därifrån. Göra motstånd på nåt sätt.","analysisLog":"3. svar"}
				],
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case1_HUB"
	}
    ]
};


	return self;

})({});
