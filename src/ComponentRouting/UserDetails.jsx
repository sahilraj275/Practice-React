import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/user");
  }
  //   console.log(name);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center  justify-center mt-10 text-2xl">
        <h3 className="flex justify-center mb-10 text-red-300">User Details</h3>
        <h1 className="mb-6">
          HELLO{" "}
          <span className="text-3xl text-cyan-500">{name.toUpperCase()}</span>
        </h1>
        <p className="flex justify-center bg-red-50 w-[50%] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ratione expedita nisi eveniet iusto at veniam enim vel commodi beatae?
        </p>
      </div>
      <button
        onClick={handleNavigate}
        className="flex mt-10 justify-center bg-green-300 w-[8%] text-center"
      >
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;
