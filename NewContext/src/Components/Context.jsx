import React, { createContext, useContext } from "react";
import { useState } from "react";

// 1 step
export const UserContext = createContext();

// 2 step
function Context({ children }) {
  const [user, setuser] = useState([
    {
      id: 1,
      name: "Emily",
      age: 28,
      email: "emily.johnson@example.com",
    },
    {
      id: 2,
      name: "Michael",
      lastName: "Williams",
      age: 35,
      email: "michael.williams@example.com",
    },
  ]);
  return (
    <div>
      {/* 3rd step */}

      <UserContext.Provider value={{ user, setuser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default Context;
