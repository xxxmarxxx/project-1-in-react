import React from "react";
import "../styles/Books.css";



const BookList = () => {

  const newBook1 = {
    img: 'https://media.moluna.de/a34/943/9783550201028_2_EN_9783550201028_original_CBILD.JPG',
    title: 'QualityLand 2.0',
    author: 'KLING, MARC-UWE'
  }
  const newBook2 = {
    img: 'https://media.moluna.de/a965/762/9783462000795_2_EN_9783462000795_original_CBILD.JPG',
    title: 'Kreuzberg Blues',
    author: 'WOLFGANG SCHORLAU'
  }

  return (
    <section className="booksList">
      <Book />
      <Book2 job='developer'/>
      <Book2 title='random title' number={22}/>
      <Book3 />
      <Book5 
      img={newBook1.img}
      title={newBook1.title} 
      author={newBook1.author} />
      <Book5 
      img={newBook2.img}
      title={newBook2.title} 
      author={newBook2.author} />

    </section>
  );
};

const Book5 = (props) => {
  return (
    <article className="book5">
      <img src={props.img} alt="" height="300px"/>
      <h1>{props.title}</h1>
      <h4> {props.author} </h4>
    </article>
  );
};


// book 1
const Book = () => {
  return (
    <article className="book">
      <Image className="img_book"></Image>
      <Title />
      <Author />
      <p>{6 + 6}</p>
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg"
    alt=""
    height="300"
  />
);

const Title = () => <h1>The subtle art of ...</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Mark Manson
  </h4>
);

// book 2
const Book2 = (props) => {
  
  const title = "Wunder";
  const author = "Mark Manson";
  const img = "https://media.moluna.de/a300/950/9783737355605_2_EN_9783737355605_original_CBILD.JPG";

  return (
    <article className="book2">
      <img src={img} alt="" height="300" />
      <h1>{title}</h1>
      <h4>{author.toLocaleUpperCase()}</h4>
      <p>{6 * 3}</p>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

// book 3
const Book3 = (props) => {
  
  const firstBook = {
    img: 'https://media.moluna.de/a253/110/9783446264199_2_EN_9783446264199_1_CBILD.JPG',
    title: 'Der gesang der Flusskrebs',
    author: 'Delia Owens'
  }

  return (
    <article className="book2">
      <img src={firstBook.img} alt="" height="300" />
      <h1>{firstBook.title}</h1>
      <h4>{firstBook.author.toLocaleUpperCase()}</h4>
     
    </article>
  );
};


export default BookList;
