var Case2_sanningar = (function(self){
self.ID = {"text":"Case2_sanningar"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[ 
	{  	"ID": "Case2_sanningar_serie",
		"type":"comicparallel",
		"background":{"type":"image","url":"bg3.jpg"},
		"comicparallel" : [	{"slide": 
								{"url":"2.4.2_mikaela1.png",
								"url2":"2.4.2_samuel1.png",}
					},
					{"slide": 
								{"url":"2.4.2_mikaela2.png",
								"url2":"2.4.2_samuel2.png"}
					},
					{"slide": 
								{"url":"2.4.2_mikaela3.png",
								"url2":"2.4.2_samuel3.png"}
					},
					{"slide": 
								{"url":"2.4.2_mikaela4.png",
								"url2":"2.4.2_samuel4.png"}
					},
						{"slide": 
								{"url":"2.4.2_mikaela5.png",
								"url2":"2.4.2_samuel5.png"}
					}
					
										  	
		],
		"comic_row_height":"370px",
		 "animation":"left",
		 "showNextButton":"1500"
	},
	{  	"ID": "Case2_sanningar_fraga",
		"type":"question", 
		"analysisLog":"2.6.5 Fråga kapitel 6, Case 2",
		"question":"När är det okej att säga nej om man har börjat ha sex med nån?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"När som helst.","analysisLog":"1. Svar"},
							{"text":"Det är väl bra om man tänker sig för innan man hamnar i säng med personer man inte vill ha sex med?","analysisLog":"2. Svar"},
							{"text":"Det är väl smartare att alla väntar på ett tydligt JA än att man ska behöva vara tydlig med ett nej?","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case2_HUB"
	}
    ]
};


	return self;

})({});
