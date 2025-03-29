import React from 'react';
import { motion } from 'framer-motion';
import img0 from '../assets/img0.png';

const HeroSection = () => (
  <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="container mx-auto px-4 py-1 mt-13 md:py-24 flex flex-col items-center text-center relative overflow-hidden"
  >
    {/* Glowing Lines */}
    <div className="absolute inset-0 overflow-hidden z-0">
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "150px" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="absolute top-1/4 left-[10%] w-0.5 bg-indigo-600/80 shadow-[0_0_15px_rgba(79,70,229,0.6)]"
      />
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "150px" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="absolute top-1/4 right-[10%] w-0.5 bg-indigo-600/80 shadow-[0_0_15px_rgba(79,70,229,0.6)]"
      />
    </div>

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto mb-8 relative z-10"
    >
      <p className="text-xs bg-[#18181b] inline-block px-3 py-1 rounded-full mt-10">
        <span className="text-[#a78bfa]">✦</span> Innovative Web3 Technology for Learning
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
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
          className="w-auto bg-white text-[#09090b] hover:bg-[#fafafa] rounded-full px-6 py-2 transition-all"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-auto border border-[#a1a1aa] text-white hover:bg-[#18181b] rounded-full px-6 py-2 transition-all"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>

    {/* Background Glow */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[600px] -translate-x-1/2 -translate-y-1/5 rounded-full bg-purple-800/20 blur-3xl"
      />
    </div>

    {/* Image Animation */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-8 z-10"
    >
      <img src={img0} alt="Mobile app screenshot" className="rounded-2xl shadow-lg w-[350px] h-[550px]" />
    </motion.div>
  </motion.section>
);

export default HeroSection;
