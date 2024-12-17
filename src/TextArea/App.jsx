import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [spaceCount, setSpaceCount] = useState(0);

  // Handler function to count spaces
  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // Count the number of spaces in the input text
    const spaces = (inputText.match(/ /g) || []).length;
    setSpaceCount(spaces);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Space Counter</h1>

      {/* Textarea Input */}
      <textarea
        className="w-full h-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
        value={text}
        onChange={handleTextChange}
      />

      {/* Space Character Count */}
      <p className="mt-4 text-lg">
        Space Count: <span className="font-bold">{spaceCount}</span>
      </p>
    </div>
  );
}

export default App;
