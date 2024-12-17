import React from "react";
import { Link } from "react-router-dom";
function User() {
  return (
    <>
      {" "}
      <div className="mt-20 bg-zinc-300 w-1/2 flex flex-col justify-center ml-72 ">
        <h1 className="text-red-400 text-5xl mb-5 flex  font-semibold justify-center">
          User
        </h1>
        <div className="flex flex-col p-4">
          <Link
            className="bg-orange-300 mb-2 hover:bg-red-300 flex w-24 justify-center p-2 text-2xl font-semibold"
            to="/user/john"
          >
            John
          </Link>
          <Link
            className="bg-emerald-300 hover:bg-red-300 mb-2 flex w-24 justify-center p-2 text-2xl font-semibold"
            to="/user/martha"
          >
            Martha
          </Link>
          <Link
            className="bg-teal-300 mb-2 flex hover:bg-red-300 w-24 justify-center p-2 text-2xl font-semibold"
            to="/user/pentos"
          >
            Pentos
          </Link>
        </div>
      </div>
    </>
  );
}

export default User;
