import React, { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "./Context";

function UserDetail() {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  return (
    <div className="bg-cyan-900 p-3 text-zinc-200 w-[50%] h-[50%] rounded-full flex justify-center flex-col items-center">
      <h1>{user[id].name}</h1>
      <p>{user[id].age}</p>
      <p>{user[id].email}</p>
    </div>
  );
}

export default UserDetail;
