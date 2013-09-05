var Case2_horan = (function(self){
self.ID = {"text":"Case2_horan"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_horan_film",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68480322"
			 }],
			 "animation":"fade",
			 "showNextButton":"-1",
			
	} , 
	{  	"ID": "Case2_horan_fraga",
		"type":"question", 
		"analysisLog":"Case2_horan_fraga1",
		"question":"Vad tänker du när det skrivs negativa saker om någon på internet?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Jag bryr mig inte så mycket, man ska inte ta det personligt.","analysisLog":"1. Svar"},
							{"text":"Det är svårt när det är man själv som är utsatt, då blir det personligt.","analysisLog":"2. Svar"},
							{"text":"Jag blir oftast arg och besviken på dem som skriver saker.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case2_HUB"
	}
    ]
};


	return self;

})({});
