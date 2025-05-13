import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[100%] bg-black/45 flex flex-col justify-center">
          <h1 className="px-14 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            If One bite isn’t enough,
          </h1>
          <h1 className="px-14 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-500">
            Take one more.
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.unsplash.com/photo-1621070766841-a7bf1ee96df0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pizza-img1"
        />
      </div>
    </div>
  );
};

export default Hero;
