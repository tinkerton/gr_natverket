var Case2b = (function(self){
self.ID = {"text":"Case2b"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[/*{  "ID": "2.2",
		"type":"chapter", 
		"title":"Det som stod på Internet",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	{  	"ID": "2.2.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Du ska nu få olika perspektiv på vad som skrevs på internet i detta fall. Hur kan man tolka informationen? * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  "ID": "2.2.2",
		"type":"info", 
		"title":"Mikaelas youtube",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "2.2.3",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
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
		"background":{"type":"image","url":"bg3.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"2.1.1_facebook.png"} 
		],
		 "animation":"fade",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "2.2.5",
		"type":"info",
		"size":"ten",
		"background":{"type":"image","url":"bg3.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"2.2.1_forumet.png"} 
		],
		 "animation":"fade",
		  "showNextButton":"1000"
			
	},  


	{  	"ID": "2.2.6",
		"type":"question", 
		"analysisLog":"2.2.6 Fråga kapitel 2, Case 2",
		"question":"~ * Besvara påståendet: Det som skrevs på internet om Mikaela handlade om att ifrågasätta att hon blivit våldtagen. * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "2.2.7",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * På internet har många dragit slutsatsen att hon ljuger, även att de inte var med eller visste vad som hände. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case2_HUB"
			
	}
]
};


	return self;

})({});
