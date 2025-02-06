"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample product data - in a real app this would come from an API or database
const products = [
  {
    id: 1,
    name: "Burgundy Leather Loafer",
    price: "$295",
    imageUrl:
      "/bag.jpg",
  },
  {
    id: 2,
    name: "Classic Black Loafer",
    price: "$275",
    imageUrl:
     "/bag.jpg",
  },
  {
    id: 3,
    name: "Olive Penny Loafer",
    price: "$285",
    imageUrl:
      "/bag.jpg",
  },
  {
    id: 4,
    name: "Cream Canvas Sneaker",
    price: "$195",
    imageUrl:
     "/bag.jpg",
  },
  // Add more products as needed
]

export default function Category() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Featured Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group relative">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                  <span className="sr-only">Add to favorites</span>
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

