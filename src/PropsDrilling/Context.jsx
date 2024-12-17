import React, { createContext, useState } from "react";

// Create a context for User
export const UserContext = createContext();

function Context(props) {
  const [user, setUser] = useState([
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
    },

    {
      id: 2,
      firstName: "Michael",
      lastName: "Williams",
      maidenName: "",
      age: 35,
      gender: "male",
      email: "michael.williams@x.dummyjson.com",
      phone: "+49 258-627-6644",
    },
    {
      id: 3,
      firstName: "Sophia",
      lastName: "Brown",
      maidenName: "",
      age: 42,
      gender: "female",
      email: "sophia.brown@x.dummyjson.com",
      phone: "+81 210-652-2785",
    },
  ]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
