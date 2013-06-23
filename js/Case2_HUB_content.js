var Case2_HUB = (function(self){
self.ID = {"text":"Case2_HUB"};
self.preload = {"images":
[	{"url":"bg-case-2.jpg"}
]
};

self.topLeftImage = {"url":""};

self.nodes = {"content": 
	[{  "ID": "CASE2.HUB",
		"type":"hub", 
		"analysisLog":"CASE 2 HUB:",
		"background":{"type":"image","url":"bg-case-2.jpg"},
		"chapters":[
							{"text":"Rättegången", 
								"ID":"0",
								"width":"220px", "height":"105px", 
								"left":"3%", "top":"50%", 
								"paddingtop":"23px",
								"fontsize":"2",
								"analysisLog":"1. Rättegången",
								"callback":"Case2a"},
							{"text":"Pappan berättar", 
								"ID":"1",
								
								"width":"140px", "height":"125px", 
								"left":"16%", "top":"19%", 
								"paddingtop":"8px",
								"fontsize":"2",
								"analysisLog":"2. Pappan berättar",
								"callback":"Case2b"},
							{"text":"Vad sa de i skolan?", 
								"ID":"2",
									"lockeduntil":"1", 
								"width":"160px", "height":"100px", 
								"left":"30%", "top":"40%", 
								"paddingtop":"2px",
								"fontsize":"1.9",
								"analysisLog":"3. Vad sa de i skolan",
								"callback":"Case2c"},
							{"text":"På internet", 
								"ID":"3",
									"lockeduntil":"2", 
								"width":"117px", "height":"110px", 
								"left":"53%", "top":"25%", 
								"paddingtop":"2px",
								"fontsize":"2",
								"analysisLog":"4. På internet",
								"callback":"Case2d"},
							{"text":"En helt vanlig kille", 
								"ID":"4",
									"lockeduntil":"3", 
								"width":"158px", "height":"123px", 
								"left":"71%", "top":"40%", 
								"paddingtop":"16px",
								"fontsize":"1.8",
								"analysisLog":"5. En helt vanlig kille",
								"callback":"Case2e"},
							{"text":"Ett år senare", 
								"ID":"5",
									"lockeduntil":"3", 
								"width":"245px", "height":"120px", 
								"left":"65%", "top":"2%", 
								"paddingtop":"15px",
								"fontsize":"3",
								"analysisLog":"6. Ett år senare",
								"callback":"Case2f"},
							{"text":"De olika berättelserna", 
								"ID":"6",
								"lockeduntil":"6", 
								"width":"200px", "height":"140px",
								 "left":"49%", "top":"52%", 
								 "paddingtop":"12px",
								 "fontsize":"2.2",
								 "analysisLog":"7. De olika berättelserna",
								 "callback":"Case2g"}
				]
		 ,
		 "animation":"fade",
		 "showNextButton":"-1"
	}
	

    ]
};


	return self;

})({});
