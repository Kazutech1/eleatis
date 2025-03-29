import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import img from '../assets/img2.png';
import im from '../assets/img3.png';
import m from '../assets/img4.png';

// JSON data for team members
const teamData = [
  {
    name: 'Victor Chigbu Uzoma',
    role: 'Founder & CEO',
    description:
      'Victor Chigbu Uzoma is the driving force behind Elentis, a platform revolutionizing skill exchange, career empowerment, and education technology. With a passion for bridging the gap between learning, earning, and career advancement, he founded Elentis to empower individuals worldwide through AI-driven learning, blockchain-backed certifications, and corporate partnerships. As a data scientist and entrepreneur, Victor brings a deep understanding of technology, education, and digital transformation to the table. His vision for Elentis is not just about acquiring skills but creating an ecosystem where people can seamlessly learn, teach, monetize their expertise, and transition into meaningful careers. Under his leadership, Elentis is shaping the future of education and work, making learning accessible, verifiable, and rewarding for all. With a keen eye for innovation and strategy, he continues to push the boundaries of what is possible in the gig economy, online learning, and professional development',
    image: 'img2.png',
    title: 'Visionary Leader | Innovator | Entrepreneur.',
  },
  {
    name: 'John Segun Omibekun',
    role: 'Social Media Manager',
    description:
      'John Segun Omibekun is the Social Media Manager at Elentis. He crafts engaging content and strategic campaigns that amplify Elentis mission of revolutionizing knowledge exchange, skill development, and career growth. With a passion for digital storytelling and data-driven engagement, John specializes in building vibrant online communities, increasing brand visibility, and driving meaningful conversations. His expertise in content strategy, analytics, and audience growth helps position Elentis as the go-to platform for peer-to-peer learning and skill monetization',
    image: 'img3.png',
    title: 'Social Media Strategist | Digital Storyteller | Community Builder.',
  },
  {
    name: 'Daniel Ngoka',
    role: 'Graphic Designer',
    description:
      'Daniel Ngoka is a seasoned graphic designer with over 4 years of experience in the design industry. Currently crafting impactful visual identities for Elentis, Daniel specializes in blending creativity with precision to deliver designs that resonate with futuristic aesthetics and trustworthy themes. Known for a keen eye for detail and a passion for innovation, Daniel thrives in creating meaningful and engaging design solutions tailored to client needs. His work at Elentis ensures that the brand maintains a strong visual presence, helping to establish credibility and attract users in a competitive digital landscape. Through his expertise in branding, UI/UX design, and creative direction, Daniel contributes to making Elentis a recognizable and user-friendly platform, bridging the gap between functionality and aesthetics',
    image: 'img4.png',
    title: 'Creative Strategist | Visual Storyteller | Brand Designer',
  },
];

// Map image filenames to imported images
const imageMap = {
  'img2.png': im,
  'img3.png': img,
  'img4.png': m,
};

const TeamPage = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Animation variants for the top heading
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
    <section className="bg-[#050506] text-white min-h-screen py-16 px-4" ref={ref}>
      {/* Top Heading */}
      <motion.div
        className="text-center mb-8"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.p
          className="px-4 py-1 text-xs font-semibold border border-purple-400 rounded-full w-fit mx-auto mb-4"
          variants={headerItemVariants}
        >
          Who are we?
        </motion.p>
        <motion.h2
          className="text-2xl md:text-3xl font-bold"
          variants={headerItemVariants}
        >
          Meet The Team
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-1"
          variants={headerItemVariants}
        >
          This is the Team behind this powerful platform
        </motion.p>
      </motion.div>

      {/* Team Members */}
      <motion.div
        className="space-y-8"
        variants={headerVariants} // Reuse staggered animation for cards
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-xl shadow-lg flex flex-col md:flex-row"
            variants={cardVariants} // Apply individual card animations
          >
            {/* Image on the left */}
            <img
              src={imageMap[member.image]}
              alt={member.name}
              className="rounded-lg w-full md:w-[400px] h-auto object-cover"
            />
            {/* Data on the right */}
            <div className="flex flex-col pt-10 mt-4 md:mt-0 md:ml-8 md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold">{member.name}</h3>
              <p className="text-purple-400 font-medium">{member.role}</p>
              <p className="font-medium">{member.title}</p>
              <div className="flex gap-4 text-purple-400 mt-4 justify-center md:justify-start">
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }} // Scale up slightly on hover
                  whileTap={{ scale: 0.9 }} // Scale down slightly on tap
                  transition={{ duration: 0.2 }}
                >
                  <FaTwitter size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }} // Scale up slightly on hover
                  whileTap={{ scale: 0.9 }} // Scale down slightly on tap
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedinIn size={20} />
                </motion.a>
              </div>
              <p className="text-gray-300 text-sm md:text-base mt-4 leading-relaxed md:w-[80%]">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamPage;