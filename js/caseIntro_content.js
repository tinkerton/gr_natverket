var CaseIntro = (function(self){
self.ID = {"text":"CaseIntro"};
self.preload = {"images":
[{"url":"case_color_splash2.png"},
{"url":"intro1.jpg"},
{"url":"intro2.jpg"}
]};

self.topLeftImage = {"url":"img/case_color_splash2.png"};

self.nodes = {"content": 
	[{  "ID": "INTRO.1",
		"type":"chapter", 
		"title":"Organisationen Nätverket",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},
	{  	"ID": "INTRO.2",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		/*"image": [
			{"url":"1.1.2_bordell.png"} 
		],*/
		"text":"~ * Good evening, London. Allow me first to apologize for this interruption. I do, like many of you, appreciate the comforts of every day routine- the security of the familiar, the tranquility of repetition. I enjoy them as much as any bloke. But in the spirit of commemoration, whereby those important events of the past usually associated with someone's death or the end of some awful bloody struggle are celebrated with a nice holiday. I thought we could mark this November the 5th, a day that is sadly no longer remembered, by taking some time out of our daily lives to sit down and have a little chat. * ~",
		"music":"music/bridgeofsighs",
     	"animation":"fade",
		"showNextButton":"1500"
			
	}, 
	{  	"ID": "INTRO.3",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		/*"image": [
			{"url":"1.1.2_bordell.png"} 
		],*/
		"music":"continue",
		"text":"~ * There are of course those who do not want us to speak. I suspect even now, orders are being shouted into telephones, and men with guns will soon be on their way. Why? Because while the truncheon may be used in lieu of conversation, words will always retain their power. Words offer the means to meaning, and for those who will listen, the enunciation of truth. And the truth is, there is something terribly wrong with this country, isn't there? Cruelty and injustice, intolerance and oppression. And where once you had the freedom to object, think, and speak as you saw fit, you now have censors and systems of surveillence coercing your conformity and soliciting your submission. How did this happen? Who's to blame? * ~",
		 "animation":"fade",
		 "showNextButton":"1500"
			
	}, 
	{  	"ID": "INTRO.4",
		"type":"question", 
		"analysisLog":"Intro, select case:",
		/*"title":"SPECIALISERING",*/
		"question":"~ * Vilket case i Nätverket, vill du ta dig an? * ~ ",
		"background":{"type":"image","url":"intro1.jpg"},
		"answers":[
							{"text":"Case 1 - Varför trafficking?","analysisLog":"1. CASE 1","callback":"Case1_HUB"},
							{"text":"Case 2 - Bara på skoj?","analysisLog":"2. CASE 2","callback":"Case2_HUB"}
				]
		 ,
		 "animation":"down",
		 "showNextButton":"-1"
	},

    ]
};


	return self;

})({});
