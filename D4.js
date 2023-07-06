/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let randNum1 = Math.floor(Math.random() * 10);
let randNum2 = Math.floor(Math.random() * 10);
const area = function (l1, l2) {
  areaquadrato = l1 * l2;
  return areaquadrato;
};
let risultato = area(randNum1, randNum2);
console.log(risultato);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
randNum1 = Math.floor(Math.random() * 10);
randNum2 = Math.floor(Math.random() * 10);
const crazySum = function (num1, num2) {
  if (num1 === num2) {
    num = (num1 + num2) * 3;
  } else {
    num = num1 + num2;
  }
  return num;
};
risultato = crazySum(randNum1, randNum2);
console.log(risultato);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
randNum1 = Math.floor(Math.random() * 100);
const crazyDiff = function (randNum1) {
  if (randNum1 < 19) {
    num = Math.abs(randNum1 - 19);
  } else {
    num = Math.abs(randNum1 - 19) * 3;
  }
  return num;
};
risultato = crazyDiff(randNum1);
console.log(risultato);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
randNum1 = Math.floor(Math.random() * 100);
const boundary = function (num) {
  if ((num > 20 && num <= 100) || num === 400) {
    output = true;
  } else {
    output = false;
  }
  return output;
};
risultato = boundary(randNum1);
console.log(risultato);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function (str) {
  newString = str.split(" ");
  if (newString[0] === "EPICODE") {
    for (let i = 0; i < newString.length; i++) {
      newString[i] = newString[i].toLowerCase();
    }
    str = newString.join();
  } else {
    for (let i = 0; i < newString.length; i++) {
      newString[i] = newString[i].toLowerCase();
    }
    newString.unshift("EPICODE");
    str = newString.join(" ");
  }
  return str;
};
risultato = epify("Ciao sono sebastiano, e sono molto entusiasta di imparare a programmare");
console.log(risultato);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
randNum1 = Math.floor(Math.random() * 100);
const check3and7 = function (n) {
  if (n > 0) {
    if (n % 3 === 0) {
      console.log("Il numero é multiplo di 3");
    } else if (n % 7 === 0) {
      console.log("Il numero é multiplo di 7");
    } else {
      console.log("Il numero non é multiplo di 3 ne di 7");
    }
  } else console.log("Il numero non é positivo");
  return n;
};
risultato = check3and7(randNum1);
console.log("Il numero preso in analisi é " + risultato);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  newString = str.split("");
  let reversedString = [];
  for (let i = 0; i < newString.length; i++) {
    reversedString.unshift(newString[i]);
  }
  nonreversedString = reversedString.join("");
  return nonreversedString;
};

risultato = reverseString("Ciao sono paperino");
console.log(risultato);
// console.log(risultato);
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
  newString = str.split("");
  console.log(newString);
  for (let i = 0; i < newString.length; i++) {
    switch (newString[i]) {
      case " ":
        newString[i + 1] = newString[i + 1].toUpperCase();
      default:
        newString[0] = newString[0].toUpperCase();
    }
  }
  string = newString.join("");
  return string;
};
// chiedere se e possbiile modificare una stringa
//   num = str.indexOf(" ");
//   str = str.charAt(num + 1).toUpperCase();
//   return str;
risultato = upperFirst("il mio nome é roberto");
console.log(risultato);
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  newString = str.split("");
  newString.pop();
  newString.shift(0);
  string = newString.join("");
  return string;
};
risultato = cutString("AO mio nome é sebastianO");
console.log(risultato);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
randNum1 = Math.floor(Math.random() * 20);
const giveMeRandom = function (n) {
  arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 20));
  }
  return arr;
};
risultato = giveMeRandom(randNum1);
console.log(risultato);
