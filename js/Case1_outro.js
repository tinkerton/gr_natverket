var Case1_outro = (function(self){
self.ID = {"text":"Case1_outro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case1_outro_film",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"hhttps://www.youtube.com/watch?v=A4bLeY2xwtg"
			 }],
			 "animation":"fade",
			  "showNextButton":"0"
	},
	{  	"ID": "Case1_outro_fraga",
		"type":"question", 
		"analysisLog":"case1 outro fraga",
		"question":"Reflektionsfråga case 1 - brygga till case 2",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Svar","analysisLog":"1. Svar","callback":"Case2_intro"},
							{"text":"Svar","analysisLog":"2. Svar","callback":"Case2_intro"},
							{"text":"Svar","analysisLog":"3. Svar","callback":"Case2_intro"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	}

	]
};


	return self;

})({});
