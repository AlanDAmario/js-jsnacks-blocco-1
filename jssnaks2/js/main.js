'use strict';
//CRAZIONE VARIABILI DELLE PAROLE TRAMITE PROMPT
const word1 = prompt('inserisci parola 1');
const word2 = prompt('inserisci parola 2');

//CRAZIONE VARIABILI LUNGHEZZE 
const wordLen1 = word1.length;
const wordLen2 = word2.length;

// SE PAROLA 1 è PIU LUNGA DELLA PAROLA 2 ALLORA STAMPO PAROLA 1
// SE PAROLA 2 è PIU LUNGA DELLA PAROLA 1 ALLORA STAMPO PAROLA 2
if (wordLen1 > wordLen2) {
    console.log(wordLen1, 'stampo parola 1');
} else if (wordLen2 > wordLen1) {
    console.log(wordLen2, 'stampo parola 2');
} else (wordLen1 === wordLen2){
    console.log('le parole sono della stessa lunghezza');
}

