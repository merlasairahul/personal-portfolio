import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    // Memoized scroll handler for performance
    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'Work', href: '#projects' },
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <header>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/10 py-4'
                    : 'bg-transparent py-6'
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <a
                            href="#home"
                            className="text-xl font-bold tracking-tighter text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg rounded"
                            aria-label="Go to homepage"
                        >
                            Dev<span className="gradient-text">.</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group py-2"
                                >
                                    {link.title}
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                                        style={{ background: 'linear-gradient(to right, #6366F1, #A855F7)' }}
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="px-5 py-2.5 text-white text-sm font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300"
                                style={{ background: 'linear-gradient(to right, #6366F1, #A855F7)' }}
                            >
                                Let's Talk
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="md:hidden text-white hover:text-primary transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
                            className="md:hidden bg-dark-surface/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                        >
                            <div className="px-4 pt-2 pb-8 space-y-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        className="block text-slate-400 hover:text-white hover:bg-white/5 text-lg font-medium py-3 px-3 rounded-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    className="block w-full text-center py-3 text-white font-semibold rounded-lg mt-4"
                                    style={{ background: 'linear-gradient(to right, #6366F1, #A855F7)' }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Let's Talk
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
