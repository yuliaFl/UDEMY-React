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
  const title = 'Nice to me';
  return (
    <article className='book'>
      <img src ="./images/NiceToMe.jpeg" alt="Nice to me"/>
      <h2> {title} </h2>
      <h4>Olga Primachenko</h4>
    </article>
  );
};

/*
const Image = () => (<img src ="./images/NiceToMe.jpeg" alt="Nice to me"/>);
const Title = () => <h2> Nice to me</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color:'#617d98',
    fontSize:'0.75rem',
    marginTop:"0.5rem",
  };
    return <h4 style={inlineHeadingStyles}
  return <h4 style={{color:'#617d98',  fontSize:'0.75rem', marginTop:'0.5rem'}}>Olga Primachenko</h4>;
};
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>
);
