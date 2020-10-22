var utente; //variabile aleatoria utente
var pc; //variabile aleatoria pc
playGame = document.getElementById("play")
var utente = ""
var pc = ""

//Evento generatore del gioco
//playGame.addEventListener("click",function(){

  utente = Math.floor((Math.random()*6)+1);
  pc = Math.floor((Math.random()*6)+1);

  //Esito del gioco
  if (utente > pc){
    message = "YOU WIN!"
  } else if (utente < pc) {
    message = "YOU LOSE!"
  } else if (utente = pc) {
    message = "DROW!"
  }






document.getElementById("utenteResult").innerHTML = utente;
document.getElementById("pcResult").innerHTML = pc;
document.getElementById("finalResult").innerHTML = message;
