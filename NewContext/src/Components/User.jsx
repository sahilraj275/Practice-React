import React, { useContext } from "react";
import { UserContext } from "./Context";
import { Link } from "react-router-dom";

function User() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-3xl">User list</h1>
      {user.map((u) => {
        return (
          <Link
            className="text-white flex flex-col mt-10 gap-2 hover:text-red-300"
            key={u.id}
            to={`/user/${u.id}`}
          >
            {u.name}
          </Link>
        );
      })}
    </div>
  );
}

export default User;
