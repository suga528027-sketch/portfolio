import React from 'react';
import { BookOpen, Cpu, Layers, Sparkles } from 'lucide-react';

const focusCards = [
  {
    icon: BookOpen,
    title: 'CS Scholar',
    subtitle: 'Core Fundamentals',
    description: 'Strong foundation in Data Structures, Algorithms, Object-Oriented Design, and System Architecture principles.',
  },
  {
    icon: Layers,
    title: 'Full Stack Scope',
    subtitle: 'End-to-End Delivery',
    description: 'Proficient in building reactive React single-page apps seamlessly integrated with Java Spring Boot REST microservices.',
  },
  {
    icon: Cpu,
    title: 'Intelligent Systems',
    subtitle: 'AI & Data Integration',
    description: 'Experiencing modern LLM API integrations, optimized SQL database queries, and algorithmic problem solving.',
  },
  {
    icon: Sparkles,
    title: 'Engineering Culture',
    subtitle: 'Clean & Minimal',
    description: 'Focused on maintainable modular code structure, responsive user interfaces, and high-performance digital experiences.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-earth-border/60 dark:border-beige-darkBorder/60">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-sage tracking-widest uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
        <span>01 / Story</span>
      </div>

      {/* Heading */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-8">
        About Me
      </h2>

      {/* Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
        <div className="lg:col-span-7 space-y-6 text-earth-muted dark:text-gray-300 text-base md:text-lg leading-relaxed font-sans">
          <p>
            I am a <strong className="text-[#2F2E2C] dark:text-white font-semibold">Computer Science & Engineering Student</strong> and aspiring Full Stack Developer with a passion for constructing clean, high-performance web systems and microservices.
          </p>
          <p>
            Like a tree growing deep roots to support expanding branches, my approach to software engineering begins with fundamental Computer Science logic—data structures, memory efficiency, and object-oriented principles—before branching into modern frameworks like <strong className="text-terracotta font-medium">React</strong> and <strong className="text-terracotta font-medium">Spring Boot</strong>.
          </p>
          <p>
            Whether architecting multi-tier web applications, crafting intuitive interfaces, or optimizing backend database queries, I aim for balance between technical efficiency and user experience.
          </p>
        </div>

        {/* Quick Highlights Sidebar */}
        <div className="lg:col-span-5 p-8 rounded-xl bg-beige-card dark:bg-beige-darkCard border border-earth-border dark:border-beige-darkBorder shadow-warm-card">
          <h3 className="font-serif text-xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-6">
            Quick Facts
          </h3>
          <ul className="space-y-4 font-mono text-xs text-earth-muted dark:text-gray-300">
            <li className="flex justify-between py-2 border-b border-earth-border/40 dark:border-beige-darkBorder/40">
              <span className="text-sage">Degree:</span>
              <span className="font-medium text-[#2F2E2C] dark:text-white">B.E. Computer Science</span>
            </li>
            <li className="flex justify-between py-2 border-b border-earth-border/40 dark:border-beige-darkBorder/40">
              <span className="text-sage">Core Stack:</span>
              <span className="font-medium text-[#2F2E2C] dark:text-white">Java, Spring Boot, React</span>
            </li>
            <li className="flex justify-between py-2 border-b border-earth-border/40 dark:border-beige-darkBorder/40">
              <span className="text-sage">Database:</span>
              <span className="font-medium text-[#2F2E2C] dark:text-white">MySQL, SQL</span>
            </li>
            <li className="flex justify-between py-2">
              <span className="text-sage">Location:</span>
              <span className="font-medium text-[#2F2E2C] dark:text-white">Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Focus Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {focusCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-beige-card dark:bg-beige-darkCard border border-earth-border dark:border-beige-darkBorder hover:border-terracotta dark:hover:border-terracotta transition-all duration-300 shadow-warm-card"
            >
              <div className="p-3 w-fit rounded-lg bg-terracotta-light dark:bg-terracotta/10 text-terracotta mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-mono text-xs text-sage uppercase tracking-wider mb-1">
                {card.subtitle}
              </p>
              <h4 className="font-serif text-lg font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-2">
                {card.title}
              </h4>
              <p className="text-sm text-earth-muted dark:text-gray-400 leading-relaxed font-sans">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
