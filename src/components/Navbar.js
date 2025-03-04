import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const navItems = ["home", "about", "services", "projects", "contact"];
  
    return (
      <nav className="bg-gray-800/80 backdrop-blur-md text-white py-4 px-6 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="font-montserrat text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
  
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  className="relative cursor-pointer font-raleway"
                  
                  whileHover={{ scale: 1.1 }}
                  onClick={() => onNavigate(item)}
                >
                  <span className="hover:text-blue-400 transition-colors duration-300 capitalize">
                    {item}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.li>
              ))}
            </ul>
  
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none"
            >
              <div className="space-y-2">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
  
          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="pt-4 pb-2">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  className="py-2 px-4 hover:bg-blue-800/30 rounded-lg cursor-pointer font-raleway"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onNavigate(item);
                    setIsOpen(false);  // Close the menu on item click
                  }}
                >
                  <span className="capitalize">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </nav>
    );
};

export default Navbar;
