import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context/Context";

function User() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-4xl ml-10 p-5 ">User List</h1>
      <div className="mt-3 ml-12 p-4 w-1/4">
        {user.map((u) => (
          <Link
            to={`/user/${u.id}`}
            key={u.id}
            className="bg-red-200 flex flex-col mt-3 p-3"
          >
            {u.userName}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
