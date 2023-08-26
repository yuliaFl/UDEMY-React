import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstbook = {
  author: "Marie Kondo",
  title: "The life-changing magic of tidying up",
  img: "./images/cleaningBook.jpg",
};
const secondbook = {
  author: "Katerina Lengold",
  title: "Prosto Kosmos",
  img: "./images/prostoKosmos.jpg",
};

const BookList = () => {
  return (
    <view>
      <h1>My library</h1>
      <section className="bookList">
        <Book
          author={firstbook.author}
          title={firstbook.title}
          img={firstbook.img}
        />
        <Book
          author={secondbook.author}
          title={secondbook.title}
          img={secondbook.img}
        />
      </section>
    </view>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2> {props.title} </h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
