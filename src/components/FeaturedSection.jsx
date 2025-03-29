import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const FeaturedSection = ({ features }) => {
  // Animation variants for feature cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for container (staggered effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  return (
    <section className="text-white py-16 px-6 md:px-16">
      {/* Section Title */}
      <motion.h2
        className="text-4xl w-full text-center font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
      >
        Key Features
      </motion.h2>

      {/* Feature Cards Container */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Trigger animation when in viewport
        viewport={{ once: true }} // Only trigger once
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start rounded-lg shadow-lg border border-gray-700 p-4"
              variants={cardVariants} // Apply individual card animations
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Hover effect
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="text-white">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedSection;