import { useState } from "react";
import useChat from "../configs/useChet";
import "./chats.css";

const Chats = ({ roomId }) => {
  // const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card"
        style={{
          borderRadius: "20px 20px 0px 0px",
          position: "absolute",
          right: " 0px",
          height: "100vh",
        }}
      >
        <div className="d-flex flex-row justify-content-between p-3 adiv text-white">
          {" "}
          <i className="fas fa-chevron-left" />{" "}
          <span className="pb-3">Live chat</span> <i className="fas fa-times" />{" "}
        </div>
        {messages.map((el, key) => {
          if (!el.ownedByCurrentUser)
            return (
              <div
                className="d-flex flex-row p-3 justify-content-start"
                key={key}
              >
                {" "}
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"
                  width={30}
                  height={30}
                />
                <div className="chat ml-2 p-3">{el.body}</div>
              </div>
            );
          else
            return (
              <div
                className="d-flex flex-row p-3 justify-content-end"
                key={key}
              >
                <div className="bg-white mr-2 p-3">
                  <span className="text-muted">{el.body}</span>
                </div>{" "}
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7.png"
                  width={30}
                  height={30}
                />
              </div>
            );
        })}
        <div
          class="input-group mb-3 px-3"
          style={{ position: "absolute", bottom: "5px" }}
        >
          <input
            type="text"
            class="form-control"
            placeholder="Type your message"
            aria-label="Type your message"
            aria-describedby="basic-addon2"
            onChange={handleNewMessageChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-success"
              type="button"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
