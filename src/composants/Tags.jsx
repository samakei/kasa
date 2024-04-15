import React from "react";
import "../Styles/tags.scss"


// Définition du composant Tags
const Tags = ({ tags }) => {
  return (
    <div className="tags-container">
      {/* Itérer sur le tableau de tags et les afficher individuellement */}
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
