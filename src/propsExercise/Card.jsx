import React from "react";

function Card({ data, handleClick, index }) {
  const { image, artist, name, added } = data;
  return (
    <div className="w-40  mt-5 bg-zinc-100 p-4 pb-10 flex flex-wrap gap-12 relative rounded-md">
      <div className="h-32  w-32 bg-orange-600 rounded-md">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>

      <div className="">
        <h3 className="leading-none text-xl font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-3 ml-24 py-2 absolute rounded-full bottom-0 ${
          added === false ? "bg-orange-600" : "bg-teal-500"
        } text-white text-xs`}
      >
        {added === false ? "Add To Favourites" : "Added"}
      </button>
    </div>
  );
}

export default Card;
