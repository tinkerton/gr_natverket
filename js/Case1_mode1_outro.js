var Case1_mode1_outro = (function(self){
self.ID = {"text":"Case1_mode1_outro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case1_Outro",
		"type":"video_seq",
		"size":"twelve",
		"background":{"type":"image","url":"case1_bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/74038867"
			 }],

			 "animation":"fade",
		 	"showNextButton":"0"
	},
	{  	"ID": "Case1_outro_fraga",
		"type":"question", 
		"analysisLog":"case1 outro fraga",
		"question":"Kim: Vad har trafficking och prostitution för konsekvenser på samhället?",
		"background":{"type":"image","url":"case1_bg3.jpg"},
		"answers":[
							{"text":"Det innebär inget särskilt. Människor kan välja hur de vill leva sina liv och man borde få köpa och sälja vad man vill om man har eller vill tjäna pengar.","analysisLog":"1. Svar"},
							{"text":"Om prostitution ses som ett vanligt yrke riskerar människor att tvingas till att sälja sex om de inte kan tjäna pengar på annat sätt","analysisLog":"2. Svar"},
							{"text":"Att sex på lika villkor inte ses som en självklarhet: Trafficking och prostitution innebär att någon kan köpa rätten att begå övergrepp.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
		{  	"ID": "Case1_mode1_outro_question",
		"type":"agent",
		"background":{"type":"image","url":"case1_bg3.jpg"},
		"text":"Kim: Du har nu gått igenom träningsprogrammet och kan, om du vill, bli agent i Fair Sex Nätverket. <br><br>Att vara agent innebär att stå upp för allas mänskliga rättigheter och lika värde. Det innebär också att våga säga ifrån och agera mot saker som är fel.<br><br> Nu är det dags att återvända till verkligheten där du har möjlighet att göra skillnad – på riktigt – för dig själv och många andra.",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"OUTRO"
	}

	]
};


	return self;

})({});
