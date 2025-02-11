"use client"

import { useState } from "react"
import Image from "next/image"
import { MinusIcon, PlusIcon, Share2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CartProvider, useCart } from "./CartContext"
import { CartSidebar } from "./SideCart"
import MessageModal from "../Payment/MassageModal"
import { RelatedProducts } from "../Product/RelatedProduct"
import { Carousel } from "../Product/ProductCausel"


function ProductContent() {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("free-size")

  const CartProduct = () => {
    addItem({
      id: "premium-socks-1",
      name: "Premium Antibacterial Socks - Regal",
      price: 160,
      size,
      quantity,
      image:
      "/bag.jpg",
    })
  }

  return (
    <div className="min-h-screen py-20 font-manrope">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold uppercase">Relation</div>
          <nav>
            <Button variant="ghost">Shop</Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
              <div className="absolute left-4 top-4 z-10">
                <span className="rounded bg-red-500 px-2 py-1 text-sm font-semibold text-white">SALE</span>
              </div>
              <Carousel images={["/bag.jpg", "/bag.jpg", "/bag.jpg"]} />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">Premium Antibacterial Socks - Regal</h1>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold">৳160</span>
                <span className="text-sm text-gray-500 line-through">৳250</span>
              </div>
            </div>

           {/* Size Selector */}
           <div className="space-y-2">
              <label className="text-sm font-medium">Select Size</label>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="s">Small (US 6-8)</SelectItem>
                  <SelectItem value="m">Medium (US 8-10)</SelectItem>
                  <SelectItem value="l">Large (US 10-12)</SelectItem>
                  <SelectItem value="xl">X-Large (US 12-14)</SelectItem>
                  <SelectItem value="free-size">Free Size</SelectItem>
                </SelectContent>
              </Select>
            </div>


            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex w-[180px] items-center rounded-md border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <MinusIcon className="h-4 w-4" />
                </Button>
                <div className="flex-1 text-center">{quantity}</div>
                <Button variant="ghost" size="icon" className="rounded-none" onClick={() => setQuantity(quantity + 1)}>
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col gap-4 sm:flex-row w-1/2">
              <Button className=" flex-1 py-2" size="lg" onClick={CartProduct}>
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Share2Icon className="h-4 w-4" />
              </Button>
            </div>

            {/* Product Description */}
            <div className="space-y-4 text-sm">
              <p>
                The best quality sock you can find in Bangladesh. Enjoy up to 35% off and 25% Nylon Spandex with
                Antibacterial Coating.
              </p>
              <p>
                The Antibacterial property is designed and developed to get rid of microorganisms, which include things
                like bacteria that cause foot diseases and unpleasant odors.
              </p>
              <p>
                The Nylon yarn socks sweat away from the skin instantly and increases the comfort of wearing. The soft
                combed cotton gives a smooth feel to your feet throughout the day of wearing.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Bought Together */}
        <section className="mt-12">
          <h2 className="mb-6 text-xl font-bold">Frequently Bought Together</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <Image
                 src="/bag.jpg"
                  alt="Related Product"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Premium Antibacterial Socks - Lavish</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-bold">৳160</span>
                  <span className="text-sm text-gray-500 line-through">৳250</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <CartSidebar />
    </div>
  )
}


// CartProductPages
export default function CartProductPage() {
  return (
    <CartProvider>
    
      <ProductContent />
      <MessageModal />
      <div className="mt-16">
        <h2 className="text-4xl font-semibold mb-6 text-center">You May Also Like</h2>
        <RelatedProducts />
      </div>
      <CartSidebar />
    </CartProvider>
  )
}


