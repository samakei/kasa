
import React from "react";
import "../Styles/logementpage.scss";
import { useParams } from 'react-router-dom';
import logementsData from "../API/logements.json";
import Errorpage from "./Errorpage";



export default function Logementpage() { 
   const {logementId} = useParams();
   console.log(logementId);
   // Recherche du logement correspondant dans le fichier JSON
   const logement = logementsData.find(logement => logement.id === logementId); /*  trouver le bon logement dans "logements.json" à partir de logementId */;
  
   // Vérification si le logement existe/
    if (!logement) {
    return <div><Errorpage /></div>;
  }
   
  
  
     return (
    // Affichage des détails du logement
  
   <nav className="container">
 <div className="pglogement">
  <h1>{logement.title}</h1>
  <p>{logement.description}</p>
  <p>{logement.location}</p>
  <p>{logement.equipments}</p>
  
  
 </div>
 
</nav>


 
    
)
}

