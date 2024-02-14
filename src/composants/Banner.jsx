import React from "react";
import "../Styles/banner.scss";
import "../Styles/App.scss"
import imgBanner from "../assets/img-banner.jpg";

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgBanner})` }}>
      <h1 className="text_bannaer">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
