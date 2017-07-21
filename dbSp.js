arrayNome = [0,
	'Guerriero',
	'Samurai',
	'Crociato',
	'Berserker',
	'Gladiator',
	'Monaco Bellicoso',
	'Assaltatore',
	'Assassino',
	'Distruttore',
	'Guardiacaccia',
	'Cannoniere di Fuoco',
	'Esploratore',
	'Mago Rosso',
	'Mago Sacro',
	'Mago Blu',
	'Mago Nero',
	'Vulcano',
	'Signore delle Maree',
	'Pijama',
	'Jajamaru',
	'Costume del Pollo',
	'Pirata'
];

arrayElemento = [0,
	'Fuoco',
	'Acqua',
	'Luce',
	'Oscurità',
	'Fuoco',
	'Acqua',
	'Acqua',
	'Oscurità',
	'Fuoco',
	'Luce',
	'Fuoco',
	'Acqua',
	'Fuoco',
	'Luce',
	'Acqua',
	'Oscurità',
	'Fuoco',
	'Acqua',
	'Neutro',
	'Fuoco',
	'Neutro',
	'Neutro'
];

arrayDescrizione = [0,
	'Possiamo solo andare avanti.<br />Questo forte guerriero ha due spade e sgombra il terreno di battaglia.',
	'Guarda gli occhi dello spadaccino.<br />Ha un carattere violento, qualsiasi cosa si trova sulla sua strada viene eliminata.',
	'Volontà di ferro e fede nella giustizia!!!<br />Guardiano della giustizia che lotta contro il male.',
	'Costringe i nemici alla rassegnazione in modo lecito o illecito!<br />Il guerriero più forte sul campo di battaglia.',
	'Gladiator è specializzato soprattutto nelle battaglie PvP.<br />"Gente, gioite per la mia vittoria."',
	'Il Monaco Bellicoso è un maestro con la lancia.<br />"Con la potenza della mia lancia ripulirò questo mondo."',
	'Il potere della tempesta colpisce come il fulmine.<br />Il miglior cacciatore dalla mano veloce del mondo.',
	'Carattere violento nascosto dall\'ombra dell\'oscurità.<br />La bestia ferita non perde mai di vista il suo obbiettivo.',
	'Vagabondo che ama l\'avventura e l\'esplorazione!!<br />Il potere della distruzione che brucia con rabbia.',
	'La caccia selvaggia nella bellissima foresta!<br />Uccide nemici come posseduto da un istinto animalesco!',
	'Il Cannoniere di Fuoco è un ottimo conoscitore delle armi da fuoco.<br />"Il mio cannone è più potente di qualunque magia."',
	'L\'Esploratore è un asso con la balestra e un esperto nelle avanscoperte.<br />"Se conosci meglio te stesso e il tuo nemico puoi trionfare in ogni battaglia"',
	'Il simbolo della distruzione e della decadenza.<br />Ha venduto la sua anima per avere la fiamma ardente.',
	'Il protettore della luce.',
	'Il Cuore di ghiaccio e il freddo nel mio corpo!!<br />Il potere del freddo congela tutto!!',
	'Il Mago Oscuro che utilizza la Magia Oscura Proibita!<br />Apri la porta alla Morte con la potenza del Diavolo!',
	'Vulcano è un mago fuori dal comune, che riesce a convogliare le forze della terra e del fuoco.<br />"La mia magia porta gli altri alla rovina."',
	'Il Signore delle Maree<br />Impera sulla forza dell\'oceano.<br />"Vedi la mia forza dagli abissi del mare."',
	'Hey!! Goditi la vita.<br />Perchè preoccuparsi? Divertiti.',
	'Il ritorno della leggenda!!<br />Il Jajamaru arriva su NosTale per salvare la principessa Sakura!!',
	'Coccodè!<br />Coccodè!',
	'Ora puoi trasformarti in un pirata!<br />Arrgh!'
];

arrayResFire = [0,'4','3','3','3','15','3','0','3','14','2','17','5','17','4','2','2','17','3','0','8','0','0'];

arrayResWater = [0,'13','11','2','2','4','16','9','3','5','4','2','14','0','4','17','1','4','14','0','0','0','0'];

arrayResLight = [0,'0','8','5','1','0','3','10','0','0','13','2','5','0','4','1','0','0','4','0','0','0','0'];

arrayResDark = [0,'0','0','13','15','4','2','0','16','0','1','4','3','0','16','1','16','6','0','0','3','0','0'];


arrayMoon = ['1','3','5','7','10','12','14','16','18','20','22','24','26','28','30','Tante'];

arrayWing = ['3','5','8','10','15','20','25','30','35','40','45','50','55','60','70','Tutte'];

arrayRequestMate = ['2','4','6','8','10','1','2','3','4','5','1','2','3','4','5','WTF?'];

//arry per la scritta della descrizione

arrayWin = ['80%','75%','70%','60%','50%','40%','35%','30%','25%','20%','??','??','??','??','??','Impossibile'];

arrayCrash = ['0%','0%','5%','10%','15%','20%','25%','30%','35%','40%','??','??','??','??','??','Assicurata'];

arrayFail = ['20%','25%','25%','30%','35%','40%','40%','40%','40%','40%','??','??','??','??','??','Costante'];

//array criptato in base64 aggiungendo un = alla fine, quando si richiama si decripta il numero
//win = a, crash = b, fail = c

a = ['ODA=','NzU=','NzA=','NjA=','NTA=','NDA=','MzU=','MzA=','MjU=','MjA=','MTA=','Nw==','NQ==','Mw==','MQ=='];
b = ['MjA=','MjU=','MzA=','NDA=','NTA=','NjA=','NjU=','NzA=','NzU=','ODA=','OTA=','OTM=','OTU=','OTc=','OTk='];
c = ['MjA=','MjU=','MjU=','MzA=','MzU=','NDA=','NDA=','NDA=','NDA=','NDA=','NDU=','NDM=','NDA=','Mzc=','Mjk='];

//array per varSucc 
/*
	varArraySucc = ['80','75','70','60','50','40','35','30','25','20','10','7',5,3,1,0];
	
	//array per varProb
	varArrayProb = [20,25,30,40,50,60,65,70,75,80,90,93,95,97,99,0];
	
	//array per varFall
	varArrayFall = [20,25,25,30,35,40,40,40,40,40,45,43,40,37,29];*/