/* SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà "nome", "città" "punti";
Stampiamo le squadre in pagina, all'interno di una tabella HTML */

//Create an objects' array of football teams (specify the name, the city and the points)
const footballTeams = [
  {
    name: "Juventus",
    city: "Torino",
    points: 24,
  },
  {
    name: "Inter",
    city: "Milano",
    points: 32,
  },
  {
    name: "Milan",
    city: "Milano",
    points: 29,
  },
];

//Print the objects in a html table
const tableBody = document.querySelector("#table tbody");
let content = "";

for (i = 0; i < footballTeams.length; i++) {
  let currentTeam = footballTeams[i];
  content += "<tr>"
  content += "<td>" + currentTeam.name + "</td>"
  content += "<td>" + currentTeam.city + "</td>";
  content += "<td>" + currentTeam.points + "</td>";
  content += "</tr>";
}

tableBody.innerHTML = content;
