/* SNACK 2: Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */

var display = document.getElementById("my-id");
do {
  var num = parseInt(prompt("Inserisci un numero"));
} while (isNaN(num));

if (num % 2 === 0) {
  console.log(num);
  display.innerText = "Numero inserito = " + num;
} else {
  console.log(num + 1);
  display.innerText = "Numero successivo a quello inserito = " + (num + 1);
}
