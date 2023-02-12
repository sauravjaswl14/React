import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg",
  title: "It Starts with Us",
  author: "Colleen Hoover",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg",
  title: "It Ends with Us",
  author: "Colleen Hoover",
};
const thirdBook = {
  img: "https://m.media-amazon.com/images/I/41mBCtaJ1XL._SX320_BO1,204,203,200_.jpg",
  title: "Ugly Love",
  author: "Colleen Hoover",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

/* 
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Greeting/>)
*/
