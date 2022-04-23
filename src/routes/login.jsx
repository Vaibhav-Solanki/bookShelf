import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { app } from "./../../firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import "./login.css";
import Logo from "../images/logo.png";
export default function login() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const addData = () => {
    signInWithPopup(auth, provider);
  };
  const signout = () => {
    auth.signOut();
    alert("singout");
  };

  //   const a = useContext(User)

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      dispatch({ type: "login", payload: user });
      console.log(user);
      // a.update(user.displayName)
      auth.signOut();
      navigate("/");
    }
  }, [user, loading]);

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
            onClick={addData}
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
            Signup Using Google
          </a>
        </form>
      </main>
    </div>
  );
}
