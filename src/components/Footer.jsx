import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Footer = () => (
  <footer className="bg-[#050506] text-gray-300 pt-12 pb-6">
    {/* Top Footer Section */}
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start mb-8 gap-8 text-center md:text-left">
      <div className="flex flex-col gap-4">
        {/* <img src={logo} alt="Logo" className="w-25 h-25 rounded-full" /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 flex-1">
        <div className="flex flex-col gap-1 pb-10 items-center md:items-start">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start">
          <h3 className="text-white font-semibold text-lg mb-2">Home</h3>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">Explore</p>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-white font-semibold text-lg mb-2">Company</h3>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">About Us</p>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">Our Story</p>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">Team</p>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-white font-semibold text-lg mb-2">Features</h3>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">App Screens</p>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">Key Features</p>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">Benefits</p>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h3 className="text-white font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">FAQs</p>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">X (Twitter)</p>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">Twitter</p>
        </div>
      </div>
    </div>

    {/* Bottom Footer Section */}
    <div className="border-t border-gray-700 pt-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center md:justify-between gap-4">
        <div className="text-sm text-gray-500">© 2025 Elentis. All rights reserved.</div>
        <div className="flex gap-4 text-sm text-gray-400">
          <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer transition-colors">Terms of Service</p>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
