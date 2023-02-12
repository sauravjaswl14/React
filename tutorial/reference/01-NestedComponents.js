import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg"
    alt=""
  />
);

const Title = () => <h2>It Starts with Us</h2>;

const Author = () => <h4>Colleen Hoover </h4>;

ReactDOM.render(<Booklist />, document.getElementById("root"));

/* 
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Greeting/>)
*/
