var Case1_outro = (function(self){
self.ID = {"text":"Case1_outro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case1_Outro",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"videos":[{"videoURL":"http://player.vimeo.com/video/74038867",  "source" : "vimeo"}
			
			],
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case1_outro_fraga",
		"type":"question", 
		"analysisLog":"case1 outro fraga",
		"question":"Reflektionsfråga case 1 - brygga till case 2",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Svar","analysisLog":"1. Svar"},
							{"text":"Svar","analysisLog":"2. Svar"},
							{"text":"Svar","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	{  	"ID": "Case2_intro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		"text":"(placeholder) Text om case 2 från Kim. <br><br>//Kim",
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case2_Intro",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg3.jpg"},
		"videos":[{"videoURL":"http://player.vimeo.com/video/74179460",  "source" : "vimeo"}
			
			],
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case2_HUB"
	}

	]
};


	return self;

})({});
