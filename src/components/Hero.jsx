import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
    // Respect user's motion preferences
    const prefersReducedMotion = useReducedMotion();

    // GPU-friendly animation variants (transform + opacity only)
    const fadeUp = {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 }
    };

    const transition = prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

    return (
        <section
            id="home"
            aria-label="Introduction"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            {/* Animated gradient orbs - GPU optimized with will-change */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-100"
                    style={{
                        background: 'linear-gradient(to right, rgba(99,102,241,0.15), rgba(168,85,247,0.15), rgba(236,72,153,0.08))',
                        filter: 'blur(100px)',
                        willChange: 'transform'
                    }}
                />
                <div
                    className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/8 rounded-full"
                    style={{ filter: 'blur(60px)' }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full"
                    style={{ filter: 'blur(80px)' }}
                />
            </div>

            <div className="section-container relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    {/* Availability badge */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={transition}
                    >
                        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6 inline-flex items-center gap-2">
                            <span
                                className="w-8 h-[2px] rounded-full"
                                style={{ background: 'linear-gradient(to right, #6366F1, #A855F7)' }}
                                aria-hidden="true"
                            />
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                                Available for Freelance
                            </span>
                        </p>
                    </motion.div>

                    {/* H1 - Only one on the page for SEO */}
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.1 }}
                        className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                    >
                        Frontend Developer <br className="hidden md:block" aria-hidden="true" />
                        crafting <span className="gradient-text">modern UIs</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.2 }}
                        className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0"
                    >
                        I build clean, accessible, and high-performance web interfaces using
                        <strong className="text-slate-300"> React</strong> and
                        <strong className="text-slate-300"> Tailwind CSS</strong>.
                        Specializing in responsive design, smooth animations, and pixel-perfect UI implementation.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#projects"
                            className="btn-primary flex items-center justify-center gap-2 group"
                            aria-label="View my portfolio projects"
                        >
                            View My Work
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                                aria-hidden="true"
                            />
                        </a>
                        <a
                            href="#contact"
                            className="btn-outline flex items-center justify-center gap-2"
                            aria-label="Contact me for freelance work"
                        >
                            Hire Me
                        </a>
                    </motion.div>

                    {/* Services quick list for SEO */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ ...transition, delay: prefersReducedMotion ? 0 : 0.4 }}
                        className="mt-12 pt-8 border-t border-white/10"
                    >
                        <p className="text-sm text-slate-500 mb-4">Services I offer:</p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {['Frontend Development', 'UI Implementation', 'Responsive Design', 'Performance Optimization'].map((service) => (
                                <span
                                    key={service}
                                    className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-white/5 rounded-full border border-white/10"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: prefersReducedMotion ? 0 : 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
                aria-hidden="true"
            >
                <span className="sr-only">Scroll down to explore</span>
                <div
                    className="w-[2px] h-12 rounded-full"
                    style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(168,85,247,0.3), transparent)' }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
