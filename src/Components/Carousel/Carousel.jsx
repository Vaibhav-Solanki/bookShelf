import React from "react";
import "./Carousel.css";
import Logo from "../../images/logo.png";
// import book from "../../images/book.jpg";
export default function Caro() {
  return (
    <div className="px-4 py-5 my-2 text-center">
      <img className="d-block mx-auto mb-4" src={Logo} width={72} height={72} />
      <h1 className="display-5 fw-bold">The BookMark</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to BookMark ! Here you can read your favorite books and
          interact with others who loves reading books and have similar taste.
          Immerse yourself into the world of books and enjoy!
        </p>
      </div>
    </div>
  );
}
