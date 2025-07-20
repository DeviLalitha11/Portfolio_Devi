import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "about", "projects", "services", "contact"];

  return (
    <nav className="bg-[#0f172a]/80 backdrop-blur-xl text-white shadow-lg py-3 px-6 fixed left-4 right-4 z-50 rounded-2xl border border-white/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-montserrat text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
              <span className="capitalize text-white hover:text-cyan-400 transition-colors duration-300">
                {item}
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
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
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white rounded"></span>
            <span className="block w-6 h-0.5 bg-white rounded"></span>
            <span className="block w-6 h-0.5 bg-white rounded"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden mt-4 px-2 py-3 rounded-xl bg-[#1e293b]/80 backdrop-blur-lg border border-white/10 shadow-md ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="space-y-3">
          {navItems.map((item) => (
            <motion.li
              key={item}
              className="py-2 px-4 rounded-lg cursor-pointer font-raleway capitalize text-white hover:text-cyan-400 hover:bg-cyan-800/20 transition"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onNavigate(item);
                setIsOpen(false); // Close on click
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
