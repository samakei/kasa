import React from "react";
import "../Styles/home.scss";
import { Link } from "react-router-dom";


function Home() {
  return (
    <nav className="home">
      <div className="home-logo">
        <img src="logo.png" alt="logo" />
      </div>
      <Link className="accueil" to={"/"}>Accueil</Link>
      <Link className="apropos" to={"/about"}> <div>A propos</div> </Link>
    </nav>
  );
}

export default Home;
