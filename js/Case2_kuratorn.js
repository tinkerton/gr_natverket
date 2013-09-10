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
			 	"url":"http://player.vimeo.com/video/74179461",
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
			 	"url":"http://player.vimeo.com/video/74194758", //Kär i samuel
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
			 	"url":"http://player.vimeo.com/video/74194759", //druckit alkohol
			 	 "gotoID":"8"
			},
			{	
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74194759",
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
			 	"url":"http://player.vimeo.com/video/74194758",
			 	 "gotoID":"8"
			},

			{	
				"sequenceID":"8",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/74194760"
			 	
			}],
     	"animation":"left",
		 "showNextButton":"0"
	},
	{  	"ID": "Case2_kuratorn_fraga",
		"type":"question", 
		"analysisLog":"Case2_kuratorn_fraga1",
		"question":"Kim: Hur tycker du att kuratorn bemöter Mikaela i den här situationen?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Kuratorn försvarar James och Samuel medan hon inte lyssnar på Mikaelas version av vad som hände på festen.","analysisLog":"1. Svar"},
							{"text":"Kuratorn verkar inte kunna ta det som hänt på allvar och försöker bortförklara våldtäkten.","analysisLog":"2. Svar"},
							{"text":"Kuratorn vill hjälpa Mikaela men Mikaela är för upprörd för att lyssna. ","analysisLog":"3. Svar"}
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
