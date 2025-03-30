import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";
import download from '../assets/get.svg'

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const navItems = ["/", "/company", "/features", "/contact-us"];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] z-50 bg-transparent rounded-full shadow-lg  py-2 px-6 flex items-center justify-between">
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 z-50">
        <img src={logo} alt="Logo" className="w-16 rounded-full" />
      </motion.div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
  {navItems.map((path, index) => {
    const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
    return (
      <motion.div 
        key={index} 
        className="text-sm cursor-pointer"
        whileHover={{ scale: 1.1 }} // ⬆️ Increases size on hover
        whileTap={{ scale: 0.95 }}  // ⬇️ Slight shrink effect when clicked
      >
        <Link
          to={path}
          onClick={() => setActiveLink(path)}
          className={`block py-2 px-1 transition-all ${
            activeLink === path ? "text-purple-400" : "text-white"
          }`}
        >
          {label}
        </Link>
      </motion.div>
    );
  })}
</nav>


      {/* Desktop Download Button */}
     {/* Desktop Download Button - Hidden on Small Screens */}
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="hidden md:block text-[#09090b] w-30 h-15 px-6 py-2 transition-all bg-cover bg-center"
  style={{
    backgroundImage: `url(${download})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "10px 40px",
    color: "white",
  }}
>


          
        </motion.button>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white p-2 z-50"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu  size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#09090b] bg-opacity-95 backdrop-blur-lg z-40 flex flex-col items-center pt-24 px-6 overflow-y-auto"
          >
            {navItems.map((path, index) => {
              const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <motion.div key={index} className="w-full text-center py-4 border-b border-gray-800">
                  <Link
                    to={path}
                    onClick={() => {
                      setActiveLink(path);
                      setIsMenuOpen(false);
                    }}
                    className="block text-lg text-white hover:text-purple-400"
                  >
                    {label}
                  </Link>
                </motion.div>
              );
            })}


         <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-[#09090b] text-sm rounded-full px-6 py-3 flex items-center gap-2"
            >
              <FiDownload className="text-sm" />
              Download
            
          
        </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
