var Case1_trafficking = (function(self){
self.ID = {"text":"Case1_trafficking"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case1_trafficking_film",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/74234319"
			 }],
			 "animation":"fade",
			  "showNextButton":"0"
	},
	{  	"ID": "Case1_trafficking_fraga",
		"type":"question", 
		"analysisLog":"1.1.4 Fråga kapitel 1, Case 1",
		"question":"Kim: Vad tror du är huvudanledningen till att trafficking fortsätter?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Att det finns män som vill köpa sex.","analysisLog":"1. Svar","callback":"Case1_HUB"},
							{"text":"Att samhället inte agerar hårdare mot de som köper sex och bidrar till trafficking-industrin.","analysisLog":"2. Svar","callback":"Case1_HUB"},
							{"text":"Att ligorna som sysslar med människohandel är duktiga på att dölja vad de håller på med.  ","analysisLog":"3. Svar","callback":"Case1_HUB"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	}
]
};


	return self;

})({});
