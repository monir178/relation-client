"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const products = [
  {
    image: "/ts1.jpg",
    name: "Single-breasted cashmere and wool coat",
    colors: ["#000000", "#2B2B2B"],
  },
  {
    image: "/ts2.jpg",
    name: "Printed cotton gabardine pants",
    colors: ["#2B2B2B"],
  },
  {
    image: "/ts3.jpg",
    name: "Suede backpack",
    colors: ["#8B4513"],
  },
  {
    image: "/ts4.jpg",
    name: "Collapse Re-Nylon and suede elasticized sneakers",
    colors: ["#F5F5DC", "#000000", "#8B4513", "#4A4A4A"],
  },
  {
    image: "/ts3.jpg",
    name: "Suede backpack",
    colors: ["#8B4513"],
  },
  {
    image: "/ts4.jpg",
    name: "Elasticized sneakers",
    colors: ["#F5F5DC", "#000000"],
  },
]

export default function ProductCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="!px-4 !py-8 sm:!px-6"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] mb-4 bg-[#F8F8F8]">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-normal text-gray-900 leading-tight">{product.name}</h3>
                <div className="flex gap-1">
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-3 h-3 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  {product.colors.length > 3 && (
                    <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

