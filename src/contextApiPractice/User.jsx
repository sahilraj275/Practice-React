import React, { useContext } from "react";
import { UserContext } from "./Context";
import { Link, useParams } from "react-router-dom";

function User() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User List</h1>
      {user.map((user) => {
        return (
          <Link to={`/user/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        );
      })}
    </div>
  );
}

export default User;
