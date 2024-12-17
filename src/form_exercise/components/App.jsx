import React, { useState } from "react";
import Cards from "./Cards";
import From from "./From";

function App() {
  const [user, setUser] = useState([]);

  // Accept 'data' as an argument
  const handleSubmitFormData = (data) => {
    setUser([...user, data]); // 'data' now represents the form input
  };

  const handleRemove = (id) => {
    setUser(() => user.filter((item, index) => index != id));
  };

  return (
    <div className="w-screen h-full flex justify-center items-center bg-zinc-200">
      <div className="container mx-auto">
        <Cards handleRemove={handleRemove} users={user} />{" "}
        {/* Passing user data correctly */}
        <From handleSubmitData={handleSubmitFormData} />
      </div>
    </div>
  );
}

export default App;
