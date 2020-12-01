import React from "react";
import "../styles/Footer.css";
import image1 from "../assets/logo.svg"

const Footer = () => {


  return (
    <>
      <footer className="footer page__footer">
        <p className="footer_copyright">copyright</p>
        <img src={image1} alt="image1" className="logoBottom__image" />
        <p className="footer__address-info">{" "}
       myArt &nbsp; 12164 berlin &nbsp; schlosstrasse 1000
        </p>
      </footer>
    </>
  );
};

export default Footer;
