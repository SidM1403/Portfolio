import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const SHOWCASE_DATA = [
    {
        title: 'ClipPulse',
        type: 'AI Gaming Highlight Generator',
        tagline: 'From Hype to Viral in 60 Seconds',
        desc: 'Advanced AI pipeline that automates the discovery of viral-worthy gaming moments. Multi-modal analysis combines audio transcription (Groq) with visual frame recognition (Gemini Pro) to generate pixel-perfect clips.',
        highlights: [
            '🧠 Multi-modal AI moment detection (Audio + Vision)',
            '⚡ Distributed processing with BullMQ and Redis',
            '🎨 Browser-based video editor built with Konva.js',
            '☁️ Scalable storage on Cloudflare R2',
        ],
        stack: ['Node.js', 'PostgreSQL', 'BullMQ', 'FFmpeg', 'Groq', 'Gemini Pro', 'React', 'Konva'],
        github: 'https://github.com/SidM1403',
        website: null,
        color: '#00f3ff',
        image: "/projects/clippulse.png"
    },
    {
        title: 'BingeBrain X',
        type: 'AI Media Intelligence',
        tagline: 'Your Cinematic DNA, Decoded',
        desc: 'Premium AI-powered platform with a stunning, cinematic "Netflix-style" interface. Leverages advanced AI to understand your taste, generate bespoke recommendations, curate binge itineraries, and provide deep analytics on your viewing patterns.',
        highlights: [
            '🧠 AI-powered taste profiling and recommendations',
            '🍿 Stunning "Netflix-Style" cinematic interface',
            '📋 Bespoke curated binge itineraries',
            '📊 Deep analytics on your "Cinematic DNA"',
        ],
        stack: ['React', 'Tailwind CSS', 'OpenRouter AI', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/SidM1403',
        website: null,
        color: '#ff003c',
        image: "/projects/bingebrain1.png"
    },
    {
        title: 'WellConnect',
        type: 'MERN Health Platform',
        tagline: 'A wellness community that scales',
        desc: 'Full-stack wellness community with JWT authentication, community forums, AI assistant, admin analytics dashboard, and 6 interactive brain games. Built to support high concurrent users.',
        highlights: [
            '⚡ 40% faster load time through code splitting',
            '🧠 6 interactive brain games built from scratch',
            '📊 Admin analytics with real-time data',
            '🔒 Secure JWT auth with role-based access',
        ],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        github: 'https://github.com/SidM1403',
        website: 'https://wellnessconnect-ui.onrender.com/',
        color: '#05ffa1',
        image: "/projects/wellness-contact1.png"
    },
    {
        title: 'Project Management',
        type: 'Role-Based Dashboard',
        tagline: 'Team productivity, reimagined',
        desc: 'Comprehensive project management app with distinct Admin and User dashboards, role-based access control, task tracking with status updates, and real-time activity feeds.',
        highlights: [
            '🎭 Distinct Admin and User dashboards',
            '🔑 Role-based access control (RBAC)',
            '📋 Task management with status tracking',
            '📰 Real-time activity feed',
        ],
        stack: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
        github: 'https://github.com/SidM1403',
        website: 'https://project-managament-beryl.vercel.app/',
        color: '#bd00ff',
        image: "/projects/project-mgmt1.png"
    },
    {
        title: 'Real-Time Score Tracking',
        type: 'Live Score Platform',
        tagline: 'Real-time sports data at scale',
        desc: 'Responsive full-stack platform tracking live scores across multiple sports with real-time API integration. Uses hash maps and linked lists for O(1) data lookup and efficient state management.',
        highlights: [
            '🏆 Multi-sport support in one unified platform',
            '⚡ O(1) data access via custom hash map implementation',
            '📡 Real-time API polling with smart caching',
            '📱 Fully responsive across all devices',
        ],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
        github: 'https://github.com/SidM1403/Multi-Sports-Live-Tracker',
        website: null,
        color: '#00f0ff',
        image: "/projects/tracker1.png"
    },
];

const ProjectShowcase = ({ projectIndex, onClose }) => {
    const [idx, setIdx] = useState(projectIndex);
    const project = SHOWCASE_DATA[idx];

    const prev = () => setIdx(i => (i - 1 + SHOWCASE_DATA.length) % SHOWCASE_DATA.length);
    const next = () => setIdx(i => (i + 1) % SHOWCASE_DATA.length);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-10"
            style={{ backgroundColor: 'rgba(0,0,0,0.98)', backdropFilter: 'blur(20px)' }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="flex items-center gap-2 md:gap-8 w-full max-w-7xl h-full max-h-[85vh]">
                {/* Left Arrow */}
                <button
                    onClick={prev}
                    className="hidden lg:flex flex-shrink-0 w-14 h-14 items-center justify-center border border-white/10 bg-black/60 text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Main Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex-1 flex flex-col bg-cyber-black border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] h-full"
                        style={{ borderColor: `${project.color}30` }}
                    >
                        {/* Title Bar */}
                        <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.color }} />
                                <h2 className="text-xl md:text-2xl font-cyber text-white uppercase tracking-wider truncate">{project.title}</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="hidden md:inline text-[10px] font-tech text-white/20 tracking-[0.3em] uppercase">Status: ONLINE</span>
                                <button onClick={onClose} className="p-1 hover:bg-white/10 transition-colors">
                                    <X className="w-6 h-6 text-white/50 hover:text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Combined Section */}
                        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                            {/* Photo Column */}
                            <div className="md:w-3/5 bg-black/50 border-b md:border-b-0 md:border-r border-white/5 relative flex items-center justify-center min-h-[250px] md:min-h-0">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-contain p-6 transition-all duration-1000" 
                                    />
                                ) : (
                                    <div className="flex flex-col items-center gap-4 opacity-10">
                                        <div className="w-24 h-24 border-2 border-dashed border-white flex items-center justify-center">
                                            <div className="w-14 h-14 border border-white rotate-45" />
                                        </div>
                                        <span className="text-[10px] font-tech tracking-[0.4em]">[MEDIA_OFFLINE]</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 pointer-events-none" />
                                
                                {/* HUD Overlays */}
                                <div className="absolute top-6 left-6 border-t border-l border-white/30 w-6 h-6 pointer-events-none" />
                                <div className="absolute bottom-6 right-6 border-b border-r border-white/30 w-6 h-6 pointer-events-none" />
                                <div className="absolute top-6 left-16 text-[8px] font-tech text-white/20 tracking-widest pointer-events-none uppercase">
                                    Visual Link Established // PRJ.00{idx+1}
                                </div>
                            </div>

                            {/* Details Column */}
                            <div className="md:w-2/5 p-6 md:p-10 flex flex-col gap-8 bg-gradient-to-br from-cyber-black to-black overflow-y-auto custom-scrollbar">
                                <div>
                                    <h3 className="text-[10px] font-tech text-gray-500 uppercase tracking-[0.3em] mb-2">Technical Dossier</h3>
                                    <p className="text-sm font-tech text-white/80 leading-relaxed italic border-l-2 border-white/10 pl-4">
                                        "{project.tagline}"
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                                        {project.desc}
                                    </p>
                                    
                                    <div className="space-y-3">
                                        <h4 className="text-[9px] font-tech text-white/40 uppercase tracking-widest">Core Highlights</h4>
                                        <div className="grid grid-cols-1 gap-2">
                                            {project.highlights.map((h, i) => (
                                                <div key={i} className="text-[11px] font-tech text-gray-300 flex items-start gap-3 border border-white/5 bg-white/[0.02] p-3 hover:bg-white/[0.05] transition-colors">
                                                    <span className="text-lg leading-none pt-1" style={{ color: project.color }}>•</span>
                                                    {h}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[9px] font-tech text-white/40 uppercase tracking-widest mb-3">System Architecture</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map(s => (
                                            <span 
                                                key={s} 
                                                className="text-[10px] font-tech px-2 py-1 border border-white/10 text-white/60 hover:text-white transition-colors"
                                                style={{ borderLeft: `2px solid ${project.color}50` }}
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/10">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" 
                                           className="flex items-center gap-2 text-[10px] font-tech tracking-[0.2em] text-white/50 hover:text-white transition-all">
                                            <Github className="w-4 h-4" /> VIEW_SOURCE
                                        </a>
                                    )}
                                    {project.website && (
                                        <a href={project.website} target="_blank" rel="noopener noreferrer" 
                                           className="flex items-center gap-2 text-[10px] font-tech tracking-[0.2em] px-4 py-2 border hover:bg-white text-black transition-all font-bold"
                                           style={{ backgroundColor: project.color, borderColor: project.color }}>
                                            <ExternalLink className="w-4 h-4" /> LAUNCH_SYS
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Footer */}
                        <div className="px-6 py-4 bg-black/60 flex items-center justify-between border-t border-white/5">
                            <div className="flex gap-3">
                                {SHOWCASE_DATA.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIdx(i)}
                                        className="h-1 transition-all duration-500 rounded-full"
                                        style={{ 
                                            backgroundColor: i === idx ? project.color : 'rgba(255,255,255,0.05)',
                                            width: i === idx ? '40px' : '12px'
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-[10px] font-tech text-white/20 uppercase tracking-[0.2em] hidden sm:block">
                                    Swipe or Use Arrows to Explore
                                </div>
                                <div className="text-[10px] font-tech text-white/40 uppercase tracking-widest bg-white/5 px-3 py-1 border border-white/10">
                                    {String(idx + 1).padStart(2, '0')} / {String(SHOWCASE_DATA.length).padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="hidden lg:flex flex-shrink-0 w-14 h-14 items-center justify-center border border-white/10 bg-black/60 text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </motion.div>
    );
};

export { SHOWCASE_DATA };
export default ProjectShowcase;
