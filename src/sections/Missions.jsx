import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HolographicCard from '../components/UI/HolographicCard';
import ProjectShowcase from '../components/UI/ProjectShowcase';
import { ExternalLink, Github, Maximize2, Play, X } from 'lucide-react';

const projects = [
    {
        title: 'BingeBrain X',
        type: 'AI Media Intelligence',
        desc: 'Premium AI-powered platform with a cinematic Netflix-style interface. Curates bespoke binge itineraries and provides deep analytics on your cinematic DNA.',
        stack: ['React', 'Tailwind CSS', 'OpenRouter AI', 'Node.js', 'Express', 'MongoDB'],
        status: 'PREMIUM',
        github: 'https://github.com/SidM1403',
        website: null,
        image: "/projects/bingebrain1.png"
    },
    {
        title: 'WellConnect',
        type: 'MERN Health Platform',
        desc: 'A full-stack wellness community with authentication, forums, AI assistant, and admin analytics. Features indexing and memoization for high performance.',
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Framer Motion'],
        status: 'COMPLETE',
        github: 'https://github.com/SidM1403',
        website: 'https://wellnessconnect-ui.onrender.com/',
        image: "/projects/wellness-contact1.png"
    },
    {
        title: 'Project Management',
        type: 'Role-Based Dashboard',
        desc: 'Comprehensive project and task management system with role-based access control, real-time activity feeds, and detailed analytics dashboards.',
        stack: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
        status: 'COMPLETE',
        github: 'https://github.com/SidM1403',
        website: 'https://project-managament-beryl.vercel.app/',
        image: "/projects/project-mgmt1.png"
    },
    {
        title: 'Real-Time Score Tracking',
        type: 'Live Score Platform',
        desc: 'Responsive live score platform for multiple sports with real-time API integration. Uses hash maps and linked lists for efficient data handling.',
        stack: ['HTML', 'CSS', 'JavaScript', 'APIs'],
        status: 'COMPLETE',
        github: 'https://github.com/SidM1403/Multi-Sports-Live-Tracker',
        website: null,
        image: "/projects/tracker1.png"
    },
];

const VideoModal = ({ isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-4xl aspect-video bg-cyber-black border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.2)]"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-neon-red/20 text-white hover:text-neon-red transition-all border border-white/10"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="w-full h-full flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 z-0 bg-neutral-900/50">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                        </div>

                        <div className="relative z-10 text-center p-8">
                            <div className="w-20 h-20 border-2 border-neon-blue rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                <Play className="w-8 h-8 text-neon-blue fill-neon-blue" />
                            </div>
                            <h3 className="text-3xl font-cyber mb-4">SYSTEM_TUTORIAL.mp4</h3>
                            <p className="text-gray-400 font-tech mb-8 max-w-md mx-auto">
                                [ACCESS_RESTRICTED] - Please replace this placeholder with your actual tutorial video link.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <div className="px-4 py-2 border border-neon-blue/30 text-[10px] font-tech text-neon-blue">
                                    BUFFERING_ENCRYPTED_STREAM...
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

const Missions = () => {
    const [showcaseIdx, setShowcaseIdx] = useState(null);
    const [isTutorialOpen, setIsTutorialOpen] = useState(false);

    return (
        <section id="missions" className="min-h-screen py-20 px-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-black pointer-events-none" />
            <div className="urban-light-streak w-full top-[15%] opacity-20" style={{ animationDuration: '6s', animationDelay: '-1s' }} />
            <div className="urban-light-streak w-full top-[45%] opacity-10" style={{ animationDuration: '10s', animationDelay: '-3s', background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)' }} />
            <div className="urban-light-streak w-full top-[75%] opacity-20" style={{ animationDuration: '8s', animationDelay: '-2s' }} />

            <div className="max-w-7xl mx-auto w-full relative">

                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 border-b border-white/5 pb-8 relative gap-6">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.02]">
                        <span className="font-cyber font-black text-[15vw] text-neon-red whitespace-nowrap">MISSIONS</span>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-6xl font-cyber font-bold relative mb-4">
                            <span className="text-neon-red">03.</span> PROJECTS
                            <div className="absolute -bottom-4 left-0 w-40 h-px" style={{ background: 'linear-gradient(to right, #ff003c, transparent)' }} />
                        </h2>
                        <div className="font-tech text-neon-red animate-pulse text-xs md:text-sm">
                            {projects.length} ACTIVE CONTRACTS FOUND
                        </div>
                    </div>

                    <button
                        onClick={() => setIsTutorialOpen(true)}
                        className="group relative flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-neon-blue/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        <Play className="w-4 h-4 text-neon-blue relative z-10" />
                        <span className="text-xs font-tech tracking-[0.2em] relative z-10">INITIALIZE SYSTEM TUTORIAL</span>
                        <div className="absolute top-0 right-0 w-1 h-full bg-neon-blue/20 group-hover:bg-neon-blue transition-colors" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <HolographicCard key={i} className="flex flex-col h-full bg-cyber-black/80 backdrop-blur-sm group/card">
                            <div className="relative h-48 mb-6 overflow-hidden border border-white/5 group-hover/card:border-neon-red/30 transition-colors bg-black flex items-center justify-center">
                                {/* Toned down HUD */}
                                <div className="absolute inset-0 bg-neon-red/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />

                                {p.image ? (
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-2 opacity-20 group-hover/card:opacity-40 transition-opacity">
                                        <div className="w-10 h-10 border border-white/40 flex items-center justify-center">
                                            <div className="w-4 h-4 border border-white/40 rotate-45" />
                                        </div>
                                        <span className="text-[8px] font-tech tracking-[0.3em]">MEDIA_OFFLINE</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-60" />
                                <div className="absolute top-3 left-3 text-[10px] font-tech text-neon-red border border-neon-red bg-black/60 px-2 py-1 backdrop-blur-sm">
                                    {p.status}
                                </div>
                                <div className="absolute bottom-3 right-3 text-4xl text-white/5 font-cyber font-black tracking-tighter">
                                    0{i + 1}
                                </div>
                            </div>

                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-cyber text-white mb-2 group-hover/card:text-neon-red transition-colors">{p.title}</h3>
                                <div className="text-[10px] font-tech text-neon-red/60 mb-4 tracking-widest">{p.type}</div>
                                <p className="text-gray-400 font-tech text-sm mb-6 flex-grow line-clamp-3">
                                    {p.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {p.stack.map(s => (
                                        <span key={s} className="text-[9px] font-tech border border-white/10 px-2 py-0.5 text-gray-500">
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                                    {p.github && (
                                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                                            className="text-white/40 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {p.website && (
                                        <a href={p.website} target="_blank" rel="noopener noreferrer"
                                            className="text-white/40 hover:text-neon-blue transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}

                                    <button
                                        onClick={() => setShowcaseIdx(i)}
                                        className="ml-auto flex items-center gap-2 text-[10px] font-tech tracking-[0.2em] px-4 py-2 border border-white/10 hover:border-neon-red hover:bg-neon-red/5 transition-all"
                                    >
                                        <Maximize2 className="w-3 h-3" /> SHOWCASE
                                    </button>
                                </div>
                            </div>
                        </HolographicCard>
                    ))}
                </div>

            </div>

            <VideoModal isOpen={isTutorialOpen} onClose={() => setIsTutorialOpen(false)} />

            {/* Showcase Overlay */}
            <AnimatePresence>
                {showcaseIdx !== null && (
                    <ProjectShowcase
                        projectIndex={showcaseIdx}
                        onClose={() => setShowcaseIdx(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Missions;
