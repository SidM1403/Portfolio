import React from 'react';
import { motion } from 'framer-motion';
import HolographicCard from '../components/UI/HolographicCard';

const SkillBar = ({ name, level }) => (
    <div className="mb-5 group/bar">
        <div className="flex justify-between text-[11px] font-tech mb-2 tracking-widest">
            <span className="text-white/80 group-hover/bar:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 group-hover/bar:opacity-100 group-hover/bar:shadow-[0_0_8px_currentColor] transition-all" />
                {name}
            </span>
            <span className="text-white/50 group-hover/bar:text-white transition-colors">{level}%</span>
        </div>
        <div className="h-1.5 bg-black/50 rounded-full w-full overflow-hidden border border-white/5">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-current to-white/80 opacity-80 group-hover/bar:opacity-100 transition-opacity"
                style={{ boxShadow: '0 0 10px currentColor' }}
            />
        </div>
    </div>
);

// SVG logo components — inline, zero dependencies
const Logos = {
    JavaScript: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#F7DF1E" rx="4" />
            <path fill="#000" d="M112 30H66v12h33v56c0 4-2 6-5 6s-5-2-7-6l-11 6c3 8 10 12 19 12 12 0 19-7 19-19V30zM60 30H16v12h19v45c0 4-2 6-5 6s-4-1-7-5L12 94c3 8 10 12 18 12 12 0 19-7 19-19V30z"/>
        </svg>
    ),
    TypeScript: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#3178C6" rx="4" />
            <path fill="#fff" d="M22 60h21v8H33v32h-9V68H22v-8zm41 0h30v8H73v6h12c6 0 11 2 14 6s4 9 4 15c0 5-1 10-4 14s-8 6-14 6H63V68v-8zm11 23v16h8c5 0 8-3 8-8s-3-8-8-8h-8z"/>
        </svg>
    ),
    React: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#20232A" />
            <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
                <ellipse cx="64" cy="64" rx="42" ry="17" />
                <ellipse cx="64" cy="64" rx="42" ry="17" transform="rotate(60 64 64)" />
                <ellipse cx="64" cy="64" rx="42" ry="17" transform="rotate(120 64 64)" />
            </g>
            <circle cx="64" cy="64" r="8" fill="#61DAFB" />
        </svg>
    ),
    NodeJS: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#1A1A1A" />
            <path fill="#83CD29" d="M64 17L24 40v48l40 23 40-23V40L64 17zm0 8l34 19.5v39L64 103 30 83.5v-39L64 25z"/>
            <path fill="#fff" d="M56 82V48l24 14L56 82z"/>
        </svg>
    ),
    MongoDB: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#13AA52" />
            <path fill="#fff" d="M69 98c0 0-1-19-4-23C58 67 50 60 50 45c0-18 13-28 14-28 1 0 14 10 14 28 0 15-8 22-15 30-3 4-4 23-4 23H69z"/>
        </svg>
    ),
    ExpressJS: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#000" rx="4" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="monospace" fontWeight="bold">express</text>
        </svg>
    ),
    Python: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#2B5B84" />
            <path fill="#FFD43B" d="M64 20c-12 0-18 5-18 14v8h36v4H46c-9 0-18 5-18 18 0 12 7 18 16 18h6v-9c0-9 7-14 16-14h22c8 0 12-4 12-12V36c0-10-6-16-20-16H64zm-5 8a4 4 0 110 8 4 4 0 010-8z"/>
            <path fill="#3473A5" d="M82 100c12 0 18-5 18-14V78H64v-4h36c9 0 18-5 18-18 0-12-7-18-16-18h-6v9c0 9-7 14-16 14H58c-8 0-12 4-12 12v22c0 10 6 16 20 16h16zm5-8a4 4 0 110-8 4 4 0 010 8z"/>
        </svg>
    ),
    TailwindCSS: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#0EA5E9" rx="4" />
            <path fill="#fff" d="M64 21c-19 0-32 10-38 28 6-8 13-11 22-9 5 1 8 4 12 8 6 7 12 14 27 14 19 0 32-10 38-28-6 8-13 11-22 9-5-1-8-4-12-8C85 28 79 21 64 21zm-26 35c-19 0-32 10-38 28 6-8 13-11 22-9 5 1 8 4 12 8 6 7 12 14 27 14 19 0 32-10 38-28-6 8-13 11-22 9-5-1-8-4-12-8-6-7-12-14-27-14z"/>
        </svg>
    ),
    'Next.js': () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#000" />
            <path fill="#fff" d="M105 110L51 38H38v52h10V50l48 65 9-7zM79 38h10v52H79z"/>
        </svg>
    ),
    MySQL: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#00618A" />
            <path fill="#fff" d="M34 38h8l10 28 10-28h8L55 90H48L34 38zm56 0h8v52h-8V38z"/>
            <path fill="#F29111" d="M75 38h8v52h-8V38zm-32 0 2 8H30v12h12v8H24V38h19z"/>
        </svg>
    ),
    PHP: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <ellipse cx="64" cy="64" rx="64" ry="38" fill="#8892BF" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="28" fontFamily="monospace" fontWeight="bold">php</text>
        </svg>
    ),
    Git: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#F03C2E" />
            <path fill="#fff" d="M111 58L70 17a9 9 0 00-13 0L44 29l16 16a10 10 0 0113 13l16 16 9-9a9 9 0 000-12zM38 35L17 56a9 9 0 000 12l41 42a9 9 0 0013 0l9-9-40-40a10 10 0 010-14l9-9-11-3z"/>
        </svg>
    ),
    'C++': () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#004A8C" />
            <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="28" fontFamily="monospace" fontWeight="bold">C++</text>
        </svg>
    ),
    'Three.js': () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#000" rx="4" />
            <polygon points="64,16 112,104 16,104" fill="none" stroke="#fff" strokeWidth="4" />
            <polygon points="64,40 88,80 40,80" fill="#fff" opacity="0.5" />
        </svg>
    ),
    DSA: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#bd00ff" rx="4" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="22" fontFamily="monospace" fontWeight="bold">DSA</text>
        </svg>
    ),
};

const TECH_LIST = [
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'React', color: '#61DAFB' },
    { name: 'NodeJS', color: '#83CD29' },
    { name: 'MongoDB', color: '#13AA52' },
    { name: 'ExpressJS', color: '#fff' },
    { name: 'Python', color: '#FFD43B' },
    { name: 'TailwindCSS', color: '#38BDF8' },
    { name: 'Next.js', color: '#fff' },
    { name: 'MySQL', color: '#00618A' },
    { name: 'PHP', color: '#8892BF' },
    { name: 'Git', color: '#F03C2E' },
    { name: 'C++', color: '#00599C' },
    { name: 'Three.js', color: '#fff' },
    { name: 'DSA', color: '#bd00ff' },
];

// Double the array so seamless loop works
const DOUBLED = [...TECH_LIST, ...TECH_LIST];

const LogoMarquee = ({ direction = 'left', speed = 35, onHoverTech }) => {
    const duration = `${TECH_LIST.length * speed}s`;
    const animClass = direction === 'left' ? 'marquee-ltr' : 'marquee-rtl';

    return (
        <div className="overflow-hidden relative w-full py-3 group">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, var(--cyber-black), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, var(--cyber-black), transparent)' }} />

            <div
                className={`flex gap-6 ${animClass} group-hover:pause`}
                style={{ animationDuration: duration, width: 'max-content' }}
            >
                {DOUBLED.map((tech, i) => {
                    const LogoComp = Logos[tech.name];
                    return (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 cursor-default group/logo"
                            title={tech.name}
                            onMouseEnter={() => onHoverTech?.(tech.name)}
                            onMouseLeave={() => onHoverTech?.(null)}
                        >
                            <div
                                className="w-12 h-12 rounded-lg overflow-hidden p-1 bg-white/[0.04] border border-white/[0.06] transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:border-white/20"
                                style={{ boxShadow: `0 0 0px ${tech.color}` }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 14px ${tech.color}60`; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 0px ${tech.color}`; }}
                            >
                                {LogoComp ? <LogoComp /> : (
                                    <div className="w-full h-full flex items-center justify-center text-[10px] font-tech text-white">{tech.name}</div>
                                )}
                            </div>
                            <span className="text-[9px] font-tech text-white/30 tracking-widest group-hover/logo:text-white/60 transition-colors">
                                {tech.name.toUpperCase()}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

import { ChevronRight, Database, Layout, Terminal } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const SKILLS_DATA = {
    js: { id: 'js', name: 'JavaScript', category: 'Foundation', level: 95, desc: 'Core logic formulation language.', unlocks: ['react', 'node', 'ts'], requires: [] },
    ts: { id: 'ts', name: 'TypeScript', category: 'Foundation', level: 85, desc: 'Type-safe architecture enforcement.', unlocks: ['react', 'node'], requires: ['js'] },
    python: { id: 'python', name: 'Python', category: 'Foundation', level: 75, desc: 'Data automation and scripting logic.', unlocks: ['dsa'], requires: [] },
    cpp: { id: 'cpp', name: 'C++', category: 'Foundation', level: 70, desc: 'Low-level structural programming.', unlocks: ['dsa'], requires: [] },
    
    react: { id: 'react', name: 'React / Next.js', category: 'Architecture', level: 90, desc: 'Reactive component-driven interfaces.', unlocks: ['tailwind', 'framer', 'threejs'], requires: ['js', 'ts'] },
    node: { id: 'node', name: 'Node.js / Express', category: 'Architecture', level: 85, desc: 'Asynchronous backend microservices.', unlocks: ['mongo'], requires: ['js', 'ts'] },
    php: { id: 'php', name: 'PHP', category: 'Architecture', level: 70, desc: 'Server-side sequential protocols.', unlocks: ['mysql'], requires: [] },
    dsa: { id: 'dsa', name: 'DSA', category: 'Architecture', level: 80, desc: 'Algorithmic efficiency and structures.', unlocks: [], requires: ['cpp', 'python'] },

    tailwind: { id: 'tailwind', name: 'Tailwind CSS', category: 'Specialization', level: 92, desc: 'Utility-first presentation compiler.', unlocks: [], requires: ['react'] },
    framer: { id: 'framer', name: 'Framer Motion', category: 'Specialization', level: 80, desc: 'Kinetic interpolation engine.', unlocks: [], requires: ['react'] },
    threejs: { id: 'threejs', name: 'Three.js / R3F', category: 'Specialization', level: 60, desc: 'Spatial 3D rendering pipeline.', unlocks: [], requires: ['react'] },
    mongo: { id: 'mongo', name: 'MongoDB', category: 'Specialization', level: 82, desc: 'Non-relational document matrix.', unlocks: [], requires: ['node'] },
    mysql: { id: 'mysql', name: 'MySQL', category: 'Specialization', level: 70, desc: 'Relational data table index.', unlocks: [], requires: ['php'] }
};

const COLUMNS = [
    { id: 'col1', title: 'FOUNDATION_LAYER', icon: <Terminal size={14} className="text-neon-blue" />, keys: ['js', 'ts', 'python', 'cpp'] },
    { id: 'col2', title: 'ARCHITECTURE_LAYER', icon: <Layout size={14} className="text-neon-green" />, keys: ['react', 'node', 'php', 'dsa'] },
    { id: 'col3', title: 'SPECIALIZATION_LAYER', icon: <Database size={14} className="text-neon-purple" />, keys: ['tailwind', 'framer', 'threejs', 'mongo', 'mysql'] }
];

const Systems = () => {
    const [activeId, setActiveId] = React.useState(null);

    return (
        <section id="systems" className="min-h-[120vh] py-20 px-4 md:px-8 flex flex-col justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-cyber-black pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-tech text-cyber-yellow tracking-widest uppercase">INTERACTIVE URI // 02</span>
                            <div className="h-px w-12 bg-cyber-yellow/40" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white tracking-widest uppercase">
                            SKILL <span className="text-neon-blue">TREE</span>
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative w-full mb-20">
                    {/* Left: Interactive Tree UI */}
                    <div className="lg:w-[65%] flex flex-col md:flex-row gap-6 lg:gap-8 justify-between relative">
                        {COLUMNS.map((col, idx) => (
                            <div key={col.id} className="flex-1 flex flex-col gap-4 relative z-10 w-full">
                                <div className="flex items-center gap-2 mb-4 bg-white/5 border border-white/10 p-2 justify-center backdrop-blur-sm rounded-sm">
                                    {col.icon}
                                    <h4 className="text-white/70 font-tech tracking-widest text-[10px]">{col.title}</h4>
                                </div>
                                {col.keys.map(key => {
                                    const skill = SKILLS_DATA[key];
                                    const isSelected = activeId === key;
                                    const isReq = activeId && SKILLS_DATA[activeId].requires?.includes(key);
                                    const isUnlock = activeId && SKILLS_DATA[activeId].unlocks?.includes(key);
                                    const isDimmed = activeId && !isSelected && !isReq && !isUnlock;
                                    
                                    let borderClass = "border-white/10";
                                    let textClass = "text-white/70";
                                    let bgClass = "bg-white/[0.02]";
                                    let extraGlowClass = "";
                                    let connectorDotClass = "bg-white/20";
                                    
                                    if (isSelected) {
                                        borderClass = "border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.2)]";
                                        textClass = "text-neon-blue font-bold tracking-widest";
                                        bgClass = "bg-neon-blue/[0.15]";
                                        extraGlowClass = "scale-[1.02] z-20";
                                        connectorDotClass = "bg-neon-blue shadow-[0_0_8px_#00f3ff]";
                                    } else if (isReq) {
                                        borderClass = "border-neon-purple/80 border-dashed shadow-[0_0_10px_rgba(189,0,255,0.1)]";
                                        textClass = "text-neon-purple";
                                        bgClass = "bg-neon-purple/5";
                                        extraGlowClass = "z-10";
                                        connectorDotClass = "bg-neon-purple animate-pulse";
                                    } else if (isUnlock) {
                                        borderClass = "border-neon-green/80 border-dashed shadow-[0_0_10px_rgba(5,255,161,0.1)]";
                                        textClass = "text-neon-green";
                                        bgClass = "bg-neon-green/5";
                                        extraGlowClass = "z-10";
                                        connectorDotClass = "bg-neon-green animate-pulse";
                                    } else if (isDimmed) {
                                        borderClass = "border-white/5";
                                        textClass = "text-white/20";
                                        extraGlowClass = "grayscale-[100%] opacity-40";
                                        connectorDotClass = "bg-white/5";
                                    }
                                    
                                    return (
                                        <button 
                                            key={key} 
                                            onMouseEnter={() => setActiveId(key)}
                                            onClick={() => setActiveId(key)}
                                            className={`relative w-full p-4 rounded-md flex flex-col gap-2 transition-all duration-300 backdrop-blur-md border ${borderClass} ${bgClass} ${extraGlowClass} group text-left`}
                                        >
                                            <div className="flex items-center justify-between w-full relative">
                                                <span className={`font-cyber uppercase text-sm md:text-md transition-colors ${textClass}`}>
                                                    {skill.name}
                                                </span>
                                                <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div key={i} className={`h-2 w-1.5 ${i < Math.floor(skill.level / 20) ? 'bg-current' : 'bg-current opacity-20'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            {/* Logic Connectors Visualization (Dots) */}
                                            {idx !== 2 && (
                                                <div className={`absolute top-1/2 -right-1 h-3 w-1 -translate-y-1/2 rounded-full transition-all duration-300 ${connectorDotClass}`} />
                                            )}
                                            {idx !== 0 && (
                                                <div className={`absolute top-1/2 -left-1 h-3 w-1 -translate-y-1/2 rounded-full transition-all duration-300 ${connectorDotClass}`} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>

                    {/* Right: Neural Deck Active Status HUD */}
                    <div className="lg:w-[35%] bg-black/60 border border-white/10 backdrop-blur-xl p-6 md:p-8 rounded-lg flex flex-col h-auto min-h-[450px] shadow-[0_0_40px_rgba(0,0,0,0.8)] relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                            <div className={`w-2.5 h-2.5 rounded-full ${activeId ? 'bg-neon-green animate-pulse shadow-[0_0_10px_#05ffa1]' : 'bg-red-500 shadow-[0_0_10px_#ff0000]'}`} />
                            <span className={`font-tech text-xs tracking-[0.2em] uppercase ${activeId ? 'text-neon-green' : 'text-red-500'}`}>
                                {activeId ? 'NEURAL_LINK :: ESTABLISHED' : 'SYSTEM_IDLE :: AWAITING_INPUT'}
                            </span>
                        </div>

                        <AnimatePresence mode="wait">
                            {activeId ? (
                                <motion.div 
                                    key={activeId}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-1 flex flex-col w-full relative z-10"
                                >
                                    <div className="mb-6 flex justify-between items-start">
                                        <div>
                                            <h3 className="text-4xl font-cyber text-white uppercase mb-2">
                                                {SKILLS_DATA[activeId].name}
                                            </h3>
                                            <div className="font-tech text-[10px] text-neon-blue bg-neon-blue/10 border border-neon-blue/20 px-2 py-1 inline-block uppercase tracking-widest">
                                                CLASS // {SKILLS_DATA[activeId].category}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-tech text-3xl text-white/90">{SKILLS_DATA[activeId].level}<span className="text-sm opacity-50">%</span></div>
                                            <div className="text-[9px] font-cyber text-cyber-yellow tracking-[0.2em]">PROFICIENCY</div>
                                        </div>
                                    </div>

                                    <p className="font-tech text-gray-400 text-sm mb-8 leading-relaxed border-l-2 border-white/20 pl-4 py-1 italic">
                                        "{SKILLS_DATA[activeId].desc}"
                                    </p>
                                    
                                    <div className="space-y-6 mt-auto">
                                        {/* Requirements */}
                                        {SKILLS_DATA[activeId].requires.length > 0 && (
                                            <div>
                                                <h4 className="font-tech text-[10px] text-neon-purple tracking-widest mb-3 flex items-center gap-2 uppercase">
                                                    <span className="w-1.5 h-1.5 bg-neon-purple rounded-full" /> REQUIRED LOGIC
                                                    <div className="h-px flex-1 bg-gradient-to-r from-neon-purple/20 to-transparent" />
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {SKILLS_DATA[activeId].requires.map(r => (
                                                        <span key={r} onClick={() => setActiveId(r)} className="text-xs font-cyber bg-neon-purple/10 hover:bg-neon-purple/30 text-neon-purple px-3 py-1.5 rounded-sm border border-neon-purple/30 cursor-pointer transition-colors">
                                                            {SKILLS_DATA[r].name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Suggested Progression / Unlocks */}
                                        <div>
                                            <h4 className="font-tech text-[10px] text-neon-green tracking-widest mb-3 flex items-center gap-2 uppercase">
                                                <span className="w-1.5 h-1.5 bg-neon-green rounded-full" /> SUGGESTED PATHS
                                                <div className="h-px flex-1 bg-gradient-to-r from-neon-green/20 to-transparent" />
                                            </h4>
                                            {SKILLS_DATA[activeId].unlocks.length > 0 ? (
                                                <div className="flex flex-col gap-2 relative">
                                                    <div className="absolute left-1.5 top-3 bottom-3 w-px bg-neon-green/20 z-0" />
                                                    {SKILLS_DATA[activeId].unlocks.map((u, i) => (
                                                        <div key={u} onClick={() => setActiveId(u)} className="relative z-10 flex items-center gap-3 text-xs md:text-sm font-cyber text-neon-green p-3 border border-neon-green/20 bg-black hover:bg-neon-green/10 cursor-pointer transition-colors rounded-sm ml-4 group">
                                                            <div className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-4 h-[1px] bg-neon-green/40 group-hover:bg-neon-green transition-colors" />
                                                            <ChevronRight size={14} className="opacity-50 group-hover:opacity-100" />
                                                            {SKILLS_DATA[u].name}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-xs font-tech text-white/20 italic p-3 border border-dashed border-white/10 rounded-sm">
                                                    MAXIMUM NODE PENETRATION ACHIEVED IN THIS BRANCH.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    className="flex-1 flex flex-col items-center justify-center opacity-[0.15] text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.15 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="relative w-32 h-32 flex items-center justify-center">
                                        <div className="absolute inset-0 border border-current rounded-full animate-spin-slow" style={{ borderStyle: 'dotted', borderWidth: '2px' }} />
                                        <Terminal className="w-12 h-12" />
                                    </div>
                                    <p className="font-cyber tracking-[0.3em] text-[10px] mt-8">SELECT ANY NODE TO</p>
                                    <p className="font-cyber tracking-[0.3em] text-[10px] mt-2">INITIALIZE NEURAL LINK</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Legacy Tech Logos (Visual Background Density) */}
                <div className="border-t border-white/5 pt-8 opacity-60">
                    <p className="font-tech text-center text-[10px] text-white/30 tracking-[0.3em] uppercase mb-4">BACKGROUND_PROCESS_STACK</p>
                    <LogoMarquee direction="left" speed={3} />
                </div>
            </div>
        </section>
    );
};

export default Systems;
