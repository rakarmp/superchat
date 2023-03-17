import React from "react";

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://avatars.githubusercontent.com/u/83684256?v=4"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://avatars.githubusercontent.com/u/83684256?v=4"
          alt=""
        />
      </div>
    </div>
  );
}

export default Message;
