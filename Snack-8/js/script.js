//Snack8 
//! Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l'altro di verde. Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari e in verde i numeri pari.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const divRosso = document.getElementById('text-red');

const divGreen = document.getElementById('text-green');

for (let i = 0; i < numbers.length; i++) {

  if (numbers[i] % 2 == 0) {
    const pElem = document.createElement('p');
    divGreen.appendChild(pElem);
    pElem.append(numbers[i]);
  }

  else {
    const pElem = document.createElement('p');;
    divRosso.appendChild(pElem);
    pElem.append(numbers[i]);
  }
};



/*const redDiv = document.createElement('div');
redDiv.classList.add('font-red');

const greenDiv = document.createElement('div');
greenDiv.classList.add('font-green')

for (let index = 0; index < numbers.length; index++) {
  const newElement = document.createElement('p');
  newElement.append(numbers[index]);

  if (numbers[index] % 2 == 0) {
    greenDiv.appendChild(newElement)
  }

  else {
    redDiv.appendChild(newElement)
  }
}

const containerEl = document.querySelector('#output');
containerEl.appendChild(redDiv)
containerEl.appendChild(greenDiv)
 */