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
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"videos":[{"videoURL":"http://player.vimeo.com/video/74179462",  "source" : "vimeo"}
			
			],
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case2_outro_fraga",
		"type":"question", 
		"analysisLog":"Case2_outro_fraga1",
		"question":"Kim: Hur tror du att Mikaela hade mått om Samuel och James inte blivit dömda?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Det hade inte gjort någon större skillnad, det största problemet var att hon blev så smutskastad när så många påstod att hon ljög.","analysisLog":"1. Svar"},
							{"text":"Om de inte hade blivit dömda hade Mikaela troligen fortsatt ifrågasätta sig själv och mått väldigt dåligt över det som skett.","analysisLog":"2. Svar"},
							{"text":"Det hade inte gjort någon skillnad, eftersom Mikaela ändå bara vill flytta någon annan stans och starta ett nytt liv.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
	}
	{  	"ID": "Case2_outro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"Kim: Du har nu gått igenom träningsprogrammet och kan, om du vill, bli agent i Nätverket. <br><br>Att vara agent handlar om att stå upp för alla människors lika värde och för sex på lika villkor.<br><br>Nu är det dags att återvända till verkligheten där du har möjlighet att göra skillnad – på riktigt – för dig själv och många andra.",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"OUTRO"
	}
]
};


	return self;

})({});
