var Case2b = (function(self){
self.ID = {"text":"Case2b"};

self.preload = {"images":
[{"url":"bg3.jpg"}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.2",
		"type":"chapter", 
		"title":"Det som stod på Internet",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "2.2.1",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		"text":"~ * Intro till Det som stod på Internet * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  "ID": "2.2.2",
		"type":"chapter", 
		"title":"Mikaelas youtube",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"left",
		 "showNextButton":"0"
	},
	{  	"ID": "2.2.3",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68693255"
			 }],
			 "animation":"down",
			  "showNextButton":"1500"
		 
	},
	

	{  	"ID": "2.2.4",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"2.1.1_facebook.png"} 
		],
		 "animation":"left",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "2.2.5",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"2.2.1_forumet.png"} 
		],
		 "animation":"right",
		  "showNextButton":"1000"
			
	},  


	{  	"ID": "2.2.6",
		"type":"question", 
		"analysisLog":"2.2.6 Fråga kapitel 2, Case 2",
		"question":"Fråga?",
		"background":{"type":"image","url":"bg3.jpg"},
		"answers":[
							{"text":"- svar 1","analysisLog":"1. Svar 1"},
							{"text":"-svar 2","analysisLog":"2. Svar 2"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "2.2.7",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		"text":"~ * Svar till frågan * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case2_HUB"
			
	}
]
};


	return self;

})({});
