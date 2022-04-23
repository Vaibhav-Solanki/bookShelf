import Logo from "../../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function navbar() {
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
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
              autoComplete="off"
            />
          </form>
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
