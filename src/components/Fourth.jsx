import React from 'react';
import { motion } from 'framer-motion';
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";

const Fourth = () => {
  return (
    <section className="text-white py-16 px-4">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto text-center md:text-left"
      >
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Job Referrals &amp; Career Integration
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
          High-achieving learners get exclusive access to top partner companies
          actively seeking skilled professionals, enabling a smooth transition
          from education to employment.
        </p>
      </motion.div>

      {/* Images Section */}
      <div className="relative flex justify-center items-center gap-4 mt-12 max-w-5xl mx-auto">
        <motion.img
          src={f1}
          alt="Screenshot 1"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 10,
            duration: 0.8
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-lg shadow-lg w-1/2 object-cover"
        />
        <motion.img
          src={f2}
          alt="Screenshot 2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 60,
            damping: 10,
            duration: 0.8
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-lg shadow-lg w-1/2 object-cover"
        />
      </div>
    </section>
  );
};

export default Fourth;