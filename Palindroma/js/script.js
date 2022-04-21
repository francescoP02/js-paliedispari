// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente la parola

const userWord = prompt("Inserisci una parola");

// Chiamo la funzione
const invertedWord = reverse(userWord);

// Confronto le due parole, se sono uguali sono palindrome
if (userWord == invertedWord) {

    console.log('La parola è palindroma', userWord, invertedWord);

}
  
else {

    console.log('La parola non è palindroma', userWord, invertedWord);

}


// FUNCTIONS


function reverse(userWord) {

  //   Separo le lettere della parola(con split), le inverto(con reverse) e infine le riunisco(con join)
  let invertedWord = userWord.split('').reverse().join(''); 

  //   Faccio ritornare il risultato nella funzione
  return invertedWord;

}