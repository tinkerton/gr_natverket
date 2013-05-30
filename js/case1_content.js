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

/*ID: info, question, hidden*/
/*TEMPLATES
	{  	"ID": "1.1.1",
		"type":"info",
		"title":"COMIC",
		"background":{"type":"image","url":"bg.jpg"},
		"comic" : [	{"url":"1.4.2_bild1.jpg"},
					{"url":"1.4.2_bild2.jpg"},
					{"url":"1.4.2_bild3.jpg"},
					{"url":"1.4.2_bild4.jpg"},
					{"url":"1.4.2_bild5.jpg"}
					],
		"comic_row_height":"470px"
	
	},

	{  	"ID": "1.1.1",
		"type":"info", 
		"title":"Header here",
		"background":{"type":"image","url":"bg.jpg"},
		"pretext":"Bigger text",
		"posttext":"Smaller text"
	}, 

*/
self.nodes = {"content": 
	[
	{  	"ID": "1.1.1",
		"type":"info",
		"title":"Node 1.1.1",
		"background":{"type":"image","url":"bg.jpg"},
		"walloftext" : [	
					{"text":"Självklart ska man aldrig, aldrig, aldrig ge ett spårbart nummer till en escort. Tjejerna är ju extremt noga med att skydda sin identitet så varför ska vi torskar, som faktiskt begår en olaglig handling, skylta med vår identitet? <br/>Nej, skaffa ett kontantkort som ni INTE registrerar och ring från det"},
					{"text":"Snuten är nog värsta rädslan för de flesta. Ingen rädsla alls för vad flickvänner/fruar/arbetskompisar/grannar/mamma ska säga?"},
					{"text":"Att gå och tycka synd om dom eller bli deprimerad över faktum som detta är helt meningslöst. prostitution har funnits sjukt länge och kommer att finnas sjukt länge till. Så enkelt är det."},
					{"text":"Det blev som en vana. Något jag inte kunde sluta med fast jag ville. Tillslut sökte jag hjälp. Jag ville inte vara den mannen som köper sex."},
					{"text":"Jag ville inte känna saker som var jobbiga i mitt liv. Lösningen blev att köpa sex. Det är inget jag är stolt över. Jag gör det inte lika mycket nuförtiden, men ibland så känns det som enda sättet att få utlopp för saker."},
					{"text":"Jag blir kåt av det. Det är inte svårare än så. Tyvärr ger det mig inte alls lika mycket att ha sex med min flickvän längre."},
					{"text":"Jag skulle aldrig gå till nån som är offer för trafficking. Det är min gräns. Aldrig."},
					{"text":"Det blir liksom som att det känns overkligt när man är utomlands. Som att det inte riktigt räknas."},
					{"text":"Det är bättre att det är nån som jag, som är snäll som köper än att det är nån som inte behandlar tjejerna bra."},
					{"text":"Tjejer kan få sex hur lätt som helst. Jag tycker man inte ska skuldbelägga killar som köper sex, det kanske är enda sättet för dem att få ligga."},
					{"text":"...hon gjorde inte ett stön eller något.. som att knulla en robot."},
					{"text":"När det var klar log hon brett och gav två tummar upp -Good bombom!"},
					{"text":"När min flickvän fick reda på det så gick vårt förhållande sönder. Jag glömmer aldrig hennes blick."},
					{"text":"Största problemet för mig är att det är beroendeframkallande. Jag har inte köpt sex sen förra sommaren eftersom jag träffat en bra tjej men jag saknar verkligen sexköpandet och jag hoppas jag kan hålla mig borta från det framöver eftersom jag vill ta seriöst på förhållandet."},
					{"text":"Varför skulle man må dåligt? En trevlig stund med en trevlig tjej som dessutom får pengar för att knulla. Sen kan man göra kinky saker med en hora som man inte kan göra med frugan."},
					{"text":"Har du tänkt på att vissa människor kanske reser mycket och har inte tid med flickvän eller ha tid med att gå ut och ragga ett pök...<br/>Och i sådana lägen så passar en prostituerad bra."},
					{"text":"Klart man har läst saker om folk som tvingas till det. Jag har sett Lilja forever också. Men ingen av de jag gått till har tvingats till nåt, jag ger alltid pengarna direkt till henne så ingen hallick kommer och snor dem."},
					],
		"pretext":"Wall of text (citat)",
		"posttext":"To be coded",

	},
	{  	"ID": "1.1.2",
		"type":"info",
		"title":"Node 1.1.2",
		"background":{"type":"image","url":"bg2.jpg"},
		"image": [
			{"url":"1.1.2_bordell.png"} 
		]
			
	},  
	{  	"ID": "1.2.1",
		"type":"info", 
		"title":"Node 1.2.1",
		"background":{"type":"image","url":"bg3.jpg"},
		"image": [
			{"url":"1.2.1_macrostatistik.png"} 
		]
	}, 
	{  	"ID": "1.2.2",
		"type":"info", 
		"title":"Node 1.2.2",
		"background":{"type":"image","url":"bg4.jpg"},
		"image": [
			{"url":"1.2.2_microstatistik.png"} 
		]
	}, 
	{  	"ID": "1.2.3",
		"type":"info",
		"title":"Node 1.2.3",
		"background":{"type":"image","url":"bg.jpg"},
		"videos" : [{"videoURL":"http://player.vimeo.com/video/50650297"}					
					], 
		"pretext":"",
		"posttext":"Filmen om horan"
	}, 
	{  	"ID": "1.3.1",
		"type":"info", 
		"title":"Node 1.3.1",
		"background":{"type":"image","url":"bg2.jpg"},
		"image": [
			{"url":"1.3.1_insandare.png"} 
		]
	}, 
	{  	"ID": "1.3.2",
		"type":"info",
		"title":"Node 1.3.2",
		"background":{"type":"image","url":"bg3.jpg"},
		"videos" : [{"videoURL":"http://player.vimeo.com/video/50650297"}					
					], 
		"pretext":"",
		"posttext":"Intervju med polisman"
	}, 
	{  	"ID": "1.3.3",
		"type":"info",
		"title":"Node 1.3.3",
		"background":{"type":"image","url":"bg4.jpg"},
		"videos" : [{"videoURL":"http://player.vimeo.com/video/50650297"}					
					], 
		"pretext":"",
		"posttext":"Intervju med granne"
	},
	{  	"ID": "1.4.1",
		"type":"info", 
		"title":"Node 1.4.1",
		"background":{"type":"image","url":"bg.jpg"},
		"image": [
			{"url":"1.4.1_blogg.png"} 
		]
	}, 
	{  	"ID": "1.4.2",
		"type":"info",
		"title":"Node 1.4.2",
		"background":{"type":"image","url":"bg2.jpg"},
		"comic" : [	{"url":"1.4.2_bild1.jpg"},
					{"url":"1.4.2_bild2.jpg"},
					{"url":"1.4.2_bild3.jpg"},
					{"url":"1.4.2_bild4.jpg"},
					{"url":"1.4.2_bild5.jpg"}
					],
		"comic_row_height":"470px"
	
	},
	{  	"ID": "1.5.1",
		"type":"info",
		"title":"Node 1.5.1",
		"background":{"type":"image","url":"bg3.jpg"},
		"posttext":"Domen för de tre personer som åttalats för grovt koppleri och människohandel blev följande:</p><p>Den ungerska man och kvinna som ska ha övertalat de två kvinnorna att sälja sex i Sverige och därefter tagit större delen av de pengar som de tjänat, döms för grovt koppleri till 2 års fängelse. Åtalspunkten om människohandel ogillas då det vare sig kan bevisas att tvång eller hot använts, eller att kvinnorna var ovilliga att sälja sex i Sverige.</p><p>Åklagare yrkade på skadestånd om 80 000 kr till vardera av de utsatta kvinnorna, men domstolen sänkte kravet till 20 000 kr, med motiveringen att det inte kan uteslutas att kvinnorna lät sig föras till Sverige för att där kunna få höga skadestånd, för att därigenom kunna ta sig ur sin fattiga situation i hemlandet.</p><p>Den svenske man som lånat ut sin lägenhet för att sälja de två ungerska kvinnorna döms för koppleri till 10 månaders fängelse."	
},
{  	"ID": "1.5.2",
		"type":"info",
		"title":"Node 1.5.2",
		"background":{"type":"image","url":"bg4.jpg"},
		"comic" : [	{"url":"1.5.2_bild1.jpg"},
					{"url":"1.5.2_bild2.jpg"}
					],
		"comic_row_height":"273px"
	
	},

    ]
};


	return self;

})({});
