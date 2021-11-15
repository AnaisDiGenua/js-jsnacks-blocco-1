// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.




// chiedere all'utente due parole
let firstWord = prompt('scrivi una parola');
let secondWord = prompt('scrivi un\'altra parola');

// istruzioni condizionali
if (firstWord.length == secondWord.length) {
    console.log(firstWord + ' ' + secondWord);
} else if (firstWord.length > secondWord.length) {
    console.log(firstWord);
} else {
    console.log(secondWord);
}


