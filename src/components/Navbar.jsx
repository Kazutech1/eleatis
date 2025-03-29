import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const linkVariants = {
    initial: { scale: 1, color: "#fff" },
    hover: { 
      scale: 1.1, 
      color: "#a78bfa", 
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      } 
    },
    active: { 
      scale: 1.1, 
      color: "#a78bfa", 
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      } 
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      } 
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const navItems = ["/", "/company", "/features", "/contact-us"];

  return (
    <header className="container mx-auto px-4 flex items-center justify-between py-4 relative">
      {/* Logo */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 z-50"
      >
        <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
      </motion.div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((path, index) => {
          const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
          return (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              animate={activeLink === path ? "active" : "initial"}
              variants={linkVariants}
              className="text-sm cursor-pointer"
            >
              <Link
                to={path}
                onClick={() => setActiveLink(path)}
                className="block py-2 px-1"
              >
                {label}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Desktop Download Button */}
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="hidden md:flex bg-white text-[#09090b] hover:bg-[#fafafa] text-xs rounded-full px-4 py-2 items-center gap-2"
      >
        <FiDownload className="text-sm" />
        Download
      </motion.button>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white p-2 z-50"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden fixed inset-0 bg-[#09090b] z-40 pt-24 px-6 flex flex-col items-center"
          >
            {navItems.map((path, index) => {
              const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <motion.div
                  key={index}
                  variants={mobileLinkVariants}
                  className="w-full text-center py-4 border-b border-gray-800"
                >
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
              variants={mobileLinkVariants}
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