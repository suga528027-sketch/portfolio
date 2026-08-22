import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const timeline = [
  {
    type: 'academic',
    title: 'Bachelor of Engineering in Computer Science',
    organization: 'Computer Science & Engineering Department',
    period: 'Present',
    location: 'Tamil Nadu, India',
    description: 'Pursuing comprehensive curriculum in algorithms, object-oriented design, database management systems, operating systems, and web application architecture.',
    highlights: [
      'Built multi-tier full-stack projects using Java Spring Boot and React',
      'Developed strong algorithmic problem-solving capabilities in C, C++, and Java',
      'Participated in software engineering workshops and tech symposiums',
    ],
  },
  {
    type: 'experience',
    title: 'Full Stack Java Developer Trainee / Project Developer',
    organization: 'Enterprise Full Stack Project Work',
    period: '2024 - 2025',
    location: 'Tamil Nadu, India',
    description: 'Designed and deployed end-to-end full-stack applications with Spring Boot REST backends, React SPA frontends, and MySQL databases.',
    highlights: [
      'Created REST API contracts with Spring Data JPA and Hibernate ORM',
      'Integrated security filters, JWT tokens, and OAuth2 authentication flows',
      'Engineered responsive user interfaces with React, Tailwind CSS, and Vite',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-earth-border/60 dark:border-beige-darkBorder/60">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-sage tracking-widest uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
        <span>04 / Path</span>
      </div>

      {/* Heading & Subtitle */}
      <div className="mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-4">
          Experience & Academic Path
        </h2>
        <p className="text-earth-muted dark:text-gray-300 font-sans text-base sm:text-lg max-w-2xl">
          A trajectory driven by continuous learning, engineering discipline, and practical application.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-earth-border dark:border-beige-darkBorder space-y-12">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#F7F4EF] dark:bg-[#121110] border-2 border-terracotta group-hover:bg-terracotta transition-colors duration-300"></div>

            {/* Card Content */}
            <div className="p-8 rounded-xl bg-beige-card dark:bg-beige-darkCard border border-earth-border dark:border-beige-darkBorder shadow-warm-card hover:border-terracotta/60 dark:hover:border-terracotta/60 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-sage uppercase tracking-wider font-medium flex items-center gap-2">
                  {item.type === 'academic' ? (
                    <GraduationCap className="w-4 h-4 text-terracotta" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-terracotta" />
                  )}
                  {item.organization}
                </span>

                <div className="flex items-center gap-4 font-mono text-xs text-earth-muted dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-terracotta" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sage" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-earth-muted dark:text-gray-300 leading-relaxed font-sans mb-6">
                {item.description}
              </p>

              {/* Highlights Bulleted List */}
              <ul className="space-y-2 font-sans text-xs sm:text-sm text-earth-muted dark:text-gray-400">
                {item.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
