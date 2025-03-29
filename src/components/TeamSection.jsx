import React from 'react';
import { motion, useInView } from 'framer-motion';

const TeamSection = ({ teamMembers }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants for the header content
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Staggered animation for children
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Animation variants for individual header elements
  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Animation variants for team member cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative bg-black text-white py-16 px-4 overflow-hidden">
      {/* Glowing Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      {/* Header Content */}
      <motion.div
        className="relative text-center mb-12"
        ref={ref}
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.button
          className="px-4 py-1 text-xs font-semibold border rounded-full mb-2"
          variants={headerItemVariants}
        >
          Who are we?
        </motion.button>
        <motion.h2
          className="text-3xl font-bold"
          variants={headerItemVariants}
        >
          Meet The Team
        </motion.h2>
        <motion.p
          className="text-gray-400"
          variants={headerItemVariants}
        >
          This is the Team behind this powerful platform
        </motion.p>
      </motion.div>

      {/* Team Member Cards */}
      <motion.div
        className="relative flex flex-col md:flex-row justify-center gap-6"
        variants={headerVariants} // Reuse staggered animation for cards
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-lg w-full md:w-72  border-transparent"
            variants={cardVariants} // Apply individual card animations
            whileHover={{
              scale: 1.05, // Scale up slightly on hover
              boxShadow: '0 10px 20px rgba(167, 139, 250, 0.5)', // Add glow effect
              borderColor: '#a78bfa', // Highlight border
            }}
            transition={{ duration: 0.3 }} // Smooth hover transition
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <motion.p
              className="text-purple-400 font-medium"
              whileHover={{ color: '#fff' }} // Change text color on hover
              transition={{ duration: 0.3 }}
            >
              {member.role}
            </motion.p>
            <p className="text-gray-400 text-sm mt-2">{member.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;