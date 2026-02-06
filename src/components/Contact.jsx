import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Linkedin, Github, Coffee, MessageCircle } from 'lucide-react';

const Contact = () => {
    const prefersReducedMotion = useReducedMotion();
    const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.5 };

    // Your contact details
    const email = "sairahulmerladev@gmail.com";
    const whatsappNumber = "919032994226";
    const whatsappMessage = "Hi! I'm interested in working together on a project.";

    const socialLinks = [
        {
            name: "WhatsApp",
            href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
            icon: <MessageCircle size={24} aria-hidden="true" />,
            gradient: "linear-gradient(135deg, #25D366, #128C7E)",
            label: "Message me on WhatsApp"
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/yourprofile",
            icon: <Linkedin size={24} aria-hidden="true" />,
            gradient: "linear-gradient(135deg, #6366F1, #A855F7)",
            label: "Connect with me on LinkedIn"
        },
        {
            name: "GitHub",
            href: "https://github.com/yourprofile",
            icon: <Github size={24} aria-hidden="true" />,
            gradient: "linear-gradient(135deg, #475569, #1e293b)",
            label: "View my code on GitHub"
        }
    ];

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="section-container relative overflow-hidden"
        >
            {/* Background gradients */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(99,102,241,0.1), rgba(168,85,247,0.05), transparent)',
                        filter: 'blur(80px)'
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={transition}
                    className="py-16"
                >
                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                        <span className="text-sm text-green-400 font-medium">Available for freelance projects</span>
                    </div>

                    <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Let's build something <br className="hidden sm:block" aria-hidden="true" />
                        <span className="gradient-text">extraordinary together</span>
                    </h2>

                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Looking for a <strong className="text-slate-300">freelance frontend developer</strong>?
                        I'm here to help bring your vision to life with clean code and beautiful interfaces.
                    </p>

                    {/* Direct Email CTA */}
                    <a
                        href={`mailto:${email}`}
                        className="btn-primary inline-flex items-center justify-center text-lg group"
                        aria-label="Send me an email"
                    >
                        <Mail className="mr-2 group-hover:rotate-12 transition-transform" size={20} aria-hidden="true" />
                        Start a Conversation
                    </a>

                    <p className="mt-6 text-sm text-slate-500">
                        {email}
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...transition, delay: 0.2 }}
                    className="border-t border-white/10 pt-12"
                >
                    <nav aria-label="Social media links">
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glow-card flex flex-col items-center gap-4 p-6 hover:border-primary/30 transition-colors duration-300 group"
                                        aria-label={link.label}
                                    >
                                        <div
                                            className="p-4 rounded-full group-hover:scale-110 transition-transform duration-300"
                                            style={{ background: link.gradient }}
                                        >
                                            {link.icon}
                                        </div>
                                        <span className="text-slate-300 font-medium text-sm">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
