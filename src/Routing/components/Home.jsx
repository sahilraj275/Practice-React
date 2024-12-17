import React from "react";

function Home() {
  return (
    <div className="mt-20 bg-zinc-300 w-1/2 flex flex-col justify-center ml-72 ">
      <h1 className="text-red-400 text-5xl mb-5 flex font-semibold  justify-center">
        Home
      </h1>
      <p className="flex justify-center items-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        pariatur perspiciatis provident ut veniam quibusdam recusandae in aut,
        consectetur laudantium tempore sequi nam. Natus asperiores mollitia
        perferendis similique assumenda ipsam. Vitae in beatae aut maxime
        officia? Quibusdam aliquam hic obcaecati sed consequatur fugit
      </p>
      <button className="flex p-2 w-28 mt-3 rounded-full bg-zinc-400">
        Explore More
      </button>
    </div>
  );
}

export default Home;
