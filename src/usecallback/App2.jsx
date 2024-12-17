import React, { useCallback } from "react";
import Child2 from "./Child2";
import { useState } from "react";

function App2() {
  const [data, setdata] = useState(0);
  const [dataChild, setDataChild] = useState(0);

  // const add = () => {};

  const add = useCallback(() => {}, [dataChild]);
  return (
    <div>
      <Child2 update={add} />
      <h1>Welcome to learn UseCallBack</h1>
      <h2>Counter: {data}</h2>
      <button onClick={() => setdata(data + 1)}>Increase</button>
      
      <h2>Child Counter: {dataChild}</h2>
      <button onClick={() => setDataChild(dataChild + 1)}>Increase</button>
    </div>
  );
}

export default App2;
