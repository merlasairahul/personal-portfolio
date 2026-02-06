import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code, Layout, Smartphone, Zap } from 'lucide-react';

const About = () => {
    const prefersReducedMotion = useReducedMotion();

    const services = [
        {
            icon: <Layout className="w-6 h-6" aria-hidden="true" />,
            title: "UI Implementation",
            description: "Translating complex Figma/Sketch designs into pixel-perfect, responsive web interfaces with clean, maintainable code.",
            gradient: "linear-gradient(135deg, #6366F1, #A855F7)"
        },
        {
            icon: <Smartphone className="w-6 h-6" aria-hidden="true" />,
            title: "Responsive Design",
            description: "Ensuring your website looks and works perfectly on every device — mobile, tablet, and desktop.",
            gradient: "linear-gradient(135deg, #A855F7, #EC4899)"
        },
        {
            icon: <Code className="w-6 h-6" aria-hidden="true" />,
            title: "React Development",
            description: "Building modern, component-based applications with React, Next.js, and TypeScript.",
            gradient: "linear-gradient(135deg, #06B6D4, #6366F1)"
        },
        {
            icon: <Zap className="w-6 h-6" aria-hidden="true" />,
            title: "Performance Optimization",
            description: "Optimizing load times, Core Web Vitals, and overall user experience for maximum engagement.",
            gradient: "linear-gradient(135deg, #10B981, #06B6D4)"
        }
    ];

    const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.6 };

    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="section-container relative"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full"
                    style={{ filter: 'blur(80px)' }}
                />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={transition}
                >
                    <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
                        More than just <span className="gradient-text">writing code</span>.
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                        I'm a <strong className="text-slate-300">frontend developer</strong> who cares deeply about the user experience.
                        I don't just ship features — I build polished, intuitive interfaces that solve real problems and delight users.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                        With experience in <strong className="text-slate-300">freelance web development</strong>, I understand the importance of
                        clear communication, meeting deadlines, and delivering value that helps businesses grow.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Whether you need a <strong className="text-slate-300">React developer</strong> for a new project or a
                        <strong className="text-slate-300"> UI specialist</strong> to improve an existing product, I'm here to help.
                    </p>
                </motion.div>

                {/* Services Cards */}
                <div className="grid gap-5" role="list" aria-label="Services offered">
                    {services.map((service, index) => (
                        <motion.article
                            key={index}
                            role="listitem"
                            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...transition, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                            className="glow-card p-5 hover:border-primary/30 transition-colors duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="p-3 rounded-xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    style={{ background: service.gradient }}
                                >
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1.5 text-white">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
