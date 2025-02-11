import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useCart } from "../Cart/CartContext"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CartTable() {
  const { items, removeItem, updateQuantity } = useCart()

  const formatPrice = (price: number) => {
    return `৳${price.toLocaleString()}`
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex items-center space-x-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-md">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">Size: {item.size}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                className="w-16 text-center"
              />
            </TableCell>
            <TableCell>{formatPrice(item.price)}</TableCell>
            <TableCell>{formatPrice(item.price * item.quantity)}</TableCell>
            <TableCell>
              <Button variant="destructive" size="sm" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
