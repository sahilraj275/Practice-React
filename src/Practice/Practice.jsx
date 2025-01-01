//*Create a React component that includes a textarea. Display the count of characters entered in real-time below the textarea.

// import React, { useState } from "react";

// function Practice() {
//   const [input, setinput] = useState("");

//   const handleInput = (e) => {
//     const res = e.target.value;
//     setinput(res);
//   };

//   return (
//     <div className="w-full p-10 h-[100vh] flex flex-col bg-zinc-100">
//       <label className="text-2xl" htmlFor="">
//         Enter Your content below:
//       </label>
//       <textarea
//         onChange={handleInput}
//         className="w-[40%] mb-5 h-[40%] mt-5"
//       ></textarea>
//       <h3 className="text-2xl">Count: {input.length}</h3>
//     </div>
//   );
// }

// export default Practice;

//* Create a React component that includes a textarea. Display the count of the space characters entered in real-time below the textarea.

// import React, { useState } from "react";

// function Practice() {
//   const [input, setinput] = useState("");
//   const [spaces, setspaces] = useState("");

//   const handleInput = (e) => {
//     const res = e.target.value;
//     setinput(res);

//     // const spaces = (res.match(/ /g) || []).length;
//     const spaces = res.split(" ").length - 1;

//     setspaces(spaces);
//   };

//   return (
//     <div className="w-full p-10 h-[100vh] flex flex-col bg-zinc-100">
//       <label className="text-2xl" htmlFor="">
//         Enter Your content below:
//       </label>
//       <textarea
//         onChange={handleInput}
//         className="w-[40%] mb-5 h-[40%] mt-5"
//       ></textarea>
//       <h3 className="text-2xl">Count: {spaces}</h3>
//     </div>
//   );
// }

// export default Practice;

//* Build a React component that renders a message based on a boolean prop. If the prop is true, display a success message; otherwise, display an error message.

// import React from "react";
// import PropPractice from "./PropPractice";

// function Practice() {
//   return (
//     <div>
//       <h3>Prop Practice</h3>

//       <PropPractice isSuccess={true} />
//       {/* <PropPractice isSuccess={} /> */}
//     </div>
//   );
// }

// export default Practice;

//* 5.Create a React component that includes an input field and a button. When the button is clicked, display the reversed string of the text entered in the input field below.

// import React, { useState } from "react";

// function Practice() {
//   const [inputText, setInputText] = useState("");
//   const [reverseText, setReverseText] = useState("");

//   function handleTextArea(e) {
//     const input = e.target.value;
//     setInputText(input);
//   }

//   function reverse() {
//     const textReverse = inputText.split("").reverse().join("");
//     setReverseText(textReverse);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen p-5 bg-gray-100">
//       <h3 className="text-2xl text-zinc-700 font-bold mb-4">
//         Click the button to reverse the text:
//       </h3>

//       <textarea
//         onChange={handleTextArea}
//         className="w-1/2 h-32 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
//         placeholder="Type your text here..."
//       ></textarea>

//       <button
//         onClick={reverse}
//         className="mt-4 p-2 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
//       >
//         Reverse it
//       </button>

//       <h3 className="mt-5 p-3 text-lg font-medium text-zinc-800 bg-slate-200 border border-gray-300 rounded-lg shadow-md">
//         Reverse text: {reverseText}
//       </h3>
//     </div>
//   );
// }

// export default Practice;

//! form handling using ref

// import React, { useRef } from "react";

// const Practice = () => {
//   const name = useRef(null);
//   const password = useRef(null);

//   function formHandler(e) {
//     e.preventDefault();
//     console.log(name.current.value);
//     console.log(password.current.value);
//   }
//   return (
//     <>
//       <div className="p-10 flex bg-red-100 flex-col">
//         <form onSubmit={formHandler} action="" className="flex p-4 flex-col">
//           <label htmlFor="">Username</label>
//           <input ref={name} type="text" placeholder="name" />
//           <label htmlFor="">Password</label>
//           <input ref={password} type="password" placeholder="password" />
//           <input
//             type="submit"
//             placeholder="password"
//             className="bg-green-300 mt-8 w-[90px] h-[50px]"
//           />
//         </form>
//       </div>
//     </>
//   );
// };

// export default Practice;

//! using react-hook-form

// import React, { useRef } from "react";
// import { useForm } from "react-hook-form";

// const Practice = () => {
//   const { register, handleSubmit } = useForm();

//   return (
//     <>
//       <div className="p-10 flex bg-red-100 flex-col">
//         <form
//           onSubmit={handleSubmit((data) => console.log(data))}
//           action=""
//           className="flex p-4 flex-col"
//         >
//           <label htmlFor="">Username</label>
//           <input {...register("name")} type="text" placeholder="name" />
//           <label htmlFor="">Password</label>
//           <input
//             {...register("password")}
//             type="password"
//             placeholder="password"
//           />
//           <input
//             type="submit"
//             placeholder="password"
//             className="bg-green-300 mt-8 w-[90px] h-[50px]"
//           />
//         </form>
//       </div>
//     </>
//   );
// };

// export default Practice;

// *Write a React component that receives a list of numbers as props. Render a list of the numbers that are even, along with their squares.
// import React from "react";
// import PropPractice from "./PropPractice";

// function Practice() {
//   let numbers = [3, 4, 5, 6, 7, 8, 10];
//   return (
//     <div>
//       <h3>HELLO</h3>
//       <PropPractice num={numbers} />
//     </div>
//   );
// }

// export default Practice;

// *7.Build a React component that takes a boolean prop called isLoggedIn. If isLoggedIn is true, render a welcome message with the user's name (passed as another prop); otherwise, render a message prompting the user to log in.
// import React from "react";
// import PropPractice from "./PropPractice";

// function Practice() {
//   return (
//     <div>
//       <h3>REACT PRACITCE</h3>
//       <PropPractice isLoggedIn={true} name="sahil" />
//     </div>
//   );
// }

// export default Practice;

// *8.Create a React component that allows users to enter a number in an input field. Below the input, display the factorial of the entered number in real-time.

// import React, { useState } from "react";

// function FactorialCalculator() {
//   const [number, setNumber] = useState("");
//   const [factorial, setFactorial] = useState(1);

//   // Function to calculate factorial
//   const calculateFactorial = (num) => {
//     if (num < 0) return "undefined"; // Factorial is not defined for negative numbers
//     if (num === 0) return 1; // 0! is 1
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   };

// Handle input change and update factorial
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setNumber(value);
//     setFactorial(calculateFactorial(value)); // Calculate factorial and update state
//   };

//   return (
//     <div>
//       <h3>Factorial Calculator</h3>
//       <input
//         type="number"
//         value={number}
//         onChange={handleChange}
//         min="0" // Ensure only non-negative numbers are allowed
//       />
//       <h4>Factorial: {factorial}</h4>
//     </div>
//   );
// }

// export default FactorialCalculator;

// import React from "react";
// import { useState } from "react";

// function Practice() {
//   const [val, setval] = useState("");
//   const [factorial, setfactorial] = useState(1);

//   function factorialData(n) {
//     if (n < 0) return undefined;
//     if (n == 1) return 1;

//     let factorial = 1;

//     for (let i = 1; i <= n; i++) {
//       factorial = factorial * i;
//     }
//     return factorial;
//   }
//   function handleChange(e) {
//     const value = e.target.value;
//     setval(value);
//     setfactorial(factorialData(value));
//   }
//   return (
//     <div>
//       <h3>Factorial Calcultor</h3>
//       <input
//         onChange={handleChange}
//         type="number"
//         placeholder="number"
//         min={0}
//       />
//       <h3>Factorial: {factorial}</h3>
//     </div>
//   );
// }

// export default Practice;

// *9.Write a React component that receives an array of strings as props. Render a dropdown select element containing the strings. When a string is selected, display its length below the dropdown.

// import React from "react";
// import PropPractice from "./PropPractice";

// function Practice() {
//   const data = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

//   return (
//     <div>

//       <PropPractice data={data} />
//     </div>
//   );
// }

// export default Practice;

//!Create a React component that contains two input fields (for first and last names) and a button. When the button is clicked, display the full name (first + last) below the inputs.

// import React, { useState } from "react";

// function Practice() {
//   const [firstname, setfisrtName] = useState("");
//   const [lastname, setlastName] = useState("");
//   const [fullName, setFullName] = useState("");

//   function firstName(e) {
//     setfisrtName(e.target.value);
//   }
//   function lastName(e) {
//     setlastName(e.target.value);
//   }

//   function fullNameHandler() {
//     setFullName(`${firstname} ${lastname}`);
//   }

//   return (
//     <div className="p-5 mt-5  flex flex-col w-full h-full">
//       <input
//         onChange={firstName}
//         className="w-[20%] p-2 bg-red-100"
//         type="text"
//         placeholder="First Name"
//       />
//       <input
//         onChange={lastName}
//         className="w-[20%] p-2 mt-2 bg-red-100"
//         type="text"
//         placeholder="Last Name"
//       />
//       <button
//         onClick={fullNameHandler}
//         className="bg-green-300 hover:bg-green-400 w-[8%] text-[20px] rounded-md mt-5"
//       >
//         Click
//       </button>
//       <h1 className="text-xl mt-5 text-zinc-700">FullName:{fullName}</h1>
//     </div>
//   );
// }

// export default Practice;

// import React, { useEffect, useState } from "react";

// function Practice() {
//   const [data, setdata] = useState([]);
//   async function getData() {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = await res.json();
//       setdata(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div className="p-8 text-2xl font-semibold">
//       <h1>Fetching The data from Api</h1>
//       {data.map((item, index) => {
//         return (
//           <div key={index}>
//             <li>{item.title}</li>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Practice;

//!conditional rendering

// import React from "react";
// import PropPractice from "./PropPractice";
// function Practice() {
//   return (
//     <div className="p-4 flex flex-col h-screen">
//       <PropPractice isLoggedIn={false} flag={true} />
//     </div>
//   );
// }

// export default Practice;

//! render every data

// import React from "react";
// import PropPractice from "./PropPractice";

// function Practice() {
//   const data = [3, 5, 6, 7, 1, 3];
//   return (
//     <div className="p-3 flex flex-col justify-center items-center h-full w-full">
//       <PropPractice data={data} />
//     </div>
//   );
// }

// export default Practice;

//! handle inputs
// import React, { useState } from "react";

// function Practice() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Form submitted");
//   }

//   function handleNameChange(e) {
//     setName(e.target.value);
//   }

//   function handleEmailChange(e) {
//     setEmail(e.target.value);
//   }

//   function handleNumberChange(e) {
//     setNumber(e.target.value);
//   }

//   return (
//     <form
//       className="p-4 flex flex-col w-screen h-screen gap-4"
//       onSubmit={handleSubmit}
//     >
//       <input
//         onChange={handleNameChange}
//         type="text"
//         placeholder="name"
//         value={name}
//       />
//       <input
//         onChange={handleEmailChange}
//         type="email"
//         placeholder="email"
//         value={email}
//       />
//       <input
//         onChange={handleNumberChange}
//         type="number"
//         placeholder="number"
//         value={number}
//       />
//       <button type="submit">Submit</button>

//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//       <p>Number: {number}</p>
//     </form>
//   );
// }

// export default Practice;

//* 14.Build a React component that includes a text input for entering a number. Below the input, display whether the number is prime or not in real-time as the user types.

// import React, { useState } from "react";
// import { useEffect } from "react";

// function Practice() {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     console.log("hello");
//   });

//   useEffect(() => {
//     console.log("hello");
//   }, [counter]);

//   useEffect(() => {
//     console.log("hello");
//   }, []);
//   return (
//     <div>
//       <h1 className="text-2xl">
//         <h1>Counter here: {counter}</h1>
//         <button onClick={() => setCounter(counter + 1)}> Update</button>
//       </h1>
//     </div>
//   );
// }

// export default Practice;

// import React from "react";

// export function ChildComponent({ name, age, gender }) {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{age}</p>
//       <p>{gender}</p>
//     </div>
//   );
// }

// export function ParentComponent() {
//   <ChildComponent name="Sahil" age="25" gender="Male" />;
// }

import React, { useState } from "react";

function Practice() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter Page </h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default Practice;
