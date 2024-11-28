// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];

const imageElement = document.createElement("img");
imageElement.src = article.image;
//variable.propriété = valeur

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
// innerText spécifi le texte de la balise

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${
  article.prix < 35 ? "€" : "€€€" // opérateur ternaire
})`;
// Littéraux de gabarit = concaténer des chaînes de caractères et des variables : entre ` ` composé de var ou expressions Js ${monExpressionJs}

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)"; // opérateur nullish

const descriptionElement = document.createElement("p");
descriptionElement.innerText =
  article.description ?? "Pas de description pour le moment";

const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite
  ? "En stock"
  : "Rupture de stock";

// Ajouter les news éléments à la page web en utilisant un parent pour les accueillir
const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);
