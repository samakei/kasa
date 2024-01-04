import React from "react";
import "../Styles/banner.scss";
import imgBanner from "../Img/img-banner.jpg";

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgBanner})` }}>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
