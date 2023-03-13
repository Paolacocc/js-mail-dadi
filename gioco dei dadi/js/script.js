//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.


//generare un numero random da 1 a 6 per il computer

const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(computerNumber);

//generare un numero random da 1 a 6 per l'utente

const userNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(userNumber);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (computerNumber > userNumber){
    console.log("Sorry the computer won :(");
} else {
    console.log("Congrats you won!");
}