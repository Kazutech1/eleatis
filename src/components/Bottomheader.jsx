import React from 'react';
import { motion, useInView } from 'framer-motion';
import qr from '../assets/QR.png';
import img1 from '../assets/img1.png';
import { FiDownload } from 'react-icons/fi';

const Bottomheader = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants for background glows
  const glowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  // Animation variants for text and buttons
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for the image (slide in from the right)
  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div>
      <section
        className="relative flex items-center justify-center min-h-screen px-8 py-16 bg-[#050506] text-white overflow-hidden"
        ref={ref}
      >
        {/* Top Swirl/Elliptical Glow Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={glowVariants}
        >
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[600px] -translate-x-1/9 -translate-y-1/2 rounded-full bg-purple-800/20 blur-3xl" />
        </motion.div>

        {/* Bottom Glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[15px] rounded-full bg-purple-800 blur-3xl pointer-events-none"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={glowVariants}
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl w-full gap-8">
          {/* Left Side (Text & QR) */}
          <motion.div
            className="flex-1"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2, // Staggered animation for children
                },
              },
            }}
          >
            {/* Small Badge */}
            <motion.p
              className="text-xs bg-[#18181b] inline-block px-3 py-1 rounded-full mb-4"
              variants={textVariants}
            >
              <span className="text-[#a78bfa]">✦</span> Start learning{' '}
              <span className="text-[#a78bfa]">with Elentis</span>
            </motion.p>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-50 to-gray-300 bg-clip-text text-transparent"
              variants={textVariants}
            >
              Start Your Learning Journey <br className="hidden md:block" />
              Anytime, Anywhere
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-gray-300 max-w-xl mb-6"
              variants={textVariants}
            >
              Access live mentorship, skill swaps, and blockchain-verified
              learning—all from your mobile device.
            </motion.p>

            {/* Buttons */}
           <motion.button
                  
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-white text-[#09090b] hover:bg-[#fafafa] text-xs rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <FiDownload className="text-sm" />
                  Download
                </motion.button>

            {/* QR Code + Text */}
            <motion.div
              className="flex items-center gap-4"
              variants={textVariants}
            >
              <img src={qr} alt="QR Code" className="w-20 h-20 object-cover" />
              <p className="text-xs text-gray-400 leading-tight">
                Scan to Download App
                <br />
                iOS and Android
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side (Phone Screenshot) */}
          <motion.div
            className="flex-1 flex justify-center"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={imageVariants}
          >
            <img
              src={img1}
              alt="Mobile App Screenshot"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Bottomheader;