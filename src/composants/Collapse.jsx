import React, { useState } from 'react';


import "../Styles/collapse.scss"; // Assurez-vous d'avoir un fichier CSS pour les styles

const Collapse = ({ title, text, ClasslogementCollapse, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${ClasslogementCollapse}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3 className='collapse-titre'>{title}</h3>
       <span className={`arrow ${isOpen ? 'open' : 'closed'}`}></span>

        <span className='collapse-text'>{text}</span>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
