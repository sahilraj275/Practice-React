import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import User from "./User";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        {/* <Link>Home</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
