import React, { useContext } from "react";
import { UserContext } from "./Context";
import { Link, useParams } from "react-router-dom";

function Userdetails() {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  
  return (
    <div>
      <h1>User Details</h1>
      <h1>{user[id].name}</h1>
      <h1>{user[id].city}</h1>
    </div>
  );
}

export default Userdetails;
