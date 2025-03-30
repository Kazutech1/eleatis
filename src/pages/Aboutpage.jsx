import React from 'react'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import TeamPage from '../components/TeamDetails'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../components/Footer'

const Aboutpage = () => {
  return (
    <div className="min-h-screen items-center pt-10 bg-[#050506] text-white">
        <Navbar />
        <div className='flex justify-center '>
        <p className="text-xs bg-[#18181b] mt-10 inline-block px-3 py-1 w-auto rounded-full mb-4">
        <span className="text-[#a78bfa]">✦</span> Get in touch with us
      </p>
        </div>
       
        <AboutSection />
        <section className=" text-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">The Story of Elentis</h2>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Elentis was born from a simple idea: learning should be accessible, rewarding, and lead to real opportunities.
          Victor Chigbu Uzoma, a data scientist and entrepreneur, saw how many people struggled to learn new skills,
          prove their expertise, and find jobs. Traditional education was expensive and slow, while many online courses
          did not offer real career opportunities.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4 text-sm md:text-base">
          So, he created Elentis, a platform where people can exchange skills, earn from teaching, and get verified
          through blockchain-backed certificates. Instead of just watching courses, users can connect, trade knowledge,
          and grow together. With AI-powered matching, Elentis helps learners find the right mentors, while businesses
          can hire skilled professionals with verified expertise.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4 text-sm md:text-base">
          Whether you are looking to learn, teach, or build your career, Elentis makes it possible. A new way to learn.
          A smarter way to grow. Welcome to Elentis.
        </p>
      </div>
    </section>
    <TeamPage />
    <NewsletterSection />
    <Footer />
    </div>
  )
}

export default Aboutpage