/* Chance array importation */
let chance = null;
let URL = "src/lib/chance.json";
  let request2 = new XMLHttpRequest();
  request2.open('GET', URL);
  request2.responseType = 'json';
  request2.send();

window.chanceLoading = chanceLoading;
function chanceLoading() {
  chance = request2.response;
  console.log(chance);
}

window.Chance = Chance;
function Chance(test) {
  ClosePop();

  var random = parseInt(Math.random()*(17-1));
  console.log("🚀 ~ file: chance.js ~ line 20 ~ Chance ~ random", random)
  
  
  console.log(chance["cards"][random]["sentence"]);
  var F = new Function(chance["cards"][random]["command"]);
  console.log("🚀 ~ file: chance.js ~ line 25 ~ Chance ~ chance[\"cards\"][random][\"command\"]", chance["cards"][random]["command"])

  backPop.attr('onclick', "ClosePop()");
  return(F());
}