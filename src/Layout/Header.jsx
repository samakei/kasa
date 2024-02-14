import React from "react";
import "../Styles/header.scss";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <nav className="header">
      <div className="home-logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <NavLink className="accueil" to={"/"}>Accueil</NavLink>
      <NavLink className="apropos" to={"/about"}> <div>A propos</div> </NavLink>
     
    </nav>
  );
}

export default Header;

