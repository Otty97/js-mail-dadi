var utenti = ["tizio@gmail.com", "caio@gmail.com", "sempronio@gmail.com"]

var inputUtenti = prompt("inserisci email")

var message = "Email non registrata"
for (var i=0; i < utenti.length; i++){
  if(utenti[i] == inputUtenti){
    message = "Email verificata"
  }
}

document.getElementById("serchResult").innerHTML = message;
