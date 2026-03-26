import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, ChevronRight, Hash, Cpu } from 'lucide-react';
import HolographicCard from '../components/UI/HolographicCard';

const eduData = [
    {
        degree: 'B.TECH — COMPUTER SCIENCE & ENGINEERING',
        school: 'Lovely Professional University',
        period: '2023 – PRESENT',
        status: '7.5 CGPA',
        type: 'UNDERGRADUATE_NODE',
        details: 'Specializing in Full-Stack Development and Algorithmic Problem Solving. Active participant in university tech communities.',
        tags: ['DSA', 'MERN', 'AI/ML', 'DBMS']
    },
    {
        degree: 'INTERMEDIATE (CBSE)',
        school: 'Mount Litera Zee School, Goa',
        period: '2021 – 2022',
        status: '84%',
        type: 'SECONDARY_LAYER',
        details: 'Focused on Physics, Chemistry, and Mathematics. Developed strong logical foundations.',
        tags: ['PHYSICS', 'CALCULUS', 'COMP_SCI']
    },
    {
        degree: 'HIGH SCHOOL (CBSE)',
        school: 'Mount Litera Zee School, Goa',
        period: '2020-2021',
        status: '93%',
        type: 'FOUNDATION_BOOT',
        details: 'Early interest in technical sciences and mathematical modeling.',
        tags: ['MATH', 'SCIENCE', 'ENGLISH']
    },
];

const SubTag = ({ text }) => (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-white/[0.03] border border-white/5 rounded-sm hover:border-neon-blue/40 transition-colors group/tag">
        <div className="w-1 h-1 bg-neon-blue/40 group-hover/tag:bg-neon-blue transition-colors" />
        <span className="text-[9px] font-tech text-white/40 tracking-widest group-hover/tag:text-white/80 transition-colors uppercase">{text}</span>
    </div>
);

const Education = () => {
    return (
        <section id="education" className="min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden bg-cyber-black">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <div className="max-w-6xl mx-auto w-full relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Hash className="text-neon-blue w-4 h-4 animate-pulse" />
                            <span className="text-[11px] font-tech text-neon-blue tracking-[0.4em] uppercase">Academic_Records // Vol.04</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-cyber font-bold text-white tracking-tighter uppercase relative">
                            EDUCATION<span className="text-neon-blue opacity-50">.</span>
                        </h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-[10px] font-tech text-white/20 tracking-[0.3em] uppercase">System_Verification</div>
                        <div className="text-neon-green font-tech text-xs tracking-widest">ENCRYPTED_DATA_STREAM</div>
                    </div>
                </div>

                <div className="relative">
                    {/* Vertical Motherboard Trace Line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    
                    <div className="space-y-12">
                        {eduData.map((edu, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                key={i}
                                className="relative pl-12 md:pl-20 group"
                            >
                                {/* Node Bullet */}
                                <div className="absolute left-3.5 md:left-7.5 top-8 w-2 h-2 -translate-x-1/2 rounded-full bg-cyber-black border border-white/20 z-10 group-hover:border-neon-blue group-hover:shadow-[0_0_10px_#00f3ff] transition-all duration-300" />
                                
                                <HolographicCard className="bg-white/[0.01] backdrop-blur-xl border-white/5 p-6 md:p-10 rounded-xl group-hover:border-white/10 group-hover:bg-white/[0.02] transition-all duration-500 overflow-hidden relative">
                                    {/* Glass Morph Background Pattern */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/[0.01] blur-3xl rounded-full translate-x-32 -translate-y-32 pointer-events-none" />
                                    
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 w-full">
                                        <div className="flex-1 space-y-6">
                                            {/* Header */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-white/40 font-tech text-[10px] tracking-widest group-hover:text-neon-blue transition-colors">
                                                    <Cpu className="w-3 h-3" /> {edu.type}
                                                </div>
                                                <h3 className="text-2xl md:text-4xl font-cyber text-white tracking-tight uppercase group-hover:text-white transition-colors leading-[1.1]">
                                                    {edu.degree.split(' — ')[0]}
                                                    <span className="block text-lg md:text-xl text-white/50 font-tech mt-1">{edu.degree.split(' — ')[1]}</span>
                                                </h3>
                                            </div>

                                            {/* School Info */}
                                            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm font-tech">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-[1px] bg-neon-blue/30" />
                                                    <span className="text-white/60 tracking-wider">@{edu.school}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-white/30 uppercase tracking-widest text-xs">
                                                    <BookOpen className="w-3.5 h-3.5" /> {edu.period}
                                                </div>
                                            </div>

                                            {/* Data-Chip Coursework */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {edu.tags.map(tag => <SubTag key={tag} text={tag} />)}
                                            </div>
                                        </div>

                                        {/* Status / Grade HUD */}
                                        <div className="relative flex flex-col items-end md:shrink-0 justify-between">
                                            <div className="relative p-6 border border-white/5 bg-black/40 backdrop-blur-md rounded-lg group-hover:border-neon-blue/20 transition-colors flex flex-col items-center min-w-[140px]">
                                                {/* Corner Accents */}
                                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-blue/50" />
                                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-blue/50" />
                                                
                                                <span className="text-[9px] font-cyber text-white/20 tracking-[0.4em] mb-2">STATUS.VAL</span>
                                                <span className="text-3xl md:text-4xl font-cyber text-white group-hover:text-neon-blue transition-colors tracking-tighter">
                                                    {edu.status}
                                                </span>
                                                
                                                {/* Verification Stamp Background Decor */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity">
                                                    <div className="font-cyber text-5xl -rotate-12 border-4 border-current px-2">VALID</div>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-4 hidden md:flex items-center gap-2 text-white/10 uppercase font-tech text-[8px] tracking-[0.5em]">
                                                SECURE_LOG_BLOCK // 0{i + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description Body */}
                                    <div className="mt-10 pt-8 border-t border-white/5">
                                        <p className="font-tech text-white/40 text-sm md:text-base leading-relaxed max-w-4xl group-hover:text-white/70 transition-colors">
                                            {edu.details}
                                        </p>
                                    </div>

                                    {/* Interactive Indicator */}
                                    <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <ChevronRight className="w-5 h-5 text-neon-blue animate-bounce-x" />
                                    </div>
                                </HolographicCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
