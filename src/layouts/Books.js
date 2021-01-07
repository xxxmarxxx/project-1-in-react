import React from "react";
import "../styles/Books.css";
import BookArray from "../componets/Book";
import BookList2 from '../componets/Book2'



const BookList = () => {

  return (
    <section className="booksList">
     
      <BookArray />
      {/* <BookList2 /> */}

    </section>
  );
};



export default BookList;
