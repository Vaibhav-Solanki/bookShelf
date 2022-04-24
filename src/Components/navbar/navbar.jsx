import Logo from "../../images/logo.png";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, createRef } from "react";
export default function navbar() {
  let myRef = createRef();
  const [first, setfirst] = useState("");
  const [sec, setSec] = useState([]);
  useEffect(() => {
    console.log(sec);
  }, [sec]);

  const search = async () => {
    myRef.current.value = "";
    console.log(sec);
    try {
      let res = await fetch(
        "https://openlibrary.org/search.json?q=" + first + "&limit=50"
      );
      let data = await res.json();
      console.log(data);
      data = data.docs.filter(({ ia }) => ia != undefined);
      console.log(data);
      data = data.map(({ title, ia }) => {
        return { title: title, ia: ia[0] };
      });
      console.log(data);
      setSec(data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((el) => el.login.state);
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img src={Logo} alt="" width={40} height={40} />
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {/* <li>
              <a href="#" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li> */}
          </ul>
          {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
              autoComplete="off"
              onChange={(e) => setfirst(e.target.value)}
            />
          </form> */}
          <div className="input-group w-50 mx-3">
            <input
              ref={myRef}
              type="text"
              className="form-control"
              placeholder="Enter Book Name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => setfirst(e.target.value)}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              onClick={() => search()}
            >
              Search
            </button>
          </div>

          <div className="text-end">
            {user ? (
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => dispatch({ type: "logout" })}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      {sec.length > 0 ? (
        <div className="searchRes my-3">
          <ul>
            {sec.map((el, key) => (
              <li key={key}>
                <Link to={`/book/${el.ia}`} style={{ textDecoration: "none" }}>
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
