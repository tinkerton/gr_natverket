var Case2_kuratorn = (function(self){
self.ID = {"text":"Case2_kuratorn"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_kuratorn_samtal",
		"type":"video_seq",
		"background":{"type":"image","url":"bg3.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68372429",
			 	 "gotoID":"1"
			 },
			 {
				"sequenceID":"1",
				"type":"question",
				"text":"Kuratorn frågar:",
				"answers":[
							{"text":"-Var inte du kär i Samuel?", "gotoID":"2"},
							{"text":"-Hade du druckit alkohol under festen med Samuel och James?", "gotoID":"5"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372426", //Kär i samuel
			 	 "gotoID":"3"
			},
			 {
				"sequenceID":"3",
				"type":"question",
				"text":"Kuratorn frågar:",
				"answers":[
							{"text":"-Hade du druckit alkohol under festen med Samuel och James?", "gotoID":"4"}
				]
			},
			{	
				"sequenceID":"4",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372428", //druckit alkohol
			 	 "gotoID":"8"
			},
			{	
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372428",
			 	 "gotoID":"6"
			},
			 {
				"sequenceID":"6",
				"type":"question",
				"text":"Kuratorn frågar:",
				"answers":[
							{"text":"-Var inte du kär i Samuel?", "gotoID":"7"}
				]
			},
			{	
				"sequenceID":"7",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372426",
			 	 "gotoID":"8"
			},

			{	
				"sequenceID":"8",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68372427"
			 	
			}],
     	"animation":"left",
		 "showNextButton":"0"
	},
	{  	"ID": "Case2_kuratorn_fraga",
		"type":"question", 
		"analysisLog":"Case2_kuratorn_fraga1",
		"question":"(placeholder)Reflektionsfråga kring kuratorns bemötande av Mikaela.",
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
