//alert("yo");
//CheckSelectionNbrJoueur();
//PassageSelectionNbrJoueurToLobby();
//PassageMenuToTableDeJeu();
//------------ Variables globales : -----------------------

  //-------------- Affichage des différentes DIV : --------
  var menuAffiché = true;
  var selectionNbrJoueurAffiché = true;
  var lobbyAffiché = false;
  var tableDeJeu = false;

  //------------- Informations sur les joueurs : ----------
  var nbrJoueur= 0;
  var resultatTirageDe=0;
  var aQuiLeTour=1;
  var de1=0;
  var de2=0;

  var pseudos = new Array();
  var argentJoueur = new Array("null",200000,200000,200000,200000,200000,200000);
  var positionJoueurs = new Array("null",1,1,1,1,1,1);//Position des joueurs dans le plateau[]
  var autorisationAchat = new Array("null",false,false,false,false,false,false);//Passe à True quand il font 1 tour
  var possessions = new Array("null",pseudos[1],pseudos[2],pseudos[3],pseudos[4],pseudos[5],pseudos[6])
      possessions[1] = new Array();
      possessions[2] = new Array();
      possessions[3] = new Array();
      possessions[4] = new Array();
      possessions[5] = new Array();
      possessions[6] = new Array();


  //------------- Informations du plateau : --------------------

  var plateau = new Array("null",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39);
  var nomCases = new Array("null","Case départ","Boulevard de Belleville","Caisse de communauté","Rue Lecourbe","Impôts sur le revenu","Gare Montparnasse","Rue de Vaugirard","Chance","Rue de Courcelles","Avenue de la République","Prison","Boulevard de la Villette","Compagnie de distribution d'électricité","Avenue de Neuilly","Rue de Paradis","Gare de Lyon","Avenue Mozart","Caisse de communauté","Boulevard Saint-Michel","Place Pigalle","Parc Gratuit","Avenue Matignon","Chance","Boulevard Malesherbes","Avenue Henri-Martin","Gare du Nord","Faubourg Saint-Honoré","Place de la Bourse","Compagnie de distribution des eaux","Rue la Fayette","Allez en prison","Avenue de Breuteuil","Avenue Foch","Caisse de communauté","Boulevard des Capucines","Gare Saint-Lazare","Chance","Avenue des Champs-Elysées","Taxe de luxe","Rue de la Paix");
    //var prixPropriétés = new Array("null","null","vendu","null","vendu","null","vendu","vendu","null","vendu","vendu","null","vendu","vendu","vendu","vendu","vendu",18000,"null",18000,20000,"null",22000,"null",22000,24000,20000,26000,26000,15000,28000,"null",30000,30000,"null",32000,20000,"null",35000,"null",40000);
    //var maisons = new Array("null","null",3,"null",3,"null",3,3,"null",3,3,"null",3,1,3,3,3,0,"null",0,0,"null",0,"null",0,0,0,0,0,0,0,"null",0,0,"null",0,0,"null",0,"null",0);
    //Les prix de propriété et les maisons au dessus ne sont pas les bons c'est pour un test
  var prixPropriétés = new Array("null","null",6000,"null",6000,"null",20000,10000,"null",10000,10000,"null",14000,15000,14000,16000,20000,18000,"null",18000,20000,"null",22000,"null",22000,24000,20000,26000,26000,15000,28000,"null",30000,30000,"null",32000,20000,"null",35000,"null",40000);
  var maisons = new Array("null","null",0,"null",0,"null",0,0,"null",0,0,"null",0,0,0,0,0,0,"null",0,0,"null",0,"null",0,0,0,0,0,0,0,"null",0,0,"null",0,0,"null",0,"null",0);
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
  // 1 = nu sans Mono / 2 = nu Mono / 3 = 1 Maison / 4 = 2 Maisons / 5 = 3 Maisons / 6 = 4 Maisons / 7 = Hôtel
  // Sauf pour les gares et les compagnies.

  var caisseDeCommunauté = new Array("null","Vous êtes libéré de prison. Cette carte peut être conservée.","C'est votre anniversaire : Chaque joueurs doit vous donner 1000 Francs.","Erreur de la Banque en votre faveur. Recevez 20000 Francs","Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ","Recevez votre intérêt sur l'emprunt à 7% : 2500 Francs","Vous héritez 10000 Francs","Payez une amende de 1000 Francs ou tirer une carte chance","Les contributions vous remboursent la somme de 2000 Francs","Payez votre Police d'Assurance s'élevant à 5000 Francs","La vente de votre stock vous rapporte 5000 Francs","Retournez à Belleville","Vous avez gagné le deuxième prix de beauté. Recevez 1000 Francs","Placez vous sur la case départ","Recevez votre revenu annuel 10000 Francs","Payez la note du Médecin 5000 Francs","Payez à l'Hôpital 10000 Francs");
  var chance = new Array("null","Allez en prison. Avancez tout droit en prison. Ne passez pas par la case départ","Faites des réparations dans toutes vos maisons. Versez pour chaque maison 2500 Francs. Versez pour chaque hôtel 10000 Francs","Votre immeuble et votre prêt vous rapportent. Vous touchez 15000 Francs","Avancez jusqu'à la case départ","Reculez de trois cases","Rendez vous Rue de La Paix","Allez à la gare de Lyon","Vous êtes libéré de prison. Cette carte peut être conservée","Amende pour excès de vitesse 1500 Francs","La Banque vous verse un dividende de 5000 Francs","Avancez au Boulevard de la Villette","Rendez vous à l'Avenue Henri-Martin","Payez pour frais de scolarité 15000 Francs","Vous avez gagné le prix de mots croisés. Recevez 10000 Francs","Vous êtes imposé pour les réparations de voirie à raison de : 4000 Francs par maison et 11500 Francs par hôtel","Amende pour ivresse 2000 Francs");

  var parcGratuit = 0;//Argent stocké dans le parc gratuit
  var prison = pseudos[0];//Si un joueur est en prison ce sera son id

//-------- Initialisation de la partie et timer : ------------------

function InitialisationPartie() {
  for (var i = 1; i <= nbrJoueur; i++) {
    document.querySelector("#ArgentJoueur"+i).innerHTML = 200000;
    document.querySelector("#PseudoJoueur"+i).innerHTML = document.querySelector("#InputPseudoJoueur"+i).value;
    document.querySelector(".InformationJoueur1").style.border="5px solid red";
    pseudos[i]=document.querySelector("#InputPseudoJoueur"+i).value;
  }
}


//------------ Fonctions du Menu et autre : ---------------
  //---------- Switch des différentes pages : -------------
    function CheckSelectionNbrJoueur() {
      for (var i = 2; i <=6 ; i++) {
        testRadio = document.querySelector("#radio"+i).checked;
        if (testRadio) {
          nbrJoueur = i;
          break;
        }}
      PassageSelectionNbrJoueurToLobby()
      }

    function PassageSelectionNbrJoueurToLobby() {
      selectionNbrJoueurAffiché = false;
      document.querySelector(".SelectionNbrJoueur").style.display="none";
      for (var i = 1; i <= nbrJoueur; i++) {document.querySelector(".LobbyJoueur"+i).style.display="block";}
      lobbyAffiché = true;
      document.querySelector(".Lobby").style.display="block";
    }

    function PassageMenuToTableDeJeu() {
      alert("Démarrage de la Partie. Bon Jeu !");

      for (var i = 1; i <= nbrJoueur; i++) {document.querySelector(".InformationJoueur"+i).style.display="block";}

      lobbyAffiché = false; document.querySelector(".Lobby").style.display="none";
      menuAffiché = false;  document.querySelector(".Menu").style.display="none";
      tableDeJeu = true;    document.querySelector(".TableDeJeu").style.display="block";

      InitialisationPartie();
    }

  //---------- Pour changer d'Avatar et de nom : ----------

    function ChangerAvatar(identifiantJoueur,identifiantButton) {
      alert("Pour l'instant on en a pas besoin");
    }


//---------- Fonctions pour la partie : -----------------

  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

    async function LancerDeDes(min,max,maxAudio) {
      document.querySelector(".DoubleDe").innerHTML="";
      var deAudio = new Audio("src/media/de_lance_"+parseInt(Math.random()*(maxAudio-min)+min)+".mp3"); //On choisis une source d'audio aléatoire pour les dés
      console.log(deAudio.src);
      deAudio.play();//On joue l'audio
        for (var i = 0; i < 10; i++) {
          de1 = parseInt(Math.random()*(max-min)+min);//On prends 2 valeurs au hasard entre 1 et 6
          de2 = parseInt(Math.random()*(max-min)+min);
          resultatTirageDe=de1+de2;//On les additionne
          document.querySelector(".ResultatTirageDe").innerHTML=de1+" + "+de2;//On affiche les dés pour l'utilisateur
          await sleep(50);}//On attends
          if (de1==de2) {
            document.querySelector(".DoubleDe").innerHTML="Double !"; //Si il y a un double on l'affiche
          }
          document.querySelector(".buttonLancerDeDe").style.display="none";
          DeplacementPion(aQuiLeTour);//On lance la fonction de déplacement du pion
      }

  function DeplacementPion(aQuiLeTour) {
    positionJoueurs[aQuiLeTour]+=resultatTirageDe;//On ajoute le résultat du dé à la position du joueur
    if (positionJoueurs[aQuiLeTour]>40) {//On remets la position du joueur au début pour faire un tour
      positionJoueurs[aQuiLeTour]-=40;
      autorisationAchat[aQuiLeTour]=true;//On autorise le joueur à désormais acheter une propriété
      if ((positionJoueurs[aQuiLeTour]!=1)&&(prison!=aQuiLeTour)) {argentJoueur[aQuiLeTour]+=20000;}//Argent du tour du plateau
    }
    alert("La position de "+pseudos[aQuiLeTour]+" = "+positionJoueurs[aQuiLeTour]+", donc à << "+nomCases[positionJoueurs[aQuiLeTour]]+" >>");//Temporaire
    CheckCarteChance();//Voir si on est sur une carte chance et appliquer la carte
    CheckCarteCaisseDeCommunaute();//Voir si on est sur une carte caisse de communauté et appliquer la carte
    CheckPrisonParcTaxeDépart();//Pour check les cases spéciales (Prison=Aller en prison)
    PayerLoyer();
    PropositionAchat();//Si la propriété est en vente on lui propose d'acheter
    ActualisationArgent();
    
    if (de1==de2) {
          document.querySelector(".buttonLancerDeDe").style.display="block";
        } else {
          document.querySelector(".ValiderLeTour").style.display="block";
        }
  }

  function PayerLoyer() {
    var temp = 0; //Variable pour tester l'intérieur des possessions
    
    if (prixPropriétés[positionJoueurs[aQuiLeTour]]=="vendu") {

    for (var i = 1; i <= nbrJoueur ; i++) {
      temp = possessions[i].indexOf(positionJoueurs[aQuiLeTour]);
      

      if (temp != -1) {
        
        if (i == aQuiLeTour) {
          alert("C'est ta propriété !");break;
        } else {
          alert("Ce n'est pas ta propriété, tu dois donc payer " + loyer[positionJoueurs[aQuiLeTour]][maisons[positionJoueurs[aQuiLeTour]]] + " €");
          argentJoueur[aQuiLeTour]-=loyer [positionJoueurs[aQuiLeTour]] [maisons[positionJoueurs[aQuiLeTour]] ];
          argentJoueur[i]+=loyer[positionJoueurs[aQuiLeTour]][maisons[positionJoueurs[aQuiLeTour]]];     //le "0" sera bientôt remplacer par le nombre de maisons que possède la propriété
          break;
        }
      } 
    }
    } else {
     
  }
  }

  function CheckCarteChance() {

    if (positionJoueurs[aQuiLeTour]==8||positionJoueurs[aQuiLeTour]==23||positionJoueurs[aQuiLeTour]==37) {
      alert("Carte Chance !")
      var idChance = parseInt(Math.random()*(17-1)+1);
      alert(chance[idChance]);
    }
    switch (idChance) {
      case 1://Aller en prison
          prison=aQuiLeTour;
          positionJoueurs[aQuiLeTour]=11;
          alert("En prison : Joueur "+prison+" En position "+positionJoueurs[aQuiLeTour]);
        break;
      case 2://Faites des réparations 2.500 ou 10.000

        break;
      case 3://Votre immeuble rapportent 15.000
          argentJoueur[aQuiLeTour]+=15000;
        break;
      case 4://Avancer Case Départ
          positionJoueurs[aQuiLeTour]=1;
        break;
      case 5://Reculez de 3 case
          positionJoueurs[aQuiLeTour]-=3;
        break;
      case 6://Go Rue de la Paix
          positionJoueurs[aQuiLeTour]=40;
        break;
      case 7://Gare de Lyon
          positionJoueurs[aQuiLeTour]=16;
        break;
      case 8://Libéré de prison
          prison=0
        break;
      case 9://Amende vitesse 1.500
          argentJoueur[aQuiLeTour]-=1500;
          parcGratuit+=1500;
        break;
      case 10://Banque  vers 5.000
          argentJoueur[aQuiLeTour]+=5000;
        break;
      case 11://Go Villette
          positionJoueurs[aQuiLeTour]=12;
        break;
      case 12://Go Henri-Martin
          positionJoueurs[aQuiLeTour]=25;
        break;
      case 13://Scolarité 15.000
          argentJoueur[aQuiLeTour]-=15000;
          parcGratuit+=15000;
        break;
      case 14://Mots Croisés 10.000
          argentJoueur[aQuiLeTour]+=10000;
        break;
      case 15://împots 4.000 ou 11.500

        break;
      case 16://Amende ivresse 2000
          argentJoueur[aQuiLeTour]-=2000;
          parcGratuit+=2000;
        break;}}

  function CheckCarteCaisseDeCommunaute() {
    if (positionJoueurs[aQuiLeTour]==3||positionJoueurs[aQuiLeTour]==18||positionJoueurs[aQuiLeTour]==34) {
            alert("Caisse de Communauté !");
            var idCaisseDeCommunauté = parseInt(Math.random()*(17-1)+1);
            alert(caisseDeCommunauté[idCaisseDeCommunauté]);
          }
          switch (idCaisseDeCommunauté) {
            case 1://Libéré de prison
                prison = 0;
              break;
            case 2://Anniversaire
                var cagnotteAnniv=0;
                for (var i = 1; i <= nbrJoueur; i++) {
                  argentJoueur[i]-=1000
                  cagnotteAnniv+=1000}
                argentJoueur[aQuiLeTour]+=cagnotteAnniv+1000;
                cagnotteAnniv=0;
              break;
            case 3://Erreur banque 20000
                argentJoueur[aQuiLeTour]=20000;
              break;
            case 4://Allez en Prison
                prison=aQuiLeTour;
                positionJoueurs[aQuiLeTour]=11;
                alert("En prison : Joueur "+prison+" En position "+positionJoueurs[aQuiLeTour]);
              break;
            case 5://Recevez votre intérêt sur l'emprunt à 7% : 2500 Francs
                argentJoueur[aQuiLeTour]+=2500;
              break;
            case 6://Héritage 10000
                argentJoueur[aQuiLeTour]+=10000;
              break;
            case 7://Payez une amende de 1000 Francs ou tirer une carte chance

              break;
            case 8://contributions rapportent 2000
                argentJoueur[aQuiLeTour]+=2000;
              break;
            case 9://Payez votre Police d'Assurance s'élevant à 5000 Francs
                argentJoueur[aQuiLeTour]-=5000;
                parcGratuit+=5000;
              break;
            case 10://Vente stock 5000
                argentJoueur[aQuiLeTour]+=5000;
              break;
            case 11://REtounez Belleville
                positionJoueurs[aQuiLeTour]=2;    //  A COMPLETER
              break;
            case 12://Prix de beauté 1000
                argentJoueur[aQuiLeTour]+=1000;
              break;
            case 13://Case départ
                positionJoueurs[aQuiLeTour]=1;
              break;
            case 14://Recevez votre revenu annuel 10000
                argentJoueur[aQuiLeTour]+=10000;
              break;
            case 15://Medecin 5000
                argentJoueur[aQuiLeTour]-=5000;
                parcGratuit+=5000;
              break;
            case 16://Hopital 10000
                argentJoueur[aQuiLeTour]-=10000;
                parcGratuit+=10000;
              break;}}

  function CheckPrisonParcTaxeDépart() {
    switch (positionJoueurs[aQuiLeTour]) {
      case 1://Case départ
          alert("Vous êtes sur la case départ et gagnez 40000 Francs");
          argentJoueur[aQuiLeTour]+=40000;
        break;
      case 5:
          alert("Vous êtes sur les Impôts et devez payer 20000 Francs");
          argentJoueur[aQuiLeTour]-=20000;
          parcGratuit+=20000;
        break;
      case 21:
          alert("Vous êtes sur le Parc Gratuit et vous gagnez son contenu, soit "+parcGratuit);
          argentJoueur[aQuiLeTour]+=parcGratuit;
          parcGratuit=0;
        break;
      case 31:
          alert("Allez en prison");
          prison=aQuiLeTour;
          positionJoueurs[aQuiLeTour]=11;
          alert("En prison : Joueur "+prison+" En position "+positionJoueurs[aQuiLeTour]);
        break;
      case 39:
          alert("Taxe de Luxe, payez 10000 Francs");
          argentJoueur[aQuiLeTour]-=10000;
          parcGratuit+=10000;
        break;
      default:break;

    }
  }

  function PropositionAchat() {
    if  (((prixPropriétés[positionJoueurs[aQuiLeTour]]!="null")&&(argentJoueur[aQuiLeTour]>=prixPropriétés[positionJoueurs[aQuiLeTour]]))||((prixPropriétés[positionJoueurs[aQuiLeTour]]!="vendu")&&(argentJoueur[aQuiLeTour]>=prixPropriétés[positionJoueurs[aQuiLeTour]]))){
      document.querySelector(".PropositionAchat").style.display="block";//On affiche la proposition d'achat
      document.querySelector("#EMAchat1").innerHTML=nomCases[positionJoueurs[aQuiLeTour]];//Et les buttons
      document.querySelector("#EMAchat2").innerHTML=prixPropriétés[positionJoueurs[aQuiLeTour]];//idem
    }
  }

  function AchatPropriété() {
    possessions[aQuiLeTour].push(positionJoueurs[aQuiLeTour]);//On rajoute la case aux possessions du joueur
    alert("Vous avez maintenant "+possessions[aQuiLeTour].length+" propriété(s)");//On lui dit combien il a de propriétés
    argentJoueur[aQuiLeTour]-=prixPropriétés[positionJoueurs[aQuiLeTour]];//On retire le prix a la banque du joueur
    prixPropriétés[positionJoueurs[aQuiLeTour]]="vendu";//On rend la propriété inachetable
    document.querySelector(".PropositionAchat").style.display="none";//On fait disparaître la proposition d'achat
    ActualisationArgent();
  }

  function RefusAchatPropriété() {
    document.querySelector(".PropositionAchat").style.display="none";//On fait disparaître la proposition d'achat
  }

  function ChangementDeTour() {
    document.querySelector(".ValiderLeTour").style.display="none";
    document.querySelector(".ResultatTirageDe").innerHTML="";//Reset du dé
    document.querySelector(".DoubleDe").innerHTML="";
    document.querySelector(".buttonLancerDeDe").style.display="block";
    document.querySelector(".InformationJoueur"+aQuiLeTour).style.border="2px solid white";//On remet le contour du joueur normal
    ActualisationArgent();
    if (aQuiLeTour==nbrJoueur) {
      aQuiLeTour=1 // Si le joueur est le dernier, on retourne au début
    } else {
      aQuiLeTour++; // Sinon on fait ++
    }
    document.querySelector(".InformationJoueur"+aQuiLeTour).style.border="5px solid red";//On change le contour du joueur en train de jouer

  }

  function ActualisationArgent() {
    for (var i = 1; i <= nbrJoueur ; i++) {
      document.querySelector("#ArgentJoueur"+i).innerHTML=argentJoueur[i];
    }
  }


  function FonctionDeTest() {
    alert(possessions[1][1]);
  }
