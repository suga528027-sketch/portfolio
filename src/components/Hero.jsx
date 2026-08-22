import React from 'react';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import TreeBackground from './TreeBackground';

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
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh] overflow-hidden">
      {/* Heritage Tree Vector Background Illustration in Free Space */}
      <TreeBackground />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sage/30 dark:border-sage/40 bg-sage-light/80 dark:bg-sage/20 backdrop-blur-md text-sage dark:text-sage font-mono text-xs tracking-wide w-fit mb-8 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Open for Opportunities</span>
        </div>

        {/* Main Name Headline */}
        <div className="mb-6">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2F2E2C] dark:text-[#F4F0EA] leading-[1.1]">
            Sugavaneshwaran
          </h1>
          <p className="mt-3 font-mono text-base sm:text-xl text-terracotta dark:text-terracotta tracking-wide uppercase font-medium">
            Full Stack Developer & Software Engineer
          </p>
        </div>

        {/* Narrative Paragraph */}
        <p className="max-w-xl text-base sm:text-lg text-earth-muted dark:text-gray-300 leading-relaxed font-sans mb-10">
          Engineering robust microservices, scalable full-stack applications, and intelligent systems. 
          Rooted in computer science fundamentals, crafting minimal, reliable, and impact-driven software.
        </p>

        {/* Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-terracotta hover:bg-terracotta-hover text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-terracotta-sm transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-earth-border dark:border-beige-darkBorder hover:border-terracotta text-[#2F2E2C] dark:text-[#E6E2DC] hover:text-terracotta dark:hover:text-terracotta font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 glass"
          >
            <span>View Work</span>
          </a>

          <div className="h-6 w-[1px] bg-earth-border dark:bg-beige-darkBorder hidden sm:block mx-2"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/suga528027-sketch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-md text-earth-muted dark:text-gray-400 hover:text-terracotta dark:hover:text-terracotta hover:bg-terracotta-light dark:hover:bg-terracotta/10 transition-colors glass"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sugavaneshwaran-m-s-144517375/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-md text-earth-muted dark:text-gray-400 hover:text-terracotta dark:hover:text-terracotta hover:bg-terracotta-light dark:hover:bg-terracotta/10 transition-colors glass"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:suga528027@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-md text-earth-muted dark:text-gray-400 hover:text-terracotta dark:hover:text-terracotta hover:bg-terracotta-light dark:hover:bg-terracotta/10 transition-colors glass"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-8 border-t border-earth-border/60 dark:border-beige-darkBorder/60 flex items-center justify-between font-mono text-xs text-earth-muted dark:text-gray-400">
          <span className="flex items-center gap-2">
            <ArrowDown className="w-3.5 h-3.5 text-terracotta animate-bounce" />
            <span>Scroll to explore story</span>
          </span>
          <span className="hidden sm:inline-block tracking-widest text-sage">00 / INTRO</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
