const avatar = {
    RED: "Red",
    YELLOW:  "Yellow",
    GREEN: "Green",
    BLUE: "Blue",
    MAGENTA: "Magenta",
    ORANGE: "Orange",
    WHITE: "White"
}


var colors = new Array(avatar.RED, avatar.YELLOW, avatar.GREEN, avatar.BLUE, avatar.MAGENTA, avatar.ORANGE);
for (let i = 0; i < 6 ; i++) {
  document.querySelector('#Lobby'+i).style.backgroundColor= colors[i];  //Mise en place des couleurs de base
}

function ChooseColor(playerId, sens) {
  var playerColors = new Array(0, 1, 2, 3, 4, 5);
  
  for (let i = 0; i < listeDesJoueurs.length; i++) {
    if (listeDesJoueurs[i].getId() == playerId) {
      player = listeDesJoueurs[i];
    }
  }

  if (sens) { // Next
    playerColors[playerId]+=1;
    playerColors[playerId]%=6;
  } else { // Previous
    if (playerColors[playerId] == 0) {
        playerColors[playerId] = 5;
    } else {
        playerColors[playerId] -= 1;
    }
  }

/*
  if (sens) { //Si Suivant
    playerColors[playerId] +=1
    if (playerColors[playerId]==6) {
      playerColors[playerId]=1;
    }
  } else { //Si Précédent
    playerColors[playerId]-=1;
    if (playerColors[playerId]==0) {
      playerColors[playerId]=5;
    }
  }
*/
player.setAvatar(colors[playerColors[playerId]]);
  
  console.log("🚀 ~ file: script.js ~ line 656 ~ ChooseColor ~ player.setAvatar(colors[playerColors[playerId]]);", player.getAvatar());
  

  document.querySelector('#Lobby'+playerId).style.backgroundColor=player.getAvatar();
}