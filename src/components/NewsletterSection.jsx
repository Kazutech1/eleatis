import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const NewsletterSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants for text (title and description)
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for input and button (slide up)
  const inputButtonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="bg-[#050506] text-white py-16 px-4 text-center" ref={ref}>
      <motion.div
        className="max-w-xl mx-auto space-y-4"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          variants={textVariants}
        >
          Stay Ahead in Learning &amp; Web3 Innovation!
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300"
          variants={textVariants}
        >
          Join our community of thousands of learners and professionals receiving expert tips,
          new courses, upcoming events, and career opportunities—directly in your inbox.
        </motion.p>

        {/* Input and Button */}
        <motion.div
          className="flex justify-center mt-6"
          variants={inputButtonVariants}
        >
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-[400px] px-5 py-3 rounded-2xl bg-[#18181b] text-gray-200 border border-[#3f3f46] focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <motion.button
              type="button"
              className="absolute right-1 top-2 px-4 py-2 bg-purple-600 rounded-2xl text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              whileHover={{ scale: 1.1 }} // Scale up slightly on hover
              whileTap={{ scale: 0.9 }} // Scale down slightly on tap
              transition={{ duration: 0.2 }}
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;