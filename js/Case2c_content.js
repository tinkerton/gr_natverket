var Case2c = (function(self){
self.ID = {"text":"Case2c"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.3.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Ordet 'hora' används i många olika sammanhang. Här är en film som berättar lite mer om ordet och hur det används. * ~",
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
			  "showNextButton":"5000",
			 "callback":"Case2_HUB"
			}
	


    ]
};


	return self;

})({});
