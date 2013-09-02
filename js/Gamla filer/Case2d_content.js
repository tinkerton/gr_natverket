var Case2d = (function(self){
self.ID = {"text":"Case2d"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[/*{  "ID": "2.4",
		"type":"chapter", 
		"title":"Hur många fejkar?",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	{  	"ID": "2.4.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Du ska nu få ta del av information och fakta kring övergrepp och anmälningar i Sverige. * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 
	{  	"ID": "2.4.2",
		"type":"info",
		"background":{"type":"image","url":"bg3.jpg"},
		"size":"twelve",
		"image": [
			{"url":"2.3.1_statistik.png"} 
		],
		 "animation":"right",
		  "showNextButton":"1000"

			
	},  
	{  	"ID": "2.4.4",
		"type":"question", 
		"analysisLog":"2.4.4 Fråga kapitel 4, Case 2",
		"question":"~ * Besvara påståendet: Att många våldtäkter sker i hemmet tyder på att personerna känner varann sen innan. * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "2.4.5",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * De flesta våldtäkter, inte bara de som sker i hemmet, begås av personer som känner offret sen innan. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case2_HUB"
			
	}

    ]
};


	return self;

})({});
