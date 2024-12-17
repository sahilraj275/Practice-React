import React from "react";

function Message({ isSuccess }) {
  return (
    <div>
      {isSuccess ? (
        <div className="bg-green-400">
          <strong>Success</strong>
          <h3>Message is Successful</h3>{" "}
        </div>
      ) : (
        <div className="bg-red-400">
          <strong>Error</strong>
          <h3>Error is there</h3>{" "}
        </div>
      )}
    </div>
  );
}

export default Message;
