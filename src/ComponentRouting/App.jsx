import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import About from "./About";
import UserDetails from "./UserDetails";
function App() {
  return (
    <div className="p-4 justify-center text-xl font-semibold">
      <nav className="flex justify-center gap-10">
        <NavLink to="/ ">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user">User</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:name" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
