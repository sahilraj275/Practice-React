import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center ">
      <nav className="gap-10 flex text-2xl">
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "green" : "" };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "green" : "" };
          }}
          to="/user"
        >
          User
        </NavLink>
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "green" : "" };
          }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
