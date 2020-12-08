import React from "react";
import "../styles/Home.css";
import image1 from "../assets/logo.svg";
// import Text from 'react-markdown';
import Portfolio from "../componets/Portfolio"

const Home = () => {


  return (
    <>
      <main className="home page__home">
        <p className="home_text">welcome to my portfolio page</p>
        <img src={image1} alt="image1" className="logoBottom__image" />
        <p className="home__text-2">{" "}
        text
        </p>
        <div>
        <Portfolio />
    </div>
      </main>
    </>
  );
};

export default Home;