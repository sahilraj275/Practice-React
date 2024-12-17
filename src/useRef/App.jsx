import React, { useRef, useState } from "react";

function App() {
  const refElement = useRef("");
  const [name, setname] = useState("Sahil");

  function handleInput() {
    refElement.current.style.color = "red";
  }
  return (
    <div>
      <h1>Useref Learning</h1>

      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={handleInput}>Change Color</button>
    </div>
  );
}

export default App;
