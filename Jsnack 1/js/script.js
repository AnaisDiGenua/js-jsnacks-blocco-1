// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while



// versione for
// let somma = 0;

// // chiedere all'utente di inserire un numero per cinque volte 
// for (i = 0; i < 5; i++) {
//     let num = parseInt(prompt('inserisci un numero'));

//     // somma dei numeri
//     somma += num;
// }

// // stampa della somma
// console.log(somma);




// versione while
let somma = 0;
let i = 0;

// chiedere all'utente di inserire un numero per cinque volte 
while (i < 5) {
    let num = parseInt(prompt('inserisci un numero'));

    // somma dei numeri
    somma += num;

    i++
}

console.log(somma);

