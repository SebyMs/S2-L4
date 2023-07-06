// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
randNum = Math.floor(Math.random() * 20);
const giveMeRandom = function (n) {
  arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 20));
  }
  return arr;
};
risultato = giveMeRandom(randNum);
console.log(risultato);

const checkArray = function (arr) {
  somma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log("Il numero é maggiore di 5");
      somma += arr[i];
    } else {
      console.log("Il numero é minore di 5");
    }
  }
  return somma;
};
console.log("Il totale é: " + checkArray(risultato));
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array = [
  {
    price: 122,
    quantity: 1,
  },
  {
    price: 60,
    quantity: 1,
  },
  {
    price: 90,
    quantity: 1,
  },
];

const shoppingCart0 = function (arr) {
  totale = 0;
  for (let i = 0; i < arr.length; i++) {
    totaleParziale = 0;
    for (let j = 0; j < arr[i].quantity; j++) {
      totaleParziale += arr[i].price;
    }
    totale += totaleParziale;
  }
  return totale;
};

console.log(shoppingCart0(array));
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
objc = {
  price: 4,
  quantity: 1,
};
const addToShoppingCart = function (arr, objc) {
  arr.push(objc);
  totale = 0;
  for (let i = 0; i < arr.length; i++) {
    totaleParziale = 0;
    for (let j = 0; j < arr[i].quantity; j++) {
      totaleParziale += arr[i].price;
    }
    totale += totaleParziale;
  }
  return totale;
};
console.log(addToShoppingCart(array, objc));
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = function (arr) {
  newarray = arr.map((x) => x);
  let prodottoCostoso = [];
  for (let i = 0; i < newarray.length; i++) {
    for (let j = 0; j < newarray.length; j++) {
      if (newarray[i].price > newarray[j].price) {
        newarray[i] = newarray[i];
        prodottoCostoso = arr[i];
      } else if (newarray[j].price > newarray[i].price) {
        newarray[i] = newarray[j];
        prodottoCostoso = newarray[j];
      }
    }
  }
  return prodottoCostoso;
};
// clonare un array
console.log(array);
console.log(shoppingCart(array));
// console.log(array);
// console.log(shoppingCart(array));
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      console.log(arr[i]);
    }
  }
};
latestShoppingCart(array);
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// esercizio impossibile con le richieste fatte!!!!!!!!!!!!!!
randNum1 = Math.floor(Math.random() * 10);
const loopUntil = function (num) {
  x = 0;
  while (x != 3) {
    randNum = Math.floor(Math.random() * 10);
    if (num <= randNum) {
      x++;
    } else {
      console.log(randNum);
    }
  }
};

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "paperino", 12];

const average = function (arr) {
  somma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      somma += arr[i];
    }
  }
  console.log(somma);
};
average(numbers);
// isNaN utilizzato per vedere se un dato non é un numero
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
stringhe = ["ciao", "supercalifragi", "listichespiralidose", "banana", "pera", "arancia"];
const longest = function (arr) {
  newarray = arr.map((x) => x);
  for (let i = 0; i < newarray.length; i++) {
    for (let j = 0; j < newarray.length; j++) {
      if (newarray[i].length > newarray[j].length) {
        newarray[i] = newarray[i];
        stringaLunga = newarray[i];
      } else if (newarray[j].length > newarray[i].length) {
        newarray[i] = newarray[j];
        stringaLunga = newarray[j];
      }
    }
  }
  console.log(stringaLunga);
};

longest(stringhe);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
email = "La mail SPAM contiene SPAM";
const emailContent = function (str) {
  arr = str.split(" ");
  x = 0;
  for (let i = 0; i < newarray.length; i++) {
    if (arr[i] === "SPAM" || arr[i] === "SCAM") {
      x += 1;
    } else {
      x += 0;
    }
  }
  console.log(x);
  // ad ogni ciclo for si aggiorna la variabile si potrebbe eseguire con meno linee di codice con while ma non sapevo che alla fine di ogni ciclo for si aggiornasse la variabile
  if (x >= 1) {
    console.log("La mail contiene spam");
  } else {
    console.log("La mail non contiene spam");
  }
};
emailContent(email);
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let data = new Date();
// let millisecond = Date.parse(data);
// console.log(millisecond);
const data = function (date) {
  nowDay = new Date().getTime();
  millPast = date.getTime();

  millDiff = nowDay - millPast;
  console.log("Sono passati : " + Math.floor(millDiff / (1000 * 60 * 60 * 24)) + " giorni dalla data " + date);
};
// creare una nuova data in anno mese giorno ore minuti secondi e millisecondi (Gennaio nel conteggio é 0)
data(new Date(2023, 6, 4));
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 [["00","01","02"],
 ["10","11","12"]]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = 3;
let y = 2;
const matrixGenerator = function (x, y) {
  array = [];
  for (let i = 0; i < y; i++) {
    arrayRiga = [];
    for (let j = 0; j < x; j++) {
      arrayColonna = [];
      arrayColonna.push(i, j);
      arrayRiga.push(arrayColonna);
    }
    array.push(arrayRiga);
  }
  console.log(array);
};
matrixGenerator(x, y);
console.log(array[1][2]);
// Con le conoscenze attuali sono riuscito ad affrontare l esercizio solo in questa maniera
