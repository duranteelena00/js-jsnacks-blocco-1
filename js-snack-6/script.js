/* SNACK : Invece di modificare il peso con un prompt, proviamo a farlo con un input. Avremo bisogno di un bottone... */

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

document.getElementById("submit").addEventListener("click", function () {
  //New weight value assignment
  let newWeight = document.getElementById("user-input").value;
  element.weight = newWeight;
  //Print after the changes
  titlePlaceholder.innerHTML = "Object"
  printObject(element, listPlaceholder);
});
