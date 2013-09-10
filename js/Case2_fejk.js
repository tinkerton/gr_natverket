var Case2_fejk = (function(self){
self.ID = {"text":"Case2_fejk"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_fejk_film",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/74218443"
			 }],
			 "animation":"fade",
			 "showNextButton":"0"
	},
	{  	"ID": "Case2_fejk_fraga",
		"type":"question", 
		"analysisLog":"Case2_fejk_fraga1",
		"question":"Tyvärr är det en vanlig uppfattning att kvinnor som anmäler våldtäkt ljuger eller överdriver. Varför är det så, tror du?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Det är svårt att bevisa att någon har blivit våldtagen.","analysisLog":"1. Svar"},
							{"text":"Om någon blir dömd som våldtäktsman kommer hans liv vara förstört. Därför kräver de flesta starka bevis för att det verkligen har skett en våldtäkt, inte bara offrets berättelse.","analysisLog":"2. Svar"},
							{"text":"Därför att skadestånden är höga så det är lätt att tro att någon anmäler en våldtäkt för att de vill ha pengar, eller för att hämnas.","analysisLog":"3. Svar"}
				],
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case2_HUB"
	}	
    ]
};


	return self;

})({});
