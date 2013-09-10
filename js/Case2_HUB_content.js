var Case2_HUB = (function(self){
self.ID = {"text":"Case2_HUB"};
self.preload = {"images":
[	{"url":"bg-case-2.jpg"},
	{"url":"bg3.jpg"},
	{"url":"2.1.4_artikel-om-fallet.png"},
	{"url":"2.2.2_artikel.png"},
	{"url":"2.1.1_facebook.png"},
	{"url":"2.2.1_forumet.png"}, 
	{"url":"2.3.1_statistik.png"},
	{"url":"2.4.2_mikaela1.png"},
	{"url":"2.4.2_samuel1.png"},
	{"url":"2.4.2_mikaela2.png"},
	{"url":"2.4.2_samuel2.png"},
	{"url":"2.4.2_mikaela3.png"},
	{"url":"2.4.2_samuel3.png"},
	{"url":"2.4.2_mikaela4.png"},
	{"url":"2.4.2_samuel4.png"},
	{"url":"2.4.2_mikaela5.png"},
	{"url":"2.4.2_samuel5.png"},
]
};

self.topLeftImage = {"url":""};

self.nodes = {"content": 
	[{  "ID": "CASE2.HUB",
		"type":"hub", 
		"analysisLog":"CASE 2 HUB:",
		"background":{"type":"image","url":"bg-case-2.jpg"},
		"chapters":[
							{"text":"Det som skrevs i tidningen", 
								"ID":"0",
								"width":"220px", "height":"140px", 
								"left":"73%", "top":"50%", 
								"paddingtop":"23px",
								"fontsize":"2",
								"analysisLog":"1. Det som skrevs i tidningen",
								"callback":"Case2_tidningen"},
							{"text":"Det som stod på Internet", 
								"ID":"1",
								"width":"201px", "height":"125px", 
								"left":"53%", "top":"19%", 
								"paddingtop":"23px",
								"fontsize":"1.8",
								"analysisLog":"2. Det som stod på Internet",
								"callback":"Case2_internet"},
							{"text":"Filmen om horan", 
								"ID":"2",
								"lockeduntil":"1", 
								"width":"160px", "height":"100px", 
								"left":"10%", "top":"40%", 
								"paddingtop":"2px",
								"fontsize":"1.9",
								"analysisLog":"3. Filmen om horan",
								"callback":"Case2_horan"},
							{"text":"Mikaelas samtal med kuratorn", 
								"ID":"3",
									"lockeduntil":"2", 
								"width":"193px", "height":"98px", 
								"left":"54%", "top":"66%", 
								"paddingtop":"12px",
								"fontsize":"1.6",
								"analysisLog":"5.  Mikaelas samtal med kuratorn",
								"callback":"Case2_kuratorn"},
							{"text":"Skilda sanningar", 
								"ID":"4",
									"lockeduntil":"4", 
								"width":"245px", "height":"90px", 
								"left":"15%", "top":"12%", 
								"paddingtop":"15px",
								"fontsize":"2.2",
								"analysisLog":"6. Skilda sanningar",
								"callback":"Case2_sanningar"},
							{"text":"Förhör i rättssalen", 
								"ID":"5",
									"lockeduntil":"0", //3 
								"width":"245px", "height":"140px", 
								"left":"72%", "top":"5%", 
								"paddingtop":"15px",
								"fontsize":"2.2",
								"analysisLog":"6. Förhör i rätssalen",
								"callback":"Case2_rattssalen"},
							{"text":"Det är fejk att många fejkar", 
								"ID":"6",
								"lockeduntil":"5", 
								"width":"220px", "height":"127px", 
								"left":"32%", "top":"45%", 
								"paddingtop":"17px",
								"fontsize":"1.8",
								"analysisLog":"4. Hur många fejkar?",
								"callback":"Case2_fejk"},
							{"text":"Ett år senare", 
								"ID":"7",
								"lockeduntil":"0", 
								"width":"204px", "height":"114px",
								 "left":"13%", "top":"65%", 
								 "paddingtop":"25px",
								 "fontsize":"2.2",
								 "analysisLog":"7. Ett år senare",
								 "callback":"Case2_ettarsenare"}
				]
		 ,
		 "animation":"fade",
		 "showNextButton":"-1"
	}
	

    ]
};


	return self;

})({});
