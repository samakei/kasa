import React from "react"; // Importation du module React depuis la bibliothèque React
import "../Styles/banner.scss"; // Importation du fichier CSS pour les styles de la bannière
import "../Styles/App.scss"; // Importation du fichier CSS pour les styles de l'application globale
import imgBanner from "../assets/img-banner.jpg"; // Importation de l'image de la bannière depuis les ressources

function Banner() { // Définition du composant Banner
  return (
    // Élément div représentant la bannière avec une image d'arrière-plan et un texte
    <div className="banner" style={{ backgroundImage: `url(${imgBanner})` }}>
      {/* Titre de la bannière */}
      <h1 className="text_bannaer">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner; // Exportation du composant Banner pour pouvoir l'utiliser ailleurs dans l'application

