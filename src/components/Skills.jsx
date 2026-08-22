import React from 'react';
import { Server, Layout, Database, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Server,
    category: 'Backend & Core',
    description: 'Robust server-side architecture and business logic execution.',
    skills: [
      { name: 'Java', level: 'Advanced' },
      { name: 'Spring Boot', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'C / C++', level: 'Intermediate' },
      { name: 'OOP & Data Structures', level: 'Advanced' },
    ],
  },
  {
    icon: Layout,
    category: 'Web & Frontend',
    description: 'Modern, responsive user interfaces with dynamic interactivity.',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & CSS3', level: 'Advanced' },
      { name: 'Vite', level: 'Intermediate' },
      { name: 'Responsive Web Design', level: 'Advanced' },
    ],
  },
  {
    icon: Database,
    category: 'Database & Storage',
    description: 'Relational data modeling, query design, and persistent storage.',
    skills: [
      { name: 'MySQL', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Hibernate ORM', level: 'Intermediate' },
      { name: 'Database Schemas', level: 'Intermediate' },
      { name: 'Relational Indexing', level: 'Intermediate' },
    ],
  },
  {
    icon: Terminal,
    category: 'DevOps & Tools',
    description: 'Development environment, version control, and containerization.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Docker', level: 'Basic' },
      { name: 'Linux / Bash', level: 'Intermediate' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'VS Code & Eclipse', level: 'Advanced' },
      { name: 'Vercel / Netlify', level: 'Intermediate' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-earth-border/60 dark:border-beige-darkBorder/60">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-sage tracking-widest uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
        <span>02 / Tools</span>
      </div>

      {/* Heading & Subtitle */}
      <div className="mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-4">
          Skills & Technologies
        </h2>
        <p className="text-earth-muted dark:text-gray-300 font-sans text-base sm:text-lg max-w-2xl">
          A cohesive tech stack focused on high-performance backends, microservice contracts, and responsive client interfaces.
        </p>
      </div>

      {/* Grid of 4 Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-xl bg-beige-card dark:bg-beige-darkCard border border-earth-border dark:border-beige-darkBorder shadow-warm-card hover:border-terracotta/60 dark:hover:border-terracotta/60 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-terracotta-light dark:bg-terracotta/10 text-terracotta">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA]">
                    {cat.category}
                  </h3>
                  <p className="font-mono text-xs text-sage mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F7F4EF] dark:bg-[#25221F] border border-earth-border dark:border-beige-darkBorder text-[#2F2E2C] dark:text-gray-200 font-mono text-xs hover:border-terracotta hover:text-terracotta dark:hover:text-terracotta transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta/70"></span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
