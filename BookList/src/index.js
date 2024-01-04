import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Marie Kondo",
    title: "The life-changing magic of tidying up",
    img: "./images/cleaningBook.jpg",
  },
  {
    author: "Katerina Lengold",
    title: "Prosto Kosmos",
    img: "./images/prostoKosmos.jpg",
  },
];

const names = ['john','peter','susan'];
const newNames = names.map((something)=> {
  return <h1>{something}</h1>;
});
console.log(newNames);
const BookList = () => {
  return <section className='booklist'>{newNames}</section>;
};
  const Book = (props) => {
    const { img, title, author } = props;
    console.log(props);
    return (
      <article className="book">
        <img src={img} alt={title} />
        <h2> {title} </h2>
        <h4>{author}</h4>
      </article>
    );
  };
  /*
  return (
    <view>
      <h1>My library</h1>
      <section className="bookList">
        <Book
          author={firstbook.author}
          title={firstbook.title}
          img={firstbook.img}
        >
          <p>Lorem, ipsum</p>
          <button>Click me</button>
        </Book>
        <Book
          author={secondbook.author}
          title={secondbook.title}
          img={secondbook.img}
        />
      </section>
    </view>
  );
};
  */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
