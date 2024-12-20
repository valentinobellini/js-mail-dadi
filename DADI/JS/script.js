//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.



// genera un numero casuale da 1 a 6 per il giocatore
const playerRoll = Math.floor(Math.random() * 6) + 1;
console.log(playerRoll);


// genera un numero casuale da 1 a 6 per il computer
const computerRoll = Math.floor(Math.random() * 6) + 1;
console.log(computerRoll);


//stabilisci chi è il vincitore
if (playerRoll > computerRoll) {
    console.log("Il giocatore vince");
} else if (playerRoll < computerRoll) {
    console.log("Il computer vince");
} else {
    console.log("La partita è pari");
    
}