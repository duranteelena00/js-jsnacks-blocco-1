/* SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */

var display = document.getElementById("my-id");

namesList = ["Mario", "Luigi", "Giuseppe", "Luca", "Filippo"];
lastnamesList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var randomGuests = [];

for (var i = 0; i < 3; i++) {
  var index1 = Math.floor(Math.random() * namesList.length);
  var index2 = Math.floor(Math.random() * lastnamesList.length);
  var randomName = namesList[index1];
  var randomLastname = lastnamesList[index2];
  var randomFullName = randomName + " " + randomLastname;

  if (!randomGuests.includes(randomFullName)) {
    randomGuests.push(randomFullName);
  } else {
    i--;
  }
}

console.table(randomGuests);
display.innerHTML = "<li>" + randomGuests.join("</li><li>") + "</li>";
