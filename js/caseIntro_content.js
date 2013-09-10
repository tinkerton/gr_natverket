var CaseIntro = (function(self){
self.ID = {"text":"CaseIntro"};
self.preload = {"images":
[{"url":"intro1.jpg"},
{"url":"intro2.jpg"},
{"url":"bg-case-1.jpg"},
{"url":"bg-case-2.jpg"}
]};

self.topLeftImage = {"url":"img/case_color_splash2.png"};

self.nodes = {"content": 
	[/*{  "ID": "INTRO.1",
		"type":"chapter", 
		"title":"Organisationen Nätverket",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	/*{  	"ID": "INTRO.2",
		"type":"agent",
		"background":{"type":"image","url":"intro1.jpg"},
		"image": [
			{"url":"1.1.2_bordell.png"} 
		],
		"text":"Välkommen till Nätverket. Det här är vårt träningsprogram för nya agenter.<br><br> Här kommer du få olika perspektiv på kränkningar av mänskliga rättigheter och sexövergrepp – något som tyvärr sker varje dag i Sverige och utomlands. Lyckligtvis finns det saker som du och jag kan göra – och att bli agent i Nätverket är en sådan sak. <br><br> Mitt namn är Kim, och jag kommer guida dig genom träningsprogrammet för nya agenter.",
		"music":"music/bridgeofsighs",
     	"animation":"fade",
		"showNextButton":"0"
			
	}, */
	{  	"ID": "INTRO.3",
		"type":"agent",
		"background":{"type":"image","url":"intro1.jpg"},
		/*"image": [
			{"url":"1.1.2_bordell.png"} 
		],*/
		"text":"Kim: Hej. Mitt namn är Kim och jag är agent i Nätverket. Det här är vårt träningsprogram för nya agenter.<br><br>Träningsprogrammet har två delar. Den första delen handlar om trafficking, och den andra om kränkningar.<br><br>Du behöver lära dig en hel del saker för att bli agent i Nätverket, men det är lika viktigt att kunna tänka själv. Därför kommer jag ställa frågor till dig längs vägen. Du har 3 alternativ till varje fråga. Välj det svar som passar din åsikt bäst. Här följer en testfråga.",
		"music":"music/bridgeofsighs",
     	"animation":"fade",
		"showNextButton":"0",
	},
	{  	"ID": "Intro question",
		"type":"question", 
		"analysisLog":"intro_testquestion",
		"question":"Kim: Vad föredrar du?",
		"background":{"type":"image","url":"intro1.jpg"},
		"answers":[
							{"text":"Se på film.","analysisLog":"1. Svar"},
							{"text":"Läsa böcker.","analysisLog":"2. Svar"},
							{"text":"Spela tv-spel.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"fade",
		 "showNextButton":"-1"
	},
	{  	"ID": "Case1_intro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"Kim: Bra! Då sätter vi igång med den första delen i träningsprogrammet. Gå vidare när du är redo.",
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case1_Intro",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg4.jpg"},
		"videos":[{"videoURL":"http://player.vimeo.com/video/74038866",  "source" : "vimeo"}
			
			],
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case1_HUB"
	}

	//, 
	/*{  	"ID": "INTRO.4",
		"type":"question", 
		"analysisLog":"Intro, select case:",
		/*"title":"SPECIALISERING",
		"question":"~ * Du ska nu välja ett av två tränignsprogram. <br> I programmet Varför trafficking? lär du dig om trafficking och hur det sker, varje dag, i Sverige och Europa. <br> I programmet Bara på skoj? lär du dig om sexuella kränkningar i verkligheten och på internet. <br>Personerna som berättelserna handlar om är påhittade, men all fakta kommer från verkligheten. <br><br> Lycka till i träningsprogrammet. Hälsningar S. * ~ ",
		"background":{"type":"image","url":"intro1.jpg"},
		"answers":[
							{"text":"1 - Varför trafficking?","analysisLog":"1. CASE 1","callback":"Case1_HUB"},
							{"text":"2 - Bara på skoj?","analysisLog":"2. CASE 2","callback":"Case2_HUB"}
				]
		 ,
		 "animation":"down",
		 "showNextButton":"-1"
	},*/

    ]
};


	return self;

})({});
