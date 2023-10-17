/******************************** ********* ******************************** */
/******************************** VARIABLES ******************************** */
/******************************** ********* ******************************** */
let coursSessions = document.querySelector(".cours-sessions"); // Le conteneur div avec la classe "cours-sessions"
const nbSessions = 6; // Nombre de sessions dans le programme
let numSession = document.getElementById("sessions"); // l'élement HTML "select" qui sert à choisir la session de l'utilisateur

//Liste des cours des sessions
let coursSessionsListe = [
  (coursSession1 = [
    { cours: "info", code: "123-M1M" },
    { cours: "info", code: "123-M1M" },
    { cours: "info", code: "123-M1M" },
    { cours: "info", code: "123-M1M" },
  ]),
  (coursSession2 = [
    { cours: "video1", code: "222-M1M" },
    { cours: "video2", code: "222-M1M" },
    { cours: "video3", code: "222-M1M" },
    { cours: "video4", code: "222-M1M" },
  ]),
];

// Chercher le checkbox 
let toutCheckbox = document.querySelectorAll('input[type="checkbox"]');
// Chercher tout les labels 
let toutLabels = document.querySelectorAll('label');
toutCheckbox.forEach(checkbox => {
  console.log(toutCheckbox);
  if(checkbox.checked === true) {
    console.log("yay");
  }else{
    console.log("nay");
  }
});

/******************************** ********* ******************************** */
/******************************** FONCTIONS ******************************** */
/******************************** ********* ******************************** */

// Fonction qui trouve la session choisie par l'utilisateur
function trouverSession() {
  numSession = document.getElementById("sessions");
  return numSession.value;
}

// Fonction pour changer de cours
function changerCours() {
  let toutcoursDiv = document.querySelectorAll(".cours"); // variable(nodelist) pour les divs avec la classe "cours"
  // Enlever tout les cours déja sur la page
  for (i = 0; i < toutcoursDiv.length; i++) {
    toutcoursDiv[i].remove();
  }
  // Enlever tout les divs qui contiennent la description des cours
  let toutDescCours = document.querySelectorAll(".description-cours");
  for (i = 0; i < toutDescCours.length; i++) {
    toutDescCours[i].remove();
  }
  trouverSession();

  if (numSession.value <= nbSessions) {
    let sessionAMontrer = coursSessionsListe[numSession.value - 1]; // On soustrait le chiffre "1" puisque l'ordinateur commence à compter a partir de 0
    // Générer un élément html pour chaque cours
    for (cours of sessionAMontrer) {
      creerCours(cours);
    }
  }
}

// Fonction pour faire disparaitre la description de cours
function desactiverDescription(checkbox){
  checkbox.checked = false;
  return checkbox;
}

// Fonction qui crée un cours
function creerCours(cours) {
  // Chercher le div avec la classe "cours-sessions"
  let coursSessions = document.querySelector(".cours-sessions");
  
  // Créer le input checkbox du cours
  const checkbox = document.createElement("input");
  // Lui donner des attributs
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", cours.cours);
  //Mettre le checkbox sur dans le conteneur coursSessions
  coursSessions.appendChild(checkbox);


  // Créer la boite Description de cours
  const descriptionDiv = document.createElement("div");
  // Lui donner une classe
  descriptionDiv.classList.add("description-cours");

  // Créer les élements textes du div "description-cours"
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h4_1 = document.createElement("h4");
  const p_1 = document.createElement("p");
  const h4_2 = document.createElement("h4");
  const p_2 = document.createElement("p");

  // Append les éléments texte du div "description-cours"
  descriptionDiv.appendChild(h1);
  descriptionDiv.appendChild(h2);
  descriptionDiv.appendChild(h4_1);
  descriptionDiv.appendChild(p_1);
  descriptionDiv.appendChild(h4_2);
  descriptionDiv.appendChild(p_2);

  // Créer le bouton X du div "description-cours"
  let boutonX = document.createElement("button");
  // Lui dinner du texte
  boutonX.innerHTML = "X";
  // Le mettre dans le conteneur "description-cours"
  descriptionDiv.appendChild(boutonX);

 boutonX.onclick = ()=>{
  desactiverDescription(checkbox);
 }
  
  // Mettre la description du cours dans le conteneur coursSessions
  coursSessions.appendChild(descriptionDiv);


  // Créer le label du input
  const label = document.createElement("label");
  //ajouter une classe au label
  label.classList.add(cours.cours);
  // Le connecter a un checkbox
  label.htmlFor = cours.cours;
  //Mettre le label sur dans le conteneur coursSessions
  coursSessions.appendChild(label);

  // Créer le span qui contient la boite de cours
  const coursSpan = document.createElement("span");
  // Lui donner une classe
  coursSpan.classList.add("cours");

  // Créer le span qui contient le numero de cours
  const numeroCoursSpan = document.createElement("span");
  // Lui donner une classe
  numeroCoursSpan.classList.add("numero-cours");

  // Créer le h5 du numero de cours
  const numeroCours = document.createElement("h5");
  // Lui donner le numero de cours
  numeroCours.innerHTML = cours.code;
  // Mettre le numero de cours(h5) dans son span
  numeroCoursSpan.appendChild(numeroCours);
  // Mettre le le span du numero de cours dans le conteneur de cours
  coursSpan.appendChild(numeroCoursSpan);

  // Créer le le h4 qui contient le nom du cours
  const titreCours = document.createElement("h4");
  // Lui donner le nom du cours
  titreCours.innerHTML = cours.cours;
  // Mettre le nom du cours(h4) dans le conteneur de cours
  coursSpan.appendChild(titreCours);

  // mettre le span dans le label
  label.appendChild(coursSpan);

}
