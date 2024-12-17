import React from "react";
import NamesList from "./NameList";

const namesArray = [
  { name: "Charlie" },
  { name: "Alice" },
  { name: "Catherine" },
  { name: "Bob" },
  { name: "Chris" },
  { name: "David" },
];

function App() {
  return (
    <div className="App">
      <NamesList namesArray={namesArray} />
    </div>
  );
}

export default App;
