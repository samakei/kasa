import React, { useState } from 'react'; // Importation de React et de la fonction useState depuis la bibliothèque React
import arrow_up from "../assets/arrow-up.png"; // Importation de l'icône de flèche vers le haut depuis les ressources
import "../Styles/collapse.scss"; // Importation du fichier CSS pour les styles de collapse

const Collapse = ({ title, text, children }) => { // Définition du composant Collapse avec les propriétés title, text et children
  const [isOpen, setIsOpen] = useState(false); // Initialisation de l'état isOpen à false à l'aide du hook useState

  const toggleCollapse = () => { // Définition de la fonction toggleCollapse pour basculer l'état de isOpen
    setIsOpen(!isOpen); // Inversion de la valeur de isOpen lors de l'appel de la fonction
  };

// Définition de la classe du div en fonction de l'état de isOpen.
 
  return (
    <div className={`collapse ${isOpen? 'open':'closed'}`}> 
      {/* Section de l'en-tête du collapse, cliquable pour basculer l'état*/}
      <div className="collapse-header" onClick={toggleCollapse}> 
         
           <span className='collapse-titre'>{title}</span> 
        
        <span className={`arrow ${isOpen ? 'open' : 'closed'}`}> 
          <img src={arrow_up} alt="arrow_up" /> 
        </span>
      </div>
      {isOpen && ( // Affichage du contenu du collapse uniquement si isOpen est vrai.
      // Affichage du contenu enfant passé en tant que props.
        <div className="collapse-content"> 
          {children} 
          <span className='collapse-text'>{text}</span> 
        </div>
      )}
    </div>
  );
};

export default Collapse; // Exportation du composant Collapse pour pouvoir l'utiliser ailleurs dans l'application
