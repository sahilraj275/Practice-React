import React, { useContext } from "react";
import { UserContext } from "./Context";
import { Link } from "react-router-dom";

function User() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User List</h1>
      {user.map((item) => (
        <div key={item.id}>
          <Link to={`/user/${item.id}`}>
            {item.firstName} {item.lastName}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default User;
