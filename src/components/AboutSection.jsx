import React from 'react';
import dome from '../assets/dome.svg';
import a1 from '../assets/a1.png';

const AboutSection = () => (
  <>
    <section className="text-center bg-cover">
      <div className="flex flex-col items-center justify-center px-6 ">
        <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-gray-400 w-full md:w-[40%] text-lg leading-relaxed mb-6">
          Elentis is revolutionizing skill development by creating a peer-to-peer learning and career empowerment platform.
          Whether you want to learn, teach, or monetize your expertise, Elentis provides a seamless ecosystem powered by AI-driven learning,
          blockchain-backed certification, and corporate partnerships.
        </p>
      </div>
    </section>

    {/* Responsive Background Section */}
    <section className="relative text-white h-[600px] md:h-[750px] px-6 md:px-16 text-center bg-cover bg-center pb-12">
      {/* Background for small screens */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:block md:hidden"
        style={{ backgroundImage: `url(${a1})` }}
      ></div>

      {/* Background for larger screens */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${dome})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-gray-400 w-full md:w-[70%] text-xl leading-relaxed">
          Our mission is to make learning accessible, verifiable, and rewarding for individuals worldwide. With Elentis, you can trade skills,
          earn from teaching, or upskill to unlock new career opportunities—all within one innovative platform.
        </p>
      </div>
    </section>
  </>
);

export default AboutSection;
