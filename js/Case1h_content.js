var Case1h = (function(self){
self.ID = {"text":"Case1h"};

self.preload = {"images":
[{"url":"bg2.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  	"ID": "1.2.3",
		"type":"info",
		"background":{"type":"image","url":"bg2.jpg"},
		"videos" : [{"videoURL":"http://player.vimeo.com/video/68027628", "source" : "vimeo"}], 
		"title":"filmen om horan",
	     "animation":"right",
		 "showNextButton":"5000",
		 "callback":"Case1_HUB"
	}, 
    ]
};


	return self;

})({});
