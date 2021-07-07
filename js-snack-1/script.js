/* SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

var display = document.getElementById("my-id-1");
var display2 = document.getElementById("my-id-2");

var sum = 0;

for (var i = 0; i < 5; i++) { 
  var userNumber = parseInt(prompt("Inserisci un numero " + i + "/5"));
  if (isNaN(userNumber)) {
    i--;
  } else {
    console.log(userNumber);
    sum += userNumber;
  }
}
console.log("Somma = ", sum);
display.innerText = "Somma dei numeri inseriti = " + sum

/* *********************************************** */

var sum = 0;
var i = 0;

while (i < 5) {
  var userNumber = parseInt(prompt("Inserisci un numero " + i + "/5"));
  if (isNaN(userNumber)) {
    i--;
  } else {
    console.log(userNumber);
    sum += userNumber;
    i++;
  }
}

console.log("Somma = ", sum);
display2.innerText = "Somma dei numeri inseriti = " + sum

