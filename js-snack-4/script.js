/* SNACK 4:  Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var array1Display = document.getElementById("first-array");
var array2Display = document.getElementById("second-array-before");
var array2AfterDisplay = document.getElementById("second-array-after");

var firstArray = [5, 78, 34, 19, 208, 453, 81, 22, 906, 30, 105];
var secondArray = [67, 4, 987, 36, 12, 90, 543];

console.log("Primo array: " + firstArray.join(" - "));
array1Display.innerText = "Primo array: " + firstArray.join(" - ");
console.log("Secondo array all'inizio: " + secondArray.join(" - "));
array2Display.innerText =
  "Secondo array all'inizio: " + secondArray.join(" - ");

while (secondArray.length < firstArray.length) {
  randomNum = Math.round(Math.random() * 1000);
  secondArray.push(randomNum);
}

console.log("Secondo array alla fine: " + secondArray.join(" - "));
array2AfterDisplay.innerText =
  "Secondo array alla fine: " + secondArray.join(" - ");
