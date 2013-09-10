var Case1_outro = (function(self){
self.ID = {"text":"Case1_outro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case1_Outro",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"videos":[{"videoURL":"http://player.vimeo.com/video/74038867",  "source" : "vimeo"}
			
			],
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case1_outro_fraga",
		"type":"question", 
		"analysisLog":"case1 outro fraga",
		"question":"Kim: Vad har trafficking och prostitution för konsekvenser på samhället?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Det innebär inget särskilt. Människor kan välja hur de vill leva sina liv och man borde få köpa och sälja vad man vill om man har eller vill tjäna pengar.","analysisLog":"1. Svar"},
							{"text":"Om prostitution ses som ett vanligt yrke riskerar människor att tvingas till att sälja sex om de inte kan tjäna pengar på annat sätt","analysisLog":"2. Svar"},
							{"text":"Att sex på lika villkor inte ses som en självklarhet: Trafficking och prostitution innebär att någon kan köpa rätten att begå övergrepp.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	{  	"ID": "Case2_intro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		"text":"Kim: Du är nu klar med första delen i träningsprogrammet och kommer gå vidare till del två som handlar om kränkningar. Gå vidare när du är redo.",
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case2_Intro",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg3.jpg"},
		"videos":[{"videoURL":"http://player.vimeo.com/video/74179460",  "source" : "vimeo"}
			
			],
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case2_HUB"
	}

	]
};


	return self;

})({});
