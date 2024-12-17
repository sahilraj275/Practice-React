import React from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import About from "./About";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      <nav className="flex justify-center gap-10 text-2xl">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
