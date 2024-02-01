import React from "react";
import "../Styles/carrousel.scss";






export default function Carrousel({pictures}) {
  
  
  return (
    <div className="carrousel">
      {pictures.map(picture =>
    <img src={picture} alt= ""/>
)}
    </div>

    
  );
}
