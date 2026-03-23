import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ label = "SYS.SECTION_BREAK", color = "#00f3ff" }) => {
    return (
        <div className="w-full py-12 flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Background horizontal line with gradient */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative">
                {/* Neon core line */}
                <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-current to-transparent"
                    style={{ color }}
                />
            </div>

            {/* Technical Metadata Box */}
            <div className="mt-4 flex flex-col items-center gap-1">
                <div className="flex items-center gap-4">
                    <div className="w-1 h-1 bg-white/20 rotate-45" />
                    <span className="text-[9px] font-tech text-white/20 tracking-[0.5em] uppercase">
                        {label}
                    </span>
                    <div className="w-1 h-1 bg-white/20 rotate-45" />
                </div>
                
                {/* Geometric Notch */}
                <div className="w-24 h-[2px] bg-white/5 relative overflow-hidden">
                    <motion.div 
                        animate={{ 
                            x: [-100, 100],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-current to-transparent"
                        style={{ color }}
                    />
                </div>
            </div>

            {/* Secondary technical lines */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
    );
};

export default SectionDivider;
