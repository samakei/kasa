import React from 'react'; // Importation du module React depuis la bibliothèque React
import { NavLink } from 'react-router-dom'; // Importation du composant NavLink depuis react-router-dom pour la navigation
import "../Styles/card.scss"; // Importation du fichier CSS pour les styles de la carte

// Définition de la fonction Card, qui prend les propriétés id, title et cover en tant qu'arguments
export default function Card({id, title, cover}) {
  return (
    // Définition d'un élément article avec la classe 'carte-logement' pour la carte de logement
    <article className='carte-logement'>
      <div className='carte'> {/* Définition d'un élément div avec la classe 'carte' */}
        {/* Utilisation de NavLink pour créer un lien vers la page de détail du logement avec l'ID */}
        <NavLink to={`logement/${id}`}>
          {/* Affichage de l'image de couverture avec la source 'cover' et l'attribut alt 'title' */}
          <img src={cover} alt={title} />
        </NavLink>
        {/* Affichage du titre de l'appartement */}
        <h3 className='titre_appartement'>{title}</h3>
      </div>
    </article> // Fin de l'élément article
  ); // Fin du retour de la fonction Card
} // Fin de la fonction Card et de l'exportation par défaut
