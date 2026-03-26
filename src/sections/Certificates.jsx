import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Award, Trophy, Star, CheckCircle } from 'lucide-react';
import HolographicCard from '../components/UI/HolographicCard';

const certificates = [
    {
        title: "Java Programming",
        issuer: "NeoColab",
        date: "May'25",
        id: "CERT-001",
        link: "/Java.pdf"
    },
    {
        title: "Introduction to Hardware and Operating Systems",
        issuer: "IBM",
        date: "Sep'24",
        id: "CERT-002",
        link: "https://github.com/SidM1403/MyCert"
    },
    {
        title: "Privacy and Security in Online Social Media",
        issuer: "NPTEL (IIT - Hyderabad)",
        date: "Dec'24",
        id: "CERT-003",
        link: "/nptel.pdf"
    },
    {
        title: "DSA Summer Bootcamp",
        issuer: "CodeQuest (LPU)",
        date: "July'25",
        id: "CERT-004",
        link: "/DSA.pdf"
    }
];

const achievements = [
    {
        title: 'LeetCode Proficiency',
        desc: 'Solved 150+ problems focusing on dynamic programming and data structures.',
        icon: <Star className="w-5 h-5 text-cyber-yellow" />,
    },
    {
        title: 'Outstanding DSA Grade',
        desc: 'Achieved an "Outstanding (O)" grade in LPU DSA Summer Bootcamp.',
        icon: <Award className="w-5 h-5 text-neon-green" />,
    },
    {
        title: 'HACK-IOT Finalist',
        desc: 'Recognized as a finalist in the university-wide HACK-IOT hackathon.',
        icon: <Trophy className="w-5 h-5 text-neon-blue" />,
    },
    {
        title: 'Certified Analyst',
        desc: 'Completed Data Labeling Analyst virtual experience with Forage.',
        icon: <CheckCircle className="w-5 h-5 text-neon-red" />,
        link: '/Forage.pdf'
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="min-h-screen w-full relative py-20 px-4 md:px-8 z-20 overflow-hidden">
            {/* ... (blueprint and watermarks) */}
            <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,2,2,0.8)_80%)] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-cyber font-bold text-white tracking-widest uppercase">
                            <span className="text-cyber-yellow">05.</span> CERTIFICATIONS
                        </h2>
                        <div className="font-tech text-cyber-yellow pt-2 tracking-widest text-sm">
                            [SECURITY_CLEARANCE_VERIFIED]
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group"
                    >
                        <HolographicCard className="h-full flex flex-col justify-between relative overflow-hidden border-l-4 border-white/10 group-hover:border-neon-green transition-all duration-500">
                             {/* Verified Stamp */}
                             <div className="absolute top-4 right-4 w-16 h-16 border-2 border-neon-green/50 text-neon-green flex items-center justify-center font-cyber font-black text-[8px] pointer-events-none z-10 -rotate-12 opacity-60">
                                VERIFIED
                            </div>

                            <div className="relative z-10">
                                <div className="text-neon-green font-tech text-xs mb-4 uppercase tracking-widest flex items-center justify-between">
                                    <span>{cert.date}</span>
                                    <span>ID: {cert.id}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-cyber text-white mb-2 uppercase group-hover:text-cyber-yellow transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-400 font-body mb-6">
                                    ISSUER: <span className="text-gray-200">{cert.issuer}</span>
                                </p>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 inline-flex items-center gap-2 text-sm font-tech text-cyber-yellow hover:text-white transition-colors duration-300 w-fit border-b border-cyber-yellow/30 hover:border-white pb-1"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>VERIFY_CREDENTIAL</span>
                            </a>
                        </HolographicCard>
                    </motion.div>
                ))}
            </div>

            {/* Achievements Section - S-Tier Overhaul */}
            <div className="max-w-7xl mx-auto mt-32 relative">
                <div className="absolute inset-0 bg-neon-blue/5 blur-[100px] pointer-events-none" />
                
                <div className="flex flex-col md:flex-row items-center gap-6 mb-16 relative">
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-neon-blue" />
                    <h3 className="text-3xl md:text-5xl font-cyber text-white tracking-[0.2em] text-center">
                        LEGACY_ACHIEVEMENTS
                    </h3>
                    <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-white/20 to-neon-blue" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {achievements.map((ach, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="relative group p-8 backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 rounded-2xl overflow-hidden"
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-white/[0.02] group-hover:from-white/[0.05] transition-colors duration-700" />
                            
                            <div className="flex gap-6 items-start relative z-10 w-full">
                                <div className="p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 group-hover:border-white/40 group-hover:scale-110 transition-all duration-500 shadow-xl flex-shrink-0">
                                    {ach.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-tech text-white/40 tracking-widest uppercase bg-black/40 px-2 py-1 rounded-md border border-white/5">
                                            CMND // 0{i + 1}
                                        </span>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-cyber text-white group-hover:text-cyber-yellow transition-colors uppercase mb-3">
                                        {ach.title}
                                    </h4>
                                    <p className="text-sm font-tech text-gray-400 leading-relaxed tracking-wide group-hover:text-gray-300 transition-colors">
                                        {ach.desc}
                                    </p>
                                    {ach.link && (
                                        <a href={ach.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 px-3 py-1 border border-white/5 bg-black/40 text-[9px] font-tech text-neon-red hover:border-neon-red/50 transition-all">
                                            <ExternalLink className="w-3 h-3" /> VERIFY_ACHIEVEMENT
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            {/* Decorative corner tag */}
                            <div className="absolute bottom-[-20px] right-[-10px] text-8xl font-cyber text-white/[0.02] group-hover:text-white/[0.05] transition-colors rotate-[-5deg] select-none pointer-events-none">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
