import React from "react";
import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";

function User() {
  return (
    <div className="flex justify-center mt-20 gap-5 flex-col items-center  text-3xl">
      <Link
        className="w-[10%] bg-green-200 p-[5px] hover:text-2xl  flex justify-center rounded-md"
        to="/user/john"
      >
        John
      </Link>
      <Link
        className="w-[10%] bg-green-200 p-[5px] hover:text-2xl flex justify-center rounded-md"
        to="/user/martha"
      >
        Martha
      </Link>
      <Link
        className="w-[10%] bg-green-200 p-[5px] hover:text-2xl  flex justify-center rounded-md"
        to="/user/bond"
      >
        Bond
      </Link>
    </div>
  );
}

export default User;
