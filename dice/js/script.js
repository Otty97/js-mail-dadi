var utente; //variabile aleatorio dell'utente
var pc; //variabile aleatorio dell'pc

utente = Math.floor((Math.random()*6)+1);
pc = Math.floor((Math.random()*6)+1);

if (utente > pc) {

} else if (utente < pc) {

} else if (utente = pc) {

}

document.getElementById("finalResult").innerHTML = message;


//var utenti = ["tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com"]

//var inputUtenti = prompt("inserisci email")

//var message = "Email non registrata"
//for (var i=0; i < utenti.length; i++){
//  if(utenti[i] == inputUtenti){
//    message = "Email verificata"
//  }
//}
