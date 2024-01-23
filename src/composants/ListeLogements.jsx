import React from "react";
import "../Styles/listeLogements.scss";
import logements from "../API/logements.json"
import Card from "./Card"




export default  function listeLogements() {
  document.title = "kasa"
  return (
    <div className="main-listeLogements">,
            {logements.map(logement => {
                return (
                    // Affiche chaque carte en utilisant le composant "Card"
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                        

                       />
                )
            })}
     
    </div>
   
  );

}

 




 



