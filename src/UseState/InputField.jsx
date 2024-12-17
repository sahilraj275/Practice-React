import React, { useState } from "react";

function InputField() {
  const [text, setText] = useState("");

  function textHandler(event) {
    setText(event.target.value);
  }

  return (
    <div className="py-5 flex flex-col justify-center items-center ">
      <input className="py-2 px-2 mb-5" type="text" onChange={textHandler} />
      <p className="text-4xl">Input text: {text}</p>
    </div>
  );
}

export default InputField;
