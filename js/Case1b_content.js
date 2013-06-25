var Case1b = (function(self){
self.ID = {"text":"Case1b"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "1.2",
		"type":"chapter", 
		"title":"Filmen om horan",
		"background":{"type":"image","url":"bg4.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "1.2.2",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68480322"
			 }],
			 "animation":"fade",
			  "showNextButton":"5000",
			 "callback":"Case1_HUB"
			}
	


    ]
};


	return self;

})({});
