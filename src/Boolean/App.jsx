import React from "react";
import Message from "./Message";

function App() {
  return (
    <div>
      <h1 className="text-3xl mb-5">Message Example</h1>
      <Message isSuccess={true} />
      <br />
      <Message isSuccess={false} />
    </div>
  );
}

export default App;
