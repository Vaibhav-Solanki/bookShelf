import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function home() {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    navigate(newMessage);
    setNewMessage("");
  };
  return (
    <div
      className="input-group m-3 px-3"
      //   style={{ position: "absolute", bottom: "5px" }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Enter your userName"
        aria-label="Enter your userName"
        aria-describedby="basic-addon2"
        onChange={handleNewMessageChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSendMessage();
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={handleSendMessage}
        >
          open
        </button>
      </div>
    </div>
  );
}
