var Case1a = (function(self){
self.ID = {"text":"Case1_intro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case1_intro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"Som agenter arbetar vi mot alla former av kränkningar, men trafficking är den grövsta av kränkningarna mot mänskliga rättigheter. Den första delen av det här programmet är till för att du ska få veta några olika anledningar till att det finns trafficking och vad man kan göra som agent i Nätverket för att arbeta mot det. <br><br>//Kim",
		"animation":"fade",
		"showNextButton":"0"
			
	},
	{  	"ID": "Case1_intro_film",
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
			  "callback":"Case1_HUB"
	}
]
};


	return self;

})({});
