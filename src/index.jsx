import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

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
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/apartment",
        element: <h1 className="housing">Nos logements</h1>,
      },
      {
        path: "/about",
        element: <h1>A propos</h1>,
      },
      {
        path: "404",
        element: <h1 className="pagenotfound404">404 </h1>,
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
