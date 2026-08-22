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
    const saved = localStorage.getItem('theme');
    return saved || 'light';
  });

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

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#121110] text-[#D6D2CC] bg-ambient-dark' 
        : 'bg-[#F7F4EF] text-[#2F2E2C] bg-ambient'
    }`}>
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
  );
}

export default App;
