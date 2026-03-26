import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import HolographicCard from '../components/UI/HolographicCard';

const eduData = [
    {
        degree: 'B.TECH — COMPUTER SCIENCE & ENGINEERING',
        school: 'Lovely Professional University',
        period: '2023 – PRESENT',
        status: '7.5 CGPA',
        details: 'Specializing in Full-Stack Development and Algorithmic Problem Solving. Active participant in university tech communities.',
    },
    {
        degree: 'INTERMEDIATE (CBSE)',
        school: 'Mount Litera Zee School, Vasco, Goa',
        period: '2021 – 2022',
        status: '84%',
        details: 'Focused on Physics, Chemistry, and Mathematics. Developed strong logical foundations.',
    },
    {
        degree: 'HIGH SCHOOL (CBSE)',
        school: 'Mount Litera Zee School, Vasco, Goa',
        period: '2020-2021',
        status: '93%',
        details: 'Early interest in technical sciences and mathematical modeling.',
    },
];

const Education = () => {
    return (
        <section id="education" className="min-h-screen py-20 px-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-black pointer-events-none" />
            
            <div className="max-w-6xl mx-auto w-full relative">
                <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-16 flex items-center gap-4 text-white relative">
                    <span className="text-neon-blue">04.</span> EDUCATION
                    <div className="absolute -bottom-4 left-0 w-40 h-px" style={{ background: 'linear-gradient(to right, #00f3ff, transparent)' }} />
                </h2>

                <div className="grid grid-cols-1 gap-8">
                    {eduData.map((edu, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                        >
                            <HolographicCard className="bg-cyber-black/40 backdrop-blur-md border-white/5 p-6 md:p-10 group hover:border-neon-blue/30 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3 text-neon-blue mb-2">
                                            <GraduationCap className="w-5 h-5" />
                                            <span className="text-[10px] font-tech tracking-[0.4em] uppercase">Academic Milestone // 0{i + 1}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-cyber text-white group-hover:text-neon-blue transition-colors">
                                            {edu.degree}
                                        </h3>
                                        <div className="flex items-center gap-4 text-gray-400 font-tech text-sm">
                                            <span className="text-white/60">@{edu.school}</span>
                                            <span className="text-white/20">|</span>
                                            <span className="flex items-center gap-2">
                                                <BookOpen className="w-4 h-4" /> {edu.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end gap-3">
                                        <div className="px-6 py-3 bg-neon-blue/5 border border-neon-blue/20 text-neon-blue font-cyber text-xl md:text-2xl rounded-sm group-hover:bg-neon-blue group-hover:text-black transition-all">
                                            {edu.status}
                                        </div>
                                        <div className="text-[9px] font-tech text-white/20 tracking-widest uppercase">
                                            Verification Status: VERIFIED_ENCRYPTED
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 text-gray-400 font-tech text-sm leading-relaxed max-w-3xl">
                                    {edu.details}
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none opacity-10">
                                    <div className="absolute top-[-10px] right-[-10px] text-4xl font-cyber text-neon-blue rotate-12">
                                        EDU
                                    </div>
                                </div>
                            </HolographicCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
