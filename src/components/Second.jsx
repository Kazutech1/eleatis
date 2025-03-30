import React from "react";
import { motion, useInView } from "framer-motion";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

const Second = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for header content
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Staggered animation for children
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="text-white py-16 px-4 max-w-5xl mx-auto" ref={ref}>
      {/* Title & Description */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold leading-tight mb-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent"
          variants={headerItemVariants}
        >
          One on one <span className="text-gray-300">Mentorship</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400 leading-relaxed"
          variants={headerItemVariants}
        >
          Connect with experienced professionals for real-time, personalized
          mentorship. Gain expert insights, receive tailored guidance, and
          accelerate your career through interactive, hands-on learning sessions—
          all at your own pace.
        </motion.p>
      </motion.div>

      {/* Image Container */}
      <div className="relative flex justify-center items-center mt-10">
        {/* First Image (Slide in from left) */}
        <motion.img
          src={s1}
          alt="Video Call"
          className="rounded-lg w-1/3 md:w-1/3 shadow-lg object-cover"
          variants={{
            hidden: { opacity: 0, x: -50 }, // Start to the left of the viewport
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Second Image (Slide in from right) */}
        <motion.img
          src={s3}
          alt="Chat Messages"
          className="rounded-lg w-1/2 md:w-1/2 shadow-lg object-cover"
          variants={{
            hidden: { opacity: 0, x: 50 }, // Start to the right of the viewport
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Overlay Image (Fade in) */}
        <motion.img
          src={s2}
          alt="Mentor"
          className="absolute w-1/2 md:w-1/3 -rotate-6 top-1/2 left-1/2 transform -translate-x-3/5 -translate-y-1/2 rounded-lg shadow-2xl z-10"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
    </div>
  );
};

export default Second;