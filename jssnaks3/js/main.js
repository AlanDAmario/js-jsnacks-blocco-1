'use strict';
let sum = 0;
const counter = 10;

for (let i = 1; i <= counter; i++) {
    sum += parseInt(prompt(`${i} di ${counter}`));
}
console.log('il totale è..', sum);