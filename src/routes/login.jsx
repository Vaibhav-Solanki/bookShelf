import React from "react";
import "./login.css";
import Logo from "../images/logo.png";
export default function login() {
  return (
    <div className="text-center">
      <main className="form-signin">
        <form>
          <img className="mb-4" src={Logo} alt="" width={72} height={72} />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              autoComplete="off"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>

          <a
            class="w-100 btn btn-lg btn-outline-secondary btn-block text-uppercase btn-outline my-3"
            href="#"
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
            Signup Using Google
          </a>
        </form>
      </main>
    </div>
  );
}
