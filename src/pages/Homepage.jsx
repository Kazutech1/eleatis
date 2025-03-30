import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhyChooseSection from '../components/WhyChooseSection';
import FeaturedSection from '../components/FeaturedSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import img from '../assets/img2.png';
import im from '../assets/img3.png';
import m from '../assets/img4.png';
import { FaExchangeAlt, FaChalkboardTeacher, FaBrain, FaUserCheck, FaShieldAlt, FaCertificate, FaBriefcase, FaUserTie } from 'react-icons/fa';
import Bottomheader from '../components/Bottomheader';

const features = [
  { icon: <FaExchangeAlt size={20} />, title: "Skill Exchange", description: "Exchange skills with others in a global marketplace. Trade knowledge with peers, learn new abilities, and grow your expertise—at no cost!" },
  { icon: <FaChalkboardTeacher size={24} />, title: "Pay-Per-Lesson", description: "Experts can earn money by providing premium lessons through one-on-one coaching or group sessions. Learners benefit from high-quality, expert-led education." },
  { icon: <FaBrain size={24} />, title: "AI-Assisted Learning", description: "Elentis uses artificial intelligence to personalize learning paths, ensuring efficient and engaging skill development tailored to your needs." },
  { icon: <FaUserCheck size={24} />, title: "AI Matching Algorithm", description: "Our smart system connects learners with the right mentors or partners based on skill level, learning preferences, and availability—maximizing success rates." },
  { icon: <FaShieldAlt size={24} />, title: "Secure Escrow Payment", description: "All transactions are safeguarded, ensuring fair and transparent payments. Funds are only released upon successful lesson completion." },
  { icon: <FaCertificate size={24} />, title: "Blockchain Certifications", description: "Earn tamper-proof, verifiable digital certificates that employers trust—providing you with credibility in the job market." },
  { icon: <FaBriefcase size={24} />, title: "Job & Career Integration", description: "Top learners gain direct access to partner companies looking for skilled talent, helping them transition seamlessly from learning to employment." },
  { icon: <FaUserTie size={24} />, title: "One on One Mentorship", description: "Get direct, real-time mentorship from experienced professionals. Learn at your own pace, receive expert insights, and accelerate your career with interactive sessions." }
];

// Full team members (for larger screens)
const fullTeamMembers = [
  
  {
    name: "John Segun Omibekun",
    role: "Social Media Manager",
    description: "Social Media Strategist | Digital Storyteller | Community Builder",
    image: img,
  },
  {
    name: "Victor Chigbu Uzoma",
    role: "Founder & CEO",
    description: "Visionary Leader | Innovator | Entrepreneur",
    image: im,
  },
  {
    name: "Daniel Ngoka",
    role: "Graphic Designer",
    description: "Creative Strategist | Visual Storyteller | Brand Designer",
    image: m,
  },
];

// Smaller team members (for smaller screens)
const smallScreenTeamMembers = [
  {
    name: "Victor Chigbu Uzoma",
    role: "Founder & CEO",
    description: "Visionary Leader | Innovator | Entrepreneur",
    image: im,
  },
  {
    name: "John Segun Omibekun",
    role: "Social Media Manager",
    description: "Social Media Strategist | Digital Storyteller | Community Builder",
    image: img,
  },
  {
    name: "Daniel Ngoka",
    role: "Graphic Designer",
    description: "Creative Strategist | Visual Storyteller | Brand Designer",
    image: m,
  },
];

const Homepage = () => {
  const [teamMembers, setTeamMembers] = useState(fullTeamMembers);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTeamMembers(smallScreenTeamMembers); // Use smaller team on small screens
      } else {
        setTeamMembers(fullTeamMembers); // Use full team on larger screens
      }
    };

    handleResize(); // Call once to set initial value
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <FeaturedSection features={features} />
      <AboutSection />
      <TeamSection teamMembers={teamMembers} />
      <Bottomheader />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Homepage;
