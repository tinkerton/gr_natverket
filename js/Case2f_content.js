var Case2f = (function(self){
self.ID = {"text":"Case2f"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[/*{  "ID": "2.6",
		"type":"chapter", 
		"title":"Skilda sanningar",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	{  	"ID": "2.6.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Här kommer du få veta mer om de olika versionerna av vad som egentligen hände. * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 

	{  	"ID": "2.6.2",
		"type":"comicparallel",
		"background":{"type":"image","url":"bg3.jpg"},
		"comicparallel" : [	{"slide": 
								{"url":"2.4.2_mikaela1.png",
								"url2":"2.4.2_samuel1.png",}
					},
					{"slide": 
								{"url":"2.4.2_mikaela2.png",
								"url2":"2.4.2_samuel2.png"}
					},
					{"slide": 
								{"url":"2.4.2_mikaela3.png",
								"url2":"2.4.2_samuel3.png"}
					},
					{"slide": 
								{"url":"2.4.2_mikaela4.png",
								"url2":"2.4.2_samuel4.png"}
					},
						{"slide": 
								{"url":"2.4.2_mikaela5.png",
								"url2":"2.4.2_samuel5.png"}
					}
					
										  	
		],
		"comic_row_height":"370px",
		 "animation":"left",
		 "showNextButton":"1500"
	
	},
	{  "ID": "2.6.3",
		"type":"info", 
		"title":"Förhör i en rättsal",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "2.6.4",
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
							{"text":"- James", "gotoID":"4"}
				]
			},
			/***ADVOKATEN FRÅGAR 1  *******************************************/
			{
				"sequenceID":"1",
				"type":"question",
				"text":"Advokaten frågar",
				"answers":[
							{"text":"- Samuel, kan du beskriva vad det var som hände?", "gotoID":"2"},
							{"text":"- Samuel, kan du beskriva din tidigare relation med Mikaela?", "gotoID":"3"}
				]
			},
							{	
								"sequenceID":"2",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68549166",  //Samuel, advokat 01
							 	 "gotoID":"7"
							},
							{	
								"sequenceID":"3",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68549168",  //Samuel, advokat 02
							 	 "gotoID":"7"
							},
			{
				"sequenceID":"4",
				"type":"question",
				"text":"Advokaten frågar",
				"answers":[
							{"text":"- James, kan du beskriva vad det var som hände? ", "gotoID":"5"},
							{"text":"- James, kan du berätta om vems idé det var att ni skulle ha sex?", "gotoID":"6"}
				]
			},
							{	
								"sequenceID":"5",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68553974",  //James, advokat 01
							 	 "gotoID":"10"
							},
							{	
								"sequenceID":"6",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68552465",  //James, advokat 02
							 	 "gotoID":"10"
							},

			/***ÅKLAGAREN FRÅGAR 1  *******************************************/
			{
				"sequenceID":"7",
				"type":"question",
				"text":"Åklagaren frågar",
				"answers":[
							{"text":"- Samuel, hade Mikaela på något sätt uttryckt att hon ville att du skulle filma när ni hade sex?", "gotoID":"8"},
							{"text":"- Samuel, hade Mikaela på något sätt uttryckt att hon ville att du skulle publicera filmen på internet?", "gotoID":"9"}
				]
			},
							{	
								"sequenceID":"8",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68549167",  //Samuel, åklagare 01
							 	 "gotoID":"13"
							},
							{	
								"sequenceID":"9",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68549165",  //Samuel, åklagare 02
							 	 "gotoID":"13"
							},
			{
				"sequenceID":"10",
				"type":"question",
				"text":"Advokaten frågar",
				"answers":[
							{"text":"- James, stämmer det att ni gav Mikaela cigaretter i utbyte mot oralsex?", "gotoID":"11"},
							{"text":"- James, Hur kommer det sig att ni inte avbröt när Mikaela gjorde motstånd?", "gotoID":"12"}
				]
			},
							{	
								"sequenceID":"11",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68552466",  //James, åklagare 01
							 	 "gotoID":"14"
							},
							{	
								"sequenceID":"12",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68554700",  //James, åklagare 02
							 	 "gotoID":"14"
							},
		
		/***FORtSÄTT FÖRHÖRET  *******************************************/

				{
				"sequenceID":"13",
				"type":"question",
				"text":"Forsätt förhöret med:",
				"answers":[
							{"text":"- James", "gotoID":"18"},
							{"text":"- Avsluta förhöret", "gotoID":"-1"}
				]
			},

			{
				"sequenceID":"14",
				"type":"question",
				"text":"Forsätt förhöret med:",
				"answers":[
							{"text":"- Samuel", "gotoID":"15"},
							{"text":"- Avsluta förhöret", "gotoID":"-1"}
				]
			},

			/***ADVOKATEN FRÅGAR 2  *******************************************/
			{
				"sequenceID":"15",
				"type":"question",
				"text":"Advokaten frågar",
				"answers":[
							{"text":"- Samuel, kan du beskriva vad det var som hände?", "gotoID":"16"},
							{"text":"- Samuel, kan du beskriva din tidigare relation med Mikaela?", "gotoID":"17"}
				]
			},
							{	
								"sequenceID":"16",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68549166",  //Samuel, advokat 01
							 	 "gotoID":"21"
							},
							{	
								"sequenceID":"17",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68549168",  //Samuel, advokat 02
							 	 "gotoID":"21"
							},
			{
				"sequenceID":"18",
				"type":"question",
				"text":"Advokaten frågar",
				"answers":[
							{"text":"- James, kan du beskriva vad det var som hände? ", "gotoID":"19"},
							{"text":"- James, kan du berätta om vems idé det var att ni skulle ha sex?", "gotoID":"19"}
				]
			},
							{	
								"sequenceID":"19",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68553974",  //James, advokat 01
							 	 "gotoID":"24"
							},
							{	
								"sequenceID":"20",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68552465",  //James, advokat 02
							 	 "gotoID":"24"
							},

			/***ÅKLAGAREN FRÅGAR 2 *******************************************/
			{
				"sequenceID":"21",
				"type":"question",
				"text":"Åklagaren frågar",
				"answers":[
							{"text":"- Samuel, hade Mikaela på något sätt uttryckt att hon ville att du skulle filma när ni hade sex?", "gotoID":"21"},
							{"text":"- Samuel, hade Mikaela på något sätt uttryckt att hon ville att du skulle publicera filmen på internet?", "gotoID":"22"}
				]
			},
							{	
								"sequenceID":"22",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68549167"  //Samuel, åklagare 01
							 	
							},
							{	
								"sequenceID":"23",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68549165"  //Samuel, åklagare 02
							 	 
							},
			{
				"sequenceID":"24",
				"type":"question",
				"text":"Advokaten frågar",
				"answers":[
							{"text":"- James, stämmer det att ni gav Mikaela cigaretter i utbyte mot oralsex?", "gotoID":"25"},
							{"text":"- James, Hur kommer det sig att ni inte avbröt när Mikaela gjorde motstånd?", "gotoID":"26"}
				]
			},
							{	
								"sequenceID":"25",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68552466"  //James, åklagare 01
							 	
							},
							{	
								"sequenceID":"26",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68554700"  //James, åklagare 02
							 	 
							}
		




		
			 ],
     	"animation":"left",
		 "showNextButton":"-1"
	},




	
	{  	"ID": "2.6.5",
		"type":"question", 
		"analysisLog":"2.6.5 Fråga kapitel 6, Case 2",
		"question":"~ * Besvara påståendet: Varken Samuel eller James tog allvarligt på när Mikaela försökte säga ifrån. * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "2.6.6",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * När det finns olika versioner av samma händelse är det svårt att veta vem man ska lita på. Om sex är ömsesidigt ska det finnas en bra kommunikation mellan alla som är med, och då riskerar man inte att någon far illa. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case2_HUB"
			
	}

    ]
};


	return self;

})({});
