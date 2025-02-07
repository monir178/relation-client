"use client"

import { Facebook, Twitter, Link } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShareButtons() {
  return (
    <div className="flex gap-4">
      <Button variant="outline" size="icon">
        <Facebook className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Link className="h-4 w-4" />
      </Button>
    </div>
  )
}

