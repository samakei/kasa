import React from 'react';
import "../Styles/tag.scss"

// Définition du composant Tag
// Composant Tag : Affiche un tag individuel.
// Props :
// - name : Le nom du tag à afficher.
const Tag = ({ name }) => {
  return (
    <span className="tag">{name}</span>
  );
};

export default Tag;
