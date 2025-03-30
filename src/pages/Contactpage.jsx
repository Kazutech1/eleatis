import React from 'react'
import Chead from '../components/Chead'
import Navbar from '../components/Navbar'
import ContactForm from '../components/Contact'
import Bottomheader from '../components/Bottomheader'
import NewsletterSection from '../components/NewsletterSection'
import Footer from '../components/Footer'

const Contactpage = () => {
  return (
    <div className="min-h-screen  bg-[#09090b] text-white">
        <Navbar />
        <Chead />
        <ContactForm />
        <Bottomheader />
        <NewsletterSection />
        <Footer />
    </div>
  )
}

export default Contactpage