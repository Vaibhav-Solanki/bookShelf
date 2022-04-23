import React from "react";
import "./Carousel.css";
import Logo from "../../images/logo.png";
import book from "../../images/book.jpg";
export default function Caro() {
  return (
    <div className="px-4 py-5 my-2 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={Logo}
        alt=""
        width={72}
        height={72}
      />
      <h1 className="display-5 fw-bold">Project Xyz</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, veniam
          provident aspernatur hic numquam fugit consequuntur dolorum explicabo
          sint earum ipsa vero blanditiis rerum magnam, voluptatem eos unde
          culpa ipsam.
        </p>
        {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Primary button
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Secondary
          </button>
        </div> */}
      </div>
    </div>
  );
}
