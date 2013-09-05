var Case2_ettarsenare = (function(self){
self.ID = {"text":"Case2_ettarsenare"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_ettarsenare_pappan",
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
				"url":"http://player.vimeo.com/video/69065952", //alt 1.2 
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
		 "showNextButton":"0"
	},
	{  	"ID": "Case2_ettarsenare_james",
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
												"sequenceID":"13",
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
		 "showNextButton":"0"
	},
	{  	"ID": "Case2_ettarsenare_fraga",
		"type":"question", 
		"analysisLog":"Case2_ettarsenare_fraga1",
		"question":"(placeholder)Reflektionsfråga kring hur James och samuel skiljer sig och vad det säger om deras människosyn.",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Svar1","analysisLog":"1. Svar"},
							{"text":"Svar2","analysisLog":"2. Svar"},
							{"text":"Svar3","analysisLog":"3. Svar"}
				],
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case2_outro"
	}

    ]
};
	return self;

})({});
