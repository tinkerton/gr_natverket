var Case2_HUB = (function(self){

self.preload = {"images":
[{"url":"bg.jpg"}
]
};

self.topLeftImage = {"url":""};

self.nodes = {"content": 
	[{  "ID": "CASE2.HUB",
		"type":"question", 
		"analysisLog":"CASE 2 HUB:",
		"title":"CASE 2 - THE HUB",
		"question":"Vad vill du undersöka",
		"background":{"type":"image","url":"bg-case-2.jpg"},
		"answers":[
							{"text":"- Skolan","analysisLog":"1. ITEM 1","callback":"Case2a"},
							{"text":"- Dagboken","analysisLog":"2. ITEM 2","callback":"Case2b"}
				]
		 ,
		 "animation":"down",
		 "showNextButton":"-1"
	}
	

    ]
};


	return self;

})({});
