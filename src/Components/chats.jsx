import { useState, useEffect, createRef } from "react";
import useChat from "../configs/useChet";
import "./chats.css";
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Chats = ({ roomId }) => {
  const userId = useParams().id;
  // const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId, userId);
  const [newMessage, setNewMessage] = useState("");
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  //to remain in view
  let myRef = createRef();
  const scrollToBottom = (node) => {
    node.scrollTop = node.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom(myRef.current);
    // console.log(myRef);
  }, [messages]);

  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card"
        style={{
          borderRadius: "20px 20px 0px 0px",
          position: "absolute",
          right: " 0px",
          height: "100vh",
          width: "300px",
        }}
      >
        <div className="d-flex flex-row justify-content-between p-3 adiv text-white">
          {" "}
          <FaChevronLeft /> <span className="pb-3">
            Live chat
          </span> <FaTimes />{" "}
        </div>
        <div className="scrollBox" ref={myRef}>
          {messages.map((el, key) => {
            if (el.senderId != userId)
              return (
                <div
                  className="d-flex flex-row p-3 justify-content-start align-items-center"
                  key={key}
                >
                  <abbr title={el.senderId}>
                    <img
                      src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"
                      width={48}
                      height={48}
                    />
                  </abbr>
                  <div className="chat ml-2">
                    <span className="text-muted">{el.body}</span>
                  </div>
                </div>
              );
            else
              return (
                <div
                  className="d-flex flex-row p-3 justify-content-end align-items-center"
                  key={key}
                >
                  <div className="bg-white chetBubble mr-2">
                    <span className="text-muted">{el.body}</span>
                  </div>{" "}
                  <img
                    src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7.png"
                    width={48}
                    height={48}
                  />
                </div>
              );
          })}
        </div>
        <div
          className="input-group mb-3 px-3"
          style={{ position: "absolute", bottom: "5px" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Type your message"
            aria-label="Type your message"
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
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
