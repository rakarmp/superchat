import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <img
          src={data.user?.photoURL}
          alt=""
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <span>{data.user?.displayName}</span>
        {data.user?.online && <span>Online</span>}
        <div className="chatIcons"></div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
