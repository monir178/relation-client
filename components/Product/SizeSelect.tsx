"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface SizeSelectorProps {
  sizes: string[]
}

export function SizeSelector({ sizes }: SizeSelectorProps) {
  return (
    <div className="space-y-4">
      <Label className="text-base">Select Size</Label>
      <RadioGroup defaultValue={sizes[0]} className="grid grid-cols-3 gap-4">
        {sizes.map((size) => (
          <Label
            key={size}
            className="flex items-center justify-center p-3 border rounded-md cursor-pointer hover:bg-accent [&:has(:checked)]:border-primary"
          >
            <RadioGroupItem value={size} className="sr-only" />
            {size}
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}

