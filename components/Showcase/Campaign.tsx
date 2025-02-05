import Image from "next/image";
import React from "react";

const Campaign = () => {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row py-4 px-2 ">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/camp.jpg"
          alt="Campaign Image"
          width={1000}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="bg-[#4a0000] w-full lg:w-1/2 flex justify-center items-center text-white px-6">
        <div className="text-center space-y-2 lg:space-y-6">
          <h1 className="text-2xl md:text-5xl font-serif tracking-widest">
            Love Always
          </h1>
          <p className="max-w-2xl mx-auto text-md md:text-xl leading-relaxed">
            Gucci Together portrays shared moments drawn from the <br /> cadence
            of everyday life, set in homes filled with warmth and lived emotions
            for Valentine&apos;s Day.
          </p>
          <button className="font-semibold border-b-2 border-white pb-1 hover:text-gray-300">
            DISCOVER THE CAMPAIGN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
