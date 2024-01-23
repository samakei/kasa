import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Logementpage from "./Pages/Logementpage";
import Aboutpage from "./Pages/Aboutpage";
import Errorpage from "./Pages/Errorpage";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const HeaderFooterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/logement/:logementId",
        element: <Logementpage />,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
//pour consigner les résultats (par exemple : reportWebVitals(console.log))
//ou envoyer à un point de terminaison d’analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
