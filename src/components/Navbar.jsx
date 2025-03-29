import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // Import download icon
import logo from "../assets/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

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

  return (
    <header className="container mx-auto px-4 flex items-center justify-between py-4">
      {/* Logo */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2"
      >
        <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
      </motion.div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        {["/", "/company", "/features", "/contact-us"].map((path, index) => {
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

      {/* Download Button */}
      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="bg-white text-[#09090b] hover:bg-[#fafafa] text-xs rounded-full px-4 py-2 flex items-center gap-2"
      >
        <FiDownload className="text-sm" />
        Download
      </motion.button>
    </header>
  );
};

export default Navbar;