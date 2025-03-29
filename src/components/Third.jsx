import React from 'react';
import { motion } from 'framer-motion';
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";

const Third = () => {
  // Animation variants for random directions
  const imageVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    hiddenBottom: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 10
      }
    }
  };

  // Assign random entrance directions to each image
  const imageAnimations = [
    { variant: "hiddenLeft", hover: { scale: 1.03 } },
    { variant: "hiddenBottom", hover: { scale: 1.03 } },
    { variant: "hiddenRight", hover: { scale: 1.03 } }
  ];

  return (
    <div className="text-white bg-black py-16 px-6">
      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Learn, teach, or <span className="text-gray-300">monetize your expertise</span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Anyone has the opportunity to earn by offering premium lessons through personalized one-on-one coaching or interactive group sessions. 
          Learners gain access to high-quality, expert-led education designed to accelerate their skill development and career growth.
        </p>
      </motion.div>

      {/* Image Section - Preserving original sizing classes */}
      <div className="flex justify-center items-center gap-0 mt-12 flex-wrap sm:flex-nowrap">
  {[t1, t2, t3].map((img, index) => (
    <motion.img
      key={index}
      src={img}
      alt={index === 0 ? "UX Course" : index === 1 ? "Live Class" : "Wallet"}
      initial={imageAnimations[index].variant}
      whileInView="visible"
      whileHover={imageAnimations[index].hover}
      viewport={{ once: true, margin: "-50px" }}
      variants={imageVariants}
      transition={{ type: "spring", stiffness: 100 }}
      className={`rounded-lg shadow-lg object-cover w-1/3 max-w-xs h-auto ${
        index === 1 ? "mx-2" : ""
      }`}
    />
  ))}
</div>


    </div>
  );
};

export default Third;