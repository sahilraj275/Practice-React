import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
function App() {
  const [data, setdata] = useState([]);
  // async function getData() {
  //   try {
  //     const data = await fetch("https://fakestoreapi.com/products");
  //     const response = await data.json();
  //     setdata(response);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
//   // }

//   async function getData() {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => setdata(res.data))
//       .catch((error) => console.log(error));
//   }

//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div className="text-3x">
//       <h1>Get Data</h1>

//       {data.map((e, i) => (
//         <li key={i}>{e.title}</li>
//       ))}
//     </div>
//   );
// }

// export default App;
