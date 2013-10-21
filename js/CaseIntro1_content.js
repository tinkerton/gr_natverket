var CaseIntro1 = (function(self){
self.ID = {"text":"CaseIntro1"};
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
	{  	"ID": "INTRO.1",
		"type":"agent",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		/*"image": [
			{"url":"1.1.2_bordell.png"} 
		],*/
		"text":"Kim: Hej. Du är nu på väg att genomgå Fair Sex Nätverkets träningsprogram för nya agenter. Efter att ha gått igenom programmet kan du välja att bli agent i Nätverket.<br><br>Att vara agent innebär att stå upp för allas mänskliga rättigheter och lika värde. Det innebär också att våga säga ifrån och agera mot saker som är fel.<br><br> Det här träningsprogrammet handlar om trafficking.<br><br> Även om programmets innehåll grundar sig på riktig fakta, så är alla personer du ser på filmer och foton skådespelare.",
		"music":"music/bridgeofsighs",
     	"animation":"fade",
		"showNextButton":"2000",
	},
	{  	"ID": "INTRO.2",
		"type":"agent",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		/*"image": [
			{"url":"1.1.2_bordell.png"} 
		],*/
		"text":"Kim: Såklart behöver du lära dig en hel del saker för att bli agent i Nätverket, men det är lika viktigt att kunna tänka själv. Därför kommer jag ställa frågor till dig längs vägen. <br><br>Du har 3 alternativ till varje fråga. Välj det svar som passar din åsikt bäst, även om inget av svaren passar in exakt på vad du tycker.",
		"music":"music/bridgeofsighs",
     	"animation":"fade",
		"showNextButton":"2000",
	},
	{  	"ID": "Intro question",
		"type":"question", 
		"analysisLog":"intro_testquestion",
		"question":"Kim: Dina svar kommer inte lagras eller registreras, utan frågorna handlar om att du själv ska reflektera kring vad du tänker och tycker.<br><br> Vad tycker du är det viktigaste att tänka på när det gäller sex?",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		"answers":[
							{"text":"Respekt för alla inblandade.","analysisLog":"1. Respekt"},
							{"text":"Det ska vara säkert och schysst.","analysisLog":"2. Tryggt"},
							{"text":"Att det är skönt och roligt.","analysisLog":"3. Roligt"}
				]
		 ,
		 "animation":"fade",
		 "showNextButton":"-1"
	},
	{  	"ID": "Case1_intro_kim",
		"type":"agent",
		"background":{"type":"image","url":"case2_bg2.jpg"},
		"text":"Kim: Bra! Då sätter vi igång med träningsprogrammet.",
		"animation":"fade",
		"showNextButton":"0"
	},
	{  	"ID": "Case1_Intro",
		"type":"video_seq",
		"size":"twelve",
		"background":{"type":"image","url":"case1_bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/74038866"
			 }],

			 "animation":"fade",
		 	"showNextButton":"0",
			 "callback":"Case1_HUB"
	}
	
    ]
};


	return self;

})({});
