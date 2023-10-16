/******************************** ********* ******************************** */
/******************************** VARIABLES ******************************** */
/******************************** ********* ******************************** */
let coursSessions = document.querySelector(".cours-sessions"); // Le conteneur div avec la classe "cours-sessions"
const nbSessions = 6; // Nombre de sessions dans le programme
let  numSession = document.getElementById("sessions"); // l'élement HTML "select" qui sert à choisir la session de l'utilisateur

//Liste des cours des sessions
let coursSessionsListe = [
  (coursSession1 = [
    { cours: "info", code: "123-M1M" },
    { cours: "info", code: "123-M1M" },
    { cours: "info", code: "123-M1M" },
    { cours: "info", code: "123-M1M" },
  ]),
  (coursSession2 = [
    { cours: "video", code: "222-M1M" },
    { cours: "video", code: "222-M1M" },
    { cours: "video", code: "222-M1M" },
    { cours: "video", code: "222-M1M" },
  ]),
];

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

  trouverSession();

  if (numSession.value <= nbSessions) {
    let sessionAMontrer = coursSessionsListe[numSession.value - 1]; // On soustrait le chiffre "1" puisque l'ordinateur commence à compter a partir de 0
    // Générer un élément html pour chaque cours
    for (cours of sessionAMontrer) {
      creerCours(cours);
    }
  }
}

// Fonction qui crée un cours
function creerCours(cours) {
  // Créer les éléments HTMl d'une boite de cours
  const coursDiv = document.createElement("div");
  const numeroCoursDiv = document.createElement("div");
  const numeroCours = document.createElement("h5");
  const titreCours = document.createElement("h4");
  // Créer
  // Mettre les textes dans les éléments H4,H5
  numeroCours.innerHTML = cours.code;
  titreCours.innerHTML = cours.cours;

  // Mettre les éléments dans les divs
  numeroCoursDiv.appendChild(numeroCours);
  coursDiv.appendChild(numeroCoursDiv);
  coursDiv.appendChild(titreCours);

  // Ajouter les classes
  coursDiv.classList.add("cours");
  numeroCoursDiv.classList.add("numero-cours");

  //mettre les cours dans le conteneur "coursSession"
  let coursSessions = document.querySelector(".cours-sessions");
  coursSessions.appendChild(coursDiv);
}
