/* SNACK: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione */

//Functions
function printObject(obj, htmlElement) {
  content = "";
  for (let key in obj) {
    content += "<li>" + key + ": " + obj[key] + "</li>";
    htmlElement.innerHTML = content;
  }
}

//Initial variables
const listPlaceholder = document.getElementById("list-display");
const titlePlaceholder = document.getElementById("title")

//Object declaration (name: palla, weight: 10)
const element = {
  name: "palla",
  weight: 10,
};

//Print
titlePlaceholder.innerHTML = "Object"
printObject(element, listPlaceholder);

let newWeight;
//Prompt to the user the new weight value for the object
do {
  newWeight = parseInt(prompt("Inserisci il nuovo peso da assegnare alla palla"));
}
while (!newWeight || newWeight === "" || isNaN(newWeight) || newWeight < 8 || newWeight > 19)

//New weight value assignment
element.weight = newWeight;

