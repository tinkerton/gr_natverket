var Case2_tidningen = (function(self){
self.ID = {"text":"Case2_tidningen"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_tidningen_fallet",
		"type":"info",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		"image": [
			{"url":"2.1.4_artikel-om-fallet.png"} 
		],
		 "animation":"right",
		 "showNextButton":"0"
	}, 
	{  	"ID": "Case2_tidningen_killarna",
		"type":"info",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		"image": [
			{"url":"2.2.2_artikel.png"} 
		],
		 "animation":"left",
		 "showNextButton":"0"
	},  
	{  	"ID": "Case2_tidningen_fraga",
		"type":"question", 
		"analysisLog":"case2_tidningen_fraga1",
		"question":"Vad för sorts personer tycker du James och Samuel verkar vara?",
		"background":{"type":"image","url":"case2_bg4.jpg"},
		"answers":[
							{"text":"De har många kompisar och folk tycker de är trevliga.","analysisLog":"1. Många kompisar"},
							{"text":"De verkar osäkra och skryter mycket.","analysisLog":"2. Osäkra"},
							{"text":"De verkar vara ganska kassa.","analysisLog":"3. Kassa"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case2_HUB"
	},
]
};


	return self;

})({});
