import React from "react";
import Card from "./Card";

function Cards({ users, handleRemove }) {
  return (
    <div className="w-full p-10 h-96 max-h-96 overflow-auto flex justify-center gap-4 flex-wrap">
      <Card handleRemove={handleRemove} users={users} />
    </div>
  );
}

export default Cards;
