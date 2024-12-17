import React from "react";

function Child2({ update }) {
  console.log("Child rendered");
  return (
    <div>
      <p>Child here</p>
    </div>
  );
}

export default React.memo(Child2);
