import React from "react";
import "./Styles/App.scss";
import Banner from "./composants/Banner.jsx";
import Main from "./composants/Main.jsx";
import Containers from "./composants/Containers.jsx";



function App() {
  return (
    <div>
      
      <Containers>
        <Banner />
        <Main />
      </Containers>
      
  
    </div>
  );
}

export default App;
