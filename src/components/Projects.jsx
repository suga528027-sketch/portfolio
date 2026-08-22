import React from 'react';
import { ExternalLink, FolderCode, Sparkles } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projectsList = [
  {
    title: 'Patient Health Intelligence Platform',
    category: 'AI & Healthcare RAG System',
    description: 'Automated AI-powered medical assistant platform that ingests patient lab reports (PDFs), performs semantic RAG using Gemini 2.5 Flash and Qdrant Vector DB, and tracks health trends over time.',
    tags: ['Spring Boot', 'React (Vite)', 'Gemini 2.5 Flash', 'Qdrant Vector DB', 'Spring AI', 'Tailwind CSS'],
    github: 'https://github.com/suga528027-sketch/patient-health-intelligence',
    live: null,
    featured: true,
  },
  {
    title: 'DocuSphere AI - Document Q&A Engine',
    category: 'High-Performance RAG & Vector Search',
    description: 'Production-grade document Q&A Retrieval-Augmented Generation (RAG) system using Endee Vector Database, FastAPI, offline HuggingFace embeddings, and Groq Llama 3.1 LLM inference.',
    tags: ['FastAPI', 'Endee Vector DB', 'Groq API (Llama 3.1)', 'HuggingFace', 'Python', 'RAG'],
    github: 'https://github.com/suga528027-sketch/docusphere-ai',
    live: null,
    featured: true,
  },
  {
    title: 'Student Management System',
    category: 'Enterprise Full Stack Web App',
    description: 'Comprehensive academic administration portal enabling student enrollment, course registration, attendance tracking, gradebook analytics, and secure RESTful data APIs.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'RESTful API', 'Tailwind CSS'],
    github: 'https://github.com/suga528027-sketch/Student-Management-System',
    live: null,
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-earth-border/60 dark:border-beige-darkBorder/60">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-sage tracking-widest uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
        <span>03 / Works</span>
      </div>

      {/* Heading & Subtext */}
      <div className="mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-4">
          Selected Projects
        </h2>
        <p className="text-earth-muted dark:text-gray-300 font-sans text-base sm:text-lg max-w-2xl">
          A reflection of engineering rigor applied to full-stack systems development, database schemas, and modern AI workflows.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between p-8 rounded-xl bg-beige-card dark:bg-beige-darkCard border border-earth-border dark:border-beige-darkBorder hover:border-terracotta dark:hover:border-terracotta transition-all duration-300 shadow-warm-card"
          >
            <div>
              {/* Category & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-terracotta uppercase tracking-wider font-semibold">
                  {project.category}
                </span>
                <div className="p-2 rounded-md bg-terracotta-light dark:bg-terracotta/10 text-terracotta group-hover:scale-110 transition-transform duration-300">
                  <FolderCode className="w-5 h-5" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-3 group-hover:text-terracotta transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-earth-muted dark:text-gray-300 leading-relaxed font-sans mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-earth-border/40 dark:border-beige-darkBorder/40">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#F7F4EF] dark:bg-[#25221F] text-sage dark:text-sage font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* External Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#2F2E2C] dark:text-gray-300 hover:text-terracotta dark:hover:text-terracotta transition-colors font-semibold"
                  >
                    <GithubIcon className="w-4 h-4 text-terracotta" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-terracotta hover:text-terracotta-hover transition-colors font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
