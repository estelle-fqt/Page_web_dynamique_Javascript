// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Afficher toutes les fiches produit de la liste
for (let i = 0; i < pieces.length; i++) {
  const article = pieces[i];

  const sectionFiches = document.querySelector(".fiches"); // récupération de l'élément du DOM qui accueillera les fiches // Ajouter les news éléments à la page web en utilisant un parent pour les accueillir
  const pieceElement = document.createElement("article"); // création d'une balise dédiée à un pièce automobile

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

  sectionFiches.appendChild(pieceElement); // rattache la balise article à la section Fiches
  pieceElement.appendChild(imageElement);
  pieceElement.appendChild(nomElement);
  pieceElement.appendChild(prixElement);
  pieceElement.appendChild(categorieElement);
  pieceElement.appendChild(descriptionElement);
  pieceElement.appendChild(stockElement);
}
