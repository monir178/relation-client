"use client";
import React, { useState } from "react";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-[50] top-0 w-full bg-[#4a0000] text-white flex justify-between items-center px-6 py-3 font-manrope">
      <div className="text-sm xl:text-md flex items-center">
        <span className="mr-2">+</span> Contact Us
      </div>

      <div className="text-xl lg:text-2xl xl:text-4xl font-serif tracking-wider uppercase">
        R e l a t i o n
      </div>

      <div className="hidden md:flex items-center gap-8 text-lg">
        <ShoppingBag size={20} />
        <User size={20} />
        <Search size={20} />
        <div className="flex items-center">
          <Menu size={20} />
          <span className="text-md ml-1">MENU</span>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ rotate: 90 }}
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-12 left-0 w-full bg-[#4a0000] text-white flex flex-col items-center gap-4 py-6 shadow-lg">
            <ShoppingBag size={24} />
            <User size={24} />
            <Search size={24} />
            <span className="text-lg">MENU</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
