"use client"

import Image from "next/image"

const Campaign = () => {
  return (
    <div className="w-full mx-auto flex flex-col sm:flex-row">
      {/* Image Section */}
      <div className="w-full sm:w-1/2 order-1 sm:order-none">
        <Image src="/camp.jpg" alt="Campaign Image" width={1000} height={800} className="w-full h-auto object-cover" />
      </div>
      {/* Content Section */}
      <div className="bg-[#4a0000] w-full sm:w-1/2 flex justify-center items-center text-white px-4 sm:px-6 py-8 sm:py-0">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest">Love Always</h1>
          <p className="max-w-xl mx-auto text-sm sm:text-md md:text-lg lg:text-xl leading-relaxed">
            Gucci Together portrays shared moments drawn from the cadence of everyday life, set in homes filled with
            warmth and lived emotions for Valentine&apos;s Day.
          </p>
          <button className="font-semibold border-b-2 border-white pb-1 hover:text-gray-300 transition-colors duration-300">
            DISCOVER THE CAMPAIGN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Campaign

