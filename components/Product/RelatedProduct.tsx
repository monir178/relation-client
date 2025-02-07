"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const relatedProducts = [
  {
    id: 1,
    name: "Luxury Sandal",
    price: "$67 USD",
    image: "/bag.jpg",
    colors: ["#FF5733", "#33FF57", "#3357FF"], // Example colors
  },
  {
    id: 2,
    name: "Premium Handbag",
    price: "$89 USD",
    image: "/bag.jpg",
    colors: ["#000000", "#FFFFFF"],
  },
  {
    id: 3,
    name: "Classic Loafers",
    price: "$120 USD",
    image: "/bag.jpg",
    colors: ["#A52A2A"],
  },
  {
    id: 4,
    name: "Designer Watch",
    price: "$250 USD",
    image: "/bag.jpg",
    colors: ["#FFD700", "#8B0000", "#4682B4", "#228B22"], // More than 3 colors
  },
  {
    id: 5,
    name: "Designer Watch",
    price: "$250 USD",
    image: "/bag.jpg",
    colors: ["#FFD700", "#8B0000", "#4682B4", "#228B22"], // More than 3 colors
  },
  {
    id: 6,
    name: "Designer Watch",
    price: "$250 USD",
    image: "/bag.jpg",
    colors: ["#FFD700", "#8B0000", "#4682B4", "#228B22"], // More than 3 colors
  },
  {
    id: 7,
    name: "Designer Watch",
    price: "$250 USD",
    image: "/bag.jpg",
    colors: ["#FFD700", "#8B0000", "#4682B4", "#228B22"], // More than 3 colors
  },
]

export function RelatedProducts() {
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
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] mb-4 bg-[#F8F8F8] rounded-2xl overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-normal text-gray-900 leading-tight">{product.name}</h3>
                <p className="text-xs text-gray-600">{product.price}</p>
                <div className="flex gap-1">
                  {product.colors?.slice(0, 3).map((color, index) => (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  {product.colors?.length > 3 && (
                    <span className="text-xs text-gray-500 ml-1">
                      +{product.colors.length - 3}
                    </span>
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
