// import { element } from "prop-types";
// import React, { useEffect } from "react";
// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState([]);
//   async function getData() {
//     try {
//       const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
//       const res = await data.json();
//       setdata(res);
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       {data.map((element, index) => {
//         return <li key={index}>{element.title}</li>;
//       })}
//     </div>
//   );
// }

// export default App;

// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

// function App() {
//   const [data, setdata] = useState([]);

//   async function getData() {
//     try {
//       const res = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos/"
//       );
//       setdata(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       {data.map((e, i) => {
//         return <li key={i}>{e.title}</li>;
//       })}
//     </div>
//   );
// }

// export default App;
