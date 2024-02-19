
import React from "react";
import "../Styles/logementpage.scss";
import { useParams } from 'react-router-dom';
import logements from "../API/logements.json";
import Errorpage from "./Errorpage";
import Slideshow from "../composants/Slideshow";
import Rating from "../composants/Rating";
import Collapse from "../composants/Collapse";



export default function Logementpage() { 
   const {logementId} = useParams();
   console.log(logementId);
   // Recherche du logement correspondant dans le fichier JSON
   const logement = logements.find(logement => logement.id === logementId); /*  trouver le bon logement dans "logements.json" à partir de logementId */;
  
   // Vérification si le logement existe/
    if (!logement) {
    return <div><Errorpage /></div>;
  }
  
  
  
  
     return (
    // Affichage des détails du logement
  
   <nav className="container">
    
  <div className="pgappartement">
  
  <Slideshow pictures={logement.pictures} />

  </div>
 
 <div className="info-general">
   <div className="carte-titre">
    <h2>{logement.title}</h2>
   <p>{logement.location}</p>
 </div>
   

  <ul className="carte-mots_cles">
   {logement.tags.map((tag, index) => (
    <li key={index}>{tag}</li>
   ))}
   </ul>
   
   <div className="carte-hôtesse">
   <img src={logement.host.picture} alt="host" />
      <p>{logement.host.name}</p>
   </div>

   <div className="carte-notation">
      < Rating rating={logement.rating} />
   </div>

    <div className="fondation-collapse "> 
   <Collapse  ClassLogementCollapse={"logementCollapse"}
                    title="Description"
                    text={logement.description} />

   <Collapse ClassLogementCollapse={"logementCollapse"}
                    title="Équipements"
                    text={<ul>
             {logement.equipments.map((equipment, index) => (
             <li key={index}> {equipment}</li>
                        ))}
                    </ul>} />
   
   </div>
 </div>
</nav>

)
}

