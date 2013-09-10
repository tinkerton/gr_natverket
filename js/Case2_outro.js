var Case2_outro = (function(self){
self.ID = {"text":"Case2_outro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_Outro",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"videos":[{"videoURL":"http://player.vimeo.com/video/74179462",  "source" : "vimeo"}
			
			],
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case2_outro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"(placeholder)Att man nu har gått igenom träningsprogrammet och är redo att agera som agent – i verkligeheten. <br><br>//Kim",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"OUTRO"
	}
]
};


	return self;

})({});
