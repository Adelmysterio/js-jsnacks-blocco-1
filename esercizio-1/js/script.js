/* L'utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const numberA = parseInt(prompt('Inserisci il primo numero'))
const numberB = parseInt(prompt('inserisci il secondo numero'))

if (numberA > numberB) {
    console.log (numberA)
}

else {
    console.log (numberB)
}