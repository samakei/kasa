import React, { useState } from "react"; // Importation de React et de la fonction useState depuis la bibliothèque React
import "../Styles/Slideshow.scss"; // Importation du fichier de style SCSS pour le composant Slideshow
import leftArrow from "../assets/arrow_left.png"; // Importation de l'icône de flèche gauche depuis les ressources
import rightArrow from "../assets/arrow_right.png"; // Importation de l'icône de flèche droite depuis les ressources

const Slideshow = ({ pictures }) => { // Définition du composant Slideshow prenant comme propriété une liste de photos
  const [currentIndex, setCurrentIndex] = useState(0); // Initialisation d'un état pour le currentIndex, qui est l'index de l'image actuellement affichée

  const handleLeftClick = () => { // Définition de la fonction de gestion du clic sur la flèche gauche
    setCurrentIndex((oldIndex) => { // Mise à jour de l'index actuel en fonction de l'index précédent
      return oldIndex === 0 ? pictures.length - 1 : oldIndex - 1; // Si l'index actuel est 0, passer au dernier élément de la liste, sinon diminuer l'index de 1
    });
  };

  const handleRightClick = () => { // Définition de la fonction de gestion du clic sur la flèche droite
    setCurrentIndex((oldIndex) => { // Mise à jour de l'index actuel en fonction de l'index précédent
      return (oldIndex + 1) % pictures.length; // Passer à l'élément suivant dans la liste, en bouclant à la première image lorsque l'on atteint la fin de la liste
    });
  };

  // Vérifie si la longueur de la liste de photos est supérieure à 1
  // Si c'est le cas, affiche les flèches et la numérotation, sinon, ne les affiche pas
  const shouldDisplayControls = pictures.length > 1;

  return (
    <div className="Gestion-fleches"> 
      {shouldDisplayControls && ( // Condition pour afficher les flèches seulement si shouldDisplayControls est vrai.
       // Bouton pour la flèche gauche avec gestionnaire de clic
        <button onClick={handleLeftClick} className="left-btn"> 
          <img src={leftArrow} alt="Flèche gauche" /> 
        </button>
      )}
       
      <div className="slides-carrousel"> 
        <img src={pictures[currentIndex]} alt="Carrousel" /> 
      </div>

      {shouldDisplayControls && ( // Condition pour afficher la numérotation seulement si shouldDisplayControls est vrai.
        // Affichage de l'index de l'image actuelle et du nombre total d'images
        <div className="slides-counter"> 
          {currentIndex + 1} / {pictures.length} 
        </div>
        
      )}

      {shouldDisplayControls && ( // Condition pour afficher les flèches seulement si shouldDisplayControls est vrai
        <button className="right-btn" onClick={handleRightClick}> 
          <img src={rightArrow} alt="Flèche droite" /> 
        </button>
      )}
    </div>
  );
};

export default Slideshow; // Exportation du composant Slideshow pour pouvoir l'utiliser ailleurs dans l'application
