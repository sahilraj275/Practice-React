import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import About from "./Components/About";
import UserDetail from "./Components/UserDetail";

function App() {
  return (
    <div className="text-2xl text-white bg-zinc-900 w-full min-h-screen flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="flex w-full bg-sky-500 h-16 items-center justify-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Content */}
      <div className="flex-grow w-full flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
