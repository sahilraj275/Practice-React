import React from "react";

function Card({ users }) {
  return users.map((item, index, handleRemove) => {
    return (
      <div
        key={index}
        className="w-48 h-48 bg-zinc-100 rounded-lg flex flex-col items-center p-2"
      >
        <div className="image w-[5vw] h-[5vw] rounded-full bg-zinc-200 overflow-hidden">
          <img className="w-full h-full object-cover" src={item.image} alt="" />{" "}
          {/* Use item.image */}
        </div>
        <h1 className="opacity-60 text-xs font-semibold">{item.email}</h1>{" "}
        {/* Use item.email */}
        <h1 className="mt-1 text-xl font-semibold">{item.name}</h1>{" "}
        {/* Use item.name */}
        <p className="mt-1 text-center text-xs font-semibold tracking-tight leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel unde
        </p>
        <button
          onClick={() => handleRemove}
          className="px-3 mt-2 text-white py-1 bg-red-600 rounded-md text-xs"
        >
          Remove it
        </button>
      </div>
    );
  });
}

export default Card;
