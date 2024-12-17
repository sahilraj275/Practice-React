import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  function goBackHandler() {
    navigate("/user");
  }

  return (
    <div className="w-1/2 m-auto mt-10">
      <h1 className="text-red-200 text-5xl mb-2">User Details</h1>
      <h1 className="text-3xl mb-2">{name}</h1>

      <button
        onClick={goBackHandler}
        className="mt-5 text-white px-3 py-2 bg-red-300"
      >
        Go back
      </button>
    </div>
  );
}

export default UserDetails;
