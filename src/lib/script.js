var aQuiLeTour, plateau;
var maisons = new Array(null,0,null,0,null,0,0,null,0,0,null,0,0,0,0,0,0,null,0,0,null,0,null,0,0,0,0,0,0,0,null,0,0,null,0,0,null,0,null,0);
 

 /* Cases array importation */
 
var requestURL = 'src/lib/cases.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();



request.onload = function() {
  var resp = request.response;
  plateau = resp.cases;
  console.log(plateau);
}

/*
$.getJSON("src/lib/cases.json", function (data) {
  const cases = data;
})*/





var communaute = new Array(null,"Vous êtes libéré de prison. Cette carte peut être conservée.","C'est votre anniversaire : Chaque joueurs doit vous donner 1000 Francs.","Erreur de la Banque en votre faveur. Recevez 20000 Francs","Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ","Recevez votre intérêt sur l'emprunt à 7% : 2500 Francs","Vous héritez 10000 Francs","Payez une amende de 1000 Francs ou tirer une carte chance","Les contributions vous remboursent la somme de 2000 Francs","Payez votre Police d'Assurance s'élevant à 5000 Francs","La vente de votre stock vous rapporte 5000 Francs","Retournez à Belleville","Vous avez gagné le deuxième prix de beauté. Recevez 1000 Francs","Placez vous sur la case départ","Recevez votre revenu annuel 10000 Francs","Payez la note du Médecin 5000 Francs","Payez à l'Hôpital 10000 Francs");
//var chance = new Array(null,"Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ","Faites des réparations dans toutes vos maisons. Versez pour chaque maison 2500 Francs. Versez pour chaque hôtel 10000 Francs","Votre immeuble et votre prêt vous rapportent. Vous touchez 15000 Francs","Avancez jusqu'à la case départ","Reculez de trois cases","Rendez vous Rue de La Paix","Allez à la gare de Lyon","Vous êtes libéré de prison. Cette carte peut être conservée","Amende pour excès de vitesse 1500 Francs","La Banque vous verse un dividende de 5000 Francs","Avancez au Boulevard de la Villette","Rendez vous à l'Avenue Henri-Martin","Payez pour frais de scolarité 15000 Francs","Vous avez gagné le prix de mots croisés. Recevez 10000 Francs","Vous êtes imposé pour les réparations de voirie à raison de : 4000 Francs par maison et 11500 Francs par hôtel","Amende pour ivresse 2000 Francs");
//console.log("🚀 ~ file: script.js ~ line 30 ~ chance", chance)


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
  

/* Initialisation de la Page */
menu.show();
lobby.hide();
jeu.hide();
$("#ValiderTour").hide();
for (var i = 0; i < 6; i++) {
  $("#Joueur"+i).hide();
	$("#Lobby"+i).hide();
}



/* ByPass des menus */
//GoToLobby();
//GoToJeu();

var listeDesJoueurs = new Array();
window.GoToLobby = GoToLobby;
function GoToLobby() {
	for (var i = 2; i <= 6; i++) {
		var radio = document.querySelector("#radio"+i).checked;
		if (radio) {
			nbrJoueur = i;
		}
	}
	for (var i = 0; i < nbrJoueur; i++) {
		$("#Lobby"+i).show();
    let player = new Player(i);
    listeDesJoueurs.push(player);
	}
  aQuiLeTour = listeDesJoueurs[0];
  console.log("🚀 ~ file: script.js ~ line 85 ~ GoToLobby ~ aQuiLeTour", aQuiLeTour)
	menu.hide();
	lobby.show();
	console.log("Accès au lobby avec " + nbrJoueur + " joueurs.");
}



window.GoToJeu = GoToJeu;
function GoToJeu() {
	lobby.hide();
	jeu.show();
  chanceLoading();
	for (var i = 0; i < nbrJoueur; i++) {
    let player = listeDesJoueurs[i];
    player.setName($("#Lobby-Input"+i).value);

    $("#Pseudo"+i).html(player.getName());
    $("#Argent"+i).html(player.getMoney());
    $("#Joueur"+i).show();
    document.querySelector('#Joueur'+i).style.backgroundColor = player.getAvatar();
    
	}
  document.querySelector("#Joueur0").style.border="1px solid red";
  document.querySelector('#Btn-Quit').style.display="block";
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
      if (aQuiLeTour.getPrison()) {
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
	//Loyer(); TODO: Mettre une condition pour appliquer le loyer
	//BuyPopup();
	RefreshMoney();
	if (de1==de2) {
		$("#BoutonDe").show();
	} else {
		$("#ValiderTour").show(); 
	}
	
}


window.NextTurn = NextTurn;
function NextTurn() {
	document.querySelector("#Joueur"+aQuiLeTour.getId()).style.border="1px solid black";
  $("#JailDiv").hide();
	$(".Img-Dice").html("");
	$("#DoubleDe").html("");
	$("#BtnRoll").show();
	if (aQuiLeTour==nbrJoueur) { // TODO: Changer le fonctionnement de switch de tour
      aQuiLeTour=0
    } else {
      aQuiLeTour++;
    }
  $("#ValiderTour").hide();
  document.querySelector("#Joueur"+aQuiLeTour.getId()).style.border="1px solid red";
  nbrDouble = 0;
  if (aQuiLeTour.getPrison()) {
    if (aQuiLeTour.getLibertyCard()) {
      $("#BoutonLibeCarte").show();
    }                                 
    $("#JailDiv").show();
  }
}

window.Jail = Jail;
function Jail(type, moyen) {// true = Mise en prison       false = Sortie de prison
  function nobodyJailed() {
    for (let i = 0; i < listeDesJoueurs.length; i++) {
      listeDesJoueurs[i].setPrison(false);
    }
  }

  $("#BoutonLibeCarte").hide();
  $("#JailDiv").hide();
  if (type) { //On mets en prison
    console.log(`${aQuiLeTour.getName()} va en prison.`);
    nobodyJailed();
    aQuiLeTour.setPrison(true);
    aQuiLeTour.setPosition(11);
    $("#ValiderTour").hide();
    NextTurn();

  } else { // On sort de prison
    switch (moyen) { // 1 = Double ou attente     2 = Caution     3 = Carte
      case 1:
          nobodyJailed();
          nbrToursPrison = 0;
        break;

      case 2:
          nobodyJailed();
          nbrToursPrison = 0;
          aQuiLeTour.delMoney(5000)
          parcGratuit+=5000;
          RefreshMoney();
        break;

      case 3:
          $("#Pseudo"+aQuiLeTour.getId()).html(aQuiLeTour.getName()+"");
          nobodyJailed();
          nbrToursPrison = 0;
          aQuiLeTour.setLibertyCard(false);
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
  if ( (plateau[aQuiLeTour.getPosition()].buyable) && (plateau.cases[aQuiLeTour.getPosition()].price <= aQuiLeTour.getMoney()) && (aQuiLeTour.getAuthorization()) ) {
    backPop.show();
    $("#BuyDiv").show();
    $("#ContentBuyDiv").html(`Tu es sur ${plateau[aQuiLeTour.getPosition()].name} qui est au prix de ${plateau[aQuiLeTour.getPosition()].price}.`);
  }
}



window.Buy = Buy;
function Buy(answer) {
  if (answer) {
    possessions[aQuiLeTour].push(position[aQuiLeTour]); // Utiliser player.addPossession()
    aQuiLeTour.delMoney(plateau[aQuiLeTour.getPosition()].price);
    plateau[aQuiLeTour.getPosition()].buyable = false;
    console.log(`Le joueur ${aQuiLeTour.getName()} possède désormais ${plateau[aQuiLeTour.getPosition()]}.`)
    RefreshMoney();
  }
  ClosePop();
}

window.OpenPossessions = OpenPossessions;
var lastPlayer = 0;
function OpenPossessions(player) { // TODO: Entièrement repenser cette méthode avec les nouveaux objets à disposition
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



function Loyer() { // TODO: Repenser aussi beaucoup cette méthode, surtout comment gérer le système de maisons etc...
  var check = 0;

  if (!plateau[aQuiLeTour.getPosition()].buyable) {
    for (var i = 0; i < nbrJoueur; i++) {
      check = possessions[i].indexOf(position[aQuiLeTour]); // Rajouter dans le json un onglet pour y mettre l'id du propriétaire ?? Pour une recherche plus rapide.
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
	for (var i = 0; i < listeDesJoueurs.length; i++) {
		$("#Argent"+i).html(listeDesJoueurs[i].getMoney());
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function Special() {
  switch (aQuiLeTour.getPosition()) {
      case 1://Case départ
          aQuiLeTour.addMoney(40000);
          console.log(`${aQuiLeTour.getName()} gagne 40000 €`);
        break;
      case 5:
          console.log(`${aQuiLeTour.getName()} doit payer 20000 €`);
          aQuiLeTour.delMoney(20000);
          parcGratuit+=20000;
        break;
      case 21:
          console.log(`${aQuiLeTour.getName()} gagne ${parcGratuit} €`);
          aQuiLeTour.addMoney(parcGratuit);
          parcGratuit=0;
        break;
      case 31:
          Jail(true,0);
          //console.log("La fonction Jail exectutée");
        break;
      case 39:
          console.log(`${aQuiLeTour.getName()} doit payer 10000 €`);
          aQuiLeTour.delMoney(10000)
          parcGratuit+=10000;
        break;
    }
}




/*
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
}*/

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







/*  Script du Canvas */

const canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

canvas.style.backgroundImage = "url('src/media/plateautest.svg')";

//Déplacement des pions
const pions = new Image;
pions.src = "src/media/pions.svg";
