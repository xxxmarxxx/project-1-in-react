import React from "react";
// import { Route, Switch } from 'react-router-dom'
import image1 from "../assets/image_bg_header_1.jpg";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="banner page__header">
        <img src={image1} alt="image1" className="banner__image" />
        <h1 class="banner__title banner__title--creative"> creative</h1>
        <h2 class="banner__title banner__title--innovation"> innovation</h2>
        <p class="banner__title banner__title--technology"> technology</p>
        <p class="banner__title banner__title--success"> success</p>
        <p class="banner__title banner__title--idea"> idea</p>
        <p class="banner__title banner__title--development"> development</p>
        <p class="banner__title banner__title--art"> art</p>
        <button class="button banner__btn button--large">Wejdz</button>
      </div>
    </>
  );
};

export default Header;
