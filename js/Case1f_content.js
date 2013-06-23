var Case1f = (function(self){
self.ID = {"text":"Case1f"};

self.preload = {"images":
[{"url":"bg.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};


self.nodes = {"content": 
	[{  "ID": "1.f.0",
		"type":"chapter", 
		"title":"Kapitel 1f - case1f",
		"background":{"type":"image","url":"bg.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
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
