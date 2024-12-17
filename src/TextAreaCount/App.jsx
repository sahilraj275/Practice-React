import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  function inputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="bg-slate-400 text-2xl  w-full p-10 h-full flex flex-col justify-center">
      <h3 className="mb-3">Text Area Input Count</h3>

      <textarea onChange={inputChange}></textarea>
      <h1 className="mt-5 text-2xl">Count:{input.length}</h1>
    </div>
  );
}

export default App;
