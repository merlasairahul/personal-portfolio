import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ArrowUpRight, ExternalLink } from 'lucide-react';

const Projects = () => {
    const prefersReducedMotion = useReducedMotion();

    const projects = [
        {
            title: "Healthcare Platform",
            description: "A calming, accessible website for a modern health clinic. Features appointment scheduling, patient portal, and WCAG 2.1 AA compliance.",
            tags: ["React", "Tailwind CSS", "Framer Motion", "Accessibility"],
            gradient: "linear-gradient(135deg, #06B6D4, #6366F1, #A855F7)",
            links: { demo: "#", code: "#" },
            alt: "Healthcare platform project screenshot"
        },
        {
            title: "SaaS Dashboard",
            description: "High-performance admin panel with real-time data visualization, dark mode, and responsive design for analytics-driven businesses.",
            tags: ["React", "TypeScript", "Recharts", "REST API"],
            gradient: "linear-gradient(135deg, #6366F1, #A855F7, #EC4899)",
            links: { demo: "#", code: "#" },
            alt: "SaaS dashboard project screenshot"
        },
        {
            title: "E-Commerce Checkout",
            description: "Seamless, secure checkout flow with Stripe integration. Optimized for conversion with a focus on trust and user experience.",
            tags: ["React", "Stripe", "UI/UX", "Payment Integration"],
            gradient: "linear-gradient(135deg, #A855F7, #EC4899, #6366F1)",
            links: { demo: "#", code: "#" },
            alt: "E-commerce checkout project screenshot"
        }
    ];

    const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.5 };

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="section-container relative"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full"
                    style={{ filter: 'blur(100px)' }}
                />
                <div
                    className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full"
                    style={{ filter: 'blur(80px)' }}
                />
            </div>

            <motion.header
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition}
                className="mb-16 relative z-10"
            >
                <h2 id="projects-heading" className="text-3xl md:text-5xl font-bold mb-6">
                    Featured <span className="gradient-text">Work</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl">
                    A selection of projects showcasing my expertise in React development,
                    responsive design, and building polished, high-performance user interfaces.
                </p>
            </motion.header>

            <div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
                role="list"
                aria-label="Portfolio projects"
            >
                {projects.map((project, index) => (
                    <motion.article
                        key={index}
                        role="listitem"
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ ...transition, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                        className="group relative glow-card overflow-hidden hover:border-primary/40 transition-colors duration-300"
                    >
                        {/* Project image placeholder */}
                        <div className="relative h-48 overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                style={{ background: project.gradient }}
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-dark-surface/50" aria-hidden="true" />

                            <div
                                className="absolute inset-4 bg-dark-card/80 rounded-xl border border-white/5 flex items-center justify-center backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-300"
                                role="img"
                                aria-label={project.alt}
                            >
                                <span className="text-slate-500 font-mono text-xs tracking-widest uppercase">
                                    Project Preview
                                </span>
                            </div>
                        </div>

                        <div className="p-6 relative">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
                                {project.tags.map(tag => (
                                    <li
                                        key={tag}
                                        className="px-3 py-1 text-[11px] font-medium text-slate-300 bg-white/5 rounded-full border border-white/10"
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                                <a
                                    href={project.links.demo}
                                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors group/link"
                                    aria-label={`View live demo of ${project.title}`}
                                >
                                    <ExternalLink size={14} aria-hidden="true" />
                                    Live Demo
                                </a>
                                <a
                                    href={project.links.code}
                                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-white transition-colors"
                                    aria-label={`View source code of ${project.title} on GitHub`}
                                >
                                    <Github size={14} aria-hidden="true" />
                                    Code
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.3 }}
                className="mt-16 text-center relative z-10"
            >
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2"
                    aria-label="View more projects on GitHub"
                >
                    <Github size={20} aria-hidden="true" />
                    View More on GitHub
                </a>
            </motion.div>
        </section>
    );
};

export default Projects;
