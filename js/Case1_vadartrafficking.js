var Case1a = (function(self){
self.ID = {"text":"Case1_trafficking"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case1_trafficking_film",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"https://www.youtube.com/watch?v=A4bLeY2xwtg"
			 }],
			 "animation":"fade",
			  "showNextButton":"-1"
	},
	{  	"ID": "Case1_trafficking_fraga",
		"type":"question", 
		"analysisLog":"1.1.4 Fråga kapitel 1, Case 1",
		"question":"Reflektionsfråga Vad är trafficking?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Svar","analysisLog":"1. Svar","callback":"Case1_HUB"},
							{"text":"Svar","analysisLog":"2. Svar","callback":"Case1_HUB"},
							{"text":"Svar","analysisLog":"3. Svar","callback":"Case1_HUB"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	}
]
};


	return self;

})({});
