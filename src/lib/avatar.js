const avatar = {
    RED: "Red",
    YELLOW:  "Yellow",
    GREEN: "Green",
    BLUE: "Blue",
    MAGENTA: "Magenta",
    ORANGE: "Orange",
    WHITE: "White"
}

let playerAvatar = Object.keys(avatar);

/* Initialization */
for (let i = 0; i < 6 ; i++) {
  listeDesJoueurs[i].setAvatar(playerAvatar[i]);
  document.querySelector('#Lobby'+i).style.backgroundColor = listeDesJoueurs[i].getAvatar();  //Mise en place des couleurs de base
}

function ChooseColor(playerId, sens) {
  let player;

  /* Searching the player */
  listeDesJoueurs.forEach(el => {
    if (el.getId() == playerId) {
      player = el;
    }
  });
  if (player == null) {
    console.log('Erreur, le player est introuvable');
    return
  }

  if (sens) { // Next
    playerColors[player.getId()] += 1;
  } else { // Previous
    playerColors[player.getId()] += 5;
  }
  playerColors[player.getId()] %= 6;

  player.setAvatar(colors[playerColors[player.getId()]]);
  console.log("Mise à jour de l'avatar de ", player.getName(), " : ",player.getAvatar());
  document.querySelector('#Lobby'+playerId).style.backgroundColor=player.getAvatar();
}