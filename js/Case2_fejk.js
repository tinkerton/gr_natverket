var Case2_fejk = (function(self){
self.ID = {"text":"Case2_fejk"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_fejk_film",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68480322"
			 }],
			 "animation":"fade",
			 "showNextButton":"0"
	},
	{  	"ID": "Case2_fejk_fraga",
		"type":"question", 
		"analysisLog":"Case2_fejk_fraga1",
		"question":"(placeholder)Reflektionsfråga om laddningen kring sex-relaterade brott och brottslingar.",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Svar1","analysisLog":"1. Svar"},
							{"text":"Svar2","analysisLog":"2. Svar"},
							{"text":"Svar3","analysisLog":"3. Svar"}
				],
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case2_HUB"
	}	
    ]
};


	return self;

})({});
