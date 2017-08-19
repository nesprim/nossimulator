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
	'Oscurità',
	'Luce',
	'Acqua',
	'Oscurità',
	'Fuoco',
	'Luce',
	'Fuoco',
	'Acqua',
	'Oscurità',
	'Luce',
	'Fuoco',
	'Luce',
	'Acqua',
	'Oscurità',
	'Fuoco',
	'Acqua',
	'Oscurità',
	'Luce',
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
	'La mano destra del diavolo "Tutto va<br />avanti in un modo o nell\'altro..."',
    'Scudo divino e Guardiano della Luce.<br />"La mia lama si macchierà di sangue."',
	'Il potere della tempesta colpisce come il fulmine.<br />Il miglior cacciatore dalla mano veloce del mondo.',
	'Carattere violento nascosto dall\'ombra dell\'oscurità.<br />La bestia ferita non perde mai di vista il suo obbiettivo.',
	'Vagabondo che ama l\'avventura e l\'esplorazione!!<br />Il potere della distruzione che brucia con rabbia.',
	'La caccia selvaggia nella bellissima foresta!<br />Uccide nemici come posseduto da un istinto animalesco!',
	'Il Cannoniere di Fuoco è un ottimo conoscitore delle armi da fuoco.<br />"Il mio cannone è più potente di qualunque magia."',
	'L\'Esploratore è un asso con la balestra e un esperto nelle avanscoperte.<br />"Se conosci meglio te stesso e il tuo nemico puoi trionfare in ogni battaglia"',
	'Un cacciatore che ha sottoscritto un contratto con il diavolo in persona.<br />"Ho venduto la mia anima... e distruggerò tutti i demoni."',
	'Membro dell\'unità militare divina e Guardiano dell\'empireo azzurro.<br />"La mia spada è la volontà del Signore.',
	'Il simbolo della distruzione e della decadenza.<br />Ha venduto la sua anima per avere la fiamma ardente.',
	'Il protettore della luce.',
	'Il Cuore di ghiaccio e il freddo nel mio corpo!!<br />Il potere del freddo congela tutto!!',
	'Il Mago Oscuro che utilizza la Magia Oscura Proibita!<br />Apri la porta alla Morte con la potenza del Diavolo!',
	'Vulcano è un mago fuori dal comune, che riesce a convogliare le forze della terra e del fuoco.<br />"La mia magia porta gli altri alla rovina."',
	'Il Signore delle Maree<br />Impera sulla forza dell\'oceano.<br />"Vedi la mia forza dagli abissi del mare."',
	'Ricercatore di magia oscura "Ogni creatura<br />mi seguirà per la strada... non importa dove."',
	'Ha acquisito la Forza concentrata di Dio.<br />"Il signore disse: sii la luce stessa."',
	'Hey!! Goditi la vita.<br />Perchè preoccuparsi? Divertiti.',
	'Il ritorno della leggenda!!<br />Il Jajamaru arriva su NosTale per salvare la principessa Sakura!!',
	'Coccodè!<br />Coccodè!',
	'Ora puoi trasformarti in un pirata!<br />Arrgh!'
];

arrayResFire = [0,'4','3','3','3','15','3','5','2','0','3','14','2','17','5','4','3','17','4','2','2','17','5','5','5','0','8','0','0'];

arrayResWater = [0,'13','11','2','2','4','16','4','2','9','3','5','4','2','14','3','4','0','4','17','1','4','16','2','5','0','0','0','0'];

arrayResLight = [0,'0','8','5','1','0','3','2','12','10','0','0','13','2','5','6','18','0','4','1','0','0','6','5','15','0','0','0','0'];

arrayResDark = [0,'0','0','13','15','4','2','18','12','0','16','0','1','4','3','16','2','0','16','1','16','6','2','17','6','0','3','0','0'];


arrayMoon = ['1','3','5','7','10','12','14','16','18','20','22','24','26','28','30','//'];

arrayWing = ['3','5','8','10','15','20','25','30','35','40','45','50','55','60','70','//'];

arrayRequestMate = ['2','4','6','8','10','1','2','3','4','5','1','2','3','4','5','//'];

//arry per la scritta della descrizione

arrayWin = ['80%','75%','70%','60%','50%','40%','35%','30%','25%','20%','??','??','??','??','??','N/A'];

arrayCrash = ['0%','0%','5%','10%','15%','20%','25%','30%','35%','40%','??','??','??','??','??','N/A'];

arrayFail = ['20%','25%','25%','30%','35%','40%','40%','40%','40%','40%','??','??','??','??','??','N/A'];

//array criptato in base64 aggiungendo un = alla fine, quando si richiama si decripta il numero
//win = a, crash = b, fail = c

a = ['ODA=','NzU=','NzA=','NjA=','NTA=','NDA=','MzU=','MzA=','MjU=','MjA=','MTA=','Nw==','NQ==','Mw==','MQ=='];
b = ['MjA=','MjU=','MzA=','NDA=','NTA=','NjA=','NjU=','NzA=','NzU=','ODA=','OTA=','OTM=','OTU=','OTc=','OTk='];
c = ['MjA=','MjU=','MjU=','MzA=','MzU=','NDA=','NDA=','NDA=','NDA=','NDA=','NDU=','NDM=','NDA=','Mzc=','Mjk='];

//array per varSucc 
/*
	varArraySucc = ['80','75','70','60','50','40','35','30','25','20','10','7',5,3,1,0];

	varArrayCrash = [20,25,30,40,50,60,65,70,75,80,90,93,95,97,99,0];

	varArrayFall = [20,25,25,30,35,40,40,40,40,40,45,43,40,37,29];*/