var Case2_outro = (function(self){
self.ID = {"text":"Case2_outro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
		{  	"ID": "Case2_Outro",
		"type":"video_seq",
		"size":"twelve",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/74179462"
			 }],

			 "animation":"fade",
		 	"showNextButton":"0"
	},
	{  	"ID": "Case2_outro_fraga",
		"type":"question", 
		"analysisLog":"Case2_outro_fraga1",
		"question":"Kim: Hur tror du att Mikaela hade mått om Samuel och James inte blivit dömda?",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		"answers":[
							{"text":"Det hade gjort stor skillnad, men det värsta var att hon blev så smutskastad och att många påstod att hon ljög.","analysisLog":"1. Svar"},
							{"text":"Om de inte hade blivit dömda hade Mikaela fått bära skulden för det som skedde, trots att hon var den som utsattes för brottet. Genom att hon fick rätt i domstol blir det lättare att gå vidare.","analysisLog":"2. Svar"},
							{"text":"Det hade inte gjort någon skillnad, eftersom Mikaela ändå bara vill flytta någon annan stans och starta ett nytt liv.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
	},
	{  	"ID": "Case2_outro_kim",
		"type":"agent",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		"text":"Kim: Du har nu gått igenom träningsprogrammet och kan, om du vill, bli agent i Fair Sex Nätverket. <br><br>Att vara agent innebär att stå upp för allas mänskliga rättigheter och lika värde. Det innebär också att våga säga ifrån och agera mot saker som är fel.<br><br> Nu är det dags att återvända till verkligheten där du har möjlighet att göra skillnad – på riktigt – för dig själv och många andra.",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"OUTRO"
	}
]
};


	return self;

})({});
