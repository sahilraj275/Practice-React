// import React, { useRef } from "react";

// function App() {
//   const name = useRef(null);
//   const email = useRef(null);

//   function handlesubmitChange(event) {
//     event.preventDefault(event);

//     console.log(name.current.value);
//     console.log(email.current.value);
//   }

//   return (
//     <div>
//       <form action="" onSubmit={handlesubmitChange}>
//         <input ref={name} type="text" name="name" placeholder="enter name" />
//         <input
//           ref={email}
//           type="email"
//           name="email"
//           placeholder="enter email"
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;

// import React, { useRef } from "react";

// function App() {
//   const name = useRef(null);
//   const age = useRef(null);
//   const email = useRef(null);

//   const handleSubmitButton = (event) => {
//     event.preventDefault(event);
//     console.log(name.current.value);
//     console.log(age.current.value);
//     console.log(email.current.value);
//   };
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmitButton}>
//         <input ref={name} type="text" placeholder="enter your name : " />
//         <input ref={age} type="number" placeholder="enter your age : " />
//         <input ref={email} type="email" placeholder="enter your email : " />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;
