import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import g from '../assets/g.svg';
import h from '../assets/h.svg';
import i from '../assets/i.svg';
import j from '../assets/j.svg';

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggered animation for children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const items = [
    {
      img: g,
      title: 'Global Opportunities',
      desc: 'Expand your horizons with international skill exchanges and global job placements. Whether you\'re looking to learn from industry experts, mentor others, or land a remote job, Elentis provides borderless access to career growth and professional networking.',
      width: 'md:min-w-[32%]',
    },
    {
      img: h,
      title: 'AI-Driven Personalized Learning',
      desc: 'Smart, tailored learning paths that adapt to your skills and goals for faster, more efficient growth.',
      width: 'md:min-w-[65%]',
    },
    {
      img: i,
      title: 'Monetization for Everyone',
      desc: 'Earn while you learn! Whether you\'re a beginner or an expert, Elentis enables all users to monetize their skills. Teach, mentor, or exchange knowledge and get rewarded.',
      width: 'md:min-w-[65%]',
    },
    {
      img: j,
      title: 'Community & Collaboration',
      desc: 'Connect with professionals and mentors, join live skill-sharing sessions, and collaborate on real-world projects. Exchange knowledge and grow together in a thriving learning community.',
      width: 'md:min-w-[32%]',
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="container mx-auto px-4 pt-16 md:pt-24 pb-10"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl  mb-12  font-bold leading-tight  bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent"
      >
        Why Choose Elentis?
      </motion.h2>

      {/* Items Container */}
      <motion.div
        className="flex flex-col md:flex-row flex-wrap gap-4"
        variants={containerVariants} // Apply container-level animation
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants} // Apply individual item animations
            className={`relative bg-cover bg-center h-120 md:h-110 p-6 rounded-xl border border-[#29292e] w-full md:flex-1 ${item.width}`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black/30 rounded-xl" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-[#a1a1aa] text-sm mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseSection;