//!Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
const pari = [2, 4, 6, 8, 10, 12];

let somma = 0

for (let i = 0; i < pari.length; i++) {

    if (i % 2 ==1) {
      somma = somma + pari[i]  
    }
    
}
console.log(somma)