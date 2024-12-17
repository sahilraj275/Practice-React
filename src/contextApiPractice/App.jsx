import React from "react";
import Home from "./Home";
import { Link, Routes, Route } from "react-router-dom";
import User from "./User";
import About from "./About";
import Userdetails from "./Userdetails";
function App() {
  return (
    <div className="text-2xl">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<Userdetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
