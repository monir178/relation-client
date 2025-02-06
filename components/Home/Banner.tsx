import React from "react";

const Banner = () => {
  return (
    <div
      className="font-manrope relative 2xl:top-[60px] h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/banner1.jpg')" }}
    >
      <div className="w-full text-center mt-52">
        <h1 className="text-3xl xl:text-6xl font-bold">Valentine’s Day Gifts</h1>
        <div className="mt-10 flex justify-center items-center gap-4">
          <button className="px-10 xl:px-20 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            For Her
          </button>
          <button className="px-10 xl:px-20 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            For Him
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
