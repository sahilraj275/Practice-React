import React, { useEffect, useState } from "react";

function AppFetch() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/");
      const result = await data.json();
      console.log(result);

      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="p-4">
      {data.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
}

export default AppFetch;
