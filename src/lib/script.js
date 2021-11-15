var aQuiLeTour, plateau;
var maisons = new Array(null,0,null,0,null,0,0,null,0,0,null,0,0,0,0,0,0,null,0,0,null,0,null,0,0,0,0,0,0,0,null,0,0,null,0,0,null,0,null,0);
 

 /* Cases array importation */
$.getJSON("src/lib/cases.json", function (data) {
  plateau = data["cases"];
})


var parcGratuit, prison;

/* Variables globales */
var menu = $("#Menu"),
	lobby = $("#Lobby"),
	jeu = $("#Jeu"),
  backPop = $("#BackgroundPop");

var resultatTirageDe = null,
	de1 = null,
	de2 = null,
  nbrDouble = 0;

var nbrToursPrison = 0;
  

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
  var nbrJoueur = 0;
	for (var i = 2; i <= 6; i++) {
		var radio = document.querySelector("#radio"+i).checked;
		if (radio) {
			nbrJoueur = i;
		}
	}
	for (var i = 0; i < nbrJoueur; i++) {
		$("#Lobby"+i).show();
    var player = new Player(i);
    listeDesJoueurs.push(player);
	}
  aQuiLeTour = listeDesJoueurs[0];
	menu.hide();
	lobby.show();
	console.log("Accès au lobby avec " + listeDesJoueurs.length + " joueurs.");
}



window.GoToJeu = GoToJeu;
function GoToJeu() {
  for (var i = 0; i < listeDesJoueurs.length; i++) {
    let player = listeDesJoueurs[i];

    if ($("#Lobby-Input"+i).val() != "") { // Si laissé vide, set avec DEFAULT_NAME
      player.setName($("#Lobby-Input"+i).val());
    }
    
    $("#Pseudo"+i).html(player.getName());
    $("#Argent"+i).html(player.getMoney());
    $("#Joueur"+i).show();
    document.querySelector('#Joueur'+i).style.backgroundColor = player.getAvatar();
    
	}
	lobby.hide();
	jeu.show();
	
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

  if (aQuiLeTour.getPrison()&&(nbrToursPrison<3)) {
    nbrToursPrison++;
    console.log("Tours en prison : "+nbrToursPrison)
  } else {
    if (aQuiLeTour.getPrison()&&(nbrToursPrison==3)) {
      Jail(false,1);
      console.log("Joueur libéré dû aux 3 tours");
    }
      
      //position[aQuiLeTour]+=resultatTirageDe;
      aQuiLeTour.setPosition(prompt("Sur quelle case on va Patron ?"));
      if (aQuiLeTour.getPosition()>40) {
        aQuiLeTour.setPosition(aQuiLeTour.getPosition()-40);
        aQuiLeTour.setAuthorization(true);
        if ((aQuiLeTour.getPosition()!=1)&&(!aQuiLeTour.getPrison())) {
          aQuiLeTour.addMoney(20000);
        }
      }
  }
	let pos = aQuiLeTour.getPosition();
  if (pos==9 || pos==23 || pos==36) {
    Chance();
  } else {
    if (pos==2||pos==17||pos==33) {
      Communaute();
    } else {
      if (pos==0 || pos==4 || pos==20 || pos==30 || pos==38) {
        Special(pos);
      } else {
        Loyer();
      }
    }
  }
	
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
  aQuiLeTour = listeDesJoueurs[(aQuiLeTour.getId() + 1) % listeDesJoueurs.length];
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


function BuyPopup() {
  let pos = aQuiLeTour.getPosition()
  if ( (plateau[pos].buyable) && (plateau[pos].price <= aQuiLeTour.getMoney()) && (aQuiLeTour.getAuthorization()) ) {
    backPop.show();
    $("#BuyDiv").show();
    $("#ContentBuyDiv").html(`Tu es sur ${plateau[pos].name} qui est au prix de ${plateau[pos].price}.`);
  }
}



window.Buy = Buy;
function Buy(answer) {
  if (answer) {
    let pos = aQuiLeTour.getPosition();
    aQuiLeTour.addPossession(pos);
    aQuiLeTour.delMoney(plateau[pos].price);
    plateau[pos].buyable = false;
    console.log(`Le joueur ${aQuiLeTour.getName()} possède désormais ${plateau[pos]}.`)
    RefreshMoney();
  }
  ClosePop();
}

window.OpenPossessions = OpenPossessions;
var lastPlayerId = 0;
function OpenPossessions(playerId) { // TODO: Entièrement repenser cette méthode avec les nouveaux objets à disposition
  let player = listeDesJoueurs[playerId];
  if (($("#PossessionsDiv").is(":hidden")==true) || (lastPlayerId!=playerId)) {
    $("#PossessionsDiv").show();
    backPop.show();
    lastPlayerId = playerId;
    var contenuPossessions = "<p> Possessions du joueur " + player.getName() + " : <br><br>";
    for (var i = 0; i < player.getPossessions().length; i++) {
      contenuPossessions+= plateau[player.getPossessions()[i]] + " - Loyer de " + plateau[player.getPossessions()[i]].rent[0] + " € <br>"; // TODO: Remplacer le 0 par un indice qui prends le nombre de maisons.
    }
    $("#PossessionsDiv").html(contenuPossessions + "</p>");
  } else {
      ClosePop();
  }
}


/*
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
*/

function Loyer() {
  if (plateau[aQuiLeTour.getPosition()].buyable) {
    BuyPopup();
    console.log("Pas de loyer, le terrain ne possède pas de propriétaire");
  } else {
    let proprio = plateau[aQuiLeTour.getPosition()].PropId;
    console.log("🚀 ~ file: script.js ~ line 305 ~ Loyer ~ proprio", proprio)
    
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


function Special(position) {
  switch (position) {
      case 0://Case départ
          aQuiLeTour.addMoney(40000);
          console.log(`${aQuiLeTour.getName()} gagne 40000 €`);
        break;
      case 4:
          console.log(`${aQuiLeTour.getName()} doit payer 20000 €`);
          aQuiLeTour.delMoney(20000);
          parcGratuit+=20000;
        break;
      case 20:
          console.log(`${aQuiLeTour.getName()} gagne ${parcGratuit} €`);
          aQuiLeTour.addMoney(parcGratuit);
          parcGratuit=0;
        break;
      case 30:
          Jail(true,0);
          //console.log("La fonction Jail executée");
        break;
      case 38:
          console.log(`${aQuiLeTour.getName()} doit payer 10000 €`);
          aQuiLeTour.delMoney(10000)
          parcGratuit+=10000;
        break;
    }
}






/*  Script du Canvas */


const canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

canvas.style.backgroundImage = "url('src/media/plateautest.svg')";
/*
//Déplacement des pions
const pions = new Image;
pions.src = "src/media/pions.svg";*/
