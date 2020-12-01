import React from "react";
import "../styles/Navigation.css";
import logo1 from "../assets/logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="menu page__nav">
        <div className="logo menu__logo">
          <img src={logo1} alt="" className="logo__image" />
          <span className="logo__name">myArt</span>

          <ul className="menu__list">
            <li className="menu__item menu__item--is-open">
              <a href=" " className="menu__link">
                main
              </a>
            </li>
            <li className="menu__item">
              <a href=" " className="menu__link">
                news
              </a>
            </li>
            <li className="menu__item">
              <a href=" " className="menu__link">
                contact
              </a>
            </li>
            <li className="menu__item">
              <a href=" " className="menu__link">
                impressum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
