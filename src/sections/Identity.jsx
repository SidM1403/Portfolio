import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Zap, Globe } from 'lucide-react';
import DecodeText from '../components/Text/DecodeText';
import FuturisticButton from '../components/UI/FuturisticButton';

const Stat = ({ label, value, icon: Icon }) => (
    <div className="flex items-center gap-4 bg-white/5 p-4 border-l-2 border-neon-blue hover:bg-white/10 transition-colors">
        <Icon className="w-6 h-6 text-neon-blue" />
        <div>
            <div className="text-[10px] font-tech text-gray-400 tracking-widest">{label}</div>
            <div className="text-xl font-cyber text-white">{value}</div>
        </div>
    </div>
);

const Identity = () => {
    return (
        <section id="identity" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
            {/* Background Biometric Circuitry */}
            <div className="absolute inset-0 bg-biometric-circuit pointer-events-none opacity-40" />
            
            {/* Animated Circuit Lines - Toned down */}
            <div className="circuit-line w-full top-[20%] left-0 opacity-10"><div className="circuit-pulse" style={{ animationDelay: '0s', animationDuration: '6s' }} /></div>
            <div className="circuit-line w-full top-[60%] left-0 opacity-10"><div className="circuit-pulse" style={{ animationDelay: '2s', animationDuration: '8s' }} /></div>
            <div className="circuit-line w-full top-[85%] left-0 opacity-10"><div className="circuit-pulse" style={{ animationDelay: '4.5s', animationDuration: '10s' }} /></div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-8 relative">

                {/* Section watermark */}
                <div className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden opacity-[0.02]">
                    <span className="font-cyber font-black text-[15vw] text-neon-blue whitespace-nowrap">IDENTITY</span>
                </div>

                {/* Visual / Avatar */}
                <div className="relative group max-w-xs md:max-w-sm lg:max-w-md mx-auto w-full">
                    <div className="absolute inset-0 bg-neon-blue/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="relative w-full aspect-square border-2 border-neon-blue/30 bg-cyber-dark overflow-hidden flex items-center justify-center">
                        <img
                            src="/profile.png"
                            alt="Siddhant Maurya"
                            className="w-full h-full object-cover object-top transition-all duration-700"
                        />
                        
                        {/* Biometric Laser Scan - Toned down */}
                        <div className="laser-scan opacity-30" />

                        {/* HUD Overlays */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-neon-blue/40" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neon-blue/40" />
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_40%,rgba(0,243,255,0.05)_50%,transparent_60%)] h-[200%] w-full animate-scanline opacity-10" />
                    </div>
                    <div className="absolute -bottom-6 left-0 text-neon-blue font-tech text-xs tracking-widest">
                        ID: SM-1403 // LINKED
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-cyber font-bold text-white flex items-center gap-4 relative">
                        <span className="text-neon-blue">01.</span>
                        ABOUT ME
                        <div className="absolute -bottom-4 left-0 w-40 h-px" style={{ background: 'linear-gradient(to right, #00f0ff, transparent)' }} />
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <Stat label="CLASS" value="B.TECH (3RD YR)" icon={Shield} />
                        <Stat label="EXP" value="1.5+ YRS" icon={Zap} />
                        <Stat label="ORIGIN" value="INDIA" icon={Globe} />
                        <Stat label="STATUS" value="LEETCODE: 150+" icon={User} />
                    </div>

                    <div className="text-gray-400 font-tech leading-relaxed text-lg border-t border-white/10 pt-8">
                        <DecodeText
                            text="I am a 3rd-year Computer Science student at Lovely Professional University, specializing in the MERN stack and high-performance system architecture."
                        />
                        <br /><br />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                        >
                            {"Beyond building scalable web applications like WellConnect, I am an active competitive programmer with 150+ problems solved on LeetCode and a Top 5 finalist in the Hack-IOT hackathon. I focus on writing clean, efficient code and mastering advanced DSA.".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.01, delay: i * 0.02 }}
                                    viewport={{ once: true }}
                                    className="char-typed"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                        
                        {/* Download CV Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <FuturisticButton 
                                href="/cv.pdf" 
                                download="Siddhant_Maurya_CV.pdf"
                                className="w-full md:w-auto text-center"
                            >
                                DOWNLOAD CV
                            </FuturisticButton>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Identity;
