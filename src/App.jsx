import React from "react";
import "./Styles/App.scss";
import Banner from "./composants/Banner.jsx";
import Listelogements from "./composants/ListeLogements.jsx";
import Containers from "./composants/Containers.jsx";







function App() {
  return (
    <div> 
            
      <Containers>
        <Banner />
        <Listelogements />
      </Containers>

    </div>
  );
}

export default App;


