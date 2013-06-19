var Case1g = (function(self){
self.ID = {"text":"Case1g"};

self.preload = {"images":
[{"url":"bg.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};


self.nodes = {"content": 
	[{  "ID": "1.G.0",
		"type":"chapter", 
		"title":"Kapitel 1G - case1G",
		"background":{"type":"image","url":"bg.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	
	{  	"ID": "1.G.END",
		"type":"question", 
		"analysisLog":"1.5 Reflektionsfråga kapitel 5",
		"title":"Reflektionsfråga kapitel 1G",
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
