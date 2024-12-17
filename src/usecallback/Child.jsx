import React from "react";

function Child({ handleUpdate }) {
  console.log("Child component rendered");

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}

export default React.memo(Child);
