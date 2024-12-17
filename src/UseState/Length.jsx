import React, { useState } from "react";

function Length() {
  const [text, setText] = useState("");

  function eventHandler(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea value={text} onChange={eventHandler} />
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default Length;
