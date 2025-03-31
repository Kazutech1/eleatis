import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaPaperPlane, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactForm = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const socialIcon = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
      className="flex flex-col items-center justify-center min-h-screen text-white px-4 overflow-hidden"
    >
      {/* Social Media Icons */}
      <motion.div className="flex space-x-4 mb-8">
        {[
          { icon: <FaLinkedin size={24} />, delay: 0 },
          { icon: <FaTwitter size={24} />, delay: 0.1 },
          { icon: <FaPaperPlane size={24} />, delay: 0.2 },
          { icon: <FaFacebook size={24} />, delay: 0.3 },
          { icon: <FaInstagram size={24} />, delay: 0.4 }
        ].map((social, index) => (
          <motion.a
            key={index}
            variants={socialIcon}
            custom={social.delay}
            href="#"
            className="text-purple-400 hover:text-purple-600 transition duration-300"
            whileHover={{ y: -5 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Form */}
      <motion.form 
        variants={container}
        className="w-full max-w-md flex flex-col justify-center"
      >
        {/* Name and Email Inputs */}
        <motion.div 
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
        >
          <motion.div variants={item}>
            <label htmlFor="name" className="block mb-2">Name</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-500 rounded-xl focus:outline-none focus:border-purple-400 bg-transparent"
            />
          </motion.div>
          <motion.div variants={item}>
            <label htmlFor="email" className="block mb-2">Email</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-500 rounded-xl focus:outline-none focus:border-purple-400 bg-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Message Textarea */}
        <motion.div variants={item}>
          <label htmlFor="message" className="block mb-2">Message</label>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            id="message"
            placeholder="Please type your message here..."
            rows="4"
            className="w-full p-2 border border-gray-500 rounded-xl focus:outline-none focus:border-purple-400 bg-transparent"
          ></motion.textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.div 
          variants={item}
          className="flex justify-center w-full"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 w-1/2 py-2 px-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition duration-300"
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.form>

      
    </motion.div>
  );
};

export default ContactForm;
