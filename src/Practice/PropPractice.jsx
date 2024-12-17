// import React from "react";

// function PropPractice({ isSuccess }) {
//   return (
//     <div>
//       {isSuccess ? (
//         <div>
//           <strong>Success:</strong>The message is successful
//         </div>
//       ) : (
//         <div>
//           <strong>Fail:</strong>The message is not successful
//         </div>
//       )}
//     </div>
//   );
// }

// export default PropPractice;

//* Write a React component that receives a list of numbers as props. Render a list of the numbers that are even, along with their squares.
// import React from "react";

// function PropPractice({ num }) {
//   return (
//     <div>
//       <ul>
//         {num.map((x, index) => {
//           if (x % 2 === 0) {
//             return (
//               <li key={index}>
//                 <h3>
//                   Even numbers is {x}, and its sqaure is: {x * x}
//                 </h3>
//               </li>
//             );
//           }
//           return null; // If number is odd, return nothing
//         })}
//       </ul>
//     </div>
//   );
// }

// export default PropPractice;

// *7.Build a React component that takes a boolean prop called isLoggedIn. If isLoggedIn is true, render a welcome message with the user's name (passed as another prop); otherwise, render a message prompting the user to log in.

// import React from "react";

// function PropPractice({ isLoggedIn, name }) {
//   return (
//     <>{isLoggedIn ? <h3>Hello {name}</h3> : <h3>Hello, please login</h3>}</>
//   );
// }

// export default PropPractice;

// import React, { useState } from "react";

// function PropPractice({ data }) {
//   const [selectedString, setSelectedString] = useState(""); // Renamed for clarity

//   function handleChangeEvent(e) {
//     setSelectedString(e.target.value); // Update the state with the selected value
//   }

//   return (
//     <div>
//       <h3>Select a String</h3>
//       <select onChange={handleChangeEvent} value={selectedString}>
//         <option value="">Select a string</option>
//         {data.map((item, index) => (
//           <option key={index} value={item}>
//             {" "}
//             {/* Set value to item */}
//             {item}
//           </option>
//         ))}
//       </select>
//       <h4>String length: {selectedString.length}</h4> {/* Use selectedString */}
//     </div>
//   );
// }

// export default PropPractice;

// !conditional rendering

// import React from "react";

// function PropPractice({ isLoggedIn, flag }) {
//   return (
//     <div className="flex justify-center w-screen h-screen">
//       <h1 className="text-2xl ">Conditional Rendering</h1>
//       {isLoggedIn ? (
//         <h1 className="p-4 flex flex-col mt-10 justify-center ">
//           Welcome Back
//         </h1>
//       ) : flag ? (
//         <h1 className="p-4 flex flex-col mt-10 justify-center ">
//           Please Sign up
//         </h1>
//       ) : (
//         <h1 className="p-4 flex flex-col mt-10 justify-center ">
//           Please Sign in
//         </h1>
//       )}
//     </div>
//   );
// }

// export default PropPractice;
//! render every data
// import React from "react";

// function PropPractice({ data }) {
//   return (
//     <div className="p-3 flex flex-col justify-center items-center h-full w-full">
//       <h1>Render every data</h1>
//       {data.map((item, index) => {
//         return <li key={index}>{item}</li>;
//       })}
//     </div>
//   );
// }

// export default PropPractice;
