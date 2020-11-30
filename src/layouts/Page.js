import React from "react";
import "../styles/Page.css";
import Article1 from "../componets/Article_1";
import Article2 from "../componets/Article_2";
import Article3 from "../componets/Article_3";

const Page = () => {
  return (
    <>
      <div className="articles page__articles">
        <form className="search" action="/">
          <input className="search__input" type="text" />
          <button className="button search__btn button--italic" type="submit">
            find
          </button>
        </form>
        <Article1 />
        <Article2 />
        <Article3 />
      </div>
    </>
  );
};

export default Page;
