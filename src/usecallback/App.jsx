import React, { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

function App() {
  const [data, setdata] = useState(0);
  const [childSum, setchildSum] = useState(0);

  // Memoize the update function, dependent on childSum
  const update = useCallback(() => {
    console.log("useCallback: Child sum changed to", childSum);
  }, [childSum]);

  return (
    <div>
      <Child handleUpdate={update} />
      <h1>Count: {data}</h1>
      <button onClick={() => setdata(data + 1)}>Increment</button>
      <h1>Child Sum: {childSum}</h1>
      <button onClick={() => setchildSum(childSum + 1)}>
        Increment child Sum
      </button>
    </div>
  );
}

export default App;
