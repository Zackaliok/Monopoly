//import {aQuiLeTour, plateau, nomCases, prixPropriétés, maisons, loyer} from "./stockage.js";
 var aQuiLeTour = 1;
 var plateau = new Array(null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39);
 var nomCases = new Array(null,"Case départ","Boulevard de Belleville","Caisse de communauté","Rue Lecourbe","Impôts sur le revenu","Gare Montparnasse","Rue de Vaugirard","Chance","Rue de Courcelles","Avenue de la République","Prison","Boulevard de la Villette","Compagnie de distribution d'électricité","Avenue de Neuilly","Rue de Paradis","Gare de Lyon","Avenue Mozart","Caisse de communauté","Boulevard Saint-Michel","Place Pigalle","Parc Gratuit","Avenue Matignon","Chance","Boulevard Malesherbes","Avenue Henri-Martin","Gare du Nord","Faubourg Saint-Honoré","Place de la Bourse","Compagnie de distribution des eaux","Rue la Fayette","Allez en prison","Avenue de Breuteuil","Avenue Foch","Caisse de communauté","Boulevard des Capucines","Gare Saint-Lazare","Chance","Avenue des Champs-Elysées","Taxe de luxe","Rue de la Paix");
 var maisons = new Array(null,null,0,null,0,null,0,0,null,0,0,null,0,0,0,0,0,0,null,0,0,null,0,null,0,0,0,0,0,0,0,null,0,0,null,0,0,null,0,null,0);
 

 /* Cases array importation */
 /*
var requestURL = 'src/lib/cases.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  prop = request.response;
  console.log(prop);
}*/

/*
$.getJSON("src/lib/cases.json", function (data) {
  const cases = data;
})*/


/* Chance array importation *//*
var requestChanceURL = "src/lib/chance.json";
var requestChance = new XMLHttpRequest();
requestChance.open('GET', requestChanceURL);
requestChance.responseType = 'json';
requestChance.send();

requestChance.onload() = function() {
  let chance = requestChance.response;
  console.log(chance);
}
*/
var communaute = new Array(null,"Vous êtes libéré de prison. Cette carte peut être conservée.","C'est votre anniversaire : Chaque joueurs doit vous donner 1000 Francs.","Erreur de la Banque en votre faveur. Recevez 20000 Francs","Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ","Recevez votre intérêt sur l'emprunt à 7% : 2500 Francs","Vous héritez 10000 Francs","Payez une amende de 1000 Francs ou tirer une carte chance","Les contributions vous remboursent la somme de 2000 Francs","Payez votre Police d'Assurance s'élevant à 5000 Francs","La vente de votre stock vous rapporte 5000 Francs","Retournez à Belleville","Vous avez gagné le deuxième prix de beauté. Recevez 1000 Francs","Placez vous sur la case départ","Recevez votre revenu annuel 10000 Francs","Payez la note du Médecin 5000 Francs","Payez à l'Hôpital 10000 Francs");
var chance = new Array(null,"Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ","Faites des réparations dans toutes vos maisons. Versez pour chaque maison 2500 Francs. Versez pour chaque hôtel 10000 Francs","Votre immeuble et votre prêt vous rapportent. Vous touchez 15000 Francs","Avancez jusqu'à la case départ","Reculez de trois cases","Rendez vous Rue de La Paix","Allez à la gare de Lyon","Vous êtes libéré de prison. Cette carte peut être conservée","Amende pour excès de vitesse 1500 Francs","La Banque vous verse un dividende de 5000 Francs","Avancez au Boulevard de la Villette","Rendez vous à l'Avenue Henri-Martin","Payez pour frais de scolarité 15000 Francs","Vous avez gagné le prix de mots croisés. Recevez 10000 Francs","Vous êtes imposé pour les réparations de voirie à raison de : 4000 Francs par maison et 11500 Francs par hôtel","Amende pour ivresse 2000 Francs");

//console.log(chance);




var parcGratuit = null;
var prison = null;

/* Variables globales */
var menu = $("#Menu"),
	lobby = $("#Lobby"),
	jeu = $("#Jeu"),
  backPop = $("#BackgroundPop");

var resultatTirageDe = null,
	de1 = null,
	de2 = null,
  nbrDouble = 0;

var nbrJoueur = null,
	prison = new Array(null, false,false,false,false,false,false,0,0,0,0,0,0),
  libérable = new Array(null, false,false,false,false,false,false),
  nbrToursPrison = 0;
  

var pseudos = new Array(),
    avatar = new Array(null)
    argent = new Array(null,200000,200000,200000,200000,200000,200000),
    autorisation = new Array(null, false, false, false, false, false, false),
    position = new Array(null,1,1,1,1,1,1),
    possessions = new Array();
possessions[1] = new Array();
possessions[2] = new Array();
possessions[3] = new Array();
possessions[4] = new Array();
possessions[5] = new Array();
possessions[6] = new Array();


/* Initialisation de la Page */
menu.show();
lobby.hide();
jeu.hide();
$("#ValiderTour").hide();
for (var i = 1; i <= 6; i++) {
  $("#Joueur"+i).hide();
	$("#Lobby"+i).hide();
}



/* ByPass des menus */
//GoToLobby();
//GoToJeu();


window.GoToLobby = GoToLobby;
function GoToLobby() {
	for (var i = 2; i <= 6; i++) {
		var radio = document.querySelector("#radio"+i).checked;
		if (radio) {
			nbrJoueur = i;
		}
	}
	for (var i = 1; i <= nbrJoueur; i++) {
		$("#Lobby"+i).show();
	}
	menu.hide();
	lobby.show();
	console.log("Accès au lobby avec " + nbrJoueur + " joueurs.");
}


window.GoToJeu = GoToJeu;
function GoToJeu() {
	lobby.hide();
	jeu.show();
	for (var i = 1; i <= nbrJoueur; i++) {
		pseudos[i]= document.querySelector("#Lobby-Input"+i).value;
		$("#Pseudo"+i).html(pseudos[i]);
		$("#Argent"+i).html(argent[i]);
    $("#Joueur"+i).show();
    document.querySelector('#Joueur'+i).style.backgroundColor = colors[playerColors[i]];
	}
  document.querySelector("#Joueur1").style.border="1px solid red";
  document.querySelector('#Btn-Quit').style.display="block";
	console.log(pseudos);
	console.log("Lancement de la partie.")
}

window.RollDice = RollDice;
async function RollDice(min, max, maxAudio) {
  $("#BtnRoll").hide();
	$("#DoubleDe").html("");
	var deAudio = new Audio("src/media/de/de_lance_"+parseInt(Math.random()*(maxAudio-min)+min)+".mp3");
	deAudio.play();
	for (var i = 0; i < 10; i++) {
          de1 = parseInt(Math.random()*(max-min)+min);
          de2 = parseInt(Math.random()*(max-min)+min);
          resultatTirageDe=de1+de2;
          $(".Img-Dice").html('<img src="src/media/de/' + de1 + '.svg">' + '<img src="src/media/de/' + de2 + '.svg">');
          await sleep(50);
      }
    if (de1==de2) {
      $("#DoubleDe").html("Double !");
      nbrDouble++;
      if (prison[aQuiLeTour]) {
        Jail(false, 1);// Si prison, libéré et il rejoue
        $("#BtnRoll").show();
      } else {
        if (nbrDouble==3) {
        Jail(true,0);     // Si 3 doubles prison
        nbrDouble = 0;
        NextTurn();
      } else {
        PlayerMoving(); // Si double < 3 et pas prison, on joue
        $('#BtnRoll').show();
      }}
    } else {
        PlayerMoving(); // Si pas doubles, on joue
    }
}



window.PlayerMoving = PlayerMoving;
function PlayerMoving() {

  if ((prison[aQuiLeTour]==true)&&(nbrToursPrison<3)) {
    nbrToursPrison++;
    console.log("Tours en prison : "+nbrToursPrison)
  } else {
    if ((prison[aQuiLeTour])&&(nbrToursPrison==3)) {
      Jail(false,1);
      console.log("Joueur libéré dû aux 3 tours");
    }
      
      //position[aQuiLeTour]+=resultatTirageDe;
      position[aQuiLeTour]=prompt("Sur quelle case on va Patron ?");
      if (position[aQuiLeTour]>40) {
        position[aQuiLeTour]-=40;
        autorisation[aQuiLeTour] = true;
        if ((position[aQuiLeTour]!=1)&&(prison!=aQuiLeTour)) {
          argent[aQuiLeTour]+=20000;
        }
      }
  }
	
	console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
	Chance();
	Communaute();
	Special();
	Loyer();
	BuyPopup();
	RefreshMoney();
	if (de1==de2) {
		$("#BoutonDe").show();
	} else {
		$("#ValiderTour").show(); 
	}
	
}


window.NextTurn = NextTurn;
function NextTurn() {
	document.querySelector("#Joueur"+aQuiLeTour).style.border="1px solid black";
  $("#JailDiv").hide();
	$(".Img-Dice").html("");
	$("#DoubleDe").html("");
	$("#BtnRoll").show();
	if (aQuiLeTour==nbrJoueur) {
      aQuiLeTour=1
    } else {
      aQuiLeTour++;
    }
  $("#ValiderTour").hide();
  document.querySelector("#Joueur"+aQuiLeTour).style.border="1px solid red";
  nbrDouble = 0;
  if (prison[aQuiLeTour]) {
    if (libérable[aQuiLeTour]) {
      $("#BoutonLibeCarte").show();
    }                                 
    $("#JailDiv").show();
  }
}

window.Jail = Jail;
function Jail(type, moyen) {// true = Mise en prison       false = Sortie de prison
  $("#BoutonLibeCarte").hide();
  $("#JailDiv").hide();
  if (type) { //On mets en prison
    console.log(`${pseudos[aQuiLeTour]} va en prison.`);
    prison = new Array(null, false,false,false,false,false,false);
    prison[aQuiLeTour]=true;
    position[aQuiLeTour]=11;
    $("#ValiderTour").hide();
    NextTurn();

  } else { // On sort de prison
    switch (moyen) { // 1 = Double ou attente     2 = Caution     3 = Carte
      case 1:
          prison = new Array(null, false, false, false, false, false, false);
          nbrToursPrison = 0;
        break;

      case 2:
          prison = new Array(null, false, false, false, false, false, false);
          nbrToursPrison = 0;
          argent[aQuiLeTour]-=5000;
          parcGratuit+=5000;
          RefreshMoney();
        break;

      case 3:
          $("#Pseudo"+aQuiLeTour).html(pseudos[aQuiLeTour]+"");
          prison = new Array(null, false, false, false, false, false, false);
          nbrToursPrison = 0;
          libérable[aQuiLeTour] = false;
        break;
    }
    console.log('Le Joueur est libéré de prison');
  }
}





//const cursor = document.querySelector("#cursor");

//document.addEventListener('mousemove', e => {
  //console.log(e.pageX, e.pageY);
  //cursor.setAttribute("style", "top:"+(e.pageY -5)+"px; left:"+(e.pageX -5)+"px;");

//})









































function BuyPopup() {
  if ( (prixPropriétés[position[aQuiLeTour]]!=null) && (prixPropriétés[position[aQuiLeTour]]<=argent[aQuiLeTour]) && (autorisation[aQuiLeTour]==true) ) {
    backPop.show();
    $("#BuyDiv").show();
    $("#ContentBuyDiv").html(`Tu es sur ${nomCases[position[aQuiLeTour]]} qui est au prix de ${prixPropriétés[position[aQuiLeTour]]}.`);
  }
}
window.Buy = Buy;
function Buy(answer) {
  if (answer) {
    possessions[aQuiLeTour].push(position[aQuiLeTour]);
    console.log(`Le joueur ${aQuiLeTour} possède désormais ${nomCases[position[aQuiLeTour]]}.`)
    argent[aQuiLeTour]-=prixPropriétés[position[aQuiLeTour]];
    prixPropriétés[position[aQuiLeTour]]="sell";
  }
  ClosePop();
  RefreshMoney();
}

window.OpenPossessions = OpenPossessions;
var lastPlayer = 0;
function OpenPossessions(player) {
  if (($("#PossessionsDiv").is(":hidden")==true) || (lastPlayer!=player)) {
    $("#PossessionsDiv").show();
    backPop.show();
    lastPlayer = player;
    var contenuPossessions = "<p> Possessions du joueur " + pseudos[player] + " : <br><br>";
    for (var i = 0; i < possessions[player].length; i++) {
      contenuPossessions+= nomCases[possessions[player][i]]+ " - Loyer de "+ loyer[possessions[player][i]][maisons[possessions[player][i]]]+" € <br>";
    }
    $("#PossessionsDiv").html(contenuPossessions + "</p>");
  } else {
      ClosePop();
  }
}

function Loyer() {
  var check = 0;

  if (prixPropriétés[position[aQuiLeTour]]=="sell") {
    for (var i = 1; i <= nbrJoueur; i++) {
      check = possessions[i].indexOf(position[aQuiLeTour]);
      if ((check =! -1)&&(i==aQuiLeTour)) {
        break;
      } else {
        console.log(`${pseudos[aQuiLeTour]} doit payer ${loyer[position[aQuiLeTour]][maisons[position[aQuiLeTour]]]} €`);
        argent[aQuiLeTour]-=loyer[position[aQuiLeTour]][maisons[position[aQuiLeTour]]];
        argent[i]+=loyer[position[aQuiLeTour]][maisons[position[aQuiLeTour]]];
        break;
      }
    }
  }
}


window.ClosePop = ClosePop;
function ClosePop() {
  if (backPop.is(":visible")) {
    backPop.hide();
    $("#BuyDiv").hide();
    $("#PossessionsDiv").hide();
    $("#CarteCommunaute").hide();
  }
}



function RefreshMoney() {
	for (var i = 1; i <= nbrJoueur; i++) {
		$("#Argent"+i).html(argent[i]);
	}
	//console.log("L'argent a été actualisé");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function Special() {
  switch (parseInt(position[aQuiLeTour])) {
      case 1://Case départ
          console.log(`${pseudos[aQuiLeTour]} gagne 40000 €`);
          argent[aQuiLeTour]+=40000;
        break;
      case 5:
          console.log(`${pseudos[aQuiLeTour]} doit payer 20000 €`);
          argent[aQuiLeTour]-=20000;
          parcGratuit+=20000;
        break;
      case 21:
          console.log(`${pseudos[aQuiLeTour]} gagne ${parcGratuit} €`);
          argent[aQuiLeTour]+=parcGratuit;
          parcGratuit=0;
        break;
      case 31:
          Jail(true,0);
          //console.log("La fonction Jail exectutée");
        break;
      case 39:
          console.log(`${pseudos[aQuiLeTour]} doit payer 10000 €`);
          argent[aQuiLeTour]-=10000;
          parcGratuit+=10000;
        break;
    }
}





window.Chance = Chance;
function Chance(test) {
  ClosePop();
  if ((position[aQuiLeTour]==8)||(position[aQuiLeTour]==23)||(position[aQuiLeTour]==37)||(test==-1)) {
    //console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
    var random =8; //parseInt(Math.random()*(17-1)+1)
    console.log(chance[random]);
    switch (random) {
      case 1://Aller en prison
          Jail(true, 0);
        break;
      case 2://Faites des réparations 2.500 ou 10.000
          let cagnotteReparations = 0;
          for (var i = 1; i <= possessions[aQuiLeTour].length; i++) {
            if ((position[aQuiLeTour]!=6)||(position[aQuiLeTour]!=13)||(position[aQuiLeTour]!=16)||(position[aQuiLeTour]!=26)||(position[aQuiLeTour]!=29)||(position[aQuiLeTour]!=36)){
             } else {
            switch (possessions[aQuiLeTour][i]) {
              case 2://Une maison
                  cagnotteReparations+=2500;
                break;
              case 3://Deux maisons
                  cagnotteReparations+=5000;
                break;                          
              case 4://Trois maisons
                  cagnotteReparations+=7500;
                break;
              case 5://Quatres maisons
                  cagnotteReparations+=10000;
                break;
              case 6://Un hôtel
                  cagnotteReparations+=10000;
                break;
            }}}
          argent[aQuiLeTour]-=cagnotteReparations;
          cagnotteReparations=0;
        break;
      case 3://Votre immeuble rapportent 15.000
          argent[aQuiLeTour]+=15000;
        break;
      case 4://Avancer Case Départ
          position[aQuiLeTour]=1;
          console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
        break;
      case 5://Reculez de 3 case
          position[aQuiLeTour]-=3;
          console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
        break;
      case 6://Go Rue de la Paix
          position[aQuiLeTour]=40;
          console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
        break;
      case 7://Gare de Lyon
      	  if (position[aQuiLeTour]>16) {
      	  	argent[aQuiLeTour]+=20000;
      	  }
          position[aQuiLeTour]=16;
          console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
        break;
      case 8://Libéré de prison
          libérable[aQuiLeTour]=true;
          console.log(`${pseudos[aQuiLeTour]} est libérable de prison.`)
          $("#Pseudo"+aQuiLeTour).html(pseudos[aQuiLeTour]+" ⭐");
        break;
      case 9://Amende vitesse 1.500
          argent[aQuiLeTour]-=1500;
          parcGratuit+=1500;
        break;
      case 10://Banque  verse 5.000
          argent[aQuiLeTour]+=5000;
        break;
      case 11://Go Villette
      	  if (position[aQuiLeTour]>12) {
      	  	argent[aQuiLeTour]+=20000;
      	  }
          position[aQuiLeTour]=12;
          console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
        break;
      case 12://Go Henri-Martin
      	  if (position[aQuiLeTour]>25) {
      	  	argent[aQuiLeTour]+=20000;
      	  }
          position[aQuiLeTour]=25;
          console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
        break;
      case 13://Scolarité 15.000
          argent[aQuiLeTour]-=15000;
          parcGratuit+=15000;
        break;
      case 14://Mots Croisés 10.000
          argent[aQuiLeTour]+=10000;
        break;
      case 15://Réparation voirie 4.000 ou 11.500
           cagnotteReparations = 0;
          for (var i = 1; i <= possessions[aQuiLeTour].length; i++) {
            if ((position[aQuiLeTour]!=6)||(position[aQuiLeTour]!=13)||(position[aQuiLeTour]!=16)||(position[aQuiLeTour]!=26)||(position[aQuiLeTour]!=29)||(position[aQuiLeTour]!=36)){
             } else {
            switch (possessions[aQuiLeTour][i]) {
              case 2://Une maison
                  cagnotteReparations+=4000;
                break;
              case 3://Deux maisons
                  cagnotteReparations+=8000;
                break;                          
              case 4://Trois maisons
                  cagnotteReparations+=12000;
                break;
              case 5://Quatres maisons
                  cagnotteReparations+=16000;
                break;
              case 6://Un hôtel
                  cagnotteReparations+=11500;
                break;
            }}}
          argent[aQuiLeTour]-=cagnotteReparations;
          cagnotteReparations=0;
        break;
      case 16://Amende ivresse 2000
          argent[aQuiLeTour]-=2000;
          parcGratuit+=2000;
        break;}
  }
  
  if (test==1) { // Pour payer les 1000€ d'amende a la caisse de commu
    argent[aQuiLeTour]-=1000;
    parcGratuit+=1000;
  }
  RefreshMoney();
  backPop.attr('onclick', "ClosePop()");
}

window.Communaute = Communaute;
function Communaute() {
  if (position[aQuiLeTour]==3||position[aQuiLeTour]==18||position[aQuiLeTour]==34) {
            var idCaisseDeCommunauté = 7;//parseInt(Math.random()*(17-1)+1);
            console.log(communaute[idCaisseDeCommunauté]);
          }
          switch (idCaisseDeCommunauté) {
            case 1://Libéré de prison
                libérable[aQuiLeTour]=true;
                console.log(`${pseudos[aQuiLeTour]} est libérable de prison.`)
                $("#Pseudo"+aQuiLeTour).html(pseudos[aQuiLeTour]+" ⭐");
              break;
            case 2://Anniversaire
                var cagnotteAnniv=0;
                for (var i = 1; i <= nbrJoueur; i++) {
                  argent[i]-=1000
                  cagnotteAnniv+=1000}
                argent[aQuiLeTour]+=cagnotteAnniv;
                cagnotteAnniv=0;
              break;
            case 3://Erreur banque 20000
                argent[aQuiLeTour]+=20000;
              break;
            case 4://Allez en Prison
                prison[aQuiLeTour]=true;
                position[aQuiLeTour]=11;
                console.log(`${pseudos[aQuiLeTour]} va en prison.`);
              break;
            case 5://Recevez votre intérêt sur l'emprunt à 7% : 2500 Francs
                argent[aQuiLeTour]+=2500;
              break;
            case 6://Héritage 10000
                argent[aQuiLeTour]+=10000;
              break;
            case 7://Payez une amende de 1000 Francs ou tirer une carte chance
                $("#CarteCommunaute").show();
                backPop.show();
                backPop.attr('onclick', null);
              break;
            case 8://contributions rapportent 2000
                argent[aQuiLeTour]+=2000;
              break;
            case 9://Payez votre Police d'Assurance s'élevant à 5000 Francs
                argent[aQuiLeTour]-=5000;
                parcGratuit+=5000;
              break;
            case 10://Vente stock 5000
                argent[aQuiLeTour]+=5000;
              break;
            case 11://REtounez Belleville
                position[aQuiLeTour]=2;  
                console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]); 
              break;
            case 12://Prix de beauté 1000
                argent[aQuiLeTour]+=1000;
              break;
            case 13://Case départ
                position[aQuiLeTour]=1;
                console.log("Le Joueur " + aQuiLeTour + " est sur " + nomCases[position[aQuiLeTour]]);
              break;
            case 14://Recevez votre revenu annuel 10000
                argent[aQuiLeTour]+=10000;
              break;
            case 15://Medecin 5000
                argent[aQuiLeTour]-=5000;
                parcGratuit+=5000;
              break;
            case 16://Hopital 10000
                argent[aQuiLeTour]-=10000;
                parcGratuit+=10000;
              break;}

            RefreshMoney();
            }




/* Script pour afficher les paramètres */
var displayOnglet = false;
var img = document.querySelector('#Img-Btn');
var divObj = document.querySelector('.Div-Obj');
var divAll = document.querySelector('.Div-All');

window.ShowHideOnglet = ShowHideOnglet;
  function ShowHideOnglet() {
      if (displayOnglet == true) {
          console.log('Paramètres Dissimulés');
          displayOnglet = false;
          img.src="src/media/btn/up-arrow.svg";
          divAll.style.bottom="5px";
          divAll.style.height="20px";
          divObj.style.display="none"; 
      }   else {
          console.log('Paramètres Affichés');
          displayOnglet = true;
          img.src="src/media/btn/down-arrow.svg";
          divAll.style.bottom="0px";
          divAll.style.height="25%";
          divObj.style.display="flex";
      }
  }
/* Script pour l'audio */
var music = new Audio("src/media/music/Monopoly Song Freeway 1.mp3"),
    btnMusic = document.querySelector('#Btn-Music'),
    btnAmbient = document.querySelector('#Btn-Ambient'),
    ambient = new Audio("src/media/de/de_lance_1.mp3");
    //music.play();

    music.setAttribute("loop", "true") // On rend la musique "infinissable"

window.GestionAudio = GestionAudio;
function GestionAudio(type) { // True = ambient  False = music
  if (type) {
    if (ambient.muted) {
      ambient.muted=false;
      btnAmbient.src="src/media/btn/speaker.svg";
    } else {
      ambient.muted=true;
      btnAmbient.src="src/media/btn/mute.svg";
    }
  } else {
    if (music.muted) {
      music.muted=false;
      btnMusic.src="src/media/btn/music.svg";
    } else {
      music.muted=true;
      btnMusic.src="src/media/btn/music-mute.svg";
    }
  }
  
}

window.Quit = Quit;

function Quit() {
  console.log("Voulez-vous vraiment quitter la partie ?");
  jeu.hide();
  menu.show();
  document.querySelector('#Btn-Quit').style.display="none";
  ShowHideOnglet();
}


/*  Script du Canvas */

const canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

canvas.style.backgroundImage = "url('src/media/plateautest.svg')";

//Déplacement des pions
const pions = new Image;
pions.src = "src/media/pions.svg";

/*
setTimeout(() => {
  ctx.drawImage(pions, 520, 0, 130, 230, 0, 0, 42, 54); // Pion Magenta
}, 50);
*/
/*
setTimeout(() => {
  ctx.drawImage(pions, 390, 0, 130, 230, 0, 0, 42, 54); // Pion Bleu
}, 50);
*/
/*
setTimeout(() => {
  ctx.drawImage(pions, 260, 0, 130, 230, 0, 0, 42, 54); // Pion Vert
}, 50);
*/
/*
setTimeout(() => {
  ctx.drawImage(pions, 130, 0, 130, 230, 0, 0, 42, 54); // Pion Jaune
}, 50);
*/
/*
setTimeout(() => {
  ctx.drawImage(pions, 0, 0, 130, 230, 0, 0, 42, 54);   // Pion Rouge
}, 500);
*/


/* Script Du Lobby */
var colors = new Array(null, 'red', 'yellow', 'green', 'blue', 'magenta', 'orange');
var playerColors = new Array(null, 1, 2, 3, 4, 5, 6);

for (let i = 1; i <= 6 ; i++) {
  document.querySelector('#Lobby'+i).style.backgroundColor= colors[i];  //Mise en place des couleurs de base
}

function ChooseColor(player, sens) {
  if (sens) { //Si Suivant
    playerColors[player] +=1
    if (playerColors[player]==7) {
      playerColors[player]=1;
    }
  } else { //Si Précédent
    playerColors[player]-=1;
    if (playerColors[player]==0) {
      playerColors[player]=6;
    }
  }
  document.querySelector('#Lobby'+player).style.backgroundColor=colors[playerColors[player]];
}