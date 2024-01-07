import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Marie Kondo",
    title: "The life-changing magic of tidying up",
    img: "./images/cleaningBook.jpg",
    id: 1,
  },
  {
    author: "Katerina Lengold",
    title: "Prosto Kosmos",
    img: "./images/prostoKosmos.jpg",
    id: 2,
  },
];

const BookList = () => {
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book book={book} key={book.id} 
        displayValue={displayValue}/>;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author,displayValue } = props.book;
  //console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <button onClick={displayValue}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
