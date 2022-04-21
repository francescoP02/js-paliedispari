// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente di scegliere tra pari e dispari
const userChoise = prompt("Scegli pari o dispari");
console.log(userChoise);

// Richiamo la funzione e genero il numero per l'utente
const userNumber = generateNum(Number);
console.log(userNumber);

// Richiamo la funzione e genero il numero per il computer
const computerNumber = generateNum(Number);
console.log(computerNumber);

// Sommo i numeri generati
const sum = userNumber + computerNumber;
console.log(sum);

// Controllo tramite la funzione se la scelta dell'utente è uguale al risultato ottenuto
//  e stabilisco il vincitore
if (userChoise == oddOrEven(sum)) {

    console.log("Il giocatore ha vinto! Il risultato è", result);

} else {

    console.log("Il computer ha vinto! Mi dispiace, il risultato è", result);
    
}



// FUNCTIONS

// Creo una funzione che genera un numero da 1 a 5

function generateNum(Number) {

    num = Math.round(Math.random()*4 + 1);

    return num;
}

// Creo una funzione che divide la somma dei numeri e in base al resto 
// stabilisce se la funzione è pari o dispari
function oddOrEven(sum) {

    if (sum % 2 == 0) {

        result = "pari";

    } else {

        result = "dispari";

    }

    return result;

}