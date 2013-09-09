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
		"text":"Programmet består av två delar. Du kommer gå igenom dessa en i taget och få olika perspektiv på de här frågorna.<br> <br> Men att vara agent handlar inte bara om att kunna en massa fakta. Därför kommer jag ställa frågor till dig längs vägen, för att se om du klarar av att tänka själv och göra egna ställningstaganden.<br> <br>Lycka till!<br>// Kim",
		"music":"music/bridgeofsighs",
     	"animation":"fade",
		"showNextButton":"0",

			
	},
	{  	"ID": "Case1_intro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"Som agenter arbetar vi mot alla former av kränkningar, men trafficking är den grövsta av kränkningarna mot mänskliga rättigheter. Den första delen av det här programmet är till för att du ska få veta några olika anledningar till att det finns trafficking och vad man kan göra som agent i Nätverket för att arbeta mot det. <br><br>//Kim",
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
