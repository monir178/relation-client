import Image from "next/image";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row min-h-[80vh] px-2">
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
        <div className="relative w-full h-full">
          <Image
            src="/new1.jpg"
            layout="fill"
            objectFit="cover"
            alt="New Arrivals for Her"
            className="object-left-top"
          />
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center text-white">
          <h2 className="text-3xl font-semibold">New Arrivals for Her</h2>
          <button className="mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
            Discover
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
        <div className="relative w-full h-full">
          <Image
            src="/ts3.jpg"
            layout="fill"
            objectFit="cover"
            alt="New Arrivals for Him"
            className="object-left-top"
          />
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10 text-center text-white">
          <h2 className="text-3xl font-semibold">New Arrivals for Him</h2>
          <button className="mt-4 px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
