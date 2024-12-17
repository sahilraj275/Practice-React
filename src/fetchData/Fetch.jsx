import { func } from "prop-types";
import React, { useEffect, useState } from "react";

function Fetch() {
  const [products, setProduct] = useState([]);

  async function fetchData() {
    try {
      const data = await fetch(`https://dummyjson.com/products`);
      const res = await data.json();
      console.log(res);

      setProduct(res.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <h1 className="p-5 font-semibold">Product title</h1>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
}

export default Fetch;
