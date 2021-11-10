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