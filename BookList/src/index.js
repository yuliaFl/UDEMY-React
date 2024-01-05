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
  return (
    <section className="bookList">
      <EventExamples />
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("handle from input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const hadleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      <form onSubmit={hadleFormSubmission}>
        <h2>Typical form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
const Book = (props) => {
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
