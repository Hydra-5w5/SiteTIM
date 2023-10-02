// VARIABLES
let coursSessions = document.querySelector(".cours-sessions");
//Liste des cours des sessions
let coursSession1 = [{"cours":"info", "code":"123-M1M"},{"cours":"info", "code":"123-M1M"},{"cours":"info", "code":"123-M1M"},{"cours":"info", "code":"123-M1M"}]
let coursSession2 = [{"cours":"video", "code":"222-M1M"},{"cours":"video", "code":"222-M1M"},{"cours":"video", "code":"222-M1M"},{"cours":"video", "code":"222-M1M"}]

let numSession;  // l'élement HTML "select" qui sert à choisir la session de l'utilisateur
// Fonction qui trouve la session choisie par l'utilisateur
function trouverSession(){
    numSession = document.getElementById('sessions');
    console.log(numSession.value);
    return numSession.value;
}
function changerCours(){

}

// Fonction qui crée un cours 
function creerCours(){
//Créer un div
const coursDiv = document.createElement("div");
const numeroCoursDiv = document.createElement("div");
const numeroCours = document.createElement("h5");
const titreCours = document.createElement("h4");
// Mettre les éléments dans les divs
numeroCoursDiv.appendChild(numeroCours);
coursDiv.appendChild(numeroCoursDiv);
coursDiv.appendChild(titreCours);
// Ajouter les classnames
coursDiv.classList.add("cours");
numeroCours.classList.add("numero-cours");
}