var Case1_polisen = (function(self){
self.ID = {"text":"Case1_polisen"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[/*{  "ID": "1.5",
		"type":"chapter", 
		"title":"Polisens arbete",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	/*{  	"ID": "1.5.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Nu ska du få veta mer om hur polisen arbetar mot trafficking. * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	},*/
	{  	"ID": "Case1_polisen_intervju",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68434439",
			 	 "gotoID":"1"
			},
			{
				"sequenceID":"1",
				"type":"question",
				"text":"Vad vill du veta om polisens arbete mot trafficking?",
				"answers":[
							{"text":"Hur arbetar polisen för att förhindra trafficking?", "gotoID":"2"},
							//{"text":"Vad kan man göra som privatperson?", "gotoID":"3"},
							{"text":"Hur stort är problemet med trafficking i Sverige?", "gotoID":"4"},
							{"text":"Varför är det olagligt att köpa sex från vanliga prostituerade som inte är offer för trafficking?", "gotoID":"5"},
							{"text":"Avsluta", "gotoID":"-1"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434440",
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"3",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434441",
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"4",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434442",
			 	 "gotoID":"1"
			},
			{
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434443",
			 	"gotoID":"1"		 	
			},
			],
     	"animation":"left",
		 "showNextButton":"0"
	},
	{  	"ID": "Case1_polisen_fraga",
		"type":"question", 
		"analysisLog":"polisen_fraga",
		"question":"Kim: Hur tror du att människors attityder påverkas av sexköpslagen?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Inte alls. Det gör det bara svårare att köpa sex.","analysisLog":"1. Inte alls"},
							{"text":"Delvis. Det blir tydligt vad som är rätt och fel, men alla ändrar sig nog inte bara för att lagen säger så.","analysisLog":"2. Delvis"},
							{"text":"Mycket. På längre sikt påverkar lagstiftningen människors val.","analysisLog":"3. Mycket"}
				],
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case1_HUB"
	}

    ]
};


	return self;

})({});
