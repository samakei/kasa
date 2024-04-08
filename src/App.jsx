import React from "react"; // Importation du module React depuis la bibliothèque React
import "./Styles/App.scss"; // Importation du fichier de style global de l'application
import Banner from "./composants/Banner.jsx"; // Importation du composant Banner depuis le fichier Banner.jsx dans le dossier composants
import Listelogements from "./composants/ListeLogements.jsx"; // Importation du composant Listelogements depuis le fichier ListeLogements.jsx dans le dossier composants
import Containers from "./composants/Containers.jsx"; // Importation du composant Containers depuis le fichier Containers.jsx dans le dossier composants

function App() { // Définition du composant App
  return (
    <div> {/* Début du conteneur principal de l'application */}
      <Containers> {/* Utilisation du composant Containers comme conteneur principal */}
        <Banner /> {/* Affichage du composant Banner pour la bannière de l'application */}
        <Listelogements /> {/* Affichage du composant Listelogements pour la liste des logements */}
      </Containers>
    </div>
  );
}

export default App; // Exportation du composant App pour pouvoir l'utiliser ailleurs dans l'application


