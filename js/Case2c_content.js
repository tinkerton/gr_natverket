var Case2c = (function(self){
self.ID = {"text":"Case2c"};

self.preload = {"images":
[{"url":"bg3.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.3",
		"type":"chapter", 
		"title":"Filmen om horan",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "2.3.1",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68480322"
			 }],
			 "animation":"fade",
			  "showNextButton":"1500",
			 "callback":"Case2_HUB"
			}
	


    ]
};


	return self;

})({});
