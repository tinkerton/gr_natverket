var Case1_sexkopare = (function(self){
self.ID = {"text":"Case1_sexkopare"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content":
	[
	{"ID": "Case1_sexkopare_citat",
		"type":"walloftext",
		"background":{"type":"image","url":"case1_bg2.jpg"},
		"size":"twelve",
		"walloftext" : [
					{"text":"Det blev som en drog. Något jag inte kunde sluta med fast jag ville. Tillslut sökte jag hjälp. Jag ville inte vara den mannen som köper sex."},
					{"text":"Jag blir kåt av det. Det är inte svårare än så. Tyvärr ger det mig inte alls lika mycket att ha sex med min flickvän längre."},
					{"text":"Det är bättre att det är nån som jag, som är snäll som köper än att det är nån som inte behandlar tjejerna bra."},
					{"text":"Tjejer kan få sex hur lätt som helst. Jag tycker man inte ska skuldbelägga killar som köper sex, det kanske är enda sättet för dem att få ligga."},
					{"text":"...hon gjorde inte ett stön eller något.. som att knulla en robot"},
					{"text":"Det är annorlunda när man är utomlands. Det räknas liksom inte."},
					{"text":"När min flickvän fick reda på det så gick vårt förhållande sönder. Jag glömmer aldrig hennes blick."},
					{"text":"Har du tänkt på att vissa människor kanske reser mycket och har inte tid med flickvän eller ha tid med att gå ut och ragga ett pök...  Och i sådana lägen så passar en prostituerad bra"}
					],
		"animation":"up",
		"showNextButton":"0"
		},
	/*{"ID": "Case1_sexkopare_bordell",
		"type":"info",
		"background":{"type":"image","url":"bg4.jpg"},
		"size":"eleven",
		"image": [
			{"url":"1.1.2_bordell.png"} 
		],
		"animation":"down",
		"showNextButton":"0"
		},*/
	{  	"ID": "Case1_sexkopare_enavoss",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"case1_bg1.jpg"},
		"videos":[{"videoURL":"http://player.vimeo.com/video/74038868",  "source" : "vimeo"},
		{"videoURL":"http://player.vimeo.com/video/74038869",  "source" : "vimeo"},
		{"videoURL":"http://player.vimeo.com/video/74038870",  "source" : "vimeo"}	
			
			],
		"animation":"fade",
		"showNextButton":"0"
	},
	/*{  	"ID": "Case1_sexkopare_karta",
		"type":"info",
		"background":{"type":"image","url":"bg4.jpg"},
		"size":"eleven",
		"image": [
			{"url":"1.2.2_microstatistik.png"} 
		],
		"animation":"down",
		"showNextButton":"0"
	},*/
	{  	"ID": "Case1_sexkopare_fraga",
		"type":"question", 
		"analysisLog":"Case1_sexkopare_fraga1",
		"question":"Kim: Varför köper man sex?",
		"background":{"type":"image","url":"case1_bg4.jpg"},
		"answers":[
							{"text":"För att det inte går att få sex på något annat vis.","analysisLog":"1. Svar"},
							{"text":"För att slippa känna sig ensam och för att få bekräftelse.","analysisLog":"2. Svar"},
							{"text":"För att ha sex med någon som man har makt över och som inte kan ställa några krav.","analysisLog":"3. Svar"}
				],
		 "animation":"left",
		 "showNextButton":"-1"
	},
	{  	"ID": "Case1_sexkopare_fraga2",
		"type":"question", 
		"analysisLog":"Case1_sexkopare_fraga2",
		"question":"Kim: Varför tror du att det kan kännas mindre allvarligt att köpa sex utomlands, än i Sverige?",
		"background":{"type":"image","url":"case1_bg4.jpg"},
		"answers":[
							{"text":"Risken att nån därhemma vår veta nåt är mycket mindre.","analysisLog":"1b. Svar","callback":"Case1_HUB"},
							{"text":"Det är lagligt att köpa sex i många länder.","analysisLog":"2b. Svar","callback":"Case1_HUB"},
							//{"text":"Det är ofta mycket billigare än att köpa sex i Sverige.","analysisLog":"3b. Svar","callback":"Case1_HUB"}
							{"text":"Tillgången är mycket större utomlands än i Sverige.","analysisLog":"4b. Svar","callback":"Case1_HUB"}
				],
		 "animation":"left",
		 "showNextButton":"-1"
	}
	]
};

	return self;

})({});
