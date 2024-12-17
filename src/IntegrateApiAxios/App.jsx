import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    const apiUrl = "https://fakestoreapi.com/products/";

    axios
      .get(apiUrl)
      .then((products) => {
        console.log(products.data);
        setProducts(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //! Using try and catch async
  //   const getData = async () => {
  //     try {
  //       const api = await fetch("https://fakestoreapi.com/products/");
  //       const res = await api.json();

  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <div>
      {products.map((item, index) => (
        <ul key={index} className="ml-4 p-4 mt-4 font-semibold bg-red-200">
          <li className="cursor-pointer hover:bg-red-300">{item.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
