'use strict';
//DICHIARAMO UNA VARIABILE 0 PER LA SOMMA DA UTILIZZARE NEL CICLO
let sum = 0;
//CREARE UN PROMPT PER L UTENTE DOVE DEVE INSERIRE 4 NUMERI
const userNR = prompt('inserisci un numero 4');
//VERIFICA SE IL NUMERO DELL L UTENTE INSERITO è DI 4 CIFRE, .lenght, SERVE A VERIFICARE LA LUNGHEZZA DELLA STRINGA
if (userNR.length === 4) {
    //CICLO PER IL CALCOLO DEI 4 NUMERI (.lenght serve per specificare la lunghezza al computer, sennò non riuscirebbe a trovare una lunghezza specifica)
    for (let i = 0; i < userNR.length; i++) {
        //SOMMA DEI NUMERI DELL UTENTE, NUMBER UTILIZZATO POST OPERAZIONE PER CAMBIARE DA SRINGA A NUMERO
        sum += Number(userNR[i]);
    }
    //ALERT PER REINSERIRE 4 NUMERI CORRETTAMNETE 
} else {
    alert('inserisci 4 cifre');
}
//STAMPA
console.log(sum);



