import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, X } from 'lucide-react';

const AvailabilityBadge = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="fixed top-32 right-12 z-50">
            <AnimatePresence mode="wait">
                {!expanded ? (
                    /* Collapsed pill */
                    <motion.button
                        key="pill"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setExpanded(true)}
                        className="flex items-center gap-2 px-3 py-1.5 border border-neon-green/40 bg-black/80 backdrop-blur-sm hover:border-neon-green hover:bg-neon-green/5 transition-all duration-300 group"
                    >
                        {/* Pulsing dot */}
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
                        </span>
                        <span className="text-[10px] font-tech text-neon-green tracking-widest whitespace-nowrap">
                            OPEN TO WORK
                        </span>
                    </motion.button>
                ) : (
                    /* Expanded card */
                    <motion.div
                        key="card"
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: 30 }}
                        transition={{ duration: 0.3 }}
                        className="w-64 border border-neon-green/40 bg-black/95 backdrop-blur-sm shadow-[0_0_30px_rgba(5,255,161,0.08)]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2 border-b border-neon-green/20 bg-neon-green/5">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
                                </span>
                                <span className="text-[10px] font-tech text-neon-green tracking-widest">AVAILABLE</span>
                            </div>
                            <button
                                onClick={() => setExpanded(false)}
                                className="text-white/30 hover:text-white transition-colors"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-3">
                            <div>
                                <div className="text-[9px] font-tech text-gray-500 tracking-widest mb-1">STATUS</div>
                                <div className="text-sm font-cyber text-white">Open to Opportunities</div>
                            </div>
                            <div>
                                <div className="text-[9px] font-tech text-gray-500 tracking-widest mb-1">AVAILABILITY</div>
                                <div className="text-sm font-tech text-neon-green">Immediately Available</div>
                            </div>
                            <div>
                                <div className="text-[9px] font-tech text-gray-500 tracking-widest mb-1">ROLE</div>
                                <div className="text-xs font-tech text-gray-300">Full Stack / Frontend Developer</div>
                            </div>
                            <div>
                                <div className="text-[9px] font-tech text-gray-500 tracking-widest mb-1">PREFERRED</div>
                                <div className="text-xs font-tech text-gray-300">Remote / Hybrid / On-site</div>
                            </div>

                            {/* CTA links */}
                            <div className="pt-2 border-t border-white/5 flex gap-2">
                                <a
                                    href="mailto:sidhantmaurya1403@gmail.com"
                                    className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-neon-green/30 text-neon-green text-[10px] font-tech tracking-widest hover:bg-neon-green/10 transition-colors"
                                >
                                    <Mail className="w-3 h-3" /> EMAIL
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/siddhant-maurya-7b4a452b7/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-neon-blue/30 text-neon-blue text-[10px] font-tech tracking-widest hover:bg-neon-blue/10 transition-colors"
                                >
                                    <Linkedin className="w-3 h-3" /> LINKEDIN
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AvailabilityBadge;
