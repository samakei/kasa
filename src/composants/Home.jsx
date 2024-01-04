import React from "react";
import "../Styles/home.scss";

function Home() {
  return (
    <nav className="home">
      <div className="home-logo">
        <img src="logo.png" alt="logo" />
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
  );
}

export default Home;
