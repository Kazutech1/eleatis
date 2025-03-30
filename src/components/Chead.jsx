import React from 'react';
import img00 from "../assets/img00.png";
import { motion } from "framer-motion";

const Chead = () => {
  return (
    
    <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="container mx-auto pt-20 md:py-24 pb-25  flex flex-col items-center text-center relative overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${img00})` }}
  >
      {/* Gradient Blur at the Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[30px] rounded-full bg-purple-400 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Button */}
        <p className="text-xs bg-[#18181b] inline-block px-3 py-1 rounded-full mb-4">
        <span className="text-[#a78bfa]">✦</span> Get in touch with us
      </p>

        {/* Heading */}
        <h1 className="font-[Space-Grotesk] text-[30px] md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
          We’re Here to Help – Reach Out to Us!
        </h1>

        {/* Subheading/Description */}
        <p className="text-gray-300 text-base md:text-[25px] leading-relaxed">
          Have a question, need support, or interested in partnering with Elentis?
          Our team is ready to assist you!
        </p>
      </div>
      </motion.section>
  );
};

export default Chead;
