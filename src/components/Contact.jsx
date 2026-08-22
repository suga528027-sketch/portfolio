import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | submitted

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-earth-border/60 dark:border-beige-darkBorder/60">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-sage tracking-widest uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
        <span>05 / Connection</span>
      </div>

      {/* Heading */}
      <div className="mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-4">
          Get In Touch
        </h2>
        <p className="text-earth-muted dark:text-gray-300 font-sans text-base sm:text-lg max-w-2xl">
          Interested in collaborating on a full-stack project, discussing software engineering roles, or exploring tech opportunities? Reach out anytime!
        </p>
      </div>

      {/* Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side - Direct Connections */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-xl bg-beige-card dark:bg-beige-darkCard border border-earth-border dark:border-beige-darkBorder shadow-warm-card">
            <h3 className="font-serif text-2xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-6">
              Direct Connections
            </h3>

            <ul className="space-y-6 font-mono text-xs">
              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-terracotta-light dark:bg-terracotta/10 text-terracotta shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sage uppercase tracking-wider text-[11px] mb-1">Email Address</span>
                  <a href="mailto:suga528027@gmail.com" className="text-sm font-semibold text-[#2F2E2C] dark:text-white hover:text-terracotta transition-colors">
                    suga528027@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-terracotta-light dark:bg-terracotta/10 text-terracotta shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sage uppercase tracking-wider text-[11px] mb-1">GitHub Profile</span>
                  <a href="https://github.com/suga528027-sketch" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#2F2E2C] dark:text-white hover:text-terracotta transition-colors">
                    github.com/suga528027-sketch
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-terracotta-light dark:bg-terracotta/10 text-terracotta shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sage uppercase tracking-wider text-[11px] mb-1">LinkedIn Profile</span>
                  <a href="https://www.linkedin.com/in/sugavaneshwaran-m-s-144517375/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#2F2E2C] dark:text-white hover:text-terracotta transition-colors">
                    sugavaneshwaran-m-s-144517375
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-terracotta-light dark:bg-terracotta/10 text-terracotta shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sage uppercase tracking-wider text-[11px] mb-1">Location</span>
                  <span className="text-sm font-semibold text-[#2F2E2C] dark:text-white">
                    Tamil Nadu, India
                  </span>
                </div>
              </li>
            </ul>

            {/* Availability Pill */}
            <div className="mt-8 pt-6 border-t border-earth-border/40 dark:border-beige-darkBorder/40 flex items-center gap-2 font-mono text-xs text-sage">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for internships & full-time roles</span>
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Form */}
        <div className="lg:col-span-7 p-8 md:p-10 rounded-xl bg-beige-card dark:bg-beige-darkCard border border-earth-border dark:border-beige-darkBorder shadow-warm-card">
          <h3 className="font-serif text-2xl font-bold text-[#2F2E2C] dark:text-[#F4F0EA] mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3 rounded-md bg-[#F7F4EF] dark:bg-[#22201D] border border-earth-border dark:border-beige-darkBorder text-[#2F2E2C] dark:text-white focus:outline-none focus:border-terracotta transition-colors font-sans text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@example.com"
                className="w-full px-4 py-3 rounded-md bg-[#F7F4EF] dark:bg-[#22201D] border border-earth-border dark:border-beige-darkBorder text-[#2F2E2C] dark:text-white focus:outline-none focus:border-terracotta transition-colors font-sans text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-sage mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your thoughts or project details..."
                className="w-full px-4 py-3 rounded-md bg-[#F7F4EF] dark:bg-[#22201D] border border-earth-border dark:border-beige-darkBorder text-[#2F2E2C] dark:text-white focus:outline-none focus:border-terracotta transition-colors font-sans text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-terracotta hover:bg-terracotta-hover text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 disabled:opacity-75"
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : status === 'submitted' ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
