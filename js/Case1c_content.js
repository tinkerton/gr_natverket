var Case1c = (function(self){
self.ID = {"text":"Case1c"};

self.preload = {"images":
[{"url":"bg.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "1.c.0",
		"type":"chapter", 
		"title":"Kapitel c - case1c",
		"background":{"type":"image","url":"bg.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	
	{  	"ID": "1.c.END",
		"type":"question", 
		"analysisLog":"1.5 Reflektionsfråga kapitel 5",
		"title":"Reflektionsfråga kapitel 1c",
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
