import React, { createContext, useState } from "react";

export const UserContext = createContext();
function Context(props) {
  const [user, setUser] = useState([
    {
      id: 1,
      userId: 1,
      userName: "Sahil",
      home: "siwan",
    },
    {
      id: 2,
      userId: 2,
      userName: "Manoj",
      home: "Ranchi",
    },
    {
      id: 3,
      userId: 3,
      userName: "Sanoj",
      home: "Gaya",
    },
  ]);
  console.log(props);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
export default Context;
