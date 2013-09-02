var Case1_manniskorna = (function(self){
self.ID = {"text":"Case1_manniskorna"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case1_manniskorna_crina",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"1.4.1_blogg2.png"} 
		],
		 "animation":"down",
		  "showNextButton":"0"			
	},  
	{  	"ID": "Case1_manniskorna_jobbet",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"1.4.1_blogg2.png"} 
		],
		 "animation":"down",
		  "showNextButton":"0"			
	},  
	{  	"ID": "Case1_manniskorna_systern",
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
	{  	"ID": "Case1_mannsikorna_fraga",
		"type":"question", 
		"analysisLog":"manniskorna_fraga1",
		"question":"Varför tror du att Crina inte försöker rymma ifrån människohandlarna?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Hon saknar kontakter och kunskap om hur Sveriges rättssystem fungerar.","analysisLog":"1. Svar"},
							{"text":"Hon är rädd för vad de skulle göra med hennes syster om hon rymmer.","analysisLog":"2. Svar"},
							{"text":"Hon tror fortfarande att om hon fortsätter arbeta så ska hon få pengarna hon blivit lovad..","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case1_HUB"
	}


    ]
};


	return self;

})({});
