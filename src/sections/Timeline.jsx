import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "BingeBrain X Development",
        company: "Personal Project",
        period: "Dec'25 - Present",
        timestamp: "DEC_2025 // 22:00",
        desc: "Architecting a premium AI-powered media intelligence platform with cinematic UI and taste-profiling engine.",
        icon: "🎬"
    },
    {
        role: "WellConnect System Design",
        company: "Personal Project",
        period: "Nov'25 - Dec'25",
        timestamp: "NOV_2025 // 18:00",
        desc: "Engineered a full-stack MERN health community with JWT auth and real-time forum capabilities.",
        icon: "🏥"
    },
    {
        role: "Data Labeling Analyst Certification",
        company: "Forage (Virtual)",
        period: "Nov'25",
        timestamp: "NOV_2025 // 10:00",
        desc: "Certified analyst role focusing on data classification and quality assurance for AI models.",
        icon: "📊"
    },
    {
        role: "DSA Summer Bootcamp (Grade O)",
        company: "CodeQuest (LPU)",
        period: "June'25 - July'25",
        timestamp: "JUL_2025 // 09:00",
        desc: "Mastered advanced data structures and algorithms. Achieved 'Outstanding' grade.",
        icon: "🧠"
    },
    {
        role: "Multi-Sport Live Tracker",
        company: "Personal Project",
        period: "June'25 - July'25",
        timestamp: "JUN_2025 // 15:30",
        desc: "Built a real-time sports data platform using hash maps and linked lists for efficiency.",
        icon: "🏆"
    },
    {
        role: "B.Tech Computer Science",
        company: "Lovely Professional University",
        period: "Aug'23 - Present",
        timestamp: "AUG_2023 // 08:30",
        desc: "Focusing on Full-Stack development, Algorithms, and System Design. Maintaining a CGPA of 7.5.",
        icon: "🎓"
    }
];

const Timeline = () => {
    return (
        <section id="timeline" className="min-h-screen py-20 px-8 flex flex-col justify-center relative overflow-hidden">
            {/* S-Tier Temporal Stream Background - Toned down */}
            <div className="absolute inset-0 bg-cyber-black pointer-events-none" />
            <div className="absolute inset-0 temporal-stream opacity-10 pointer-events-none">
                <div className="data-packet left-[20%] h-20" style={{ animationDelay: '1s', animationDuration: '12s' }} />
                <div className="data-packet left-[50%] h-30" style={{ animationDelay: '3s', animationDuration: '15s' }} />
                <div className="data-packet left-[80%] h-25" style={{ animationDelay: '5s', animationDuration: '18s' }} />
            </div>
            
            <div className="max-w-4xl mx-auto w-full relative">
                <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-16 flex items-center gap-4 text-white relative">
                    <span className="text-neon-green">06.</span> DATA_LOG
                    <div className="absolute -bottom-4 left-0 w-40 h-px" style={{ background: 'linear-gradient(to right, #05ffa1, transparent)' }} />
                </h2>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
                    {/* Traveling Data Packet on the main line */}
                    <motion.div
                        animate={{ 
                            top: ['0%', '100%'],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ 
                            duration: 5, 
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute -left-[3px] w-[4px] h-10 bg-gradient-to-b from-transparent via-neon-green to-transparent z-10"
                    />

                    {experiences.map((exp, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            key={i}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyber-black border-2 border-neon-green rounded-full shadow-[0_0_10px_#00ff9f]">
                                <div className="absolute inset-0 rounded-full bg-neon-green animate-ping opacity-20" />
                            </div>

                            <div className="text-[10px] font-tech text-neon-green/60 mb-2 tracking-[0.3em]">
                                [{exp.timestamp}]
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                <h3 className="text-2xl font-cyber text-white">{exp.role}</h3>
                                <span className="text-neon-green font-tech text-sm">@{exp.company}</span>
                            </div>

                            <div className="flex items-center gap-2 text-xs font-tech text-gray-500 mb-4">
                                <Calendar className="w-3 h-3" />
                                {exp.period}
                            </div>

                            <p className="text-gray-400 font-body max-w-2xl leading-relaxed">
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
