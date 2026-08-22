import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-4 glass shadow-sm' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-2 font-serif text-lg md:text-xl font-bold tracking-tight text-[#2F2E2C] dark:text-[#E6E2DC] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-terracotta transition-transform group-hover:scale-125 duration-300"></span>
          <span>Suga</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-mono text-xs tracking-wider uppercase">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`relative py-1 transition-colors duration-200 ${
                      isActive 
                        ? 'text-terracotta font-semibold' 
                        : 'text-sage hover:text-[#2F2E2C] dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-terracotta rounded-full"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-earth-border dark:border-beige-darkBorder text-[#2F2E2C] dark:text-[#E6E2DC] hover:border-terracotta hover:text-terracotta transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-earth-border dark:border-beige-darkBorder text-[#2F2E2C] dark:text-[#E6E2DC]"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-[#2F2E2C] dark:text-[#E6E2DC]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-b border-earth-border dark:border-beige-darkBorder px-6 py-6 mt-2 animate-fadeIn">
          <ul className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1 ${
                    activeSection === item.href.substring(1)
                      ? 'text-terracotta font-bold'
                      : 'text-[#2F2E2C] dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
