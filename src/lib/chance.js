/* Chance array importation */
let chance;
$.getJSON("src/lib/chance.json", function (data) {
  chance = data;
})



window.Chance = Chance;
function Chance(test) {
  if (test == -1) {
    aQuiLeTour.delMoney(1000);
    parcGratuit+=1000;
  } else {
    ClosePop();
    const random = 7;//parseInt(Math.random()*(17-1));
    console.log(chance["cards"][random]["sentence"]);
    const F = new Function(chance["cards"][random]["command"]);
    F();
    backPop.attr('onclick', "ClosePop()");
    RefreshMoney();
  }
}