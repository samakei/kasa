import React from 'react'; // Importation du module React depuis la bibliothèque React
import "../Styles/aboutpage.scss"; // Importation du fichier de style pour la page "À propos"
import "../Styles/containers.scss"; // Importation du fichier de style pour les conteneurs
import Collapse from '../composants/Collapse'; // Importation du composant Collapse pour afficher les sections extensibles

export default function Aboutpage() { // Définition du composant Aboutpage
  return (
    <div className='container'> {/* Début du conteneur principal de la page */}
      <div className='about-imgbanner'> {/* Division pour afficher la bannière de la page */}
        <img src="/kalen_banner.png" alt="kalen-banner" /> {/* Image de la bannière */}
      </div>

      <div className='abaut-descriptions'> {/* Division pour afficher les descriptions */}
        {/* Utilisation du composant Collapse pour afficher des sections extensibles avec différents titres et textes */}
        <Collapse
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}
