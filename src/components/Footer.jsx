import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [hoveredSuvadi, setHoveredSuvadi] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 md:px-12 max-w-6xl mx-auto border-t border-earth-border/60 dark:border-beige-darkBorder/60">
      {/* Heritage Palm-Leaf Suvadi Section */}
      <div className="mb-16 flex flex-col items-center justify-center">
        <div 
          onMouseEnter={() => setHoveredSuvadi(true)}
          onMouseLeave={() => setHoveredSuvadi(false)}
          className="relative group cursor-pointer w-full max-w-xl p-8 rounded-xl bg-beige-card dark:bg-beige-darkCard border border-earth-border dark:border-beige-darkBorder shadow-warm-card hover:border-terracotta/70 dark:hover:border-terracotta/70 transition-all duration-300 text-center overflow-hidden"
        >
          {/* Suvadi Structural Geometry Top & Bottom Border */}
          <div className="flex items-center justify-between gap-4 mb-4 opacity-40 group-hover:opacity-80 transition-opacity">
            <div className="h-[1px] flex-1 bg-terracotta"></div>
            <div className="w-2 h-2 rounded-full border border-terracotta bg-transparent"></div>
            <div className="h-[1px] flex-1 bg-terracotta"></div>
          </div>

          <p className="font-mono text-xs text-sage uppercase tracking-widest mb-2">
            THIRUKKURAL • ANCIENT WISDOM (KURAL 391)
          </p>

          {/* Tamil Kural Quote */}
          <h4 className="font-serif text-2xl sm:text-3xl font-bold text-terracotta mb-3 transition-transform duration-300 group-hover:scale-105 leading-snug">
            "கற்க கசடறக் கற்பவை கற்றபின்<br />நிற்க அதற்குத் தக"
          </h4>

          {/* Dynamic Translation Reveal on Hover */}
          <div className="h-8 overflow-hidden">
            <p className={`font-mono text-xs text-earth-muted dark:text-gray-300 transition-all duration-300 transform ${
              hoveredSuvadi ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              "Learn thoroughly what is to be learned, and live by it strictly."
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 mt-4 opacity-40 group-hover:opacity-80 transition-opacity">
            <div className="h-[1px] flex-1 bg-terracotta"></div>
            <div className="w-2 h-2 rounded-full border border-terracotta bg-transparent"></div>
            <div className="h-[1px] flex-1 bg-terracotta"></div>
          </div>
        </div>
      </div>

      {/* Footer Navigation & Copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-earth-muted dark:text-gray-400">
        <div>
          <p>© 2026 Sugavaneshwaran. All rights reserved.</p>
          <p className="text-sage mt-1">Rooted in excellence • Designed with balance</p>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-earth-border dark:border-beige-darkBorder hover:border-terracotta hover:text-terracotta transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
