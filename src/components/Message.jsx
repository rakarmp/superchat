import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import dayjs from "dayjs";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [time, setTime] = useState("");

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const getTime = useCallback(() => {
    const now = dayjs();
    const sentAt = dayjs(message.sentAt);
    if (now.diff(sentAt, "day") > 0) {
      return sentAt.format("DD/MM/YYYY HH:mm");
    } else {
      return sentAt.format("HH:mm");
    }
  }, [message]);

  useEffect(() => {
    setTime(getTime());
    const timer = setInterval(() => {
      setTime(getTime());
    }, 60000); // update every 1 minute

    return () => clearInterval(timer);
  }, [getTime]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{time}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
