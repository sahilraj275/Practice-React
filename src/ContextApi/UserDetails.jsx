import React, { useContext } from "react";
import { UserContext } from "./Context/Context";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(user[id]);

  return (
    <div className="flex flex-col justify-center mt-10 gap-5">
      <h1 className="bg-blue-200 w-1/6 p-2 justify-center flex  text-2xl ml-10">
        {user[id].userName}
      </h1>
      <h3 className="bg-blue-200 w-1/6 p-2 justify-center flex   ml-10">
        {user[id].home}
      </h3>
      <button
        onClick={() => navigate(-1)}
        className="p-2 bg-red-300 w-24 flex ml-10 justify-center"
      >
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;
