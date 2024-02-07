import React  from "react";
import "../Styles/carrousel.scss";




export default function Carrousel({pictures}) {
   
  return (
  
    <div className="carrousel">
      <div className="image_carrousel">
      {pictures.map(picture =>
    <img src={picture} alt= "picturs"/>
    
    
)}
  </div>
    </div>
   

  );
     
}

 
