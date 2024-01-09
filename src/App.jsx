import React from "react";
import "./Styles/App.scss";
import Home from "./composants/Home.jsx";
import Banner from "./composants/Banner.jsx";
import Immeuble from "./composants/Immeuble.jsx";
import Containers from "./composants/Containers.jsx";
import Footer from "./composants/Footer.jsx"
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Home />
      <Containers>
      <Banner />
      <Immeuble />
      </Containers>
      <Footer />
     <Link /> 
    </div>
  );
}

export default App;
