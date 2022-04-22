import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
// const SOCKET_SERVER_URL = "http://localhost:4000/";
const SOCKET_SERVER_URL = "https://nodbook.herokuapp.com/";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  //for old mes
  useEffect(() => {
    preMessage();
  }, []);

  const preMessage = async () => {
    try {
      let res = await fetch(SOCKET_SERVER_URL + roomId);
      let data = await res.json();
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      roomId: roomId,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
