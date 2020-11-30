import React from "react";
// import { Route, Switch } from 'react-router-dom'
import image1 from "../assets/image_bg_header_1.jpg"
import '../styles/Header.css';

const Header = () => {

  return (
    <>
    <div className="header">
    <img src={image1} alt="image1" className="banner__image"/>
    <h1>jestem header</h1>
    </div>

    
    </>

  );
  
}

export default Header;