import React from "react"; // Importation du module React depuis la bibliothèque React
import ReactDOM from "react-dom/client"; // Importation de ReactDOM pour rendre l'application dans le DOM
import "./Styles/index.scss"; // Importation du fichier de style global de l'application
import App from "./App"; // Importation du composant principal de l'application
import reportWebVitals from "./reportWebVitals"; // Importation de la fonction reportWebVitals pour mesurer les performances de l'application

import Logementpage from "./Pages/Logementpage"; // Importation de la page Logementpage
import Aboutpage from "./Pages/Aboutpage"; // Importation de la page Aboutpage
import Errorpage from "./Pages/Errorpage"; // Importation de la page Errorpage

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Importation des utilitaires de routage de react-router-dom
import Header from "./Layout/Header"; // Importation du composant Header
import Footer from "./Layout/Footer"; // Importation du composant Footer

// Définition d'un layout avec en-tête et pied de page
const HeaderFooterLayout = () => {
  return (
    <>
      <Header /> {/* Affichage du composant Header */}
      <Outlet /> {/* Point d'entrée pour le rendu des composants enfants en fonction du chemin d'accès */}
      <Footer /> {/* Affichage du composant Footer */}
    </>
  );
};

// Création d'un routeur avec différentes routes
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />, // Affichage du layout avec en-tête et pied de page
    errorElement: <Errorpage />, // Affichage de la page d'erreur en cas d'erreur
    children: [
      {
        path: "/", // Chemin d'accès pour la page principale
        element: <App />, // Affichage du composant App sur le chemin /
      },
      {
        path: "/logement/:logementId", // Chemin d'accès pour les pages de logement avec un ID dynamique
        element: <Logementpage />, // Affichage du composant Logementpage sur le chemin /logement/:logementId
      },
      {
        path: "/about", // Chemin d'accès pour la page "À propos"
        element: <Aboutpage />, // Affichage du composant Aboutpage sur le chemin /about
      },
    ],
  },
]);

// Rendu de l'application dans le DOM en utilisant le RouterProvider pour fournir le routeur
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Fourniture du routeur au RouterProvider */}
  </React.StrictMode>
);


//Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
//pour consigner les résultats (par exemple : reportWebVitals(console.log))
//ou envoyer à un point de terminaison d’analyse. En savoir plus : https://bit.ly/CRA-vitals

// Enregistrement des performances de l'application
reportWebVitals();
