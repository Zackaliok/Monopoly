export function Chance() {
  if ((position[aQuiLeTour]==8)||(position[aQuiLeTour]==23)||(position[aQuiLeTour]==37)) {
    console.log("Vous êtes sur une case Chance.");
    var random = parseInt(Math.random()*(17-1)+1)
    switch (random) {
      case 1://Aller en prison
          prison=aQuiLeTour;
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
          position[aQuiLeTour]=12;
        break;
      case 12://Go Henri-Martin
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
