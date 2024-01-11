import React from "react";
import "../Styles/main.scss";
import Apartement from "./Appartement";
import logements from "../API/logements.json";

function Main() {
  console.log(logements);
  return (
    <div className="main-appartements">
      <Apartement />
      <Apartement />
      <Apartement />
      <Apartement />
      <Apartement />
      <Apartement />
    </div>
  );
}

export default Main;
