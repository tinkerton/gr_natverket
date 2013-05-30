var Case1 = (function(self){

self.preload = {"images":
[{"url":"bg.jpg"},
{"url":"bg2.jpg"},
{"url":"bg3.jpg"},
{"url":"bg4.jpg"},
{"url":"1.1.2_bordell.png"},
{"url":"1.2.1_macrostatistik.png"},
{"url":"1.2.2_microstatistik.png"},
{"url":"1.3.1_insandare.png"},
{"url":"1.4.1_blogg.png"},
{"url":"1.4.2_bild1.jpg"},
{"url":"1.4.2_bild2.jpg"},
{"url":"1.4.2_bild3.jpg"},
{"url":"1.4.2_bild4.jpg"},
{"url":"1.4.2_bild5.jpg"},
{"url":"1.5.1_domstoslbeslut.png"},
{"url":"1.5.2_bild1.jpg"},
{"url":"1.5.2_bild2.jpg"},
	
]
};

self.nodes = {"content": 
	[
	{  	"ID": "1.1.0",
		"type":"info",
		"title":"Star wars",
		"background":{"type":"image","url":"bg4.jpg"},
		"comic" : [	{"url":"1.4.2_bild1.jpg"},
					{"url":"1.4.2_bild2.jpg"},
					{"url":"1.4.2_bild3.jpg"},
					{"url":"1.4.2_bild4.jpg"},
					{"url":"1.4.2_bild5.jpg"}
					],
		"comic_row_height":"470px"
	
	}, 
	{  	"ID": "1.1.1",
		"type":"info", /*info, question, hidden*/
		"title":"Det första fallet",
		"background":{"type":"image","url":"bg4.jpg"},
		"pretext":"Ibland är människohandeln av sexuell natur. De drabbade har ofta erbjudits andra jobb men blir istället sexslavar. Olika aktörer mot sexuell människohandel förklarar problematiken på olika sätt.",
		"posttext":""
	}, 
	{  	"ID": "1.1.2",
		"type":"question",
		"title":"Node nr 2. The hipster.",
		"background":{"type":"image","url":"bg4.jpg"},
		"videos" : [{"videoURL":"http://player.vimeo.com/video/50650297"},
					{"videoURL":"http://player.vimeo.com/video/62803828"},
					{"videoURL":"http://player.vimeo.com/video/62803828"}
					], 
		"pretext":"Helvetica dolor tonx assumenda. Post-ironic officia squid, quinoa vinyl organic occaecat umami scenester nihil seitan selvage YOLO.",
		"posttext":"Laborum neutra whatever sunt cupidatat, id anim thundercats. Butcher authentic freegan, helvetica thundercats sunt ex post-ironic umami aute irure blog delectus. Raw denim est trust fund ugh, cred in aute gluten-free put a bird on it. Sed pitchfork letterpress aliquip, chambray flexitarian fingerstache. Pitchfork kogi reprehenderit, organic biodiesel terry richardson flexitarian keytar pinterest disrupt PBR art party.n."
	}, 
	{  	"ID": "1.1.3",
		"type":"info",
		"title":"The third Node",
		"background":{"type":"image","url":"bg2.jpg"},
		"videos" : [{"videoURL":"http://player.vimeo.com/video/50650297"}], 
		"pretext":"",
		"posttext":""
	}, 
	{  	"ID": "1.1.4",
		"type":"info",
		"title":"Node four. The last of the  test content.",
		"background":{"type":"image","url":"bg4.jpg"},
		/*"background":{"type":"video","url":"http://getgoingtoday.org/media/video/dream.mp4", "ipadBG":"bg4,jpg"},*/
		"pretext":"Pitchfork kogi reprehenderit, organic biodiesel terry richardson flexitarian keytar pinterest disrupt PBR art party.",
		"posttext":"Lo-fi actually gentrify consequat. Ex bicycle rights YOLO fanny pack deserunt. Locavore pop-up hashtag elit fashion axe. Farm-to-table gentrify cosby sweater, gastropub keffiyeh sint godard bushwick labore selvage deep v in biodiesel art party typewriter. Mustache fugiat biodiesel, accusamus bespoke nulla enim sartorial bushwick. Qui tattooed occaecat polaroid nulla, id meggings readymade pickled reprehenderit. You probably haven't heard of them direct trade kogi butcher freegan, sapiente photo booth chillwave iphone cliche cupidatat reprehenderit veniam non meggings."
	}
	
    ]
};


	return self;

})({});
