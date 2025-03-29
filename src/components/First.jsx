import React from "react";
import { motion, useInView } from "framer-motion";
import i from "../assets/1 1.png";
import j from "../assets/1 2.png";
import fk from "../assets/fk.png";

const First = () => {
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
    <section className="text-white py-16 px-4 md:px-12" ref={ref}>
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex justify-center mt-20"
          variants={headerItemVariants}
        >
          <p className="text-xs bg-[#18181b] inline-block px-3 py-1 w-auto rounded-full mb-4">
            <span className="text-[#a78bfa]">✦</span> All About the Elentis App
          </p>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          variants={headerItemVariants}
        >
          App Features
        </motion.h2>
      </motion.div>

      {/* Feature Content */}
      <motion.div
        className="max-w-4xl mx-auto"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h3
          className="text-2xl md:text-3xl font-semibold"
          variants={headerItemVariants}
        >
          Skill <span className="text-gray-400">Swap</span>
        </motion.h3>
        <motion.p
          className="text-gray-400 mt-3"
          variants={headerItemVariants}
        >
          Join a global skill exchange marketplace where you can trade knowledge with
          professionals, experts, and learners worldwide—completely free! Whether you
          want to learn a new skill or share your expertise, Elentis connects you with
          the right people to grow, collaborate, and advance your career without financial barriers.
        </motion.p>
      </motion.div>

      {/* Images Section */}
      <div className="relative flex flex-row justify-center items-center mt-12 gap-3 md:gap-6">
        {/* First Image (Slide in from bottom) */}
        <motion.img
          src={i}
          alt="App Preview 1"
          className="rounded-lg w-1/2 md:w-1/3 shadow-lg"
          variants={{
            hidden: { opacity: 0, y: 50 }, // Start below the viewport
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Second Image (Slide in from top) */}
        <motion.img
          src={j}
          alt="App Preview 2"
          className="rounded-lg w-1/2 md:w-1/3 shadow-lg"
          variants={{
            hidden: { opacity: 0, y: -50 }, // Start above the viewport
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* Overlay Image (Fade in) */}
        <motion.img
          src={fk}
          alt="Overlay"
          className="absolute w-1/4 md:w-1/6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xl"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      </div>
    </section>
  );
};

export default First;