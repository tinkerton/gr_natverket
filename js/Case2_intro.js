var Case2_intro = (function(self){
self.ID = {"text":"Case2_intro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_intro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"(placeholder) Text om case 2 från Kim. <br><br>//Kim",
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case2_intro_film",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"hhttps://www.youtube.com/watch?v=A4bLeY2xwtg"
			 }],
			 "animation":"fade",
			  "showNextButton":"-1",
			  "callback":"Case2_HUB"
	}
]
};


	return self;

})({});
