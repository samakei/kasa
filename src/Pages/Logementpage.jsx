import React from "react"; // Importation du module React depuis la bibliothèque React
import "../Styles/logementpage.scss"; // Importation du fichier CSS pour les styles de la page de logement
import { useParams } from 'react-router-dom'; // Importation du hook useParams depuis react-router-dom pour récupérer les paramètres d'URL
import logements from "../API/logements.json"; // Importation des données de logement depuis le fichier JSON
import Errorpage from "./Errorpage"; // Importation du composant Errorpage pour la gestion des erreurs
import Slideshow from "../composants/Slideshow"; // Importation du composant Slideshow pour afficher le diaporama d'images
import Collapse from "../composants/Collapse"; // Importation du composant Collapse pour afficher les sections extensibles
import "../Styles/rating.scss"; // Importation du fichier CSS pour les styles de notation
import Tags from "../composants/Tags";
import "../Styles/tags.scss"

      
   
   

export default function Logementpage() { // Définition du composant Logementpage
   const {logementId} = useParams(); // Récupération du paramètre logementId depuis l'URL à l'aide du hook useParams
   console.log(logementId); // Affichage du logementId dans la console
  
   // Recherche du logement correspondant dans le fichier JSON
   const logement = logements.find(logement => logement.id === logementId); /*  trouver le bon logement dans "logements.json" à partir de logementId */;
  
   // Vérification si le logement existe. Si non, affiche la page d'erreur
   if (!logement) {
      return <div>{Errorpage}</div>;
   }
  
   return (
      // Affichage des détails du logement
      <nav className="container">
         <div className="pgappartement">
            {/* Affichage du diaporama d'images avec les images du logement */}
            <Slideshow pictures={logement.pictures} />
         </div>
         <div className="info-general">
            <div className="carte-titre">
               {/* Affichage du titre et de l'emplacement du logement */}
               <h2>{logement.title}</h2>
               <p>{logement.location}</p>
            </div>
         
              <div className="carte-tag">
              {/* Utilisation du composant Tags pour afficher les tags */}
              <Tags tags={logement.tags} />
            </div>
            
            <div className="carte-hôtesse">
               {/* Affichage de l'image et du nom de l'hôte du logement */}
               <img src={logement.host.picture} alt="host" />
               <p>{logement.host.name}</p>
            </div>
            <div className="carte-notation">
               {/* Affichage de la notation du logement */}
               <div className='star-rating'>
                  {[1, 2, 3, 4, 5].map((numbres) => (
                     <span key={numbres} className={logement.rating >= numbres ? "on" : ""}>★</span>
                  ))}
               </div>
            </div>
            <div className="fondation-collapse ">
               {/* Affichage de la description du logement dans une section extensible */}
               <Collapse ClassDescription={"logementCollapse"} title="Description" text={logement.description} />
               {/* Affichage des équipements du logement dans une section extensible */}
               <Collapse ClassEquipements={"logementCollapse"} title="Équipements" text={<ul>{logement.equipments.map((equipment, index) => (<li key={index}> {equipment}</li>))}</ul>} />
            </div>
         </div>
      </nav>
   );
}


 
