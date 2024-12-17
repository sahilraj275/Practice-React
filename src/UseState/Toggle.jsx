import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState("Toggle me!");

  function hidden() {
    let res = "";
    setToggle(res);
  }

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <button
        onClick={hidden}
        className="py-2 px-2 bg-orange-500 text-white mb-5"
      >
        Show/Hide Text
      </button>
      <p>{toggle}</p>
    </div>
  );
}

export default Toggle;
