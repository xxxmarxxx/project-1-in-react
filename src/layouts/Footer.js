import React from "react";
import "../styles/Footer.css";
import image1 from "../assets/logo.svg"

const Footer = () => {


  return (
    <>
      <footer class="footer page__footer">
        <p class="footer_copyright">copyright</p>
        <img src={image1} alt="image1" className="logoBottom__image" />
        <p class="footer__address-info">{" "}
       myArt &nbsp; 12164 berlin &nbsp; schlosstrasse 1000
        </p>
      </footer>
    </>
  );
};

export default Footer;
