var Case2_ettarsenare = (function(self){
self.ID = {"text":"Case2_ettarsenare"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_ettarsenare_pappan",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/74105554",
			 	 "gotoID":"1"
			 },
			{
				"sequenceID":"1",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"- Hur har det här varit för Mikaelas familj?", "gotoID":"2"},
							{"text":"- Önskar du att du hade varit mer beskyddande över Mikaela?", "gotoID":"3"},
							{"text":"- Vad hände efter rättegången?", "gotoID":"4"},
							{"text":"- Vad tänker du om framtiden?", "gotoID":"5"},
							{"text":"- Vad tänker du idag om det som hände?", "gotoID":"6"},
							{"text":"- Avsluta", "gotoID":"-1"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74179276", 
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"3",
				"type":"video",
				"url":"http://player.vimeo.com/video/74179277", 
			 	 "gotoID":"1"
			},
				{	
				"sequenceID":"4",
				"type":"video",
				"url":"http://player.vimeo.com/video/74179278", 
			 	 "gotoID":"1"
			},
				{	
				"sequenceID":"5",
				"type":"video",
				"url":"http://player.vimeo.com/video/74179279", 
			 	 "gotoID":"1"
			},
				{	
				"sequenceID":"6",
				"type":"video",
				"url":"http://player.vimeo.com/video/74179280", 
			 	 "gotoID":"1"
			}
			],
     	"animation":"left",
		 "showNextButton":"-1"
	},
	{  	"ID": "Case2_ettarsenare_infoomjames",
		"type":"agent",
		"background":{"type":"image","url":"bg3.jpg"},
		/*"image": [
			{"url":"1.1.2_bordell.png"} 
		],*/
		"text":"James dömdes till 13 månaders sluten ungdomsvård. Det är nu en månad tills han släpps ut.<br><br>Här kan du ställa några frågor till honom, om du vill.",
     	"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case2_ettarsenare_james",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
				"type":"question",
				"text":"Fråga James:",
				"answers":[
							{"text":"- Vad tänker du idag om det som hände?", "gotoID":"1"}, 
							{"text":"- Kommer du kunna gå vidare?", "gotoID":"2"},  
							{"text":"- Är det någon som hört av sig till dig efter domen?", "gotoID":"3"},
							{"text":"- Avsluta", "gotoID":"-1"} 
						]
			},
							{	
								"sequenceID":"1",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74105551", 
							 	 "gotoID":"0"
							},
							{	
								"sequenceID":"2",
								"type":"video",
								"url":"http://player.vimeo.com/video/74105552", 
								 "gotoID":"0"
							},

							{	
								"sequenceID":"3",
								"type":"video",
								"url":"http://player.vimeo.com/video/74105553", 
								 "gotoID":"0"
							}
			

			],
     	"animation":"left",
		"showNextButton":"-1"
	},
	{  	"ID": "Case2_ettarsenare_fraga",
		"type":"question", 
		"analysisLog":"Case2_ettarsenare_fraga1",
		"question":"Kim: På internet är det fortfarande många som stöttar James och Samuel och skriver att de blivit oskyldigt dömda. Hur tror du det påverkar deras möjligheter att ta ansvar för det som hänt?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"De kan själva välja att lyssna eller inte lyssna på det som skrivs; det påverkar dem inte.","analysisLog":"1. Svar"},
							{"text":"Allt som skrivs på Internet riskerar att göra så James och Samuel förlorar stöd av andra, både familj och vänner, som vill hjälpa dem att gå vidare – även om de begått ett brott.","analysisLog":"2. Svar"},
							{"text":"Det är bra att de får stöttning av andra som skriver att de blivit oskyldigt dömda – det kommer göra det lättare att gå vidare.","analysisLog":"3. Svar"}
				],
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case2_outro"
	}

    ]
};
	return self;

})({});
