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
	{  	"ID": "INTRO.2",
		"type":"agent",
		"background":{"type":"image","url":"intro1.jpg"},
		/*"image": [
			{"url":"1.1.2_bordell.png"} 
		],*/
		"text":"~ * Välkommen till Nätverkets träningsprogram för nya agenter. Mitt namn, liksom ditt och alla andra agenters, är hemligt. Kanske kan du gissa vilka de övriga är? Vi håller kontakten via olika kanaler, men oftast är vi anonyma. <br> <br>Här kallar jag mig för S. * ~",
		"music":"music/bridgeofsighs",
     	"animation":"fade",
		"showNextButton":"1500"
			
	}, 
	{  	"ID": "INTRO.3",
		"type":"agent",
		"background":{"type":"image","url":"intro1.jpg"},
		/*"image": [
			{"url":"1.1.2_bordell.png"} 
		],*/
		"text":"~ * Varje dag sker kränkningar och brott ute i samhället. Även här hemma i Sverige. <br><br>Att vara agent handlar om att lära sig känna igen dessa situationer, och stå upp för rättvisa, mänskliga rättigheter och schyssta värderingar. * ~",
		"music":"music/bridgeofsighs",
     	"animation":"fade",
		"showNextButton":"1500"
			
	}, 
	{  	"ID": "INTRO.4",
		"type":"question", 
		"analysisLog":"Intro, select case:",
		/*"title":"SPECIALISERING",*/
		"question":"~ * Du ska nu välja ett av två tränignsprogram. <br> I programmet Varför trafficking? lär du dig om trafficking och hur det sker, varje dag, i Sverige och Europa. <br> I programmet Bara på skoj? lär du dig om sexuella kränkningar i verkligheten och på internet. <br>Personerna som berättelserna handlar om är påhittade, men all fakta kommer från verkligheten. <br><br> Lycka till i träningsprogrammet. Hälsningar S. * ~ ",
		"background":{"type":"image","url":"intro1.jpg"},
		"answers":[
							{"text":"1 - Varför trafficking?","analysisLog":"1. CASE 1","callback":"Case1_HUB"},
							{"text":"2 - Bara på skoj?","analysisLog":"2. CASE 2","callback":"Case2_HUB"}
				]
		 ,
		 "animation":"down",
		 "showNextButton":"-1"
	},

    ]
};


	return self;

})({});
