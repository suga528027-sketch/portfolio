import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto min-h-[100vh] flex flex-col justify-center">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-[#ff8c00] tracking-[0.2em] uppercase mb-8">
        <span>01 / Story</span>
      </div>

      {/* Heading */}
      <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f6f4eb] mb-16 leading-[1.1]">
        What I build instead of just writing a resume.
      </h2>

      {/* Narrative Split - Razorpay style comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16 items-start border-t border-[#f6f4eb]/20 pt-12">
        {/* Left Column */}
        <div className="space-y-6">
          <h3 className="font-sans text-sm tracking-[0.2em] text-[#ff8c00] uppercase font-bold mb-8">
            THE RESUME
          </h3>
          <ul className="space-y-4 font-mono text-lg md:text-xl text-gray-400">
            <li>"B.E. Computer Science Student"</li>
            <li>"Java, React, MySQL"</li>
            <li>"Team player. Fast learner."</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h3 className="font-sans text-sm tracking-[0.2em] text-[#ff8c00] uppercase font-bold mb-8">
            THE PROOF
          </h3>
          <ul className="space-y-4 font-mono text-lg md:text-xl text-[#f6f4eb]">
            <li className="flex gap-4">
              <span className="text-[#ff8c00]">+</span>
              <span>repos with clean, modular architecture</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ff8c00]">+</span>
              <span>full-stack apps that actually run end-to-end</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#ff8c00]">+</span>
              <span>optimized SQL queries and Java Spring Boot microservices</span>
            </li>
          </ul>
        </div>
      </div>
      
      <p className="font-serif text-2xl md:text-3xl text-gray-300 italic mt-8">
        That's the code I write.
      </p>
    </section>
  );
};

export default About;
