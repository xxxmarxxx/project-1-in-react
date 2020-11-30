import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer page__footer">
        <p class="footer_copyright">copyright</p> &nbsp;&bull;&nbsp;
        <p class="footer__address-info">
          {" "}
          designArt &nbsp; 12164 berlin &nbsp; schlosstrasse 1000
        </p>
      </footer>
    </>
  );
};

export default Footer;
