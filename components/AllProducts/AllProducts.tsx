"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import MessageModal from "../Payment/MassageModal"

// Sample product data - in a real app this would come from an API or database
const product = [
  { id: 1, name: "Burgundy Leather Loafer", price: "$295", imageUrl: "/bag.jpg", product: "Loafers" },
  { id: 2, name: "Classic Black Loafer", price: "$275", imageUrl: "/bag.jpg", product: "Loafers" },
  { id: 3, name: "Olive Penny Loafer", price: "$285", imageUrl: "/ts1.jpg", product: "Loafers" },
  { id: 4, name: "Cream Canvas Sneaker", price: "$195", imageUrl: "/bag.jpg", product: "Sneakers" },
  { id: 5, name: "Navy Blue Derby", price: "$310", imageUrl: "/bag.jpg", product: "Derby" },
  { id: 6, name: "Brown Chelsea Boot", price: "$350", imageUrl: "/bag.jpg", product: "Boots" },
  { id: 7, name: "Suede Desert Boot", price: "$275", imageUrl: "/ts1.jpg", product: "Boots" },
  { id: 8, name: "Black Oxford Shoe", price: "$325", imageUrl: "/bag.jpg", product: "Oxford" },
  { id: 9, name: "Tan Brogue Shoe", price: "$290", imageUrl: "/bag.jpg", product: "Brogue" },
  { id: 10, name: "Gray Running Sneaker", price: "$180", imageUrl: "/bag.jpg", product: "Sneakers" },
  { id: 11, name: "White Low-Top Sneaker", price: "$210", imageUrl: "/bag.jpg", product: "Sneakers" },
  { id: 12, name: "Black High-Top Sneaker", price: "$230", imageUrl: "/bag.jpg", product: "Sneakers" },
  { id: 13, name: "Beige Slip-On Loafer", price: "$265", imageUrl: "/bag.jpg", product: "Loafers" },
  { id: 14, name: "Red Leather Moccasin", price: "$240", imageUrl: "/bag.jpg", product: "Moccasins" },
  { id: 15, name: "Dark Green Hiking Boot", price: "$370", imageUrl: "/bag.jpg", product: "Boots" },
  { id: 16, name: "Khaki Chukka Boot", price: "$310", imageUrl: "/bag.jpg", product: "Boots" },
  { id: 17, name: "Blue Leather Slip-On", price: "$280", imageUrl: "/bag.jpg", product: "Slip-Ons" },
  { id: 18, name: "Camel Suede Loafer", price: "$295", imageUrl: "/bag.jpg", product: "Loafers" },
  { id: 19, name: "Black Monk Strap Shoe", price: "$320", imageUrl: "/bag.jpg", product: "Monk Straps" },
  { id: 20, name: "White Espadrille", price: "$200", imageUrl: "/ts1.jpg", product: "Espadrilles" },
]

export default function AllProducts() {
  const [favorites, setFavorites] = useState<number[]>([])
  const router = useRouter()

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const handleImageClick = (productId: number, product: string) => {
    router.push(`/products/${productId}?product=${encodeURIComponent(product)}`)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {product.map((product) => (
          <Card key={product.id} className="group relative flex flex-col">
            <CardContent className="p-0 flex-grow">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  onClick={() => handleImageClick(product.id, product.product)}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleFavorite(product.id)}>
                    <Heart
                      className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <MessageModal />
    </div>
  )
}

