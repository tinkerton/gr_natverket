var Case2_rattssalen = (function(self){
self.ID = {"text":"Case2_rattssalen"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_rattssalen_forhor",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[

		/*	{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68434439",
			 	 "gotoID":"1"
			 },*/
			{
				"sequenceID":"0",
				"type":"question",
				"text":"Påbörja förhöret med:",
				"answers":[
							{"text":"- Samuel", "gotoID":"1"},
							{"text":"- James", "gotoID":"7"},
							{"text":"- Avsluta", "gotoID":"-1"}
				]
			},
			/***ADVOKATEN FRÅGAR SAMUEL  *******************************************/
			{
				"sequenceID":"1",
				"type":"question",
				"text":"Förhör med Samuel. Advokaten frågar:",
				"answers":[
							{"text":"- Kan du beskriva vad det var som hände? Börja från när du kommer till festen.", "gotoID":"2"},
							{"text":"- Sa Mikaela någon gång ’nej’ eller på annat sätt uttryckte att hon inte ville ha samlag?", "gotoID":"3"},
							{"text":"- Höll du och James fast Mikaelas handleder under samlaget?", "gotoID":"4"},
							{"text":"- Hade Mikaela på något sätt uttryckt att hon ville att du skulle filma under samlaget?", "gotoID":"5"},
							{"text":"- Hade Mikaela på något sätt uttryckt att hon ville att du skulle publicera filmen på internet?", "gotoID":"6"},
							{"text":"- Gå tillbaka", "gotoID":"0"}
				
				]
			},
							{	
								"sequenceID":"2",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146395",  
							 	 "gotoID":"1"
							},
								{	
								"sequenceID":"3",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146397",  
							 	 "gotoID":"1"
							},
								{	
								"sequenceID":"4",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146398",  
							 	 "gotoID":"1"
							},
								{	
								"sequenceID":"5",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146399",  
							 	 "gotoID":"1"
							},
								{	
								"sequenceID":"6",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146508",  
							 	 "gotoID":"1"
							},
				/***ADVOKATEN FRÅGAR JAMES  *******************************************/
			{
				"sequenceID":"7",
				"type":"question",
				"text":"Förhör med James. Advokaten frågar:",
				"answers":[
							{"text":"- Kan du beskriva vad det var som hände? Börja från när du kommer till festen.", "gotoID":"8"},
							{"text":"- Sa Mikaela någon gång ’nej’ eller på annat sätt uttryckte att hon inte ville ha samlag?", "gotoID":"9"},
							{"text":"- Höll du och James fast Mikaelas handleder under samlaget?", "gotoID":"10"},
							{"text":"- Enligt åtalet så gav ni Mikaela cigaretter för att utföra oralsex, stämmer det?", "gotoID":"11"},
							{"text":"- Gå tillbaka", "gotoID":"0"}
				
				]
			},
							{	
								"sequenceID":"8",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146025", 
							 	 "gotoID":"7"
							},
				{	
								"sequenceID":"9",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146258",
							 	 "gotoID":"7"
							},
				{	
								"sequenceID":"10",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146024", 
							 	 "gotoID":"7"
							},
				{	
								"sequenceID":"11",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/74146023", 
							 	 "gotoID":"7"
							}

			 ],
     	"animation":"left",
		 "showNextButton":"0"
	},
	{  	"ID": "Case2_rattssalen_fraga",
		"type":"question", 
		"analysisLog":"Case2_rattssalen_fraga1",
		"question":"Hur tycker du att Samuel och James versioner av händelsen skiljer sig från Mikaelas?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Svar1","analysisLog":"1. Svar"},
							{"text":"Svar2","analysisLog":"2. Svar"},
							{"text":"Svar3","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case2_HUB"
	}
    ]
};


	return self;

})({});
