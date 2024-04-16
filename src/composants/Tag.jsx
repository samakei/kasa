import React from 'react';
import "../Styles/tag.scss"

// Définition du composant Tag
const Tag = ({ name }) => {
  return (
    <span className="tag">{name}</span>
  );
};

export default Tag;
