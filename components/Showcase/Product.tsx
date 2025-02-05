'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle"; // Ensures all styles are applied
import { FreeMode, Pagination } from "swiper/modules";

const products = [
  { image: '/ts1.jpg', price: 'US$000', name: 'Cashmere & Wool Coat' },
  { image: '/ts2.jpg', price: 'US$000', name: 'Printed Cotton Pants' },
  { image: '/ts3.jpg', price: 'US$000', name: 'Suede Backpack' },
  { image: '/ts4.jpg', price: 'US$000', name: 'Elasticized Sneakers' },
  { image: '/ts3.jpg', price: 'US$000', name: 'Suede Backpack' },
  { image: '/ts4.jpg', price: 'US$000', name: 'Elasticized Sneakers' },
  { image: '/ts3.jpg', price: 'US$000', name: 'Suede Backpack' },
  { image: '/ts4.jpg', price: 'US$000', name: 'Elasticized Sneakers' },
];

const Product = () => {
  return (
    <div className="px-4 py-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }}
       
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="relative  h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 rounded-2xl bg-black/50 text-white text-center">
                <span className="block text-sm sm:text-base font-medium">{product.name}</span>
                <span className="text-xs sm:text-sm">{product.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
