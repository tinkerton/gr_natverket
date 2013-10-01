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
		"background":{"type":"image","url":"case2_bg2.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68027628"
			 }],
			 "animation":"fade",
			 "showNextButton":"0"
	} , 
	{  	"ID": "Case2_horan_fraga",
		"type":"question", 
		"analysisLog":"Case2_horan_fraga1",
		"question":"Kim: Varför kallar man någon för hora?",
		"background":{"type":"image","url":"case2_bg4.jpg"},
		"answers":[
							{"text":"Det är ett sätt att hämnas om någon beter sig dåligt eller har sårat en själv.","analysisLog":"1. Svar"},
							{"text":"Det ett sätt att påminna en tjej om hur hon bör bete sig och se ut – och hur hon inte ska bete sig och se ut.","analysisLog":"2. Svar"},
							{"text":"Det är roligt – som ett skämt, lite som att kalla någon för ”bitch”.","analysisLog":"3. Svar"}
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
