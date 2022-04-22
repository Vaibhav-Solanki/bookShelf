import "./App.css";
import Chats from "./Components/chats";
import Home from "./routes/home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Chats roomId={1} />} />
    </Routes>
  );
}
export default App;
