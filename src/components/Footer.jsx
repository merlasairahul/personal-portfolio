import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="py-12 border-t border-white/5 bg-dark-bg relative"
            role="contentinfo"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    {/* Brand & Description */}
                    <div className="text-center md:text-left">
                        <a
                            href="#home"
                            className="text-xl font-bold tracking-tighter text-white inline-block mb-2"
                            aria-label="Go to homepage"
                        >
                            Dev<span className="gradient-text">.</span>
                        </a>
                        <p className="text-slate-500 text-sm max-w-xs">
                            Frontend developer crafting modern, accessible web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer navigation">
                        <ul className="flex flex-wrap justify-center gap-6 text-sm">
                            <li>
                                <a href="#home" className="text-slate-400 hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                                    Work
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Social Links */}
                    <nav aria-label="Social media">
                        <ul className="flex items-center gap-4">
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                                    aria-label="GitHub profile"
                                >
                                    <Github size={20} aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                                    aria-label="LinkedIn profile"
                                >
                                    <Linkedin size={20} aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                                    aria-label="Twitter profile"
                                >
                                    <Twitter size={20} aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:sairahulmerladev@gmail.com"
                                    className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                                    aria-label="Send email"
                                >
                                    <Mail size={20} aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Sai Rahul Merla. All rights reserved.
                    </p>

                    <p className="text-slate-600 text-sm flex items-center gap-1">
                        Built with
                        <span className="text-slate-400 font-medium ml-1">React</span>,
                        <span className="text-slate-400 font-medium">Tailwind</span> &
                        <span className="text-slate-400 font-medium">Framer Motion</span>
                    </p>
                </div>
            </div>

            {/* Back to top button */}
            <button
                onClick={scrollToTop}
                className="absolute right-6 bottom-6 p-3 bg-dark-surface/80 hover:bg-primary/20 border border-white/10 hover:border-primary/30 rounded-full text-slate-400 hover:text-primary transition-all duration-300"
                aria-label="Scroll back to top"
            >
                <ArrowUp size={20} aria-hidden="true" />
            </button>
        </footer>
    );
};

export default Footer;
