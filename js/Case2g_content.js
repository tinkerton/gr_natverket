var Case2g = (function(self){
self.ID = {"text":"Case2g"};

self.preload = {"images":
[{"url":"bg.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.g.0",
		"type":"chapter", 
		"title":"Kapitel g - case2g",
		"background":{"type":"image","url":"bg.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	
	{  	"ID": "2.g.END",
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
