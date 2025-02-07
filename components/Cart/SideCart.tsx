"use client"

import { MinusIcon, PlusIcon, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "./CartContext"

export function CartSidebar() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center space-y-2">
            <p className="text-lg font-medium">Your cart is empty</p>
            <Image
            src='/emp.gif'
            alt=''
            width={800}
            height={700}
            />
            <p className="text-sm text-muted-foreground">Add some items to your cart to checkout</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="relative aspect-square h-24 w-24 overflow-hidden rounded-md border">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                        <p className="font-medium">৳{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-md border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <MinusIcon className="h-3 w-3" />
                          </Button>
                          <div className="w-8 text-center text-sm">{item.quantity}</div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <PlusIcon className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeItem(item.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-base">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">৳{total}</span>
                </div>
              </div>
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

