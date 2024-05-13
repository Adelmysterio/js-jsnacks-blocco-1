/* L'utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const numberA = Number.parseInt(prompt('Inserisci il primo numero'), 10)
const numberB = Number.parseInt(prompt('inserisci il secondo numero'), 10)

if (numberA === numberB) {
    console.log(numberA, numberB)
}

else if (numberA > numberB) {
    console.log(numberA)
}

else {
    console.log(numberB)
}