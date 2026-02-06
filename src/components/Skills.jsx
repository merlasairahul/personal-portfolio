import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Skills = () => {
    const prefersReducedMotion = useReducedMotion();

    const skillCategories = [
        {
            title: "Core Technologies",
            skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
            gradient: "linear-gradient(to right, #6366F1, #818CF8)"
        },
        {
            title: "Styling & Animation",
            skills: ["Tailwind CSS", "Framer Motion", "SASS/SCSS", "Styled Components", "CSS-in-JS"],
            gradient: "linear-gradient(to right, #A855F7, #EC4899)"
        },
        {
            title: "Tools & Workflow",
            skills: ["Git & GitHub", "Figma", "Vite", "Webpack", "VS Code", "REST APIs"],
            gradient: "linear-gradient(to right, #06B6D4, #10B981)"
        }
    ];

    const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.5 };

    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            className="section-container relative"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full"
                    style={{ filter: 'blur(80px)' }}
                />
            </div>

            <motion.header
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={transition}
                className="mb-16 text-center md:text-left relative z-10"
            >
                <h2 id="skills-heading" className="text-3xl font-bold mb-4 text-white">
                    Technical <span className="gradient-text">Arsenal</span>
                </h2>
                <p className="text-slate-400 max-w-2xl text-lg">
                    The technologies and tools I use to build modern, performant web applications.
                </p>
            </motion.header>

            <div
                className="grid md:grid-cols-3 gap-12 relative z-10"
                role="list"
                aria-label="Skill categories"
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        role="listitem"
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...transition, delay: prefersReducedMotion ? 0 : idx * 0.1 }}
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 flex items-center gap-3">
                            <span
                                className="w-8 h-[2px] rounded-full"
                                style={{ background: category.gradient }}
                                aria-hidden="true"
                            />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: category.gradient }}
                            >
                                {category.title}
                            </span>
                        </h3>
                        <ul className="flex flex-wrap gap-2.5" aria-label={`${category.title} skills`}>
                            {category.skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="px-4 py-2 bg-dark-surface/80 hover:bg-dark-card border border-white/10 hover:border-primary/30 rounded-lg text-sm text-slate-300 hover:text-white transition-colors duration-200"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
