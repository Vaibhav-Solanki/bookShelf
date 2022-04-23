import "./App.css";
import Home from "./routes/home";
import Login from "./routes/login";
import Book from "./routes/book";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((el) => el.login.state);
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={user ? <Book /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
export default App;
