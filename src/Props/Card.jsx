import React from "react";

function Card({ image, name, gender, home, born, handleClick, friends }) {
  return (
    <div className="w-52   bg-white rounded-md overflow-hidden">
      <div className="w-full h-32 bg-sky-200">
        <img
          className="w-full h-full object-cover object-[center]"
          src={image}
          alt=""
        />
      </div>

      <div className="w-full   p-3">
        <h3 className="font-semibold text-xl">{name}</h3>
        <h3 className=" text-xs ">Male:{gender}</h3>
        <h3 className=" text-xs">Homeworld:{home}</h3>
        <h3 className=" text-xs">Born:{born}</h3>
        <button
          onClick={handleClick}
          className="px-3 mt-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md"
        >
          {friends === true ? "friend" : "Add friend"}
        </button>
      </div>
    </div>
  );
}

export default Card;
