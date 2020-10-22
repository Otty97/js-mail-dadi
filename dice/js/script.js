var utente; //variabile aleatoria utente
var pc; //variabile aleatoria pc
playGame = document.getElementById("play")

utente = Math.floor((Math.random()*6));
pc = Math.floor((Math.random()*6));





document.getElementById("utenteResult").innerHTML = utente;
document.getElementById("pcResult").innerHTML = pc;
document.getElementById("finalResult").innerHTML = message;
