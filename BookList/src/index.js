import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

const BookList = () => {
  return (
    <section className='bookList'>
      <Book/>
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (<img src ="https://m.media-amazon.com/images/I/81Tok7I+3wL._AC_UL400_.jpg" alt="A Good Girl's Guide to Murder"/>);
const Title = () => <h2> A Good Girl's Guide to Murder</h2>;
const Author = () => {
  return <h4>Holly Jackson</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>
);
