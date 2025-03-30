import React from "react";
import { motion } from "framer-motion";
import img0 from "../assets/phone2.png";
import img00 from "../assets/img00.png";
import download from '../assets/download.svg';
import learn from '../assets/learn.svg'

const HeroSection = () => (
  <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="container mx-auto px-4 pt-10 md:py-24 flex flex-col items-center text-center relative overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${img00})` }}
  >
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-5 mb-8 relative z-10"
    >
      <p className="text-xs bg-[#18181b] inline-block px-3 py-2 rounded-full my-10">
        <span className="text-[#a78bfa]">✦</span> Innovative Web3 Technology for Learning
      </p>
      <h1 className="font-[Space_Grotesk] text-[30px] md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
        Empower your Future with Skills &amp; Web3-Powered Learning
      </h1>
      <p className="text-[#a1a1aa] mb-8">
        Learn, Earn, and Grow - The Future of Skill Learning
      </p>

      {/* Buttons with Motion Effects */}
      <div className="flex flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" text-[#09090b]  w-37 h-15  px-6 py-2 transition-all bg-cover bg-center"
          style={{
            backgroundImage: `url(${download})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "10px 40px", // Ensure text remains readable
            color: "white", // Text color for contrast
          }}
        >
          
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" text-[#09090b]  w-35 h-15  px-6 py-2 transition-all bg-cover bg-center"
          style={{
            backgroundImage: `url(${learn})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            padding: "10px 40px", // Ensure text remains readable
            color: "white", // Text color for contrast
          }}
        >
        </motion.button>
      </div>
    </motion.div>

    {/* Image Animation */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-8 z-10"
    >
      <img src={img0} alt="Mobile app screenshot" className="rounded-2xl shadow-lg w-auto h-auto" />
    </motion.div>
  </motion.section>
);

export default HeroSection;
