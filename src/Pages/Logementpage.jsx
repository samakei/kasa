
import React from "react";
import "../Styles/logementpage.scss";
import { useParams } from 'react-router-dom';
import logements from "../API/logements.json";
import Errorpage from "./Errorpage";
import Carrousel from "../composants/Carrousel";



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
  
  <Carrousel 
  pictures={logement.pictures}
   />
   
</div>

 <div className="info-general">
  <h1>{logement.title}</h1>
   {logement.description}
   <p>{logement.rating}</p>
   <p>{logement.location}</p>
   <p>{logement.equipments}</p>
   {logement.tags}
   </div>
 
</nav>

)
}

