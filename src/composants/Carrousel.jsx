import React, {useState} from "react";
import "../Styles/carrousel.scss";
import leftArrow  from "../assets/arrow_left.png"
import rightArrow from "../assets/arrow_right.png"



const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex(oldIndex => {
      return oldIndex === 0 ? pictures.length - 1 : oldIndex - 1;
    });
  }

  const handleRightClick = () => {
    setCurrentIndex(oldIndex => {
      return (oldIndex + 1) % pictures.length;
    });
  }

  return (
   
   <div className="Gestion-fleches"  >
      <button onClick={handleLeftClick} className="left-btn">
        <img src={leftArrow} alt="Flèche gauche" />
      </button>
    
         <div className="carrousel">
        <img className="image_carrousel" src={pictures[currentIndex]} alt="Carrousel" />
         </div>
         <div className="slides-counter">
          {currentIndex + 1} / {pictures.length}
         </div>
      
      <button className="right-btn" onClick={handleRightClick}>
        <img src={rightArrow} alt="Flèche droite" />
      </button> 
   </div>

  );
}

export default Carrousel;


