import React from "react";
import Logo from "../../images/logo.png";
export default function footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img src={Logo} alt="" width="40" height="40" />
      </a>
    </footer>
  );
}
