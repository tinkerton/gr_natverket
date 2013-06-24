var Case2g = (function(self){
self.ID = {"text":"Case2g"};

self.preload = {"images":
[{"url":"bg.jpg"},
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[{  "ID": "2.7",
		"type":"chapter", 
		"title":"Ett år senare",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "2.7.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * James och Samuel dömdes till fängelsestraff för våldtäkt, kränkning och köp av sex mot ersättning. Det har nu gått ett år sen våldtäkten. Du ska nu få träffa Mikaelas pappa och James. * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	}, 

	{  "ID": "2.7.2",
		"type":"info", 
		"title":"Intervju med Mikaelas pappa",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"left",
		 "showNextButton":"0"
	},

	{  	"ID": "2.7.3",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68641203",
			 	 "gotoID":"1"
			 },
			{
				"sequenceID":"1",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"- Hur har det här varit för dig och resten av Mikaelas familj?", "gotoID":"2"},
							{"text":"- Önskar du att du hade varit mer beskyddande över Mikaela?", "gotoID":"3"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68641204", //alt 1.1
			 	 "gotoID":"4"
			},
			{	
				"sequenceID":"3",
				"type":"video",
				"url":"http://player.vimeo.com/video/68641204x", //alt 1.2  //SAKNAS
			 	 "gotoID":"4"
			},
			{
				"sequenceID":"4",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"- Hur mår Mikaela nu?", "gotoID":"5"},
							{"text":"- Går Mikaela kvar på samma skola? ", "gotoID":"6"}
				]
			},
			{	
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68641207", //alt 2.1
			 	 "gotoID":"7"
			},
			{	
				"sequenceID":"6",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68641208", //alt 2.2
			 	 "gotoID":"7"
			},
			{
				"sequenceID":"7",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"- Vad tänker du om framtiden?", "gotoID":"8"},
							{"text":"- Tror du att Mikaela kommer återhämta sig? ", "gotoID":"9"}
				]
			},
				{	
				"sequenceID":"8",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68641209", //alt 3.1
			 	 "gotoID":"10"
			},
			{	
				"sequenceID":"9",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68641406", //alt 3.2
			 	 "gotoID":"10"
			},

			{
				"sequenceID":"10",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68641529"		 	
			 }],
     	"animation":"left",
		 "showNextButton":"-1"
	},

{  "ID": "2.7.4",
		"type":"info", 
		"title":"Intervju med James",
		"background":{"type":"image","url":"bg3.jpg"},
		 "animation":"left",
		 "showNextButton":"0"
	},

	{  	"ID": "2.7.5",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"- Vad tänker du idag om det som hände?", "gotoID":"1"},  //FRÅGA 1
							{"text":"- Har du träffat Mikaela igen?", "gotoID":"2"}  //FRÅGA 2
				]
			},
							{	
								"sequenceID":"1",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68912935", //james 01
							 	 "gotoID":"3"
							},
							{	
								"sequenceID":"2",
								"type":"video",
								"url":"http://player.vimeo.com/video/68913053", // james 02
								 "gotoID":"10"
							},
			


			{
				"sequenceID":"3",	//0 
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"- Om du träffade Mikaela igen, vad skulle du säga till henne?", "gotoID":"4"},  //FRÅGA 3
							{"text":"- Har du träffat Mikaela igen?", "gotoID":"7"}  //FRÅGA 2
				]
			},
					{	
								"sequenceID":"4",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68912937", // james 03
							 	 "gotoID":"5"
							},
										{
										"sequenceID":"5",
										"type":"question",
										"text":"Ställ en fråga:",
										"answers":[
													{"text":"- Har du träffat Mikaela igen?", "gotoID":"6"}  //FRÅGA 2
										]
									},
											{	
												"sequenceID":"6",
												"type":"video",
											 	"url":"http://player.vimeo.com/video/68913053" // james 02
											 	
											},
							
							{	
								"sequenceID":"7",
								"type":"video",
								"url":"http://player.vimeo.com/video/68913053", // james 02
								 "gotoID":"8"
							},
									{
										"sequenceID":"8",
										"type":"question",
										"text":"Ställ en fråga:",
										"answers":[
													{"text":"- Om du träffade Mikaela igen, vad skulle du säga till henne?", "gotoID":"9"}  //FRÅGA 2
										]
									},
												
												{	
													"sequenceID":"9",
													"type":"video",
												 	"url":"http://player.vimeo.com/video/68912937" // james 03
												 	 //AVSLUTA
												},	



			{
				"sequenceID":"10",
				"type":"question",
				"text":"Ställ en fråga:",
				"answers":[
							{"text":"- Vad tänker du idag om det som hände? ", "gotoID":"14"},//FRÅGA 1
							{"text":"- Om du träffade Mikaela igen, vad skulle du säga till henne?", "gotoID":"11"} //FRÅGA 3
				]
			},
					{	
								"sequenceID":"11",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/68912937", // james 03
							 	 "gotoID":"12"
							},
										{
										"sequenceID":"12",
										"type":"question",
										"text":"Ställ en fråga:",
										"answers":[
													{"text":"- Vad tänker du idag om det som hände?", "gotoID":"13"}  //FRÅGA 1
										]
									},
											{	
												"sequenceID":13,
												"type":"video",
											 	"url":"http://player.vimeo.com/video/68912935"// james 01
											 	 //AVSLUTA
											},
							
							{	
								"sequenceID":"14",
								"type":"video",
								"url":"http://player.vimeo.com/video/68912935", // james 01
								 "gotoID":"15"
							},
									{
										"sequenceID":"15",
										"type":"question",
										"text":"Ställ en fråga:",
										"answers":[
													{"text":"- Om du träffade Mikaela igen, vad skulle du säga till henne?", "gotoID":"16"}  //FRÅGA 2
										]
									},
												
												{	
													"sequenceID":"16",
													"type":"video",
												 	"url":"http://player.vimeo.com/video/68912937" // james 03
												 	 //AVSLUTA
												}

			],
     	"animation":"left",

		 "showNextButton":"-1"
	},



	{  	"ID": "2.7.4",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ *  Nu har du avslutat din utbildning och är redo att agera som agent i Nätverket - ute i verkligheten. Återkom gärna ifall du vill ta del av vårt andra träningsprogram, eller om du vill ta del av detta program en gång till. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"OUTRO"
			
	}, 

    ]
};


	return self;

})({});
