import React, { createContext, useState } from "react";

export const UserContext = createContext();

function Context({ children }) {
  const [user, setUser] = useState([
    { id: 1, name: "Sahil", city: "usa" },
    { id: 2, name: "Rahil", city: "goa" },
    { id: 3, name: "Mahil", city: "cuba" },
  ]);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
export default Context;
