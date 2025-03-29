import React from 'react';

const Chead = () => {
  return (
    <section className="relative text-white py-16 px-4 text-center overflow-hidden">
      {/* Gradient Blur at the Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[30px] rounded-full bg-purple-400 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Button */}
        <p className="text-xs bg-[#18181b] inline-block px-3 py-1 rounded-full mb-4">
        <span className="text-[#a78bfa]">✦</span> Get in touch with us
      </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl  font-bold leading-tight mb-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
          We’re Here to Help – Reach Out to Us!
        </h2>

        {/* Subheading/Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Have a question, need support, or interested in partnering with Elentis?
          Our team is ready to assist you!
        </p>
      </div>
    </section>
  );
};

export default Chead;
