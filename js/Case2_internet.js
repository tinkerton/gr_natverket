var Case2_internet = (function(self){
self.ID = {"text":"Case2_internet"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_internet_facebook",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"bg3.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"2.1.1_facebook.png"} 
		],
		 "animation":"fade",
		  "showNextButton":"0"			
	},  
	{  	"ID": "Case2_internet_forumet",
		"type":"info",
		"size":"ten",
		"background":{"type":"image","url":"bg3.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"2.2.1_forumet.png"} 
		],
		 "animation":"fade",
		  "showNextButton":"0"	
	}, 
	{  	"ID": "Case2_internet_fraga",
		"type":"question", 
		"analysisLog":"Case2_internet_fraga1",
		"question":"Kim: Vad tänker du när det skrivs negativa saker om någon på internet?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Jag bryr mig inte så mycket, man ska inte ta det personligt.","analysisLog":"1. Svar"},
							{"text":"Det är svårt när det är man själv som är utsatt, då blir det personligt.","analysisLog":"2. Svar"},
							{"text":"Jag blir oftast arg och besviken på dem som skriver saker.","analysisLog":"3. Svar"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1",
	},
	{  	"ID": "Case2_internet_fraga2",
		"type":"question", 
		"analysisLog":"Case2_internet_fraga2",
		"question":"Kim: Om Mikaela faktiskt har blivit våldtagen, hur tror du hon uppfattar sakerna som skrivs om henne på internet?",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"Mikaela blir nog väldigt ledsen och arg över att inte bli trodd.","analysisLog":"1b. Svar"},
							{"text":"Mikaela ångrar kanske att hon anmälde våldtäkten – alla påhopp och kränkningar på nätet gör att hon nog önskar att hon hållit tyst.","analysisLog":"2b. Svar"},
							{"text":"Mikaela tar det säkert inte personligt – man vet inte vilka som har skrivit och det är inget man ska ta åt sig av.","analysisLog":"3b. Svar"}
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
