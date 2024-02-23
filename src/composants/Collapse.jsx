import React, { useState } from 'react';
import arrow_up from "../assets/arrow-up.png"
import "../Styles/collapse.scss"; // le fichier CSS pour les styles


const Collapse = ({ title, text,  children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen? 'open':'closed'}`}> 

      <div className="collapse-header" onClick={toggleCollapse}>
         
           <span className='collapse-titre'>{title}</span>
        
        <span className={`arrow ${isOpen ? 'open' : 'closed'}`}>
          <img src={arrow_up} alt="" />
        </span>
      </div>
      {isOpen && (
        <div className="collapse-content"> 
          {children}
          <span className='collapse-text'>{text}</span>
          
        </div>
      )}
    </div>
  );
};

export default Collapse;