var Case1_HUB = (function(self){

self.preload = {"images":
[{"url":"bg.jpg"}
]
};

self.topLeftImage = {"url":"img/case_color_splash2.png"};

self.nodes = {"content": 
	[{  "ID": "CASE1.HUB",
		"type":"question", 
		"analysisLog":"CASE 1 HUB:",
		"title":"CASE 1 - THE HUB",
		"question":"Vad vill du undersöka",
		"background":{"type":"image","url":"bg.jpg"},
		"answers":[
							{"text":"- Polisen","analysisLog":"1. ITEM 1","callback":"startCase1"},
							{"text":"- Statistiken","analysisLog":"2. ITEM 2","callback":"startCase1"}
				]
		 ,
		 "animation":"down",
		 "showNextButton":"-1"
	}
	

    ]
};


	return self;

})({});
