import "./app.css";
import Chats from "./Components/chats";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/:id" element={<Chats roomId={1} />} />
    </Routes>
  );
}
export default App;
