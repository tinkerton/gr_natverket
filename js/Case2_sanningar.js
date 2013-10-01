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
		"background":{"type":"image","url":"case2_bg2.jpg"},
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
		"question":"Kim: När är det okej att säga nej om man har börjat ha sex med nån?",
		"background":{"type":"image","url":"case2_bg4.jpg"},
		"answers":[
							{"text":"Sex ska ske på lika villkor – Fair Sex – och om man inte vill har man alltid rätt att säga nej – när som helst.","analysisLog":"1. Svar"},
							{"text":"Man har rätt att säga nej, men det är ändå bäst om man tänker efter innan så man inte hamnar i säng med någon som man inte vill ha sex med.","analysisLog":"2. Svar"},
							{"text":"Om det händer något under sexet som man inte hade tänkt sig från början eller inte är med på, är det klart att man har rätt att säga nej.","analysisLog":"3. Svar"}
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
