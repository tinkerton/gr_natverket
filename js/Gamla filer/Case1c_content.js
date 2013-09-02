var Case1c = (function(self){
self.ID = {"text":"Case1c"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[/*{  "ID": "1.3",
		"type":"chapter", 
		"title":"Vilka köper sex?",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	{  	"ID": "1.3.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Du ska nu få se vad de som köper sex tänker och säger. * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  	"ID": "1.3.2",
		"type":"walloftext",
		"background":{"type":"image","url":"bg4.jpg"},
		"walloftext" : [	
					{"text":"Självklart ska man aldrig, aldrig, aldrig ge ett spårbart nummer till en escort. Tjejerna är ju extremt noga med att skydda sin identitet så varför ska vi torskar, som faktiskt begår en olaglig handling, skylta med vår identitet? Nej, skaffa ett kontantkort som ni INTE registrerar och ring från det"},
					{"text":"Att gå och tycka synd om dom eller bli deprimerad över faktum som detta är helt meningslöst. prostitution har funnits sjukt länge och kommer att finnas sjukt länge till. Så enkelt är det."},
					{"text":"Det blev som en vana. Något jag inte kunde sluta med fast jag ville. Tillslut sökte jag hjälp. Jag ville inte vara den mannen som köper sex."},
					{"text":"Jag ville inte känna saker som var jobbiga i mitt liv. Lösningen blev att köpa sex. Det är inget jag är stolt över. Jag gör det inte lika mycket nuförtiden, men ibland så känns det som enda sättet att få utlopp för saker."},
					{"text":"Jag blir kåt av det. Det är inte svårare än så. Tyvärr ger det mig inte alls lika mycket att ha sex med min flickvän längre."},
					{"text":"Det blir liksom som att det känns overkligt när man är utomlands. Som att det inte riktigt räknas."},
					{"text":"Det är bättre att det är nån som jag, som är snäll som köper än att det är nån som inte behandlar tjejerna bra."},
					{"text":"Tjejer kan få sex hur lätt som helst. Jag tycker man inte ska skuldbelägga killar som köper sex, det kanske är enda sättet för dem att få ligga."},
					{"text":"...hon gjorde inte ett stön eller något.. som att knulla en robot."},
					{"text":"När det var klar log hon brett och gav två tummar upp -Good bombom!"},
					{"text":"När min flickvän fick reda på det så gick vårt förhållande sönder. Jag glömmer aldrig hennes blick."},
					{"text":"Största problemet för mig är att det är beroendeframkallande. Jag har inte köpt sex sen förra sommaren eftersom jag träffat en bra tjej men jag saknar verkligen sexköpandet och jag hoppas jag kan hålla mig borta från det framöver eftersom jag vill ta seriöst på förhållandet."},
					{"text":"Varför skulle man må dåligt? En trevlig stund med en trevlig tjej som dessutom får pengar för att knulla. Sen kan man göra kinky saker med en hora som man inte kan göra med frugan."},
					{"text":"Har du tänkt på att vissa människor kanske reser mycket och har inte tid med flickvän eller ha tid med att gå ut och ragga ett pök... Och i sådana lägen så passar en prostituerad bra."},
					{"text":"Klart man har läst saker om folk som tvingas till det. Jag har sett Lilja forever också. Men ingen av de jag gått till har tvingats till nåt, jag ger alltid pengarna direkt till henne så ingen hallick kommer och snor dem."},
					],
		
		 "animation":"up",
		  "showNextButton":"5000"

	},
	{  	"ID": "1.3.3",
		"type":"info",
		"background":{"type":"image","url":"bg4.jpg"},
		"size":"eleven",
		"image": [
			{"url":"1.1.2_bordell.png"} 
		],
		 "animation":"down",
		  "showNextButton":"1500"

			
	},  
	{  	"ID": "1.3.4",
		"type":"question", 
		"analysisLog":"1.3.4 Fråga kapitel 3, Case 1",
		"question":"~ * Besvara påståendet: Personer köper sex gör det för att det ger en kick, snarare än att de inte kan få sex annars. * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "1.3.5",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * De som köper sex har i många fall andra sexuella relationer också,  är gifta eller i fasta förhållanden. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case1_HUB"
			
	}

    ]
};


	return self;

})({});
