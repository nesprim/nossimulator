$(document).ready(function(){
$(function($){
	
	//estensione per calcolo probabilità
	jQuery.extend({
        rand: function(val) {
            return Math.floor(val * (Math.random() % 1));
		}
	});
	
	//inizializzo le var globali
	varID = 0;
	varRar = 0;
	varUp = 0;
	// assegno gli id alle img piccole
	
	$('#fake1 div a img').attr('id', function (arr) { return arr+1 ; });
	$('#fake2 div a img').attr('id', function (arr) { return arr+1 ; });
	$('#fake3 div a img').attr('id', function (arr) { return arr+1 ; });
	$('#fake4 div a img').attr('id', function (arr) { return arr+1 ; });
	$('#fake5 div a img').attr('id', function (arr) { return arr+1 ; });
	$('#fake6 div a img').attr('id', function (arr) { return arr+1 ; });
	$('#fake7 div a img').attr('id', function (arr) { return arr+1 ; });
	$('#fake8 div a img').attr('id', function (arr) { return arr+1 ; });
	$('#fake9 div a img').attr('id', function (arr) { return arr+1 ; });
	
	
	
	
	
	
//assegnazione
	$('.botton').click(CambioClasse);
	$('.arrow').hover(MoveArrow());
	$('.fake div a img').click(GetImg);
	$('#bottonUp').click(bottonUp);
	$('#bottonRar').click(bottonRar);
	$('#wrapperBottonUp div').click(GetUp);
	$('#wrapperBottonRar div').click(GetRar);
	$('#theBottonUp').click(GetBotUp);
	$('#theBottonRar').click(GetBotRar);
	$('#bottonListRar').click(listOpenRar);
	$('#closeListRar a').click(listCloseRar);


// funzioni

//##########################################################################################àà
// funzione per lo spostamento delle armi a destra e a sinistra
	function MoveArrow(){
	$('#arrowSx').mouseenter(function(){
			$('#fake'+varClasse).animate({marginLeft: '0px'}, arrayTempBanner[varClasse], 'linear');
	}); 
	$('#arrowSx').mouseleave(function() {
			$('#fake'+varClasse).stop();
	});
		
	$('#arrowDx').mouseenter(function(){
			$('#fake'+varClasse).animate({marginLeft:'-'+ arrayBanner[varClasse]+'px'}, arrayTempBanner[varClasse], 'linear');
	}); 
	$('#arrowDx').mouseleave(function() {
			$('#fake'+varClasse).stop();
	});
	};
	
// funzione per cambiare la classe della armi

	function CambioClasse(){
		var varClass = $(this).attr('id');
		var varClass = varClass.substr(6,1);
		varClasse = varClass;
		$('.fake').css('display','none');
		$('#fake'+varClass).css('display','block');
		
		//per far comparire le frecce
		var stringIf = $('.arrow').css('display');
		if(stringIf == 'none'){
			$('.arrow').css('display','block');
		}
		else{
		};
	};


//#########################################################################################################
//##########################################################################################################
//##########################################################################################################
	
//get immagini dell equip
	function GetImg(){
		varID = $(this).attr('id');
		varRar = 0;
		varUp = 0;
		varController = 1;
		firstControl();
		equipNoUpControl(varID); //controlla se l'equip è un 90+10, non uppabile, o no. nel caso nasconde up e icona up
		descrizione(varID, varRar, varUp, varController);
		malcom(varID, varUp, varRar);
			varFallimentiUp = 0;
			varBloccoUp = 0;
			varSoldiUp = 0;
			varGemma1Up = 0;
			varGemma2Up = 0;
			varPolveriUp = 0;
			
			varFallimentiRar = 0;
			varRaroRar = 0;
			varSoldiRar = 0,
			varPolveriRar = 0;
		statistiche1(varID, varUp, varRar);
		statistiche2(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
		annullaListRar();
	};

//get se clicchi i bottoni per scegliere l'up
	function GetUp(){
		varUp = $(this).attr('id');
		//prelevo solo il numero dell'up
		var varLength = varUp.length-2;
		varUp = varUp.substr(2, varLength);
		varUp = parseInt(varUp);
		varController = 0;
		descrizione(varID, varRar, varUp, varController);
		malcom(varID, varUp, varRar);
			varFallimentiUp = 0;
			varBloccoUp = 0;
			varSoldiUp = 0;
			varGemma1Up = 0;
			varGemma2Up = 0;
			varPolveriUp = 0;
			
			varFallimentiRar = 0;
			varRaroRar = 0;
			varSoldiRar = 0;
			varPolveriRar = 0;
		statistiche2(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp,varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
	};
	
//get se clicchi i bottoni per scegliere l'up
	function GetRar(){
		varRar = $(this).attr('id');
		//prelevo solo il numero della rarità
		varRar = varRar.substr(3, 1);
		varController = 1;
		descrizione(varID, varRar, varUp, varController);
		malcom(varID, varUp, varRar);
			varFallimentiUp = 0;
			varBloccoUp = 0;
			varSoldiUp = 0;
			varGemma1Up = 0;
			varGemma2Up = 0;
			varPolveriUp = 0;
			
			varFallimentiRar = 0;
			varRaroRar = 0;
			varSoldiRar = 0;
			varPolveriRar = 0;
		statistiche2(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
		annullaListRar();
	};

// get botton up
	function GetBotUp(){
		varOggUp = {
			up : varUp,
			fail : varFallimentiUp,
			bloc : varBloccoUp,
			soldi : varSoldiUp,
			gemma1 : varGemma1Up,
			gemma2 : varGemma2Up,
			polveri : varPolveriUp,
			controls : 0
		};
		loading(); //oscura lo schermo e mostra il loading
		calcoloUp(varUp); //calcola se fallisce o no e cambia le var
			
			varUp = varOggUp.up;
			varFallimentiUp = varOggUp.fail;
			varBloccoUp = varOggUp.bloc;
			varSoldiUp = varOggUp.soldi;
			varGemma1Up = varOggUp.gemma1;
			varGemma2Up = varOggUp.gemma2;
			varPolveriUp = varOggUp.polveri;
			varControls = varOggUp.controls;
			
			setTimeout(function(){
				bannerUp(varID, varUp, varRar, varControls);
				varController = 0;
				descrizione(varID, varRar, varUp, varController);
				malcom(varID, varUp, varRar);
				statistiche2(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
			}, 1700);
	};

//get botton rar
	function GetBotRar(){
		varOggRar = {
			rar : varRar,
			fail : varFallimentiRar,
			raro : varRaroRar,
			soldi : varSoldiRar,
			polveri : varPolveriRar,
			control : 0
		};
		loading(); //oscura lo schermo e mostra il loading
		calcoloRar(varRar); //calcola se fallisce o no e cambia le var
		//calcoloRar(varUp); //calcola se fallisce o no e cambia le var
			varRar  = varOggRar.rar;
			varFallimentiRar = varOggRar.fail;
			varRaroRar = varOggRar.raro;
			varSoldiRar = varOggRar.soldi;
			varPolveriRar = varOggRar.polveri;
			varControl = varOggRar.control;
		
		setTimeout(function(){
				bannerRar(varID, varUp, varRar, varControl);
				
				if(varControl == 0){
					varController = 1;
				}
				else{
					varController = 0;
				};
				
				descrizione(varID, varRar, varUp, varController);
				malcom(varID, varUp, varRar);
				statistiche2(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
				listRar(varRar, varControl);
			}, 1700);
	};


// funzione per il bottone up

	function bottonUp(){
		var wrapperUp = $('#wrapperBottonUp').css('display');
		var wrapperRar = $('#wrapperBottonRar').css('display');
		
		if(wrapperUp == 'none' && wrapperRar == 'none'){
			$('#wrapperBottonUp').css('display','block');
			$('#bottonUp img').attr('src','imgEquip/equipHover.jpg');
			$('#bottomMiddleUp').css('display','block');
		}
		else if(wrapperUp =='none' && wrapperRar == 'block'){
			$('#wrapperBottonRar').css('display','none');
			$('#wrapperBottonUp').css('display','block');
			$('#bottomMiddleUp').css('display','block');
			$('#bottonRar img').attr('src','imgEquip/raro.jpg');
			$('#bottonUp img').attr('src','imgEquip/equipHover.jpg');
			$('#bottomMiddleRar').css('display','none');
		}
		else {
		};
	};
	
//funzione per il bottone rar

	function bottonRar(){
		var wrapperRar = $('#wrapperBottonRar').css('display');
		var wrapperUp = $('#wrapperBottonUp').css('display');
		
		if (wrapperRar == 'none' && wrapperUp == 'none'){
			$('#wrapperBottonRar').css('display','block');
			$('#bottonRar img').attr('src','imgEquip/raroHover.jpg');
			$('#bottomMiddleRar').css('display','block');
		}
		else if(wrapperRar == 'none' && wrapperUp == 'block'){
			$('#wrapperBottonUp').css('display','none');
			$('#wrapperBottonRar').css('display','block');
			$('#bottomMiddleRar').css('display','block');
			$('#bottonUp img').attr('src','imgEquip/equip.jpg');
			$('#bottonRar img').attr('src','imgEquip/raroHover.jpg');
			$('#bottomMiddleUp').css('display','none');
		}
		else {
		};
	};


//################################################################################################à
// controlla che al click delle armi appaiono i div
	function firstControl(){
		// se wrapper left è nascosto mostro tutti
		var wrapperLeft = $('#wrapperLeft').css('display');
		if(wrapperLeft == 'none'){
			$('#wrapperLeft, #wrapperMiddle, #wrapperRight').css('display','block');
		}
	};
	
//nasconde l'up se è 90+10
	function equipNoUpControl(varID){
		varID = varID;
	//lista id
	//arma(36) - amra2(20) - armor(29)
		if(varClasse >= 1 && varClasse <= 3){ //armi primarie
			if(varID == 36){
				bottonRar();
				$('#leftBottomMiddle #bottonUp').css('visibility','hidden');
			}
			else {
				$('#leftBottomMiddle #bottonUp').css('visibility','visible');
			};
		}
		else if(varClasse >= 4 && varClasse <= 6){ //armi secondarie
			if(varID == 20){
				bottonRar();
				$('#leftBottomMiddle #bottonUp').css('visibility','hidden');
			}
			else {
				$('#leftBottomMiddle #bottonUp').css('visibility','visible');
			};
		}
		else { //armature
			if(varID == 29){
				bottonRar();
				$('#leftBottomMiddle #bottonUp').css('visibility','hidden');
			}
			else {
				$('#leftBottomMiddle #bottonUp').css('visibility','visible');
			};
		};
	};
	
	
//#############################################################
//-------------------------------------------------------
//#############################################################

//funzione per cambiare il riquadro a sinistra, della descrizione
	function descrizione(varID, varRar, varUp, varController){
		/*cambio immagine*/
		var varSrcImg = 'imgEquip/'+arrayClasse[varClasse]+'/'+varID+'.jpg';
		var varNameImg = arrayName[varClasse][varID];
		$('#wrapperImgSmall img').attr({
		src: varSrcImg,
		alt: varNameImg,
		title: varNameImg
		});
		var varTitle = arrayName[varClasse][varID];
		var varTestoRar = arrayRar[varRar];
		var varTestoUp = arrayUp[varUp];
		var varName = varTestoRar+' '+varTitle+' '+varTestoUp;
		
		//varNumbArray1 else per il livello da scrivere sotto il nome
		var varNumbArrayLv = Math.floor((varClasse -1)/3)+1;
		var varLv = arrayLv[varNumbArrayLv][varID];
		//creo una copia da usare nell'algoritmo dopo
			var varLvCopia = varLv;
		var varLv = 'Lv.'+varLv;
		
		//calcolo rarità
		//calcolo up
		//cambiamenti
		$('#wrapperLeft #name').text(varName);
		$('#wrapperLeft #lv').text(varLv);
		//colore in base alla rarità
		var varColorRar = arrayColorRar[varRar];
		$('#wrapperLeft #name').css('color', varColorRar);
		
		//calcolo dei danni
		//rarità
		var varFattoreForza = arrayFattoreForza[varRar];
		var A = varLvCopia/5;
		var B = A+1;
		var C = B*varFattoreForza;
		var D = Math.floor(C);
		var statisticheAggiuntive = D;
		
		//if else per la tipologia e il danno
	//###########################################################################################
	
	//##############################################################################################
	
	//############################################################################################
	//ARMA ################################################
	
	if(varClasse >= 1 && varClasse <= 6){ //ARMA ################################################
		
			
		var varAggiuntaDanno = 0;
		var varAggiuntaHit = 0;
		var numberCasual = 0;
		
		//algoritmo per dividere l'aggiunta tra danno e hitrate/concentrazione
		for(z=1;z<=statisticheAggiuntive;z++){
			var numberCasual = $.rand(2)+1; //o 1 o 2
			if(numberCasual == 1){
				var varAggiuntaDanno = varAggiuntaDanno+1;
			}
			else{
				var varAggiuntaHit = varAggiuntaHit+1;
			};
		};
		//tolgo il danno per r-1(-10) e r-2(-20)
			if(varRar == 8){ //r-1
				var varAggiuntaDanno = -10;
			}
			else if(varRar == 9){ //r-2
				var varAggiuntaDanno = -20;
			};
			
		//##########################################################
		//assegnazione var
			//se è fallito mostra i danni con le aggiunte prese dalla copia, che se non sostituisce saranno quelle vecchie
				var varDannoMin = arrayDannoMin[varClasse][varID];
				var varDannoAggiuntivo = arrayDannoAggiuntivo[varClasse][varID];
				var varHitRate = arrayHitRate[varClasse][varID];
				
				//aumento in base a rarità
				
				//se è fallito non sostituisce la copia
			if(varController == 1){
				varAggiuntaDannoCopia = varAggiuntaDanno;
				varAggiuntaHitCopia = varAggiuntaHit;
				
				var varDannoMin = varDannoMin+varAggiuntaDanno;
				var varHitRate = varHitRate+varAggiuntaHit;
				var varConcentrazione = varConcentrazione+varAggiuntaHit;
			}
			else {
				var varDannoMin = varDannoMin+varAggiuntaDannoCopia;
				var varHitRate = varHitRate+varAggiuntaHitCopia;
				var varConcentrazione = varConcentrazione+varAggiuntaHitCopia;
			};
			
				var varDannoMax = varDannoMin+varDannoAggiuntivo;
				var varScrittaUp = arrayScrittaUp[varUp];
				var varProbCritico = arrayProbCritico[varClasse][varID];
				var varDannoCritico = arrayDannoCritico[varClasse][varID];
				//per scettro
				var varConcentrazione = 70;
				//var numbArrayPrezzo per sapere se è arma primaria,secondaria o armatura, dà 1 2 o 3
				var varClasseBox = varClasse;
				var varNumbArrayPrezzo = Math.floor((varClasseBox -1)/3)+1;
				var varPrezzo = arrayPrezzo[varNumbArrayPrezzo][varID];
				var varEffetto = arrayEffetto[varClasse][varID];
				var varDescrizione = arrayDescrizione[varClasse][varID];
				
				//variabile che assegna o no il <br/> in base a se cè l'effetto o no
					if(varEffetto == ''){ //non cè alcun effetto quindi  niente <br />
						var varBrOpzionale = '';
					}
					else { //cè l'effetto quindi si mette <br />
						var varBrOpzionale = '<br />';
					};
				//variabile che assegna le munizioni se ci sono
					if(varClasse == 1 || varClasse == 5){//arco e blestra hanno munizioni
						var varMunizioniOpzionali = $.rand(101); //da 0 a 100 quindi 101 numeri 1-100 + lo 0
						var varMunizioniOpzionali = '<p class="dannoColor">Munizioni: '+varMunizioniOpzionali+'/100</p>';
					}
					else {//spada, pugnale e pistola non hanno munizioni
						var varMunizioniOpzionali = '';
					};
		
		//################ stabilire se è scettro o arma per mostrare la grafica differente
			if(varClasse == '3'){ //scettro ha configurazione a parte - danno e concentrazione
			
				$('#wrapperLeft #wrapperDamage').html('<p class="rangeDannoColor">Danno: '+varDannoMin+' - '+varDannoMax+' '+varScrittaUp+'</p><p class="dannoColor">Concentrazione: '+varConcentrazione+'</p><br /><p class="prezzoColor">'+varPrezzo+'</p><br /><p class="effettoColor">'+varEffetto+'</p>'+varBrOpzionale+'<p>'+varDescrizione+'</p>');
			}
			
	//##########################################################################à
			else { //arco spada e secondarie hanno tutte danno, hit e critico
				
					$('#wrapperLeft #wrapperDamage').html('<p class="rangeDannoColor">Danno: '+varDannoMin+' - '+varDannoMax+' '+varScrittaUp+'</p><p class="dannoColor">Hit Rate: '+varHitRate+'</p><p class="dannoColor">'+varProbCritico+'% Cambio di '+varDannoCritico+'% critico</p>'+varMunizioniOpzionali+'<br /><p class="prezzoColor">'+varPrezzo+'</p><br /><p class="effettoColor">'+varEffetto+'</p>'+varBrOpzionale+'<p>'+varDescrizione+'</p>');	
			};
			
			//cambia colore al danno se è uppato
			if(varUp > 0){ //se è uppato
				$('#wrapperLeft  #wrapperDamage .rangeDannoColor').css('color','#cf3');
			}
			else { //se è +0
				$('#wrapperLeft  #wrapperDamage .rangeDannoColor').css('color','#fe9');
			}
		
		}
		
	//###########################################################################################
	
	//##############################################################################################
	
	//############################################################################################
	
	else{ //CORAZZA ########################################################
	
		
		var varAggiuntaCorpo = 0;
		var varAggiuntaDistanza = 0;
		var varAggiuntaMagia = 0;
		var varAggiuntaElusione = 0;
		
		//algoritmo per dividere l'aggiunta tra le dif e l'elusione
		for(z=1;z<=statisticheAggiuntive;z++){
			var numberCasual = $.rand(4)+1; //o 1 o 2 o 3 o 4
			if(numberCasual == 1){
				var varAggiuntaCorpo = varAggiuntaCorpo+1;
			}
			else if(numberCasual == 2){
				var varAggiuntaDistanza = varAggiuntaDistanza+1;
			}
			else if(numberCasual == 3){
				var varAggiuntaMagia = varAggiuntaMagia+1;
			}
			else { // 4
				var varAggiuntaElusione = varAggiuntaElusione+1;
			};
		};
		
		//tolgo il danno per r-1(-10) e r-2(-20)
			if(varRar == 8){ //r-1
				var varAggiuntaCorpo = -10;
				var varAggiuntaDistanza = -10;
				var varAggiuntaMagia = -10;
			}
			else if(varRar == 9){ //r-2
				var varAggiuntaCorpo = -20;
				var varAggiuntaDistanza = -20;
				var varAggiuntaMagia = -20;
			};
			
		var varDifesaCorpo = arrayDifesaCorpo[varClasse][varID];
		var varDifesaDistanza = arrayDifesaDistanza[varClasse][varID];
		var varDifesaMagia = arrayDifesaMagia[varClasse][varID];
		var varElusione = arrayElusione[varClasse][varID];
		//aumento in base a rarità
		
		if(varController == 1){
			var varDifesaCorpoCopia = varDifesaCorpo+varAggiuntaCorpo;
			var varDifesaDistanzaCopia = varDifesaDistanza+varAggiuntaDistanza;
			var varDifesaMagiaCopia = varDifesaMagia+varAggiuntaMagia;
			var varElusioneCopia = varElusione+varAggiuntaElusione;
			
			var varDifesaCorpo = varDifesaCorpo+varAggiuntaCorpo;
			var varDifesaDistanza = varDifesaDistanza+varAggiuntaDistanza;
			var varDifesaMagia = varDifesaMagia+varAggiuntaMagia;
			var varElusione = varElusione+varAggiuntaElusione;
		}
		else {
			var varDifesaCorpo = varDifesaCorpoCopia+varAggiuntaCorpo;
			var varDifesaDistanza = varDifesaDistanzaCopia+varAggiuntaDistanza;
			var varDifesaMagia = varDifesaMagiaCopia+varAggiuntaMagia;
			var varElusione = varElusioneCopia+varAggiuntaElusione;
		};
		
		
		var varScrittaUp = arrayScrittaUp[varUp];
		
		//var numbArrayPrezzo per sapere se è arma primaria,secondaria o armatura, dà 1 2 o 3
			var varClasseBox = varClasse;
			var varNumbArrayPrezzo = Math.floor((varClasseBox -1)/3)+1;
			var varPrezzo = arrayPrezzo[varNumbArrayPrezzo][varID];
			var varEffetto = arrayEffetto[varClasse][varID];
			var varDescrizione = arrayDescrizione[varClasse][varID];
			
		//variabile che assegna o no il <br/> in base a se cè l'effetto o no
			if(varEffetto == ''){ //non cè alcun effetto quindi  niente <br />
				var varBrOpzionale = '';
			}
			else { //cè l'effetto quindi si mette <br />
				var varBrOpzionale = '<br />';
			};
			
			
		//cambiamento grafico
		/*
		$('#wrapperLeft #wrapperDamage').html('<p class="rangeDannoColor">Danno: '+varDannoMin+' - '+varDannoMax+' '+varScrittaUp+'</p><p class="dannoColor">Hit Rate: '+varHitRate+'</p><p class="dannoColor">'+varProbCritico+'% Cambio di '+varDannoCritico+'% critico</p>'+varMunizioniOpzionali+'<br /><br /><p class="prezzoColor">'+varPrezzo+'</p><br /><br /><p class="effettoColor">'+varEffetto+'</p>'+varBrOpzionale+'<p>'+varDescrizione+'</p>');
		*/
		$('#wrapperLeft #wrapperDamage').html('<p class="rangeArmorColor">Lotta corpo a corpo Difesa: '+varDifesaCorpo+'<br />'+varScrittaUp+'</p><p class="rangeArmorColor">Attacco a Distanza Difesa: '+varDifesaDistanza+'<br />'+varScrittaUp+'</p><p class="rangeArmorColor">Magia Difesa: '+varDifesaMagia+' '+varScrittaUp+'</p><p>Elusione: '+varElusione+'</p><br /><p class="prezzoColor">'+varPrezzo+'</p><br /><p class="effettoColor">'+varEffetto+'</p>'+varBrOpzionale+'<p>'+varDescrizione+'</p>');
		
		//cambia colore al danno se è uppato
			if(varUp > 0){ //se è uppato
				$('#wrapperLeft  #wrapperDamage .rangeArmorColor').css('color','#c93');
			}
			else { //se è +0
				$('#wrapperLeft  #wrapperDamage .rangeArmorColor').css('color','#fe9');
			}
		};
	};
	
	
//###################################################################################à
//------------------------------------------------------------------------------------
//###############################################################################

//cambia Malcom
function malcom(varID, varUp, varRar){
	var varNameCartella = arrayClasse[varClasse];
	var varImg = 'imgEquip/'+varNameCartella+'/'+varID+'.jpg';
	var varTitle = arrayName[varClasse][varID];
	
		//cambio img in entrambi
		$('#wrapperImgMalcomUp img').attr({
			src: varImg,
			alt: varTitle,
			title: varTitle
		});
		$('#wrapperMateImgRar img').attr({
			src: varImg,
			alt: varTitle,
			title: varTitle
		});
	
	//cambio probabilità
	
	var varProbSuccessoText = arrayProbSuccessoText[varUp];
	var varProbBloccatoText = arrayProbBloccatoText[varUp];
	var varProbFallitoText = arrayProbFallitoText[varUp];
	
	$('#wrapperProbMalcomUp #probSuccesso').text(varProbSuccessoText);	
	$('#wrapperProbMalcomUp #probBloccato').text(varProbBloccatoText);
	$('#wrapperProbMalcomUp #probFallito').text(varProbFallitoText);
	//cambiamenti UP
	//cambio immagine della gemma dopo il +5
	if(varUp >= 5 && varUp < 10){ //da + in poi serve anima intera
		$('#wrapperMateDestro img').attr({
			src: 'imgEquip/gemma2.jpg',
			alt: "Gemma dell'Anima Intera",
			title: "Gemma dell'Anima Intera"
		});
	}
	else if(varUp == 10){ //se è +10
		$('#wrapperMateDestro img').attr({
			src: 'imgEquip/gemma3.jpg',
			alt: "Gemma di Arale",
			title: "Gemma di Arale"
		});
	}
	else {
		$('#wrapperMateDestro img').attr({
			src: 'imgEquip/gemma1.jpg',
			alt: "Gemma dell'Anima",
			title: "Gemma dell'Anima"
		});
	};
	// cambio immagine gemma al r7
	if(varRar == 7){
		$('#wrapperMateRar #wrapperMateOroRar p').text('-1');
		
		$('#wrapperMateRar #wrapperMatePolvRar img').attr({
			src: 'imgEquip/polvere.jpg',
			alt: "Zafferano",
			title: "Zafferano"
		});
		$('#wrapperMateRar #wrapperMatePolvRar p').text('Quattordici');
	}
	else {
		$('#wrapperMateRar #wrapperMateOroRar img').attr({
			src: 'imgEquip/oro.jpg',
			alt: "Oro",
			title: "Oro"
		});
		$('#wrapperMateRar #wrapperMateOroRar p').text('500');
		
		$('#wrapperMateRar #wrapperMatePolvRar img').attr({
			src: 'imgEquip/polvere.jpg',
			alt: "Polvere",
			title: "Polvere del Sottosuolo"
		});
		$('#wrapperMateRar #wrapperMatePolvRar p').text('500');
	};
	//cambio delle scritte sotto i mate
	if(varUp >= 0 && varUp < 10){
	var varQuantSoldi = arrayQuantSoldi[varUp];
	var varQuantPolvere = arrayQuantPolvere[varUp];
	var varQuantGemma = arrayQuantGemma[varUp];
		var fixQuantSoldi = $.number(varQuantSoldi, 0);
		var fixQuantPolvere = $.number(varQuantPolvere, 0);
		var fixQuantGemma = $.number(varQuantGemma, 0);
	}
	else { //se è +10
		var fixQuantSoldi = 'Infiniti';
		var fixQuantPolvere = 'Troppe';
		var fixQuantGemma = 'WTF?';
	}
	//soldi
	$('#wrapperMateSinistro p').text(fixQuantSoldi);
	//polvere
	$('#wrapperMateCentrale p').text(fixQuantPolvere);
	//gemme
	$('#wrapperMateDestro p').text(fixQuantGemma);
	
	//quando è +10 nascone il botton up
	if(varUp == 10){
		$('.wrapperTheBotton #theBottonUp').css('display','none');
	}
	else{
		$('.wrapperTheBotton #theBottonUp').css('display','block');
	};
	
	//quando è r7 nasconde il botton rar
	if(varRar == 7){
		$('.wrapperTheBotton #theBottonRar').css('display','none');
	}
	else{
		$('.wrapperTheBotton #theBottonRar').css('display','block');
	};
};

//###################################################################################à
//------------------------------------------------------------------------------------
//###############################################################################

//cambia solo il primo titolo e non verrà richiamato dall'up ma solo al cambio arma/rar/up
function statistiche1(varID, varUp, varRar){
	
	var varTitle = arrayName[varClasse][varID];
	var varTestoRar = arrayRar[varRar];
	var varTestoUp = arrayUp[varUp];
	var varName = varTestoRar+' '+varTitle+' '+varTestoUp;
	
	$('#wrapperRight #sezione1').html('<p>Hai iniziato con un:</p><p class="titoloStatistiche"><b>'+varName+'</b></p>');
};

//cambia statistiche (riquadro a destra) tranne il primo titolo che è di statistiche1
function statistiche2(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar){
	var varTitle = arrayName[varClasse][varID];
	var varTestoRar = arrayRar[varRar];
	var varTestoUp = arrayUp[varUp];
	var varName = varTestoRar+' '+varTitle+' '+varTestoUp;
		
	var varFallimentiTotali = varFallimentiUp+varBloccoUp;
	var varScorrevoli = varFallimentiTotali;
	if(varRaroRar > 0){
		var varRaroRar = varRaroRar -1;
	}
	else {
	};
	var varAmuleti = Math.ceil(varFallimentiRar/3);
		
		//fix per mettere i numeri puntati es. 1000 = 1.000
		var fixFallimentiTotali = $.number(varFallimentiTotali, 0);
		var fixLivelliBloccati = $.number(varBloccoUp, 0);
		var fixFallimentiUp = $.number(varFallimentiUp, 0);
		var fixSoldiUp = $.number(varSoldiUp, 0);
		var fixGemma1 = $.number(varGemma1Up, 0);
		var fixGemma2 = $.number(varGemma2Up, 0);
		var fixPolveriUp = $.number(varPolveriUp, 0);
		var fixScorrevoli = $.number(varScorrevoli, 0);
		var fixFallimentiRar = $.number(varFallimentiRar, 0);
		var fixRaro = $.number(varRaroRar, 0);
		var fixSoldiRar = $.number(varSoldiRar, 0);
		var fixPolveriRar = $.number(varPolveriRar, 0);
		var fixAmuleti = $.number(varAmuleti, 0);
	
	//cambiamenti grafici
	$('#wrapperRight #sezione2').html('<p>Hai ottenuto un:</p><p class="titoloStatistiche"><b>'+varName+'</b></p><br /><p>Uppaggio:</p><br /><p>Fallimenti totali: '+fixFallimentiTotali+'</p><p>Livelli Bloccati: '+fixLivelliBloccati+'</p><p>Fallimenti: '+fixFallimentiUp+'</p><p>Soldi usati: '+fixSoldiUp+'</p><p>Gemme d\'Anima usate: '+fixGemma1+'</p><p>Gemme Intere Intera usate: '+fixGemma2+'</p><p>Polveri usate: '+fixPolveriUp+'</p><p>Scorrevoli usati: '+fixScorrevoli+'</p><br /><p>Rarizzazione:</p><br /><p>Fallimenti: '+fixFallimentiRar+'</p><p>Altre rarità ottenute: '+fixRaro+'</p><p>Soldi usati: '+fixSoldiRar+'</p><p>Polveri usate: '+fixPolveriRar+'</p><p>Amuleti usati: '+fixAmuleti+'</p>');
};

//###################################################################################à
//------------------------------------------------------------------------------------
//###############################################################################
//###################################################################################à
//------------------------------------------------------------------------------------
//###############################################################################

// BOTTON UP
 function calcoloUp(varUp){
	 var numberCasual = $.rand(100)+1;
	
	//aggiunta mate
	var MoreSoldiUp = arrayQuantSoldi[varUp];
	var MoreGemma = arrayQuantGemma[varUp];
	var MorePolveriUp = arrayQuantPolvere[varUp];
	
	
	varOggUp.soldi = varOggUp.soldi+MoreSoldiUp;
		if(varUp >= 0 && varUp <= 4){
			varOggUp.gemma1 = varOggUp.gemma1 + MoreGemma;
		}
		else{
			varOggUp.gemma2 = varOggUp.gemma2 + MoreGemma;
		}
	varOggUp.polveri = varOggUp.polveri+MorePolveriUp;
	
	//parte del calcolo
	var numbUp = varUp;
		var numbA = a[numbUp]; //prob successo
			var Anumb = $.lj.ll(numbA); //numero successo
		var numbB = b[numbUp]; //prob successo
			var Bnumb = $.lj.ll(numbB); //numero successo
	
	if(numberCasual <= Anumb){ //successo
		varOggUp.up = varOggUp.up +1;
		varOggUp.controls = 0;
	}
	else if(numberCasual <= Bnumb){ //bloccato
		varOggUp.bloc = varOggUp.bloc +1;
		varOggUp.controls = 1;
	}
	else { //fallito
		varOggUp.fail = varOggUp.fail +1;
		varOggUp.controls = 2;
	};
 };


//###################################################################################à
//------------------------------------------------------------------------------------
//###############################################################################
//###################################################################################à
//------------------------------------------------------------------------------------
//###############################################################################

// BOTTON RAR
	function calcoloRar(varRar){
		
		varRar = parseInt(varRar);
		
		var numberCasual = $.rand(100)+1;
		
		var MoreSoldiRar = 500;
		var MorePolveriRar = 5;
		
		varOggRar.soldi = varOggRar.soldi + MoreSoldiRar;
		varOggRar.polveri = varOggRar.polveri + MorePolveriRar;
		
		var numbRar = varRar;
			var numbY = y[numbRar];
				var Ynumb = $.lj.ll(numbY); //numero successo
				
		var numbK1 = k[0];
		var numbK2 = k[1];
		var numbK3 = k[2];
		var numbK4 = k[3];
		var numbK5 = k[4];
		var numbK6 = k[5];
		var numbK7 = k[6];
		var numbK8 = k[7];
		var numbK9 = k[8];
		var numbK10 = k[9];
		var numbK11 = k[10];
			var Knumb1 =  $.lj.ll(numbK1);
			var Knumb2 =  $.lj.ll(numbK2);
			var Knumb3 =  $.lj.ll(numbK3);
			var Knumb4 =  $.lj.ll(numbK4);
			var Knumb5 =  $.lj.ll(numbK5);
			var Knumb6 =  $.lj.ll(numbK6);
			var Knumb7 =  $.lj.ll(numbK7);
			var Knumb8 =  $.lj.ll(numbK8);
			var Knumb9 =  $.lj.ll(numbK9);
			var Knumb10 =  $.lj.ll(numbK10);
			var Knumb11 =  $.lj.ll(numbK11);
		
		if(numberCasual <= Ynumb ){ //la scommessa ha successo e si vede che rarità esce
			
				var numberCasual = $.rand(100)+1;
				
				varOggRar.raro = varOggRar.raro +1;
				varOggRar.control = 0;
				
			if(numberCasual <= Knumb1){ //r1
				varOggRar.rar = 1;
			}
			else if(numberCasual >= Knumb2 && numberCasual <= Knumb3){ //r2
				varOggRar.rar = 2;
			}
			else if(numberCasual >= Knumb4 && numberCasual <= Knumb5){ //r3
				varOggRar.rar = 3;
			}
			else if(numberCasual >= Knumb6 && numberCasual <= Knumb7){ //r4
				varOggRar.rar = 4;
			}
			else if(numberCasual >= Knumb8 && numberCasual <= Knumb9){ //r5
				varOggRar.rar = 5;
			}
			else if(numberCasual >= Knumb10 && numberCasual <= Knumb11){ //r6
				varOggRar.rar = 6;
			}
			else { //r7
				varOggRar.rar = 7;
			}
		}
		else { //l'oggetto è distrutto
			varOggRar.control = 1;
			varOggRar.fail = varOggRar.fail +1;
		}
	}


//###################################################################################à
//------------------------------------------------------------------------------------
//###############################################################################
//###################################################################################à
//------------------------------------------------------------------------------------
//###############################################################################

 function loading(){
		$('#fullBlock, #wrapperLoading').css('display','block'); //mostro il div che oscura tutto
			
			$('#loading').stop().animate({width: '270px'}, 1500, 'linear', function() { //parte l'animazione
				setTimeout(function(){
					$('#fullBlock, #wrapperLoading').css('display','none'); //dopo l'animazione nascondo il div oscura tutto
					$('#loading').css('width','0px'); // e riporto la width del loading a 0
				}, 200); //tutto dentro un setTimeout che fa rimanere la barra caricata per 200 ms per migliore visibilità
			});
 };

// funzione banner

function bannerUp(varID, varUp, varRar, varControl){
		var varTitle = arrayName[varClasse][varID];
		var varTestoRar = arrayRar[varRar];
		var varTestoUp = arrayUp[varUp];
		var varName = varTestoRar+' '+varTitle+' '+varTestoUp;
		
		if(varControl == 0){ //successo
			$('#banner').css({display: 'block', backgroundColor: 'rgba(20,150,20,0.9)'});
			var string = 'Congratulazioni!! Hai ottenuto un '+varName;
		}
		else{
			$('#banner').css({display: 'block', backgroundColor: 'rgba(0,0,0,0.9)'});
			if(varControl == 1){ //bloccato
				var string = 'Il Livello è stato Bloccato!!';
			}
			else { //fallito
				var string = 'Tentativo Fallito!!';
			};
		};
		$('#banner p').text(string);
		setTimeout(function(){
			$('#banner').css('display','none');
		}, 1700);
	};

function bannerRar (varID, varUp, varRar, varControl){
	var varTitle = arrayName[varClasse][varID];
		var varTestoRar = arrayRar[varRar];
		var varTestoUp = arrayUp[varUp];
		var varName = varTestoRar+' '+varTitle+' '+varTestoUp;
		
		if(varControl == 0){ //successo
			$('#banner').css({display: 'block', backgroundColor: 'rgba(20,150,20,0.9)'});
			var string = 'Congratulazioni!! Hai ottenuto un '+varName;
		}
		else{
			$('#banner').css({display: 'block', backgroundColor: 'rgba(0,0,0,0.9)'});
				var string = 'L\'Oggetto è stato Distrutto!!';
		};
		$('#banner p').text(string);
		setTimeout(function(){
			$('#banner').css('display','none');
		}, 1700);
};

function listOpenRar(){
		$('#fullBlock, #wrapperListRar').css('display','block'); //mostro il div che oscura tutto
 };
 function listCloseRar(){
	 	$('#fullBlock, #wrapperListRar').css('display','none'); //mostro il div che oscura tutto
 };
 
 //funzione per la lista rar
 
 function listRar(varRar, varControl){
	 var base = $('#listRar').html();
	 //se ha successo
	 var colorList = ' class="colorList'+varRar+'"';
	 if(varControl == 0){
		 var string = '<p'+colorList+'>Gioco Riuscito! Livello Raro: '+varRar+'</p>';
	 }
	 else {
		  var string = '<p>L\'oggetto è stato distrutto</p>';
	 };
	 $('#listRar').html(base+string);
 };
  
  function annullaListRar(){
	   $('#listRar').html('');
  };
// altro

});
});