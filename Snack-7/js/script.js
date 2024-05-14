//Snack7
//! Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

let n = parseInt(prompt('Scrivi un numero'))

for (let i = 0; i < n; i++) {

  let arrayN = []

  for (let index = 0; index < 10; index++) {
    arrayN.push(Math.floor(Math.random() * 100) + 1)
  }
  
  console.log(arrayN)

}