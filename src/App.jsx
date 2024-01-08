import React from "react";
import "./Styles/App.scss";
import Home from "./composants/Home.jsx";
import Banner from "./composants/Banner.jsx";
import Immeuble from "./composants/Immeuble.jsx";
import Containers from "./composants/Containers.jsx";
import Footer from "./composants/Footer.jsx"


function App() {
  return (
    <div>
      <Home />
      <Containers>
      <Banner />
      <Immeuble />
      </Containers>
      <Footer />
      
    </div>
  );
}

export default App;
