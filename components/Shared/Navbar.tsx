"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ShoppingBag, User, Search, Menu, Phone, Mail, MapPin, ShoppingCart, LogOut } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCart } from "../Cart/CartContext"
import { CartSidebar } from "../Cart/SideCart"
import { CartTable } from "@/components/Cart/CartTable"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)
  const { items, setIsOpen } = useCart()
  const [isCartTableVisible, setIsCartTableVisible] = useState(false)

  const contactInfo = [
    { icon: <Phone size={16} />, text: "+1 234 567 890" },
    { icon: <Mail size={16} />, text: "info@relation.com" },
    { icon: <MapPin size={16} />, text: "123 Fashion St, NY" },
  ]

  const drawerLinks = [
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Links", href: "/links" },
    { title: "Privacy Policy", href: "/privacy-policy" },
  ]

  const userMenuItems = [
    { title: "Profile", href: "/profile" },
    { title: "Orders", href: "/orders" },
    { title: "Wishlist", href: "/wishlist" },
    { title: "Settings", href: "/settings" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Search query:", searchQuery)
    // Here you would typically handle the search, e.g., redirect to search results page
  }

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button whileTap={{ scale: 0.8 }} className="focus:outline-none">
          <User size={20} />
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white border border-gray-700">
        {userMenuItems.map((item, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link href={item.href} className="cursor-pointer hover:bg-gray-800 px-2 py-2 text-sm">
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-800 px-2 py-2 text-sm">
          <LogOut size={16} className="mr-2" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <div className="fixed z-50 top-0 w-full bg-black text-white flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 font-manrope">
      {/* Contact Us - Hidden on mobile */}
      <div className="hidden lg:flex text-sm xl:text-md items-center">
        <span className="mr-2">+</span> Contact Us
      </div>

      {/* Logo and Mobile Menu Button */}
      <div className="flex justify-between items-center w-full lg:w-auto">
        {/* Logo */}
        <div className="text-xl sm:text-2xl lg:text-4xl font-serif tracking-wider uppercase">R e l a t i o n</div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <motion.button whileTap={{ scale: 0.8 }} whileHover={{ rotate: 90 }}>
                <Menu size={28} />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-black text-white">
              <SheetTitle>
                <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-3 cursor-pointer">
                  <ShoppingBag size={24} />
                  <span>Shop</span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <UserMenu />
                  <span>Account</span>
                </div>
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <div className="flex items-center gap-3">
                    <Search size={24} />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full bg-gray-800 text-white"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                </form>
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsCartTableVisible(true)}>
                  <div className="relative">
                    <ShoppingCart size={24} />
                    {items.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center">
                        {items.length}
                      </span>
                    )}
                  </div>
                  <span>Cart</span>
                </div>
                {drawerLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="text-xl hover:text-gray-300 transition-colors">
                    {link.title}
                  </Link>
                ))}
                <div className="border-t border-gray-700 pt-8">
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <div className="flex flex-col gap-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-lg">
        <ShoppingBag size={20} />
        <UserMenu />
        <div className="relative" ref={searchRef}>
          <Search size={20} className="cursor-pointer" onClick={() => setIsSearchOpen(!isSearchOpen)} />
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg"
              >
                <form onSubmit={handleSearchSubmit}>
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full text-black"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative cursor-pointer" onClick={() => setIsCartTableVisible(true)}>
          <ShoppingCart size={20} />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex items-center cursor-pointer">
              <Menu size={20} />
              <span className="text-md ml-1">MENU</span>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-white">
            <SheetTitle>
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </SheetTitle>
            <div className="flex flex-col gap-8 mt-8">
              {drawerLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-xl hover:text-gray-300 transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <CartSidebar />
      {isCartTableVisible && (
        <Sheet open={isCartTableVisible} onOpenChange={setIsCartTableVisible}>
          <SheetContent side="right" className="w-full max-w-md">
            <SheetTitle>Shopping Cart</SheetTitle>
            <CartTable />
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setIsOpen(true)}>View Full Cart</Button>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  )
}

export default Navbar

