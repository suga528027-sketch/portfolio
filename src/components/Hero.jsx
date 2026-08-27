import React from 'react';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 mx-auto flex flex-col justify-center min-h-[100vh] overflow-hidden text-center items-center">
      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl">
        <h2 className="mb-4 text-sm sm:text-base font-semibold tracking-[0.2em] text-[#ff8c00] uppercase">
          Sugavaneshwaran
        </h2>

        {/* Main Name Headline - Razorpay Style */}
        <h1 className="mb-8 font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f6f4eb] leading-[1.1]">
          I build robust microservices,<br />not just talk about them.
        </h1>

        {/* Narrative Paragraph */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-sans mb-12">
          Full Stack Developer & Software Engineer crafting scalable applications and intelligent systems.
        </p>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#f6f4eb] text-[#121110] font-sans text-sm sm:text-base font-bold transition-transform hover:scale-105"
          >
            <span>Apply my skills</span>
          </a>

          <a
            href="https://github.com/suga528027-sketch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded border border-[#f6f4eb]/20 text-[#f6f4eb] hover:bg-[#f6f4eb]/10 font-sans text-sm sm:text-base font-bold transition-all"
          >
            <span>GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/sugavaneshwaran-m-s-144517375/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded border border-[#f6f4eb]/20 text-[#f6f4eb] hover:bg-[#f6f4eb]/10 font-sans text-sm sm:text-base font-bold transition-all"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
