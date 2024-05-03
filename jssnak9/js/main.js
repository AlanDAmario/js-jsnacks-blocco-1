'use strict';
//DEFINIAMO UNA SOMMA DA UTILIZZARE IN UN CICLO
let sum = 0;
//CALCOLARE TRAMITE IL CICLO I PRIMI 10 NUMERI, += SERVER PER ABBREVIARE LA STRUTTURA SUM = SUM + (i+1) 
for (let i = 0; i < 10; i++) {
    sum += (i + 1);
}
console.log(sum);
