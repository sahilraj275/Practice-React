import React, { useState } from "react";

function Counter() {
  const [val, setVal] = useState(0);

  function increase() {
    setVal(val + 1);
  }

  function decrease() {
    setVal(val - 1);
  }

  return (
    <div className="py-5 px-5 flex justify-center gap-5 items-center">
      <button
        onClick={increase}
        className="py-3 px-3 bg-blue-500 rounded-full text-white "
      >
        Increment
      </button>
      <p>Count:{val}</p>

      <button
        onClick={decrease}
        className="py-3 px-3 bg-red-500 rounded-full text-white "
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
