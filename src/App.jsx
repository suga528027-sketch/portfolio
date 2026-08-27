import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });
  const [scrollY, setScrollY] = useState(0);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Razorpay Buildathon style scroll progress for background animation
  const maxScroll = typeof document !== 'undefined' ? Math.max(document.body.scrollHeight - window.innerHeight, 3000) : 3000;
  const progress = Math.min(scrollY / maxScroll, 1) || 0;
  
  // Subtle zoom based on scroll
  const bgScale = 1 + (progress * 0.1); 
  
  let activeBg = '/bg-night.webp';
  if (progress > 0.25 && progress <= 0.5) {
    activeBg = '/bg-desk.webp';
  } else if (progress > 0.5 && progress <= 0.75) {
    activeBg = '/bg-day.webp';
  } else if (progress > 0.75) {
    activeBg = '/bg-keyboard.webp';
  }

  return (
    <div className={`min-h-screen relative overflow-x-hidden font-sans transition-colors duration-500 ${theme === 'dark' ? 'text-[#f6f4eb] bg-transparent' : 'text-[#121110] bg-transparent'}`}>
      {/* Scroll-linked Fixed Background Images with Crossfade */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Background Images */}
        {['/bg-night.webp', '/bg-desk.webp', '/bg-day.webp', '/bg-keyboard.webp'].map((bg) => (
          <div 
            key={bg}
            className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out will-change-transform"
            style={{
              backgroundImage: `url('${bg}')`,
              opacity: activeBg === bg ? (theme === 'dark' ? 0.7 : 0.8) : 0,
              transform: activeBg === bg ? `scale(${bgScale})` : 'scale(1)',
              filter: theme === 'light' ? 'grayscale(30%) contrast(90%)' : 'none',
            }}
          />
        ))}
        {/* Cinematic gradient overlay for Dark/Light mode */}
        <div className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-[#121110]/50 via-[#121110]/40 to-[#121110]/90 mix-blend-multiply' 
            : 'bg-gradient-to-b from-white/40 via-white/60 to-white/90'
        }`} />
      </div>

      <div className="relative z-10 transition-colors duration-300">
        {/* Navigation Header */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Hero Section */}
        <Hero theme={theme} />

        {/* 01 / Story Section */}
        <About theme={theme} />

        {/* 02 / Tools Section */}
        <Skills theme={theme} />

        {/* 03 / Works Section */}
        <Projects theme={theme} />

        {/* 04 / Path Section */}
        <Experience theme={theme} />

        {/* 05 / Connection Section */}
        <Contact theme={theme} />

        {/* Heritage Footer */}
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default App;
