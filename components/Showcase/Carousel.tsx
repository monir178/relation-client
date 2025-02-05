'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const images = [
    '/ts1.jpg',
    '/ts2.jpg',
    '/ts3.jpg',
    '/ts4.jpg',
    '/ts1.jpg',
    '/ts3.jpg',
    '/ts2.jpg',
    '/ts4.jpg',
];

const Carousel = () => {
  return (
    <div className="py-8 sm:py-16 md:py-28 w-full mx-auto flex justify-center">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 1.8 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-6xl px-4 sm:px-0"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center bg-none">
            <Image
              src={src}
              alt={`Nature ${index + 1}`}
              width={1000}
              height={700}
              className="w-full h-full object-cover rounded-3xl px-2"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;