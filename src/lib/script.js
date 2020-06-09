//import {aQuiLeTour, plateau, nomCases, prixPropriétés, maisons, loyer} from "./stockage.js";
 var aQuiLeTour = 1;
 var plateau = new Array(null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39);
 var nomCases = new Array(null,"Case départ","Boulevard de Belleville","Caisse de communauté","Rue Lecourbe","Impôts sur le revenu","Gare Montparnasse","Rue de Vaugirard","Chance","Rue de Courcelles","Avenue de la République","Prison","Boulevard de la Villette","Compagnie de distribution d'électricité","Avenue de Neuilly","Rue de Paradis","Gare de Lyon","Avenue Mozart","Caisse de communauté","Boulevard Saint-Michel","Place Pigalle","Parc Gratuit","Avenue Matignon","Chance","Boulevard Malesherbes","Avenue Henri-Martin","Gare du Nord","Faubourg Saint-Honoré","Place de la Bourse","Compagnie de distribution des eaux","Rue la Fayette","Allez en prison","Avenue de Breuteuil","Avenue Foch","Caisse de communauté","Boulevard des Capucines","Gare Saint-Lazare","Chance","Avenue des Champs-Elysées","Taxe de luxe","Rue de la Paix");
 var prixPropriétés = new Array(null,null,6000,null,6000,null,20000,10000,null,10000,10000,null,14000,15000,14000,16000,20000,18000,null,18000,20000,null,22000,null,22000,24000,20000,26000,26000,15000,28000,null,30000,30000,null,32000,20000,null,35000,null,40000);
 var maisons = new Array(null,null,0,null,0,null,0,0,null,0,0,null,0,0,0,0,0,0,null,0,0,null,0,null,0,0,0,0,0,0,0,null,0,0,null,0,0,null,0,null,0);
 var loyer = new Array();
  loyer[2]= new Array(200,400,1000,3000,9000,16000,25000);//Boulevard de Belleville
  loyer[4]= new Array(400,800,2000,6000,18000,32000,45000);//Rue Lecourbe
  loyer[6]= new Array(2500,5000,10000,20000);//Gare Montparnasse
  loyer[7]= new Array(600,1200,3000,9000,27000,40000,55000);//Rue de Vaugirard
  loyer[9]= new Array(600,1200,3000,9000,27000,40000,55000);//Rue de Courcelles
  loyer[10]= new Array(800,1600,4000,10000,30000,45000,60000);//Avenue de la République
  loyer[12]= new Array(1000,2000,5000,15000,45000,62500,75000);//Boulevard de la Villette
  loyer[13]= new Array(resultatTirageDe*400,resultatTirageDe*1000);//Compagnie d'électricité
  loyer[14]= new Array(1000,2000,5000,15000,45000,62500,75000)//Avenue de Neuilly
  loyer[15]= new Array(1200,2400,6000,18000,50000,70000,90000);//Rue de Paradie
  loyer[16]= new Array(2500,5000,10000,20000);//Gare de Lyon
  loyer[17]= new Array(1400,2800,7000,20000,55000,75000,95000);//Avenue Mozart
  loyer[19]= new Array(1400,2800,7000,20000,55000,75000,95000);//Boulevard Saint-Michel
  loyer[20]= new Array(1600,3200,8000,22000,60000,80000,100000);//Place Pigalle
  loyer[22]= new Array(1800,3600,9000,25000,70000,87500,105000);//Avenue Matignon
  loyer[24]= new Array(1800,3600,9000,25000,70000,87500,105000);//Boulevard Malesherbes
  loyer[25]= new Array(2000,4000,10000,30000,75000,92500,110000);//Avenue Henri-Martin
  loyer[26]= new Array(2500,5000,10000,20000);//Gare du Nord
  loyer[27]= new Array(2200,4400,11000,33000,80000,97500,115000);//Faubourg Saint-Honoré
  loyer[28]= new Array(2200,4400,11000,33000,80000,97500,115000);//Place de la Bourse
  loyer[29]= new Array(resultatTirageDe*400,resultatTirageDe*1000);//Compagnie des eaux
  loyer[30]= new Array(2400,4800,12000,36000,85000,102500,120000);//Rue la Fayette
  loyer[32]= new Array(2600,5200,13000,39000,90000,110000,127500);//Avenue de Breuteuil
  loyer[33]= new Array(2600,5200,13000,39000,90000,110000,127500);//Avenue Foch
  loyer[35]= new Array(2800,5600,15000,45000,100000,120000,140000);//Boulevard des Capucines
  loyer[36]= new Array(2500,5000,10000,20000);//Gare Saint-Lazare
  loyer[38]= new Array(3500,7000,17500,50000,11000,130000,150000);//Avenue des Champs-Elysées
  loyer[40]= new Array(5000,10000,20000,60000,140000,170000,200000);//Rue de la Paix
  var communaute = new Array(null,"Vous êtes libéré de prison. Cette carte peut être conservée.","C'est votre anniversaire : Chaque joueurs doit vous donner 1000 Francs.","Erreur de la Banque en votre faveur. Recevez 20000 Francs","Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ","Recevez votre intérêt sur l'emprunt à 7% : 2500 Francs","Vous héritez 10000 Francs","Payez une amende de 1000 Francs ou tirer une carte chance","Les contributions vous remboursent la somme de 2000 Francs","Payez votre Police d'Assurance s'élevant à 5000 Francs","La vente de votre stock vous rapporte 5000 Francs","Retournez à Belleville","Vous avez gagné le deuxième prix de beauté. Recevez 1000 Francs","Placez vous sur la case départ","Recevez votre revenu annuel 10000 Francs","Payez la note du Médecin 5000 Francs","Payez à l'Hôpital 10000 Francs");
  var chance = new Array(null,"Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ","Faites des réparations dans toutes vos maisons. Versez pour chaque maison 2500 Francs. Versez pour chaque hôtel 10000 Francs","Votre immeuble et votre prêt vous rapportent. Vous touchez 15000 Francs","Avancez jusqu'à la case départ","Reculez de trois cases","Rendez vous Rue de La Paix","Allez à la gare de Lyon","Vous êtes libéré de prison. Cette carte peut être conservée","Amende pour excès de vitesse 1500 Francs","La Banque vous verse un dividende de 5000 Francs","Avancez au Boulevard de la Villette","Rendez vous à l'Avenue Henri-Martin","Payez pour frais de scolarité 15000 Francs","Vous avez gagné le prix de mots croisés. Recevez 10000 Francs","Vous êtes imposé pour les réparations de voirie à raison de : 4000 Francs par maison et 11500 Francs par hôtel","Amende pour ivresse 2000 Francs");

  var parcGratuit = null;
  var prison = null;

/* Variables globales */
var menu = $("#Menu"),
	lobby = $("#Lobby"),
	jeu = $("#Jeu"),
  backPop = $("#BackgroundPop");

var resultatTirageDe = null,
	de1 = null,
	de2 = null;

var nbrJoueur = null,
	prison = new Array(null, false,false,false,false,false,false);
  prison[1] = new Array(0);
  prison[2] = new Array(0);
  prison[3] = new Array(0);                             // Le système carcérale est à revoir ! 
  prison[4] = new Array(0);
  prison[5] = new Array(0);
  prison[6] = new Array(0);

var pseudos = new Array(),
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
	$("#Espace"+i).hide();
}

/* ByPass des menus */
GoToLobby();
GoToJeu();


window.GoToLobby = GoToLobby;
function GoToLobby() {
	for (var i = 2; i <= 6; i++) {
		var radio = document.querySelector("#radio"+i).checked;
		if (radio) {
			nbrJoueur = i;
		}
	}
	for (var i = 1; i <= nbrJoueur; i++) {
		$("#Espace"+i).show();
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
		pseudos[i]=document.querySelector("#InputPseudo"+i).value;
		$("#Pseudo"+i).html(pseudos[i]);
		$("#Argent"+i).html(argent[i]);
		$("#Joueur"+i).show();
	}
	document.querySelector("#Joueur1").style.border="1px solid red";
	console.log(pseudos);
	console.log("Lancement de la partie.")
}

window.RollDice = RollDice;
async function RollDice(min, max, maxAudio) {
  $("#BoutonDe").hide();
	$("#DoubleDe").html("");
	var deAudio = new Audio("src/media/de_lance_"+parseInt(Math.random()*(maxAudio-min)+min)+".mp3");
	deAudio.play();
	for (var i = 0; i < 10; i++) {
          de1 = parseInt(Math.random()*(max-min)+min);
          de2 = parseInt(Math.random()*(max-min)+min);
          resultatTirageDe=de1+de2;
          $("#ResultatTirageDe").html(de1 + " + " + de2);
          await sleep(50);
      }
    if (de1==de2) {
    	$("#DoubleDe").html("Double !");
    }
    PlayerMoving();
}




window.PlayerMoving = PlayerMoving;
function PlayerMoving() {

  if ((prison[aQuiLeTour]==true)&&(prison[aQuiLeTour][0]<3)) {
    prison[aQuiLeTour][0]++;
  } else {
      /*prison[aQuiLeTour]=false; //On remets les stats de prison à 0;   SYSTEME CARCERAL A REVOIR
      prison[aQuiLeTour][0]=0;  //*/
      position[aQuiLeTour]+=resultatTirageDe;
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
	$("#ValiderTour").hide();
	$("#ResultatTirageDe").html("");
	$("#DoubleDe").html("");
	$("#BoutonDe").show();
	if (aQuiLeTour==nbrJoueur) {
      aQuiLeTour=1
    } else {
      aQuiLeTour++;
    }
    document.querySelector("#Joueur"+aQuiLeTour).style.border="1px solid red";
}


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
  switch (position[aQuiLeTour]) {
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
          console.log(`${pseudos[aQuiLeTour]} va en prison.`);
          prison[aQuiLeTour]=true;
          position[aQuiLeTour]=11;
        break;
      case 39:
          console.log(`${pseudos[aQuiLeTour]} doit payer 10000 €`);
          argent[aQuiLeTour]-=10000;
          parcGratuit+=10000;
        break;
    }
}






function Chance() {
  if ((position[aQuiLeTour]==8)||(position[aQuiLeTour]==23)||(position[aQuiLeTour]==37)) {
    console.log("Vous êtes sur une case Chance.");
    var random = parseInt(Math.random()*(17-1)+1)
    console.log(chance[random]);
    switch (random) {
      case 1://Aller en prison
          prison[aQuiLeTour]=true;
          position[aQuiLeTour]=11;
          alert("En prison : Joueur "+prison+" En position "+position[aQuiLeTour]);
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
        break;
      case 5://Reculez de 3 case
          position[aQuiLeTour]-=3;
        break;
      case 6://Go Rue de la Paix
          position[aQuiLeTour]=40;
        break;
      case 7://Gare de Lyon
      	  if (position[aQuiLeTour]>16) {
      	  	argent[aQuiLeTour]+=20000;
      	  }
          position[aQuiLeTour]=16;
        break;
      case 8://Libéré de prison
                                    //A compléter plus tard au dev du sys carcéral
          console.log(`${pseudos[aQuiLeTour]} est libérable de prison.`)
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
        break;
      case 12://Go Henri-Martin
      	  if (position[aQuiLeTour]>25) {
      	  	argent[aQuiLeTour]+=20000;
      	  }
          position[aQuiLeTour]=25;
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
}

function Communaute() {
  if (position[aQuiLeTour]==3||position[aQuiLeTour]==18||position[aQuiLeTour]==34) {
            var idCaisseDeCommunauté = parseInt(Math.random()*(17-1)+1);
            console.log(communaute[idCaisseDeCommunauté]);
          }
          switch (idCaisseDeCommunauté) {
            case 1://Libéré de prison
                 //A Faire plus tard
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
                                                                                      // A  FAIRE

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
              break;
            case 12://Prix de beauté 1000
                argent[aQuiLeTour]+=1000;
              break;
            case 13://Case départ
                position[aQuiLeTour]=1;
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
              break;}}
