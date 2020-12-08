import React from "react";
import "../styles/Navigation.css";
import logo1 from "../assets/logo.svg";
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Page from "./Page";
import Contact from "../componets/Contact_text";
import Impressum from "../componets/Impressum_text";
import Home from "../layouts/Home";
import Cv from "../layouts/Cv";


// const Home = () => {
//   return <h1>this is my portfolio page</h1>;
// };
// const News = () => {
//   return (
//     <div>
//       <h1>Aktualnosci</h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, expedita
//         earum voluptas
//       </p>
//     </div>
//   );
// };

// const Contact = () => {
//   return (
//     <div>
//       <h1>
//         Kontakt <br />
//       </h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, expedita
//         earum voluptas pariatur quidem cupiditate illum. Nam excepturi,
//         cupiditate minima soluta praesentium eveniet, maiores velit provident
//       </p>
//     </div>
//   );
// };

// const Impressum = () => {
//   return (
//     <div>
//       <h1>
//         Impressum <br />
//       </h1>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, expedita
//         earum voluptas pariatur quidem cupiditate illum. Nam excepturi,
//         cupiditate minima soluta praesentium eveniet, maiores velit provident
//       </p>
//     </div>
//   );
// };

const ErrorPage = () => <h1>Strona nie istnieje</h1>;

const Navigation = () => {
  return (
    <Router>
      <div className="menu page__nav">
        <div className="logo menu__logo">
          <img src={logo1} alt="" className="logo__image" />
          <span className="logo__name">myArt</span>

          <ul className="menu__list">
            <li className="menu__item menu__item--is-open">
            <NavLink to="/" exact activeClassName="home_selected">
                    home
                  </NavLink>
              {/* <a href=" " className="menu__link">
                main
              </a> */}
            </li>
            <li className="menu__item">
            <NavLink to="/cv" activeClassName="cv_selected">
                    cv
                  </NavLink>
              {/* <a href=" " className="menu__link">
                news
              </a> */}
            </li>
            <li className="menu__item">
            <NavLink to="/news" activeClassName="news_selected">
                    news
                  </NavLink>
              {/* <a href=" " className="menu__link">
                news
              </a> */}
            </li>
            <li className="menu__item">
            <NavLink
                    to="/contact"
                    activeClassName="contact_selected"
                    // activeStyle={{
                    //   backgroundColor: "yellow",
                    //   letterSpacing: "4px",
                    // }}
                  >
                    contact
                  </NavLink>
              {/* <a href=" " className="menu__link">
                contact
              </a> */}
            </li>
            <li className="menu__item">
            <NavLink to="/impressum" activeClassName="impressum_selected">
                    impressum
                  </NavLink>
              
            </li>
          </ul>
        </div>
        <section>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={Page} />
            <Route path="/cv" component={Cv} />
            <Route path="/contact" component={Contact} />
            <Route path="/impressum" component={Impressum} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </div>
    </Router>
  );
};

export default Navigation;
