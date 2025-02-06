"use client";
import React, { useState } from "react";
import { ShoppingBag, User, Search, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = [
    { icon: <Phone size={16} />, text: "+1 234 567 890" },
    { icon: <Mail size={16} />, text: "info@relation.com" },
    { icon: <MapPin size={16} />, text: "123 Fashion St, NY" }
  ];

  return (
    <div className="fixed z-50 top-0 w-full bg-black text-white flex justify-between items-center px-6 py-3 font-manrope">
      {/* Contact Us - Hidden on mobile */}
      <div className="hidden md:flex text-sm xl:text-md items-center">
        <span className="mr-2">+</span> Contact Us
      </div>

      {/* Logo */}
      <div className="text-xl lg:text-2xl xl:text-4xl font-serif tracking-wider uppercase">
        R e l a t i o n
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-lg">
        <ShoppingBag size={20} />
        <User size={20} />
        <Search size={20} />
        <div className="flex items-center">
          <Menu size={20} />
          <span className="text-md ml-1">MENU</span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ rotate: 90 }}
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-12 left-0 w-full bg-black text-white flex flex-col items-center gap-10 py-8 shadow-lg">
           
            {/* Navigation Items */}
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <ShoppingBag size={24} />
                <span>Shop</span>
              </div>
              <div className="flex items-center gap-3">
                <User size={24} />
                <span>Account</span>
              </div>
              <div className="flex items-center gap-3">
                <Search size={24} />
                <span>Search</span>
              </div>
              <div className="flex items-center gap-3">
                <Menu size={24} />
                <span>Menu</span>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="w-full px-8 space-y-4 pb-6 items-start">
              <h3 className="text-lg font-semibold text-center mb-4">Contact Us</h3>
              <div className="flex flex-col items-center gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center justify-center gap-3 text-sm">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;