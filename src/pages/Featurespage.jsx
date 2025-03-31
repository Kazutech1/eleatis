import React from 'react'
import Navbar from '../components/Navbar'
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import WhyChooseSection from '../components/WhyChooseSection'
import FeaturedSection from '../components/FeaturedSection'
import { FaExchangeAlt, FaChalkboardTeacher, FaBrain, FaUserCheck, FaShieldAlt, FaCertificate, FaBriefcase, FaUserTie } from 'react-icons/fa';
import Bottomheader from '../components/Bottomheader'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../components/Footer'

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
  

const Featurespage = () => {
  return (
    <div className=" bg-[#050506] text-white">
        <Navbar />
        <First />
        <Second />
        <Third />
        <Fourth />
        <WhyChooseSection />
        <FeaturedSection features={features} />
        <Bottomheader />
        <NewsletterSection />
        <Footer />

    </div>
  )
}

export default Featurespage