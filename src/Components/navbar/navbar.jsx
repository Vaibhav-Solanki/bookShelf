import Logo from "../../images/logo.png";
import Loading from "../../images/loading.gif";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, createRef } from "react";
export default function navbar() {
  let myRef = createRef();
  const [first, setfirst] = useState("");
  const [load, setLoad] = useState(false);
  const [sec, setSec] = useState([]);
  useEffect(() => {
    console.log(sec);
  }, [sec]);

  const search = async () => {
    myRef.current.value = "";
    setLoad(true);
    console.log(sec);
    try {
      let res = await fetch(
        "https://openlibrary.org/search.json?q=" + first + "&limit=50"
      );
      let data = await res.json();
      data = data.docs.filter(({ ia }) => ia != undefined);
      data = data.map(({ title, ia }) => {
        return { title: title, ia: ia[0] };
      });
      setSec(data);
      setLoad(false);
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
        <div className="d-flex align-items-center justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <img src={Logo} alt="" width={40} height={40} />
          </a>
          <div className="d-flex justify-content-center">
            <div className="input-group mx-3">
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
            {sec.length > 0 || load ? (
              <div className="searchRes list-group">
                {load ? <img src={Loading} alt="" srcset="" /> : ""}
                {sec.map((el, key) => (
                  <Link
                    to={`/book/${el.ia}`}
                    class="list-group-item list-group-item-action"
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            ) : (
              ""
            )}
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
    </header>
  );
}
