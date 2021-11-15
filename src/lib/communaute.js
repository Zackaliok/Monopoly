/* Chance array importation */
var communaute;
$.getJSON("src/lib/communaute.json", function (data) {
  communaute = data;
})



window.Communaute = Communaute;
function Communaute() {
  ClosePop();
    var random = 7;//parseInt(Math.random()*(17-1));
    console.log(communaute["cards"][random]["sentence"]);
    var F = new Function(communaute["cards"][random]["command"]);
    F();
    backPop.attr('onclick', "ClosePop()");
    RefreshMoney();
}
